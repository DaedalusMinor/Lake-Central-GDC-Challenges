//COMMENT YOUR STUFF PLEASE
//var gravityBar = document.getElementById("gravityBar");
//<progress id = "gravityBar" value = "150" max = "150" style = "position:absolute; top: 20px; left: 20px;"></progress>

var MAX_LEVEL = 4;
var levelData = {	//welcome to JSON, one of the most intuitive, uncreative, and simple database languages to use
	/*	This variable is a JSON object, a big one.  This is where we are going to store the data for our levels
	These JSON objects can be made up of a bunch of different objects or data types, like integers, strings,
	and even other JSON objects! Wack. The components of a JSON object are the key value names, that come
	before the ":" and the resulting value, after the ":". Creating a JSON object must be started and ended
	by a "{" and "}", respectively.  And then the attributes of the object are listed so
	var jsnObject = {
		"key name1" : <value>,
		key2 : <value>
	};
	Notice the commas.  Also note that the only semicolon is at the end of the json object instantiation,
	just like a regular var.  Also notice that the pattern is nested in levelData below, meaning we have multiple
	JSON objects in our JSON object. <INCEPTION JOKE TAKEN OUT>.  I also stored some arrays in there.
	The basic format of levelData is:
	"level number" : {
		class(enemies, walls, etc.) : [
			{
				x: <value>,
				y: <value>
				other parameters for constructor method using the same pattern
			},
			{
				...
			},
			...
			{
				...
			}
		],
		other class(same as before) : [
			...
		],
		...
	}
	*/
		// The Screen size is 1930 by 980
	"0" : { // level number
		
		player: {
			x: 500,
			y: 500,
			width: 30,
			height: 30
		}, 
		
		invisWalls: [
			{
				x: 150,
				y: 140,
				width: 20,
				height: 140,
				color: "#00ff99"
			}, 
			{
				x: 800, 
				y: 320, 
				width: 200, 
				height: 20, 
				color: "#00ff99"
			}
		],
		
		barriers : [ //all the barrier objects contained within this level, except for the other barriers
			{	//the attributes of each barrier object in this level
				x : window.innerWidth,
				y : 405,
				width : 140,
				height : 30
			},

			{
				x : 0,
				y : 140,
				width : 120,
				height : 10
			}, 
			{
				x: 600, 
				y: 740, 
				width: 30, 
				height: 100
			}
		],

		enemies : [
			{
				x : 300,
				y : 60,
				width : 20,
				height : 20
			}, 
			{
				x: 50, 
				y: 700, 
				width: 30,
				height: 30
			}
		], 
		mobileEnemies: [
		{
			x: 1300, 
			y: 400, 
			lBound: 1200, 
			rBound: 1600, 
			uBound: 400, 
			dBound: 400, 
			width: 50,
			height: 50, 
			xMove: 4, 
			yMove: 0
			
			/* x, y, lBound, rBound, uBound, dBound, width, height, xMove, yMove
			 EXPLANATION:
				xMove is a variable that holds the horizontal speed (set to 0 if you want to move straight vertically)
				yMove is a variable that holds the vertical speed (set to 0 if you want to move straight horizontally)
				lBound is the left most x coordinate that determines when move will turn around
				rBound is the right most x coordinate that determines when move will turn around
				uBound is the upper most y coordinate that determines when move will start going down
				dBound is the lower most y coordinate that determines when move will start going up
			*/
		}
		]
		
	},

	"1" : {
		player: {
			
			x: 500,
			y: 500,
			width: 30,
			height: 30
			
		}, 
		
		invisWalls: [
		{
			x: 500,
			y: 400,
			width: window.innerWidth,
			height: 10,
			color: "#00ff99"
		}, 
		{
			x: 200, 
			y: 700, 
			width: 10, 
			height: window.innerHeight, 
			color: "#00ff99"
		}
		],
		
		enemies: [
			{
				x: 300,
				y: 400,
				width: 20,
				height: 20
			}, 
			{
				x: 100,
				y: 100, 
				width: 20, 
				height: 20
			}
		], 
		barriers: [
		{
			
		}
		], 
		mobileEnemies: [
		{
			x: 800, 
			y: 100, 
			lBound: 800, 
			rBound: 800, 
			uBound: 300, 
			dBound: 100, 
			width: 30, 
			height: 30, 
			xMove: 0, 
			yMove: 10
			/* x, y, lBound, rBound, uBound, dBound, width, height, xMove, yMove
			 EXPLANATION:
				xMove is a variable that holds the horizontal speed (set to 0 if you want to move straight vertically)
				yMove is a variable that holds the vertical speed (set to 0 if you want to move straight horizontally)
				lBound is the left most x coordinate that determines when move will turn around
				rBound is the right most x coordinate that determines when move will turn around
				uBound is the upper most y coordinate that determines when move will start going down
				dBound is the lower most y coordinate that determines when move will start going up
			*/
		}
		
		]
	},
	
	"2" : {
		player: {
			x: 965, 
			y: 490,
			width: 30,
			height: 30
		}, 
		invisWalls: [
		{
			x: 250, 
			y: 0, 
			width: 5, 
			height: 90, 
			color: "#00ff99"
		}, 
		{
			x: 1680, 
			y: 200, 
			width: 5, 
			height: 200, 
			color: "#00ff99"
		}, 
		{
		x: 250, 
		y: 800, 
		width: 5, 
		height: 180, 
		color: "#00ff99"
		}
		], 
		enemies: [
			{
				x: 900,
				y: 100,
				width: 20,
				height: 20
			},
			
			{
				x: 100,
				y: 200,
				width: 20,
				height: 20
			},
			
			{
				x: 1830, 
				y: 200, 
				width: 20, 
				height: 20
			}
			
		],
		
		barriers: [
			{
				x: 250,
				y: 91,
				width: 5,
				height: 709, 
			}, 
			{
				x: 1680, 
				y: 0, 
				width: 5, 
				height: 200
			},
			{
				x: 1680, 
				y: 400, 
				width: 5, 
				height: 580 //400 + what = 980
			}
		], 
		mobileEnemies: [
		{
			
		}
		]
	}, 
	"3" : {
		player: {
			x: 970, 
			y: 500, 
			width: 20, 
			height: 20
		},
		invisWalls: [
		{// left wall
			x: 925, 
			y: 460, 
			width: 10, 
			height: 100,
			color: "#00ff99" 
		},
		{//the bottom wall
			x: 935, 
			y: 550, 
			width: 90, 
			height: 10, 
			color: "#00ff99"
		}, 
		
		{// right wall
			x: 1025, 
			y: 460, 
			width: 10, 
			height: 100,
			color: "#00ff99" 
		},
		
		{//the top wall
			x: 935,  
			y: 460, 
			width: 90, 
			height: 10,
			color: "#00ff99"
		}
		],
		enemies: [
		{
			x: 200, 
			y: 100,
			width: 60, 
			height: 60
		}, 
		{
			x: 900, 
			y: 100,
			width: 60, 
			height: 60
		}, 
		{
			x: 1300, 
			y: 700,
			width: 60, 
			height: 60
		}
		],
		barriers: [
		{
		}
		], 
		mobileEnemies: [
		{
		}
		
		]
	}, 
	"4" : {
		player: {
			x: 400, 
			y: 400, 
			width: 75, 
			height: 75
		}, 
		enemies: [
		{
			x: 350,
			y: 70, 
			width: 30, 
			height: 30
		},
		
		{
			x: 70,
			y: 900, 
			width: 30, 
			height: 30
		}, 
		
		{
			x: 1730, 
			y: 70, 
			width: 30, 
			height: 30
		}
		], 
		barriers: [
		{
			x: 250, 
			y: 80, 
			width: 20, 
			height: 200
			
		}, 
		
		{
			x: 800, 
			y: 400, 
			width : 300, 
			height: 20
		}
		], 
		invisWalls: [
		{
			
		}
		], 
		mobileEnemies: [
		{
			
		}
		]
		
	}
}


