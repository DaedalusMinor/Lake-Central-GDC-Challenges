//Tetris 99 is dead we gonna make Tetris 100
//fortnite is dead Tetris 99 supreme

class Rectangle {
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
	update() {
		var prevx = this.x;
		var prevy = this.y;
		
		if (this.left == true) {
			this.x -= 5;
		}
		if (this.right == true) {
			this.x += 5;
		}
		for (var i = 0; i < enemyArray.length; i++) {
			if (enemyArray[i] != this && checkCollision(this, enemyArray[i])) {
				this.x = prevx;
			}
		}
		for (var i = 0; i < rectArray.length; i++) {
			if (rectArray[i] != this && checkCollision(this, rectArray[i])) {
				this.x = prevx;
			}
		}
		
		if (this.up == true) {
			this.y -= 5;
		}
		if (this.down == true) {
			this.y += 5;
		}
		for (var i = 0; i < enemyArray.length; i++) {
			if (enemyArray[i] != this && checkCollision(this, enemyArray[i])) {
				this.y = prevy;
			}
		}
		for (var i = 0; i < rectArray.length; i++) {
			if (rectArray[i] != this && checkCollision(this, rectArray[i])) {
				this.y = prevy;
			}
		}
		for (var i = 0; i < bulletArray.length; i++) {
			if (bulletArray[i] != this && checkCollision(this, bulletArray[i])) {
				location.reload();
			}
		}
	}
	render() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

class Enemy extends Rectangle {
	// create constructor and render
		constructor(x, y, width, height) {
		super (x, y, width, height);
	}
	render() {
		ctx.fillStyle="#B22222";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}
class Bullet extends Rectangle {
	constructor(x, y, width, height) {
		super (x, y, width, height);
	}
	update() {
		this.y += 4;
	}
	render() {
		ctx.fillStyle="#808000";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	
}

function enemyShoots() { //causes enemy1 to shoot
		var shot = new Bullet(enemy1.x + 25, enemy1.y + 50, 10, 10);
		bulletArray.push(shot)
}

/*
function enemyShoots2() { //causes enemy2 to shoot
		var shotSlow = new Bullet(enemy2.x + 15, enemy2.y + 50, 20, 20);
		rectArray.push(shotSlow)
}
*/
class Border extends Rectangle{
	constructor(x,y,width, height){
		super(x,y,width,height);
	}
	render(){
		ctx.fillStyle="#FFFFFF";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}
/* arr.slice (1;0) The slice() method returns a shallow copy of a portion of an array
object selected from begin to end (end not included). The original array will not be modified.*/

//adding things
var player = new Rectangle(475, 475, 30, 30);
//left/right, up/down, length, width
var wallRight = new Rectangle(950, 0, 30, 950);
var wallBottom = new Rectangle(0, 950, 980, 30);
var enemy1 = new Enemy(100, 100, 50, 50);
var enemy2 = new Enemy(700, 700, 50, 50);
var border1 = new Border(0, 0, 0, window.innerHeight);
var border2 = new Border(0,0,window.innerWidth, 0);

var rectArray = [];
var enemyArray = [];
var borderArray = [];
var bulletArray = [];

rectArray.push(player);
rectArray.push(border1);
rectArray.push(border2);
rectArray.push(wallRight);
rectArray.push(wallBottom);
enemyArray.push(enemy1);
enemyArray.push(enemy2);



window.onload = function() {
	canvas = document.getElementById("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx = canvas.getContext("2d");
	setInterval(enemyShoots, 2500);
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
	ctx.fillRect(0,0,950,950);
	
	//update and render
	for (var i = 0; i < rectArray.length; i++) {
		rectArray[i].update();
		rectArray[i].render();
	}
	for (var i = 0; i < enemyArray.length; i++) {
		enemyArray[i].update();
		enemyArray[i].render();
	}
	for (var i = 0; i < borderArray.length; i++){
		borderArray[i].update();
		borderArray[i].render();
	}
	for (var i = 0; i < bulletArray.length; i++){
		bulletArray[i].update();
		bulletArray[i].render();
	}
}

function keydown(e) {
	switch(e.keyCode) {
		case 65:
			player.left = true;
			break;
		case 87:
			player.up = true;
			break;
		case 68:
			player.right = true;
			break;
		case 83:
			player.down = true;
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
	}
}

function checkCollision(rect1, rect2) {
	return  (rect1.x < rect2.x + rect2.width &&
			rect1.x + rect1.width > rect2.x &&
			rect1.y < rect2.y + rect2.height &&
			rect1.height + rect1.y > rect2.y);
			
}