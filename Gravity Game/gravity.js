//COMMENT YOUR STUFF PLEASE
//var gravityBar = document.getElementById("gravityBar");
//<progress id = "gravityBar" value = "150" max = "150" style = "position:absolute; top: 20px; left: 20px;"></progress>

class Rectangle { //the base rectangle
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
		this.color = "#FFFFFF";

		this.left = false;
		this.right = false;
		this.up = false;
		this.down = false;
	}
	update(){

	}
	render() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

class RectColored { //rectangles that you can modify the color of
	constructor(x, y, w, h, color) {
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
		this.color = color;

		this.left = false;
		this.right = false;
		this.up = false;
		this.down = false;
	}
	update(){

	}
	render() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height, this.color);
	}
}

class RectMobile { //base moving rectangle
	constructor(x, y, lBound, rBound, uBound, dBound, width, height, xMove, yMove) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = "#FFFFFF";
		
		this.lBound = lBound;
		this.rBound = rBound;
		this.uBound = uBound;
		this.dBound = dBound;
		this.xMove = xMove;
		this.yMove = yMove;
	}
	
	/* EXPLANATION:
	xMove is a variable that holds the horizontal speed (set to 0 if you want to move straight vertically)
	yMove is a variable that holds the vertical speed (set to 0 if you want to move straight horizontally)
	lBound is the left most x coordinate that determines when move will turn around
	rBound is the right most x coordinate that determines when move will turn around
	uBound is the upper most y coordinate that determines when move will start going down
	dBound is the lower most y coordinate that determines when move will start going up
	*/
	
	update() {
		//horizontal movement
		if (this.x != this.lBound && this.x != this.rBound) {
			this.x += this.xMove;
		}
		if (this.x <= this.lBound || this.x >= this.rBound) {
			this.xMove *= -1;
			this.x += this.xMove;
		}
		//vertical movement
		if (this.y != this.uBound && this.y != this.dBound) {
			this.y += this.yMove;
		}
		if (this.y <= this.uBound || this.y >= this.dBound) {
			this.yMove *= -1;
			this.y += this.yMove;
		}
	}
	
	render() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