class Rectangle { //the base rectangle
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;

		this.left = false;
		this.right = false;
		this.up = false;
		this.down = false;
	}
	update(){
		this.render();
	}
	render() {
		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

class RectColored extends Rectangle { //rectangles that you can modify the color of
	constructor(x, y, w, h, color) {
		super(x, y, w, h);
		this.color = color;
	}
	render() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

class RectMobile{ //base moving rectangle
	constructor(x, y, lBound, rBound, uBound, dBound, w, h, xMove, yMove) {
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
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
		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

class Player extends Rectangle {
	constructor(x, y, width, height, lv) {
		super(x, y, width, height);
		this.condense = false;
		this.gravityPoints = 150;
		this.level = lv;
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

		//collision handling
		for (var i = 0; i < enemyArray.length; i++) {
			if(checkCollision(this, enemyArray[i])){
				eject(this, enemyArray[i]);
			}
		}
		for (var i = 0; i < barrierArray.length; i++) {
			if(checkCollision(this, barrierArray[i])){
				eject(this, barrierArray[i]);
			}
		}
		for (var i = 0; i < invisArray.length; i++) {
			if(checkCollision(this, invisArray[i])){
				eject(this, invisArray[i]);
			}
		}
		for (var i = 0; i < enemyMobileArray.length; i++) {
			if(checkCollision(this, enemyMobileArray[i])){
				eject(this, enemyMobileArray[i]);
			}			
		}
		
		for (var i = 0; i < bulletArray.length; i++) {
			if(checkCollision(this, bulletArray[i])){
				createLevel(player.level); //location.reload(); or createLevel(player.level) ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				this.gravityPoints = 150;
				shootTimer = 1;
			}
			if(this.condense && this.gravityPoints > 0){
				var xDist = this.x + this.width/2 - bulletArray[i].x;
				var yDist = this.y + this.height/2 - bulletArray[i].y;
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
			//bar cooldown when gravityPoints hits 0
		if(this.gravityPoints <= 0) {
			forceStop = true;
			player.condense == false;
		}
		if(forceStop == true) {
			this.condense == false;
			if (this.gravityPoints >= 100) {
				forceStop = false;
			}
		}
	
		gravityBar.width = this.gravityPoints;
		this.render();
	}
	render() {
		if (this.condense == false) 
			ctx.fillStyle = "#00cc00";
		else {
		ctx.fillStyle = "#00FFFF";
		}
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

class Enemy extends Rectangle {
		constructor(x, y, width, height) {
			super(x, y, width, height);
			this.buffer = this.width + 15;
		}

	update(){
		for (var i = 0; i < bulletArray.length; i++) {
			if(checkCollision(this, bulletArray[i])){
				enemyArray.splice(enemyArray.indexOf(this), 1);
				bulletArray.splice(i, 1);
			}
		}
		if(shootTimer % FIRE_INTERVAL == 0){
			shootTimer = 0;
			this.shoot();
		}
		this.render();
	}
	shoot(){
		var theta = Math.atan2(player.y + player.height/2 - (this.y + this.height/2), player.x + player.width/2 - (this.x + this.width/2));	//finds the angle to aim bullet
		var yBuffer = this.y + this.height/2 + this.buffer * Math.sin(theta);
		var xBuffer = this.x + this.width/2 + this.buffer * Math.cos(theta);	//makes sure the bullet doesn't immediately shoot the enemy it came from
		bulletArray.push(new Bullet(xBuffer, yBuffer, 4*Math.cos(theta), 4*Math.sin(theta)));
	}
	render() {
		ctx.fillStyle="#B22222";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

class EnemyMobile extends RectMobile { //moving enemies
	constructor(x, y, lBound, rBound, uBound, dBound, w, height, xMove, yMove) {
		super (x, y, lBound, rBound, uBound, dBound, w, height, xMove, yMove);
		this.buffer = 40;
	}

	update() {
		super.update();
		for (var i = 0; i < bulletArray.length; i++) {
			if(checkCollision(this, bulletArray[i])){
				enemyMobileArray.splice(enemyMobileArray.indexOf(this), 1);
				bulletArray.splice(i, 1);
			}
		}
		if(shootTimer % FIRE_INTERVAL == 0){ 
			shootTimer = 0;
			this.shoot();
		}
		this.render();
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

class Bullet extends Rectangle {
	constructor(x, y, dx, dy) {
		super (x, y, 10, 10);
		this.dx = dx;
		this.dy = dy;
	}

	update() {
		this.y += this.dy;
		this.x += this.dx;
		var bulletDown = this.y + this.height;
		var bulletRight = this.x + this.width;
		for (var i = 0; i < barrierArray.length; i++) {
			if(checkCollision(this, barrierArray[i])){
				if((bulletRight <= barrierArray[i].x + this.dx && bulletRight >= barrierArray[i].x - this.dx) || (this.x <= barrierArray[i].x + barrierArray[i].width - this.dx && this.x >= barrierArray[i].x + barrierArray[i].width + this.dx)){
					/*Checks if the bullet hits from the left or right. The approach I took was a "margin-of-error" one, seeing the bullet
					was just in the range of the left or right of the walls.  This prevents any bullets "jumping over" the boundaries of the barriers*/
					this.dx *= -1;
				}
				if((bulletDown >= barrierArray[i].y - this.dy && bulletDown <= barrierArray[i].y + this.dy) || (this.y >= barrierArray[i].y + barrierArray[i].height + this.dy && this.y <= barrierArray[i].y + barrierArray[i].height - this.dy)){
					this.dy *= -1;
				}
			}
		}
		
		
		this.render();
	}

	render() {
		
			ctx.fillStyle = "#808000";
		ctx.fillRect(this.x, this.y, this.width, this.height);
		
		
	}
}

class Wall extends Rectangle{ //the walls
	constructor(x,y,width, height){
		super(x,y,width,height);
	}
}

class Energy extends RectColored { //gravityPoint refill pickup
		constructor(x,y,width,height){
		super(x,y,width,height,"#7FFF00");
	}
}
class InvisWall extends RectColored{ //I know this is a terrible name for these walls, we can change it. *It is a wall that allows bullets through but doesn't allow the player*.
	constructor(x,y,width,height, color){
		super(x,y,width,height,"#00ff99");
		this.color = color;
	}
	update()
	{
	this.render();
	}
	render()
	{
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}
/* arr.slice (1;0) The slice() method returns a shallow copy of a portion of an array
object selected from begin to end (end not included). The original array will not be modified.*/

//adding things
var player = new Player(475, 475, 30, 30);
//left/right, up/down, length, width
/* var wallRight = new Border(950, 0, 30, 950);
var wallBottom = new Border(0, 950, 980, 30);
var enemy1 = new Enemy(100, 100, 50, 50);
var enemy2 = new Enemy(700, 700, 50, 50);
var energyPickup1 = new Energy(200, 200, 20, 20);
//x, y, lbound, rbound, ubound, dbound, length, width, xMove, yMove
var mobileEnemy1 = new EnemyMobile(200, 800, 100, 800, 800, 800, 50, 50, 4, 0);
var mobileEnemy2 = new EnemyMobile(800, 100, 200, 850, 50, 600, 50, 50, -2, 2); */
var gravityBarBack = new RectColored (20, 20, 150, 15, "#FFFFFF");
var gravityBar = new RectColored (20, 20, 150, 15, "#00FFFF");
var fps = 0;
var timer = 0;
var forceStop = false;

var testthis = new RectMobile(1000, 1000, 900, 1500, 1000, 1000, 50, 50, 2, 0);

//arrays
var rectArray = [];
var playerArray = [];
var enemyArray = [];
var barrierArray = [];
var invisArray = [];
var bulletArray = [];
var enemyMobileArray = [];
var energyArray = [];
var invulnArray = [];

enemyMobileArray.push(testthis);

var player = new Player(475, 400, 30, 30, 0);
var timer = 0;

createLevel(0); 
//push arrays
playerArray.push(player);


var shootTimer = 0;
var FIRE_INTERVAL = 250;


window.onload = function() {
	canvas = document.getElementById("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx = canvas.getContext("2d");
	document.addEventListener("keydown", keydown);
	document.addEventListener("keyup", keyup);
	//refresh rate / fps
	setInterval(main, 1/60 * 1000);
}

function main() {
	//clear screen
	ctx.fillStyle = "#110422";
	shootTimer += 1;
	ctx.fillRect(0,0, window.innerWidth, window.innerHeight);

	fps += 1;
	if (fps == 60) {
		timer += 1;
		fps = 0;
	}

	//changes color of bar
	if (forceStop == true){
		gravityBar.color = "#A9A9A9";
	}
	else
		gravityBar.color = "#00FFFF"

	//The update() function calls render() and shoot()
	for (var i = 0; i < rectArray.length; i++) {
		rectArray[i].update();
	}	
	player.update();	
	for (var i = 0; i < enemyArray.length; i++) {
		enemyArray[i].update();
	}
	for (var i = 0; i < barrierArray.length; i++){
		barrierArray[i].update();
	}
	for (var i = 0; i < invisArray.length; i++){
		invisArray[i].update();
	}
	for (var i = 0; i < bulletArray.length; i++){
		bulletArray[i].update();
	}
	for (var i = 0; i < energyArray.length; i++){
		energyArray[i].update();
	}
	for (var i = 0; i < enemyMobileArray.length; i++){
		enemyMobileArray[i].update();
		enemyMobileArray[i].render();
	}
	
	//text
	ctx.fillStyle = "#FF3333";
	ctx.font = "24px Arial";
	ctx.fillText("Level: " + (player.level+1), window.innerWidth - 100, 35);
	ctx.fillText("Time: " + Math.trunc(timer), 200, 35); //shows time, Math.trunc(n) is a method to round down to the greatest integer of a floating number
	if (enemyArray.length == 0 && enemyMobileArray.length == 0){	//if there are no more enemies left, show animation and move to next level
		player.level++;
		createLevel(player.level);
	}
}

function createLevel(n) {	//this function is going to use levelData to create the nth level
	rectArray = [];
	enemyArray = [];
	barrierArray = [];
	invisArray = [];
	energyArray = [];
	bulletArray = [];
	enemyMobileArray = [];

	if(n > MAX_LEVEL + 1){	//this is a temporary fix, in case we make it to a level we haven't made yet, it'll just loop back to the first one.
		n = 0;
	}

	nStr = "" + n;
	timer = 0;
	shootTimer = 0;

	var newEnemies = levelData[nStr]["enemies"];	//gets the enemies from the nth level of levelData
	var newBorders = levelData[nStr]["barriers"]; //gets the barriers/borders from the nth level of levelData
	var newPlayer = levelData[nStr]["player"];
	var newInvisWall = levelData[nStr]["invisWalls"];
	var newMobileEnemies = levelData[nStr]["mobileEnemies"];
		
		
	
	for(var i = 0; i < newInvisWall.length; i++){
		invisArray.push(new InvisWall(newInvisWall[i].x, newInvisWall[i].y, newInvisWall[i].width, newInvisWall[i].height, newInvisWall[i].color));
	}
	
	// x, y, lBound, rBound, uBound, dBound, width, height, xMove, yMove
	for(var i = 0; i < newMobileEnemies.length; i++){
		enemyMobileArray.push(new EnemyMobile(newMobileEnemies[i].x, newMobileEnemies[i].y, newMobileEnemies[i].lBound, newMobileEnemies[i].rBound, newMobileEnemies[i].uBound, newMobileEnemies[i].dBound, newMobileEnemies[i].width, newMobileEnemies[i].height, newMobileEnemies[i].xMove, newMobileEnemies[i].yMove));
	}
	
	for(var i = 0; i < newEnemies.length; i++){	//searches through the enemies array of levelData
		enemyArray.push(new Enemy(newEnemies[i].x, newEnemies[i].y, newEnemies[i].width, newEnemies[i].height));
	}
	//generates the outside walls, since they will be in every level
	barrierArray.push(new Wall(0, 0, window.innerWidth, 0));	//upper border
	barrierArray.push(new Wall(0, 0, 0, window.innerHeight));	//left border
	barrierArray.push(new Wall(window.innerWidth, 0, 0, window.innerHeight));	//right border
	barrierArray.push(new Wall(0, window.innerHeight, window.innerWidth, 0));	//lower border
	// generates the energy bar on every level
	
	rectArray.push(gravityBarBack);
	rectArray.push(gravityBar);
	for(var i = 0; i < newBorders.length; i++){
		barrierArray.push(new Wall(newBorders[i].x, newBorders[i].y, newBorders[i].width, newBorders[i].height));
	}
	
	player = new Player(newPlayer.x, newPlayer.y, newPlayer.width, newPlayer.height, n);
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
	return  (checkCollisionX(rect1, rect2) && checkCollisionY(rect1, rect2));
}
function checkCollisionX(rect1, rect2) {	//takes the x-component of checkCollision
	return  (rect1.x < rect2.x + rect2.width &&
			rect1.x + rect1.width > rect2.x);
}
function checkCollisionY(rect1, rect2) {	//takes the y-component of checkCollision
	return (rect1.y < rect2.y + rect2.height &&
			rect1.height + rect1.y > rect2.y);
}

function eject(pushed, pusher) {
	/** A function to handle collision between two objects. 
	*	If object1 (pushed) is inside of object2 (pusher), object1 is pushed a small amount in each cardinal
	*	direction to see if there is anywhere object1 is no longer touching object2.
	*	If it doesn't find any direction which removes it, it increases the push radius and tries again.
	*	Upon finding the correct direction(s), object1 is moved to where it was discovered to no longer
	*	be touching object2.			- Wight_
	*/
	var delta = 0.01;
	var flags = [false, false, false, false];
	do
	{
		pushed.x += delta;
		if (!checkCollision(pushed, pusher)){
			flags[0] = true;
		}
		pushed.x -= 2*delta;
		if (!checkCollision(pushed, pusher)){
			flags[1] = true;
		}
		pushed.x += delta;
		pushed.y += delta;
		if (!checkCollision(pushed, pusher)){
			flags[2] = true;
		}
		pushed.y -= 2*delta;
		if (!checkCollision(pushed, pusher)){
			flags[3] = true;
		}
		pushed.y += delta;
		delta += 0.01;
	} while (!flags[0] && !flags[1] && !flags[2] && !flags[3]);
	if (flags[0]) {
		pushed.x += delta;
	} else if (flags[1]) {
		pushed.x -= delta;
	}
	if (flags[2]) {
		pushed.y += delta;
	} else if (flags[3]) {
		pushed.y -= delta;
	}
}

function isOpenX(rect1, rect2) {	//checks whether the x components of two rectangles are touching
	return  !((rect1.x + rect1.width == rect2.x || rect1.x == rect2.x + rect2.width) && checkCollisionY(rect1, rect2));
}

function isOpenY(rect1, rect2) {	//checks whether the y components of two rectangles are touching
	return  !((rect1.y + rect1.height == rect2.y || rect1.y == rect2.y + rect2.height) && checkCollisionX(rect1, rect2));
}
