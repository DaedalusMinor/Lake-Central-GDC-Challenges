class Actor {	//anything
	constructor(x, y, w, h, c) {
		this.x = x;
		this.y = y; 
		this.width = w;
		this.height = h;
		this.color = c;
	}
	update() { this.render(); }
	render() { 	
		//drawing the box like this makes x and y the center of the box
		ctx.fillStyle = this.color;
		ctx.rotate(0);
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
	}	
}
function actorActorCollision(a1, a2) { //takes two actors and sees whether they're touching
	return 	a1.x - a1.width/2 < a2.x + a2.width/2 &&
			a1.x + a1.width/2 > a2.x - a2.width/2 &&
			a1.y - a1.height/2 < a2.y + a2.height/2 &&
			a1.y + a1.height/2 > a2.y - a2.height/2;
}

class Wall extends Actor { // a barrier that doesn't move and can't be traveled through
	constructor(x, y, w, h, c) {
		super(x, y, w, h, c);
	}
	update() {
		for (var c = 0; c < bulletArray.length; c++) {
			if (actorActorCollision(this, bulletArray[c])) {
				bulletArray.splice(c, 1);
				c--;
			}
		}
		this.render();
	}
}
var wallArray = [new Wall(200, 400, 100, 350, "#000000")];
//borders of the screen (so nothing goes outside off of the screen)
nWall = new Wall(window.innerWidth/2, 0, window.innerWidth, 0, "#000000");
sWall = new Wall(window.innerWidth/2, window.innerHeight, window.innerWidth, 0, "#000000")
wWall = new Wall(0, window.innerHeight/2, 0, window.innerHeight, "#000000")
eWall = new Wall(window.innerWidth, window.innerHeight/2, 0, window.innerHeight, "#000000")
wallArray.push(nWall); wallArray.push(sWall); wallArray.push(wWall); wallArray.push(eWall);

class Motile extends Actor { //anything which changes velocity on its own
	constructor(x, y, w, h, c, v, t) {
		super(x, y, w, h, c);
		this.velocity = v;
		this.dx = 0;
		this.dy = 0;
		this.theta = t;
		this.dtheta = 0;
	}
	move() {
		this.x += this.dx;
		this.y += this.dy;
		this.theta += this.dtheta;
	}
}

