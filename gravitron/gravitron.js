class Actor {	//anything
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y; 
		this.width = w;
		this.height = h;
	}
	update() {}
	render() {}	
}

class Motile extends Actor { //anything which changes velocity on its own
	constructor(x, y, w, h, v) {
		super(x, y, w, h);
		this.velocity = v;
		this.dx = 0;
		this.dy = 0;
		this.theta = 0;
		this.dtheta = 0;
	}
	update() {
		this.dx = v * Math.sin(this.theta);
		this.dy = v * Math.cos(this.theta);
		this.x += dx;
		this.y += dy;
	}
}

class Player extends Motile { //the player
	constructor(x, y, w, h, v, up, down, left, right) {
		super(x, y, w, h, v);
		//denotes the keys that control the character
		this.upKey = up;
		this.downKey = down;
		this.leftKey = left;
		this.rightKey = right;
		this.goUp = false;
		this.goDown = false;
		this.goLeft = false;
		this.goRight = false;
	}
	update() {	//a temporary thing for testing
		this.dx = 0;
		this.dy = 0;
		if (this.goUp) {
			this.dy -= this.velocity;
		}
		if (this.goDown) {
			this.dy += this.velocity;
		}
		if (this.goLeft) {
			this.dx -= this.velocity;
		}
		if (this.goRight) {
			this.dx += this.velocity;
		}
		this.x += this.dx;
		this.y += this.dy;
	}
	
	render() {
		ctx.fillStyle = "#000000"
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
	}
	
}

class Enemy extends Motile {	//motiles which try to destroy the player
	constructor(x, y, w, h, target) {
		super(x, y, w, h);
		this.target = target
	}
	
	update()
	{
		//the enemy always attempts to point closer to the player
	}
}

window.onload = function(){
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	
	document.addEventListener("keydown",keydown);
	document.addEventListener("keyup",keyup);
	setInterval(main, 6);
}

var player = new Player(200, 200, 15, 15, 5, 38, 40, 37, 39);
 
function main(){
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
	player.update();
	player.render();
}

function keydown(e){
	switch(e.keyCode){
		case player.upKey:
			player.goUp = true;
			break;
		case player.downKey:
			player.goDown = true;
			break;
		case player.leftKey:
			player.goLeft = true;
			break;
		case player.rightKey:
			player.goRight = true;
			break;
	}
}
function keyup(e){
	switch(e.keyCode){
		case player.upKey:
			player.goUp = false;
			break;
		case player.downKey:
			player.goDown = false;
			break;
		case player.leftKey:
			player.goLeft = false;
			break;
		case player.rightKey:
			player.goRight = false;
			break;
	}
}
