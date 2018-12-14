var yGravity = 0.01;

class Rectangle{
	constructor(x, y, xVector, yVector){
		this.x = x;
		this.y = y;
		this.height = 15;
		this.width = 15;
		this.xVector = xVector;
		this.yVector = yVector;
		this.spacebarPressed = false;
		this.color = "#000000";
	}
	
	update(){
		var prevY = this.y;
		var prevX = this.x;
		
		if (this.spacebarPressed == true){
			this.yVector = -3;
		}
		
		this.yVector += yGravity;
		this.x += this.xVector;
		this.y += this.yVector;
		
		if (this.y > (window.innerHeight - (this.height + 15))){
			this.yVector = 0;
			this.y = prevY;
		}
		
	}
	
	render(){
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.height, this.width);
	}
}


window.onload = function(){
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	
	document.addEventListener("keydown",keydown);
	document.addEventListener("keyup",keyup);
	setInterval(main, 1);
}

var rect = new Rectangle(30, window.innerHeight - 47, 0, 0);
 
function main(){
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
	rect.update();
	rect.render();
}

function keydown(e){
	switch(e.keyCode){
		case 32:
			rect.spacebarPressed = true;
			break;
	}
}

function keyup(e){
	switch(e.keyCode){
		case 32:
			rect.spacebarPressed = false;
			break;
	}
}