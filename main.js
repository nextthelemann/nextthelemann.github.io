var land = new TimelineMax({repeat: -1});

land.set("#Land", {y: -15});
land.fromTo("#Land", 5, {y: '+=0', ease: RoughEase.ease.config({ template: Power4.easeNone, strength: 0.1, points: 3, taper: "both", randomize: true, clamp: false})}, {y: '+=13', ease: RoughEase.ease.config({ template: Power4.easeNone, strength: 0.2, points: 3, taper: "both", randomize: true, clamp: false})});

land.fromTo("#Land", 5, {y: '+=13', ease: RoughEase.ease.config({ template: Power4.easeNone, strength: 0.1, points: 3, taper: "both", randomize: true, clamp: false})}, {y: '-=13', ease: RoughEase.ease.config({ template: Power4.easeNone, strength: 0.2, points: 3, taper: "both", randomize: false, clamp: false})});

var cloud1 = new TimelineMax({repeat: -1});
cloud1.addLabel('cloudStart');
cloud1.fromTo("#SR_cloud", 30, {x: '-=400', ease: Power0.easeIn}, {x: '+=575', ease: Power0.easeOut}, 'cloudStart');

var cloud2 = new TimelineMax({repeat: -1});
cloud2.addLabel('cloudStart');
cloud2.fromTo("#SL_cloud", 60, {x: '-=200', ease: Power0.easeIn}, {x: '+=600', ease: Power0.easeOut}, 'cloudStart');

var cloudColor = new TimelineMax({repeat: -1});
cloudColor.addLabel('cloudColorStart');
cloudColor.set(".st17", {fill: '#FFFFFF'}, 'cloudColorStart');
cloudColor.fromTo(".st17", 3.75, {fill: '#685e6d', ease: Power0.easeIn}, {fill: '#FFFFFF', ease: Power0.easeOut}, 'cloudColorStart');
cloudColor.fromTo(".st17", 3.75, {fill: '#FFFFFF', ease: Power0.easeIn}, {fill: '#685e6d', ease: Power0.easeOut}, 'cloudColorStart+=11.25');
cloudColor.to(".st17", 15, {}, 'cloudColorStart+=15');

var sun = new TimelineMax({repeat: -1});

sun.set("#sun", {transformOrigin: '50% 525%'});
sun.set("#moon", {transformOrigin: '50% 525%'});

sun.addLabel('sunStart');
sun.fromTo("#sun", 15, {rotation: -85, ease: Power0.easeOut}, {rotation: 85, ease: Power0.easeIn}, 'sunStart');
sun.fromTo(".st10", 7.5, {fill: '#c96c00', ease: Power0.easeOut}, {fill: '#FEBE00', ease: Power0.easeIn}, 'sunStart');
sun.fromTo(".st10", 7.5, {fill: '#FEBE00', ease: Power0.easeOut}, {fill: '#c96c00', ease: Power0.easeIn}, 'sunStart+=7.5');
sun.fromTo("#moon", 15, {rotation: -85, ease: Power0.easeOut}, {rotation: 85, ease: Power0.easeIn}, 'sunStart+=15');
sun.fromTo(".st9", 7.5, {fill: '#8e7f65', ease: Power0.easeOut}, {fill: '#ededed', ease: Power0.easeIn}, 'sunStart+=15');
sun.fromTo(".st9", 7.5, {fill: '#ededed', ease: Power0.easeOut}, {fill: '#8e7f65', ease: Power0.easeIn}, 'sunStart+=22.5');


var bg = new TimelineMax({repeat: -1});

bg.fromTo(".st0", 7.5, {fill: '#0e1f27', ease: Power0.easeOut}, {fill: '#44a9b9', ease: Power0.easeIn});
bg.fromTo(".st0", 7.5, {fill: '#44a9b9', ease: Power0.easeOut}, {fill: '#0e1f27', ease: Power0.easeIn});
bg.to(".st0", 15, {});

var smokePuff = ["#smoke1", "#smoke2", "#smoke3", "#smoke4", "#smoke5", "#smoke6", "#smoke7", "#smoke8", "#smoke9", "#smoke10", "#smoke11", "#smoke12", "#smoke13", "#smoke14", "#smoke15"];
var smoke = new TimelineMax({repeat: -1});

