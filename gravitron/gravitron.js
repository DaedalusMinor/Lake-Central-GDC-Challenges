class Actor {	//anything
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y; 
		this.width = w;
		this.height = h;
	}
	update() { this.render(); }
	render() {}	
}
function actorActorCollision(a1, a2) { //takes two actors
	return 	a1.x - a1.width/2 < a2.x + a2.width/2 &&
			a1.x + a1.width/2 > a2.x - a2.width/2 &&
			a1.y - a1.height/2 < a2.y + a2.height/2 &&
			a1.y + a1.height/2 > a2.y - a2.height/2;
}

class Wall extends Actor { // a barrier that doesn't move and can't be traveled through
	constructor(x, y, w, h) {
		super(x, y, w, h);
	}
	render() {
		ctx.fillStyle = "#000000";
		//drawing the box like this makes x and y the center of the box
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
	}
}
var wallArray = [new Wall(200, 400, 100, 350)];

class Motile extends Actor { //anything which changes velocity on its own
	constructor(x, y, w, h, v) {
		super(x, y, w, h);
		this.velocity = v;
		this.dx = 0;
		this.dy = 0;
		this.theta = 0;
		this.dtheta = 0;
	}
	move() {
		this.x += this.dx;
		this.y += this.dy;
		this.theta += this.dtheta;
	}
}

class Player extends Motile { //the player
	constructor(x, y, w, h, v, up, down, left, right, hBar) {
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
		this.hBar = hBar;
	}
	update() {	//a temporary thing for testing
		this.dx = 0;
		this.dy = 0;
		/**	all of repetitive code here could probably be simplified into a function
			also, most of this is probably very inefficient and should be improved
		*/
		if (this.goUp) {
			this.dy -= this.velocity;
			this.prevdy = this.dy;
			this.y += this.dy;
			for (b = 0; b < wallArray.length; b++) {
				if (actorActorCollision(this, wallArray[b]))
				{
					this.dy += this.velocity; //undoes the change in velocity since it can't move into a wall
				}
			}
			this.y -= this.prevdy;
		}
		if (this.goDown) {
			this.dy += this.velocity;
			this.prevdy = this.dy;
			this.y += this.dy;
			for (b = 0; b < wallArray.length; b++) {
				if (actorActorCollision(this, wallArray[b]))
				{
					this.dy -= this.velocity;
				}
			}
			this.y -= this.prevdy;
		}
		if (this.goLeft) {
			this.dx -= this.velocity;
			this.prevdx = this.dx;
			this.x += this.dx;
			for (b = 0; b < wallArray.length; b++) {
				if (actorActorCollision(this, wallArray[b]))
				{
					this.dx += this.velocity;
				}
			}
			this.x -= this.prevdx;
		}
		if (this.goRight) {
			this.dx += this.velocity;
			this.prevdx = this.dx;
			this.x += this.dx;
			for (b = 0; b < wallArray.length; b++) {
				if (actorActorCollision(this, wallArray[b]))
				{
					this.dx -= this.velocity;
				}
			}
			this.x -= this.prevdx;
		}
		this.hBar.update();
		if (this.hBar.stat <= 0)
		{	
			//give the player a dramatic death animation,
			//then destroy all references to the object
		}
		else
		{
			this.move();
			//slightly naive coding here, but Actor doesn't have a move function...
			this.hBar.x += this.dx;
			this.hBar.y += this.dy;
			this.render();
		}
	}
	
	render() {
		ctx.fillStyle = "#000000"
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		this.hBar.render();
	}	
}

class Enemy extends Motile {	//motiles which try to destroy the player with ranged attacks
	constructor(x, y, w, h, target, f) {
		super(x, y, w, h);
		this.target = target;
		this.fireRate = f;
	}	
	update()
	{
		//the enemy always attempts to point closer to the player
		//the enemy may (or may not) move as well
	}
}

class statMeter extends Actor {
	constructor(x, y, w, h, stat){
		super(x, y, w, h);
		this.stat = stat;
		this.maxStat = this.stat;
	}
	update(){
		//figure out a way to change this simultaneously with another variable
	}
	render() {
		if (this.maxStat / 2 < this.stat){
			ctx.fillStyle = "#00ff00"; //green
		} else if (this.maxStat / 10 < this.stat){
			ctx.fillStyle = "#ffff00"; //yellow
		} else {
			ctx.fillStyle = "#ff0000"; //red
		}
		if (this.stat > 0){ //prevents the bar from underflowing for negative values
			ctx.fillRect(this.x - (this.width/2), this.y - (this.height/2), this.width * (this.stat/this.maxStat), this.height);
		}
		//possibly add a descriptor here (words or symbols so it has meaning)
	}
}

Mouse = function(){
	var mouse = {};
	mouse.x = 0;
	mouse.y = 0;
	function move(e){
		mouse.x = e.clientX;
		mouse.y = e.clientY;
	}
	function click(e){
		//stuff that happens when left click
	}
	canvas.addEventListener('mousemove', move);
	canvas.addEventListener('click', click);
	return mouse;
}
function mouseActorCollision(a) { //takes one actor as input
	return mouse.x > a.x - (a.width / 2) && mouse.x < a.x + (a.width / 2) &&
		mouse.y > a.y - (a.height / 2) && mouse.y < a.y + (a.height / 2);
}

window.onload = function(){
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	
	document.addEventListener("keydown",keydown);
	document.addEventListener("keyup",keyup);
	mouse = new Mouse();
	setInterval(main, 100/6);
}

playerHealth = new statMeter(200, 175, 50, 5, 15);
//player controlled by the arrow keys
player = new Player(200, 200, 30, 30, 5, 38, 40, 37, 39, playerHealth);
 
function main(){
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
	for (b = 0; b < wallArray.length; b++){
		wallArray[b].update();
	}
	player.update();
}

/** By choosing to code key inputs like this, it becomes easy
	to change what key presses do what task, which could be useful
	for a menu or something later. */
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
