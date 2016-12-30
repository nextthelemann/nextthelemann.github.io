


//Event handler for when skiier is clicked

$(document).ready(function() {

	$('#ski').on('click', function(event) {
		//toggle the game area
		$('#gameContainer').show('slow');
		$('#presentationContainer').hide('slow');
		$('#ski').hide();
	});

	$('#can').on('click', function(event) {
		//toggle game instructions
		$('#instructContainer').toggle('fast');
	})

});


$(window).keyup(function(e){
	if(e.keyCode == 27){
		$('#gameContainer').hide('slow');
		$('#presentationContainer').show('slow');
		$('#ski').show();
		$('#instructContainer').hide();
	}
});


/* Ski game code */
var left;
var right;
var faster = false;
		
var step = 0;
var obst = new Array();
		
var locX = 430;
var locY = 100;
		
var running = true;
		
var guy = new Image();
var guyLeft = new Image();
var guyRight = new Image();
var crash = new Image();
var rock = new Image();
var tree = new Image();
var bush = new Image();
guy.src = "SkiierAssets/Ski_Down.png";
guyLeft.src = "SkiierAssets/Ski_Left.png";
guyRight.src = "SkiierAssets/Ski_Right.png";
crash.src = "SkiierAssets/Ski_Crash.png";
rock.src = "SkiierAssets/Rock.png";
tree.src = "SkiierAssets/Tree.png";
	
$(window).keydown(function(e){
	if(e.keyCode == 37){
		left = true;
	}
	else if(e.keyCode == 39){
		right = true;
	}
	else if(e.keyCode == 70){
		faster = true;
	}
	e.preventDefault();
});
$(window).keyup(function(e){
	if(e.keyCode == 37){
		left = false;
	}
	else if(e.keyCode == 39){
		right = false;
	}
	else if(e.keyCode == 70){
		faster = false;
	}
	else if(e.keyCode == 32){
		if(!running){
			step = 0;
			obst = new Array();
			locX = 430;
			locY = 100;
			running = true;
			runSki();
		}
	}
});



		
//TODO: wrap edges (no wall)

function runSki(){
	if(!running) return;
	var canvas = document.getElementById("can");
	var ctx = canvas.getContext("2d");
			
	ctx.fillStyle = "rgb(255,255,255)";
	ctx.fillRect (0, 0, canvas.width, canvas.height);
			
	if(left){
		if(locX > -320){
			locX--;
		}
	}
	if(right){
		if(locX < 640+320){
			locX++;
		}
	}
			
	ctx.fillStyle = "rgb(0,0,0)";
			
	ctx.fillRect (-10-locX, 0, 10, canvas.height);
	ctx.fillRect (640*2+20-locX, 0, 10, canvas.height);
			

	for(var i = 0; i < obst.length;i++){
		var o = obst[i];
		o.y-=2.5;
		if(faster){
			o.y-=2.5;
		}
		ctx.drawImage(o.type,o.x-locX,o.y);
		if(o.y < -30){
			obst.splice(i,1);
			i--;
		}
				
		var tX = o.x-locX+5;
		var tY = o.y+5;
				
		var d = Math.sqrt((tX-320+3)*(tX-320+3)+ (tY-100+5)*(tY-100+5));
		if(d < 20){
			ctx.drawImage(crash,320,locY);
			running = false;
		}
	}
	if(running){
		if(left){
			ctx.drawImage(guyLeft,320,locY);
		}
		else if(right){
			ctx.drawImage(guyRight,320,locY);
		}
		else{
			ctx.drawImage(guy,320,locY);
		}
	}
				
	var randomnumber=Math.floor(Math.random()*641)
	if(Math.floor(step*10)%10==0){
		var type;
		if(Math.floor(Math.random()*2) == 0){
			type = rock;
		}
		else{
			type = tree;
		}
		var obj = {x: Math.floor(Math.random()*641*2), y:480, type: type};
		obst.push(obj);
	}
	step+= 0.1;
	if(running){
		setTimeout("runSki();",1); 
	}
}
setTimeout("runSki();",1000);