smoke.addLabel('smokeStart');
smoke.staggerTo(smokePuff, 2, {x: '-=10', y: '-=15', scale: 2, opacity: 0.75}, 0.1, 'smokeStart');
smoke.staggerTo(smokePuff, 0.5, {opacity: 0}, 0.1, 'smokeStart+=2');


var MtnColor = new TimelineMax({repeat: -1});
MtnColor.addLabel('MtnStart');
MtnColor.fromTo(".st5", 3.75, {fill: '#393f58', ease: Power0.easeOut}, {fill: '#4e577e', ease: Power0.easeIn}, 'MtnStart');
MtnColor.fromTo(".st5", 7.5, {fill: '#4e577e', ease: Power0.easeOut}, {fill: '#393f58', ease: Power0.easeIn}, 'MtnStart+=7.5');


MtnColor.fromTo(".st2", 3.75, {fill: '#393f58', ease: Power0.easeOut}, {fill: '#4e577e', ease: Power0.easeIn}, 'MtnStart+=3.75');
MtnColor.fromTo(".st2", 3.75, {immediateRender: false, fill: '#4e577e', ease: Power0.easeOut}, {fill: '#393f58', ease: Power0.easeIn}, 'MtnStart+=11.25');

var HillColor = new TimelineMax({repeat: -1});
HillColor.addLabel('HillStart');
HillColor.fromTo(".st7", 3.75, {fill: '#fe9c00', ease: Power0.easeOut}, {fill: '#FEBE00', ease: Power0.easeIn}, 'HillStart');
HillColor.fromTo(".st7", 3.75, {fill: '#FEBE00', ease: Power0.easeOut}, {fill: '#fe9c00', ease: Power0.easeIn}, 'HillStart+=11.25');
HillColor.fromTo(".st7", 3.75, {fill: '#fe9c00', ease: Power0.easeOut}, {fill: '#ffcc34', ease: Power0.easeIn}, 'HillStart+=15');
HillColor.fromTo(".st7", 3.75, {fill: '#ffcc34', ease: Power0.easeOut}, {fill: '#fe9c00', ease: Power0.easeIn}, 'HillStart+=26.25');
HillColor.fromTo(".st6", 3.75, {fill: '#ed9200', ease: Power0.easeOut}, {fill: '#e5ab00', ease: Power0.easeIn}, 'HillStart');
HillColor.fromTo(".st6", 3.75, {fill: '#e5ab00', ease: Power0.easeOut}, {fill: '#ed9200', ease: Power0.easeIn}, 'HillStart+=11.25');
HillColor.fromTo(".st6", 3.75, {fill: '#ed9200', ease: Power0.easeOut}, {fill: '#e3b630', ease: Power0.easeIn}, 'HillStart+=15');
HillColor.fromTo(".st6", 3.75, {fill: '#e3b630', ease: Power0.easeOut}, {fill: '#ed9200', ease: Power0.easeIn}, 'HillStart+=26.25');


var MtnTPSColor = new TimelineMax({repeat: -1});
MtnColor.addLabel('MtnTPSStart');
MtnTPSColor.fromTo(".st4", 3.75, {fill: '#bfbfbf', ease: Power0.easeOut}, {fill: '#FFFFFF', ease: Power0.easeIn}, 'MtnTPSStart');
MtnTPSColor.fromTo(".st4", 7.5, {fill: '#FFFFFF', ease: Power0.easeOut}, {fill: '#bfbfbf', ease: Power0.easeIn}, 'MtnTPSStart+=7.5');


MtnTPSColor.fromTo(".st1", 3.75, {fill: '#bfbfbf', ease: Power0.easeOut}, {fill: '#FFFFFF', ease: Power0.easeIn}, 'MtnTPSStart+=3.75');
MtnTPSColor.fromTo(".st1", 3.75, {immediateRender: false, fill: '#FFFFFF', ease: Power0.easeOut}, {fill: '#bfbfbf', ease: Power0.easeIn}, 'MtnTPSStart+=11.25');