class Player extends Motile { //the player
	constructor(x, y, w, h, c, v, up, down, left, right, hBar) {
		super(x, y, w, h, c, v);
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
	update() {	
		//a temporary thing for moving without going through anything
		var prevx = this.x;
		var prevy = this.y;
		var dx = 0;
		var dy = 0;
		if (this.goUp) {
			this.y -= this.velocity;
			dy -= this.velocity;
		}
		if (this.goDown) {
			this.y += this.velocity;
			dy += this.velocity;
		}
		for (var c = 0; c < wallArray.length; c++) {
			if (actorActorCollision(this, wallArray[c])) {
				this.y = prevy;
				dy = 0;
			}
		}
		for (c = 0; c < enemyArray.length; c++) {
			if (actorActorCollision(this, enemyArray[c])) {
				this.y = prevy;
				dy = 0;
			}
		}
		if (this.goLeft) {
			this.x -= this.velocity;
			dx -= this.velocity;
		}
		if (this.goRight) {
			this.x += this.velocity;
			dx += this.velocity;
		}
		for (c = 0; c < wallArray.length; c++) {
			if (actorActorCollision(this, wallArray[c])) {
				this.x = prevx;
				dx = 0;
			}
		}
		for (c = 0; c < enemyArray.length; c++) {
			if (actorActorCollision(this, enemyArray[c])) {
				this.x = prevx;
				dx = 0;
			}
		}
		
		//deals damage to the player if being hit by bullets
		for (c = 0; c < bulletArray.length; c++) {
			if (actorActorCollision(this, bulletArray[c])) {
				bulletArray.splice(c, 1);
				this.hBar.stat--;
				c--;
			}
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
			this.hBar.x += dx;
			this.hBar.y += dy;
			this.render();
		}
	}
	
	render() {
		super.render();
		this.hBar.render();
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
		ctx.rotate(0);
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
playerHealth = new statMeter(200, 175, 50, 5, 15);
//player controlled by the arrow keys
player = new Player(200, 200, 30, 30, "#FFFFFF", 5, 38, 40, 37, 39, playerHealth);

class Enemy extends Motile {	//motiles which try to destroy the player with ranged attacks
	constructor(x, y, w, h, c, v, t, target, f) {
		super(x, y, w, h, c, v, t);
		this.target = target;
		this.fireRate = f;
		this.cooldown = this.fireRate;
	}	
	update()
	{
		//the enemy always attempts to point closer to the player
		//the enemy may (or may not) move as well
		this.move();
		this.render();
		this.cooldown -= 1;
		if (this.cooldown == 0) {
			//creates a bullet directed towards where it is aiming
			bulletArray.push(new Bullet(this.x + 1.01 * this.width * Math.sin(this.theta), 
										this.y + 1.01 * this.height * Math.cos(this.theta),
										10, 10, "#808000", 4, this.theta));
			this.cooldown = this.fireRate;
		}
	}
}
var enemyArray = [];
enemy1 = new Enemy(400, 200, 50, 50, "#B22222", 0, 0, player, 100);
enemyArray.push(enemy1);

class Bullet extends Motile {
	constructor(x, y, w, h, c, v, t){
		super(x, y, w, h, c, v, t);
	}
	update() {
		this.dx = this.velocity * Math.sin(this.theta);
		this.dy = this.velocity * Math.cos(this.theta);
		this.move();
		this.render();
	}
}
var bulletArray = [];
strayBullet = new Bullet(window.innerWidth / 2, window.innerHeight / 2, 10, 10, "#808000", 4);
bulletArray.push(strayBullet);

PHI = (Math.sqrt(5) + 1) / 2; //the golden ratio, useful for button aesthetics
class MenuButton extends Actor {
	constructor(x, y, w, h, t, wF, f){
		super(x, y, w, h);
		this.txt = t;
		this.wordFont = wF;
		this.wordSize = 0;
		this.funct = f; //yes, you can make entire functions a variable!
	}
	update() {
		if (mouseActorCollision(this)) {
			this.color = "#555555";
		} else {
			this.color = "#666666";
		}
		this.wordSize = (PHI * this.width) / this.txt.length;
		if (this.wordSize > this.height){
			this.wordSize = this.height;
		}
		fontStyling(this.wordFont, this.wordSize, "#000000", true, "center");
		this.render();
	}
	render(){
		super.render();
		fontStyling(this.wordFont, this.wordSize, "#000000", true, "center");
		ctx.strokeText(this.txt, this.x, this.y + (this.wordSize / 4));
	}
}
class boolButton extends MenuButton {
	constructor(x, y, w, h, t, wF, f, b) {
		super(x, y, w, h, t, wF, f);
		this.bool = b;
	}
	update() {
		super.update();
		if (this.bool)
		{
			if (mouseActorCollision(this)) {
				this.color = "#00cc00";
			} else {
				this.color = "#009900";
			}
		} else {
			if (mouseActorCollision(this)) {
				this.color = "#cc0000";
			} else {
				this.color = "#990000";
			}
		}
		if (2 * this.wordSize > this.height){
			fontStyling(this.wordFont, this.height/ 2, true, "#000000", "center");
		}
		this.render();
	}
	render() {
		ctx.fillStyle = this.color;
		ctx.rotate(0);
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.strokeText(this.txt, this.x , this.y - this.wordSize / 8);
		if (this.bool){
			ctx.strokeText("Yes", this.x, this.y + (5 * this.wordSize / 8)); 
		} else {
			ctx.strokeText("No", this.x, this.y + (5 * this.wordSize / 8));
		}
	}
}
function fontStyling(font, fontSize, color, strokeBool, alignment){
	ctx.font = fontSize + "px " + font;
	if (strokeBool == true){
		ctx.strokeStyle = color;
	} else {
		ctx.fillStyle = color;
	}
	ctx.textAlign = alignment;
}
var buttonArray = [];
keyButton = new boolButton(window.innerWidth * 7/8, window.innerHeight / 8, 150, 70, "Arrow Keys?", "Times New Roman",
			function() { if (this.bool) { player.upKey = 87; player.downKey = 83; player.leftKey = 65; player.rightKey = 68; }
						else { player.upKey = 38; player.downKey = 40; player.leftKey = 37; player.rightKey = 39;} 
						this.bool = !this.bool; }, true);
buttonArray.push(keyButton);

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
		for (x = 0; x < buttonArray.length; x++) {
			if (mouseActorCollision(buttonArray[x])) {
				buttonArray[x].funct();
			}
		}
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
 
function main(){
	ctx.fillStyle = "#110422";
	ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
	for (b = 0; b < wallArray.length; b++){
		wallArray[b].update();
	}
	for (b = 0; b < enemyArray.length; b++){
		enemyArray[b].update();
	}
	for (b = 0; b < bulletArray.length; b++){
		bulletArray[b].update();
	}
	for (b = 0; b < buttonArray.length; b++){
		buttonArray[b].update();
	}
	player.update();
}

/** By choosing to code key inputs like this, it becomes easy
	to change what key presses do what task, which is useful
	for the menu I implemented. */
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