class Player extends Rectangle { //the player
	constructor(x, y, width, height) {
		super(x, y, width, height);
		this.condense = false;
		this.gravityPoints = 150;
	}
	update() {
		var prevx = this.x;
		var prevy = this.y;

		if (this.left) {
			this.x -= 5;
		}
		if (this.right) {
			this.x += 5;
		}
		if (this.up) {
			this.y -= 5;
		}
		if (this.down) {
			this.y += 5;
		}
		
		//collisions
		for (var i = 0; i < enemyArray.length; i++) {
			if (checkCollision(this, enemyArray[i])) {
				location.reload();
				this.gravityPoint = 150;
			}
		}

		for (var i = 0; i < borderArray.length; i++) {
			if (checkCollision(this, borderArray[i])) {
				this.y = prevy;
				this.x = prevx;
			}
		}

		for (var i = 0; i < enemyMobileArray.length; i++) {
			if (checkCollision(this, enemyMobileArray[i])) {
				location.reload();
				this.gravityPoint = 150;
			}
		}

		for (var i = 0; i < rectArray.length; i++) {
			if (checkCollision(this, rectArray[i])) {
				this.y = prevy;
				this.x = prevx;
			}
		}
		
		for (var i = 0; i < energyArray.length; i++) {
			if (checkCollision(this, energyArray[i])) {
				energyArray.splice(i, 1);
				this.gravityPoints = 150;
			}
		}
		//gravity succ
		for (var i = 0; i < bulletArray.length; i++) {
			if(checkCollision(this, bulletArray[i])){
				location.reload();
				this.gravityPoint = 150;
			}
			if(this.condense && this.gravityPoints > 0){
				var xDist = this.x - bulletArray[i].x;
				var yDist = this.y - bulletArray[i].y;
				var distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
				var pull = 20/distance;
				if(xDist > 0){
					bulletArray[i].dx += pull;
				}
				else{
					bulletArray[i].dx -= pull;
				}

				if(yDist > 0){
					bulletArray[i].dy += pull;
				}
				else{
					bulletArray[i].dy -= pull;
				}
			}

		}
		//manage gravityPoints
		if(this.condense && this.gravityPoints > 0){
			this.gravityPoints -= 0.8;
		}
		else if(!this.condense && this.gravityPoints < 150){
			this.gravityPoints += 0.3;
		}
		//bar cooldown when it hits 0
		if(this.gravityPoints <= 0) {
			forceStop = true;
			this.condense == false;
		}
		if(forceStop == true) {
			this.condense == false;
			if (this.gravityPoints >= 100) {
				forceStop = false;
			}
		}
	
		gravityBar.width = this.gravityPoints;
	}
	render() {
		if (this.condense == false) {
			ctx.fillStyle = "#FFFFFF";
		}
		else
			ctx.fillStyle = "#00FFFF";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

class Enemy extends Rectangle { //stationary enemies
		constructor(x, y, width, height) {
		super (x, y, width, height);
		this.buffer = 40;
	}

	kill(){
		for (var i = 0; i < bulletArray.length; i++) {
			if(checkCollision(this, bulletArray[i])){
				enemyArray.splice(enemyArray.indexOf(this), 1);
				bulletArray.splice(i, 1);
			}
		}
	}
	render() {
		ctx.fillStyle="#B22222";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}

	shoot(){
		var theta = Math.atan2(player.y + player.height/2 - (this.y + this.height/2), player.x + player.width/2 - (this.x + this.width/2));	//finds the angle to aim bullet
		var yBuffer = this.y + this.height/2 + this.buffer * Math.sin(theta);
		var xBuffer = this.x + this.width/2 + this.buffer * Math.cos(theta);	//makes sure the bullet doesn't immediately shoot the enemy it came from
		bulletArray.push(new Bullet(xBuffer, yBuffer, 4*Math.cos(theta), 4*Math.sin(theta)));
	}
}

class EnemyMobile extends RectMobile { //moving enemies
	constructor(x, y, lBound, rBound, uBound, dBound, width, height, xMove, yMove) {
		super (x, y, lBound, rBound, uBound, dBound, width, height, xMove, yMove);
		this.buffer = 40;
	}

	kill() {
		for (var i = 0; i < bulletArray.length; i++) {
			if(checkCollision(this, bulletArray[i])){
				enemyMobileArray.splice(enemyMobileArray.indexOf(this), 1);
				bulletArray.splice(i, 1);
			}
		}
	}
	render() {
		ctx.fillStyle="#800000";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	
	shoot(){
		var theta = Math.atan2(player.y + player.height/2 - (this.y + this.height/2), player.x + player.width/2 - (this.x + this.width/2));	//finds the angle to aim bullet
		var yBuffer = this.y + this.height/2 + this.buffer * Math.sin(theta);
		var xBuffer = this.x + this.width/2 + this.buffer * Math.cos(theta);	//makes sure the bullet doesn't immediately shoot the enemy it came from
		bulletArray.push(new Bullet(xBuffer, yBuffer, 4*Math.cos(theta), 4*Math.sin(theta)));
	}
}

class Bullet extends Rectangle { //the bullets
	constructor(x, y, dx, dy) {
		super (x, y, 10, 10);
		this.dx = dx;
		this.dy = dy;
	}
	update() {
		this.y += this.dy;
		this.x += this.dx;

		for(var i = 0; i < borderArray.length; i++){
			if(checkCollisionX(this, borderArray[i])){	//checks for any horizontal collisions
				this.dx *= -1;	//reflection
			}
			if(checkCollisionY(this, borderArray[i])){	//checks for any vertical collisions
				this.dy *= -1;	//reflection
			}
		}
	}
	render() {
		ctx.fillStyle="#808000";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}

}

class Border extends Rectangle{ //the outside walls
	constructor(x,y,width, height){
		super(x,y,width,height);
	}
	
	render(){
		ctx.fillStyle="#FFFFFF";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

class Energy extends Rectangle{ //gravityPoint refill pickup
		constructor(x,y,width, height){
		super(x,y,width,height);
	}
	
	render(){
		ctx.fillStyle="#7FFF00";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

/* arr.slice (1;0) The slice() method returns a shallow copy of a portion of an array
object selected from begin to end (end not included). The original array will not be modified.*/

//adding things
var player = new Player(475, 475, 30, 30);
//left/right, up/down, length, width
var wallRight = new Border(950, 0, 30, 950);
var wallBottom = new Border(0, 950, 980, 30);
var enemy1 = new Enemy(100, 100, 50, 50);
var enemy2 = new Enemy(700, 700, 50, 50);
var energyPickup1 = new Energy(200, 200, 20, 20);
//x, y, lbound, rbound, ubound, dbound, length, width, xMove, yMove
var mobileEnemy1 = new EnemyMobile(200, 800, 100, 800, 800, 800, 50, 50, 4, 0);
var mobileEnemy2 = new EnemyMobile(800, 100, 200, 850, 50, 600, 50, 50, -2, 2);
var border1 = new Border(0, 0, 0, window.innerHeight);
var border2 = new Border(0,0,window.innerWidth, 0);
var gravityBarBack = new RectColored (20, 20, 150, 15, "#FFFFFF")
var gravityBar = new RectColored (20, 20, 150, 15, "#00FFFF")
var fps = 0;
var timer = 0;
var forceStop = false;

//arrays
var rectArray = [];
var playerArray = [];
var enemyArray = [];
var borderArray = [];
var bulletArray = [];
var playerArray = [];
var enemyMobileArray = [];
var energyArray = [];
var invulnArray = [];

//push arrays
playerArray.push(player);
borderArray.push(border1);
borderArray.push(border2);
borderArray.push(wallRight);
borderArray.push(wallBottom);
enemyArray.push(enemy1);
enemyArray.push(enemy2);
enemyMobileArray.push(mobileEnemy1);
enemyMobileArray.push(mobileEnemy2);
energyArray.push(energyPickup1);
rectArray.push(gravityBarBack);
rectArray.push(gravityBar);
var shootTimer = 0;
var FIRE_INTERVAL = 250;


window.onload = function() {
	canvas = document.getElementById("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx = canvas.getContext("2d");
	//setInterval(enemyShoots2,3250);
	document.addEventListener("keydown", keydown);
	document.addEventListener("keyup", keyup);
	//refresh rate / fps
	setInterval(main, 1/60 * 1000);
}

function main() {
	//clear screen
	ctx.fillStyle = "#110422";
	//window.innerWidth, window.innerHeight
	shootTimer += 1;
	ctx.fillRect(0,0,950,950);
	
	fps += 1;
	if (fps == 60) {
		timer += 1;
		fps = 0;
	}
	
	//changes color of bar
	if (forceStop == true) {
		gravityBar.color = "#A9A9A9";
	}
	else
		gravityBar.color = "#00FFFF"

	//update and render
	for (var i = 0; i < rectArray.length; i++) {
		rectArray[i].update();
		rectArray[i].render();
	}
	for (var i = 0; i < playerArray.length; i++) {
		playerArray[i].update();
		playerArray[i].render();
	}
	for (var i = 0; i < enemyArray.length; i++) {
		enemyArray[i].update();
		enemyArray[i].render();
		enemyArray[i].kill();
		if(shootTimer % FIRE_INTERVAL == 0){
			shootTimer = 0;
			enemyArray[i].shoot();
		}
	}
	for (var i = 0; i < borderArray.length; i++){
		borderArray[i].update();
		borderArray[i].render();
	}
	for (var i = 0; i < bulletArray.length; i++){
		bulletArray[i].update();
		bulletArray[i].render();
	}
	for (var i = 0; i < energyArray.length; i++){
		energyArray[i].update();
		energyArray[i].render();
	}
	for (var i = 0; i < enemyMobileArray.length; i++){
		enemyMobileArray[i].update();
		enemyMobileArray[i].render();
		enemyMobileArray[i].kill();
		if(shootTimer % FIRE_INTERVAL == 0){
			shootTimer = 0;
			enemyMobileArray[i].shoot();
		}
	}
	//text
	ctx.fillStyle = "#F33";
	ctx.font = "24px Times New Roman";
	ctx.fillText("Time: ", 200, 35);
	ctx.fillText(timer, 260, 35);
}

function keydown(e) {
	switch(e.keyCode) {
		case 65://move left
			player.left = true;
			break;
		case 87://move up
			player.up = true;
			break;
		case 68://move right
			player.right = true;
			break;
		case 83:// move down
			player.down = true;
			break;
		case 32://activate gravity
		if (forceStop == false) {
			player.condense = true;
		}
			break;
	}
}

function keyup(e) {
	switch(e.keyCode) {
		case 65:
			player.left = false;
			break;
		case 87:
			player.up = false;
			break;
		case 68:
			player.right = false;
			break;
		case 83:
			player.down = false;
			break;
		case 32:
			player.condense = false;
			break;
	}
}

function checkCollision(rect1, rect2) {
	return  (rect1.x < rect2.x + rect2.width &&
			rect1.x + rect1.width > rect2.x &&
			rect1.y < rect2.y + rect2.height &&
			rect1.height + rect1.y > rect2.y);
}

function checkCollisionX(rect1, rect2) {
	return  (rect1.x < rect2.x + rect2.width &&
			rect1.x + rect1.width > rect2.x);
}

function checkCollisionY(rect1, rect2) {
	return (rect1.y < rect2.y + rect2.height &&
			rect1.height + rect1.y > rect2.y);
}
