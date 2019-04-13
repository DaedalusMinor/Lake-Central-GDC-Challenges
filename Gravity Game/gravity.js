//COMMENT YOUR STUFF PLEASE

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
		],
		barriers : [ //all the barrier objects contained within this level, except for the other barriers
			{	//the attributes of each barrier object in this level
				x : 160,
				y : 210,
				width : 20,
				height : 140
			},
			{
				x : 60,
				y : 145,
				width : 120,
				height : 10
			}
		],

		enemies : [
			{
				x : 10,
				y : 10,
				width : 20,
				height : 20
			}
		],
		mobileEnemies: [
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
			x: 500 + window.innerWidth/2,
			y: 405,
			width: window.innerWidth,
			height: 10,
		}, 
		{
			x: 205, 
			y: 700 + window.innerHeight/2, 
			width: 10, 
			height: window.innerHeight, 
		}
		],
		
		enemies: [
			{
				x: 310,
				y: 410,
				width: 20,
				height: 20
			}
		], 
		barriers: [

		], 
		mobileEnemies: [
			{
				x: 200,
				y: 400,
				width: 20,
				height: 20,
				varArray: [150, 250, 350, 450, 0.5, 0.5],
				funct: railMovement		//<-- notice here: NO PARENTHESIS!
			}		
		]
	},
	
	"2" : {
		player: {
			x: 980, 
			y: 505,
			width: 30,
			height: 30
		}, 
		invisWalls: [
			{
				x: 250, 
				y: 45, 
				width: 5, 
				height: 90 
			}, 
			{
				x: 1680, 
				y: 300, 
				width: 5, 
				height: 200 
			}, 
			{
				x: 250, 
				y: 890, 
				width: 5, 
				height: 180
			}
		], 
		enemies: [
			{
				x: 910,
				y: 110,
				width: 20,
				height: 20
			},
			
			{
				x: 110,
				y: 210,
				width: 20,
				height: 20
			},
			
			{
				x: 1840, 
				y: 210, 
				width: 20, 
				height: 20
			}
			
		],
		
		barriers: [
			{
				x: 250,
				y: 445,
				width: 5,
				height: 710, 
			}, 
			{
				x: 1680, 
				y: 100, 
				width: 5, 
				height: 200
			},
			{
				x: 1680, 
				y: 690, 
				width: 5, 
				height: 580
			}
		], 
		mobileEnemies: [

		]
	}, 
	"3" : {
		player: {
			x: 980, 
			y: 510, 
			width: 20, 
			height: 20
		},
		invisWalls: [
		{// left wall
			x: 930, 
			y: 510, 
			width: 10, 
			height: 100 
		},
		{//the bottom wall
			x: 980, 
			y: 555, 
			width: 90, 
			height: 10
		}, 
		
		{// right wall
			x: 1030, 
			y: 510, 
			width: 10, 
			height: 100
		},
		
		{//the top wall
			x: 980,  
			y: 465, 
			width: 90, 
			height: 10
		}
		],
		enemies: [
		{
			x: 230, 
			y: 130,
			width: 60, 
			height: 60
		}, 
		{
			x: 930, 
			y: 130,
			width: 60, 
			height: 60
		}, 
		{
			x: 1330, 
			y: 730,
			width: 60, 
			height: 60
		}
		],
		barriers: [
		], 
		mobileEnemies: [
		
		]
	}, 
	"4" : {
		player: {
			x: 430, 
			y: 430, 
			width: 75, 
			height: 75
		}, 
		enemies: [
		{
			x: 365,
			y: 85, 
			width: 30, 
			height: 30
		},
		
		{
			x: 85,
			y: 915, 
			width: 30, 
			height: 30
		}, 
		
		{
			x: 1745, 
			y: 85, 
			width: 30, 
			height: 30
		}
		], 
		barriers: [
		{
			x: 260, 
			y: 180, 
			width: 20, 
			height: 200		
		}, 		
		{
			x: 950, 
			y: 410, 
			width : 300, 
			height: 20
		}
		], 
		invisWalls: [

		], 
		mobileEnemies: [

		]
		
	}
}

class Rectangle { //the base rectangle
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
	}
	update(){
		ctx.fillStyle = "#FFFFFF";
		this.render();
	}
	render() {
		//drawing rectangles like this puts this.x and this.y at the center of the rectangle
		ctx.fillRect(this.x - this.width/2, this.y - this.height/2, this.width, this.height);
	}
}

class RectColored extends Rectangle { //rectangles that you can modify the color of
	constructor(x, y, w, h, color) {
		super(x, y, w, h);
		this.color = color;
	}
	update() { 
		ctx.fillStyle = this.color;
		this.render();
	}
}

class RectMobile extends RectColored { //base moving rectangle
	constructor(x, y, width, height, color, a, funct) {
		super(x, y, width, height, "#800000");
		this.varArray = a;
		this.funct = funct;
	}
	update() {
		this.funct();
		super.update();	
	}
}
/** So in JavaScript, functions can be stored in variables! Rad! By doing this, we can define unique
*	motion functions for each object, and then call them every time update() is called. This allows use
*	us to define a range of objects that move in different ways without creating a new class for each
*	individual object. But how are we going to pass all of the different necessary parameters to the
*	object if this.funct() is hard-coded to pass nothing? I used varArray, since it can have a variable
*	size in JavaScript, which is defined when the object is instantiated, and the function takes those
*	array values, and understands what to do with them. I note what should be given to the array at the
*	beginning of each function, so that it is clear what each variable in the array does for the entire 
*	program.							- Wight_
*/
function railMovement() {
	///Description: Moves the object along a linear segment between (xMin, yMin) and (xMax, yMax)
	/* @precondition: this.varArray = [xMin, xMax, yMin, yMax, dx, dy];
	xMin is the lowest x value, xMax is the highest; same for yMin and yMax
	dx is its speed along the x-axis, dy does the same thing but for y */
	var xMin = this.varArray[0]; var xMax = this.varArray[1]; var yMin = this.varArray[2];
	var yMax = this.varArray[3]; var dx = this.varArray[4]; var dy = this.varArray[5];
	
	if (this.x >= xMin && this.x <= xMax) { //horizontal movement
		this.x += dx;
	}
	else {
		dx *= -1;
		this.varArray[4] *= -1;
		this.x += dx;
	}
	if (this.y >= yMin && this.y <= yMax) { //vertical movement
		this.y += dy;
	}
	else {
		dy *= -1;
		this.varArray[5] *= -1;
		this.y += dy;
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
			if (checkCollision(this, bulletArray[i])){
				createLevel(player.level);
				this.gravityPoints = 150;
				shootTimer = 1;
			}
			if (this.condense && this.gravityPoints > 0){
				//calculate distance
				var xDist = this.x + this.width/2 - bulletArray[i].x;
				var yDist = this.y + this.height/2 - bulletArray[i].y;
				var dist = distance(xDist, yDist);
				//calculate power of gravity
				var pull = 20/dist;
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
			player.condense = false;
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
		//draws a circle with (this.x, this.y) as the center point
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.width/2, 0, 2*Math.PI);
		ctx.closePath();
		ctx.fill();
	}
}

class Enemy extends Rectangle {
	constructor(x, y, width, height) {
		super(x, y, width, height);
		this.buffer = this.width + 5;
		this.theta = 0;
	}

	update(){
		for (var i = 0; i < bulletArray.length; i++) {
			if(checkCollision(this, bulletArray[i])){
				enemyArray.splice(enemyArray.indexOf(this), 1);
				bulletArray.splice(i, 1);
			}
		}
		//finds the angle to point at
		this.theta = Math.atan2(player.y + player.height/2 - (this.y + this.height/2), 
			player.x + player.width/2 - (this.x + this.width/2));	
		if(shootTimer % FIRE_INTERVAL == 0){
			shootTimer = 0;
			this.shoot();
		}
		this.render();
	}
	shoot(){
		//makes sure the bullet doesn't immediately shoot the enemy it came from
		var yBuffer = this.y + this.buffer * Math.sin(this.theta);
		var xBuffer = this.x + this.buffer * Math.cos(this.theta);
		bulletArray.push(new Bullet(xBuffer, yBuffer, 4*Math.cos(this.theta), 4*Math.sin(this.theta)));
	}
	render() {
		ctx.fillStyle="#B22222";
		//A way to draw tilted squares! A corner of the square always points at the player, which is where the enemy fires from (in theory)
		var r = this.width * Math.sqrt(2) / 2;
		ctx.moveTo(this.x + r * Math.sin(-this.theta), this.y + r * Math.cos(-this.theta));
		ctx.beginPath();
		for (var c = 1; c <= 4; c++) {
			ctx.lineTo(this.x + r * Math.sin(-this.theta + (c*Math.PI/2)), this.y + r * Math.cos(-this.theta + (c*Math.PI/2)));
		}		
		ctx.fill();
	}
}

class EnemyMobile extends RectMobile { //moving enemies
	constructor(x, y, width, height, color, a, funct) {
		super (x, y, width, height, "#B22222", a, funct);
		this.buffer = this.width + 15;
	}
	update() {
		super.update(); //all of the RectMobile stuff
		//all of the enemy stuff that was not supered
		this.theta = Math.atan2(player.y + player.height/2 - (this.y + this.height/2), 
			player.x + player.width/2 - (this.x + this.width/2));	
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
	shoot(){
		var yBuffer = this.y + this.height/2 + this.buffer * Math.sin(this.theta);
		var xBuffer = this.x + this.width/2 + this.buffer * Math.cos(this.theta);
		bulletArray.push(new Bullet(xBuffer, yBuffer, 4*Math.cos(this.theta), 4*Math.sin(this.theta)));
	}
	render() {
		ctx.fillStyle="#B22222";
		var r = this.width * Math.sqrt(2) / 2;
		ctx.moveTo(this.x + r * Math.sin(-this.theta), this.y + r * Math.cos(-this.theta));
		ctx.beginPath();
		for (var c = 1; c <= 4; c++) {
			ctx.lineTo(this.x + r * Math.sin(-this.theta + (c*Math.PI/2)), this.y + r * Math.cos(-this.theta + (c*Math.PI/2)));
		}		
		ctx.fill();	
	}
}

class Bullet extends RectColored {
	constructor(x, y, dx, dy, c) {
		super (x, y, 10, 10, "#808000");
		this.dx = dx;
		this.dy = dy;
	}
	update() {
		this.y += this.dy;
		this.x += this.dx;
		var bulletDown = this.y + this.height;
		var bulletRight = this.x + this.width;
		for (var i = 0; i < barrierArray.length; i++) {
			if (checkCollision(this, barrierArray[i])){	
				var direct = eject(this, barrierArray[i]);
				/*Checks to see whether the bullet entered the wall horizontally and/or vertically, and changes
				its orientation appropriately*/
				if (direct[0] || direct[1]){ //horizontal
					this.dx *= -1;
				}
				if (direct[2] || direct[3]){ //vertical
					this.dy *= -1;
				}
			}
		}	
		super.update();
	}
}

class Wall extends Rectangle { //the walls
	constructor(x,y,width, height){
		super(x,y,width,height);
	}
}
class InvisWall extends RectColored{ //I know this is a terrible name for these walls, we can change it. *It is a wall that allows bullets through but doesn't allow the player*.
	constructor(x,y,width,height, color){
		super(x,y,width,height,"#00ff99");
	}
}

class EnergyBar extends RectColored { //gravityPoint refill pickup
		constructor(x,y,width,height){
		super(x,y,width,height,"#7FFF00");
		this.xLeft = this.x - this.width/2;
	}
	update() {
		//places the center of the bar at the midpoint of the edges 
		this.x = (this.xLeft + this.width)/2;
		//changes color of bar
		if (forceStop == true)
			this.color = "#A9A9A9";
		else
			this.color = "#00FFFF";
		this.render();
	}
	render() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.xLeft, this.y - this.height/2, this.width, this.height);
	}
}

/* arr.slice (1;0) The slice() method returns a shallow copy of a portion of an array
object selected from begin to end (end not included). The original array will not be modified.*/
///adding things
var gravityBarBack = new RectColored (95, 30, 150, 15, "#FFFFFF");
var gravityBar = new EnergyBar (95, 30, 150, 15, null);
var fps = 0;
var timer = 0;
var shootTimer = 0;
var FIRE_INTERVAL = 250;
var forceStop = false;

//arrays
var rectArray = [];
var enemyArray = [];
var enemyMobileArray = [];
var barrierArray = [];
var invisArray = [];
var bulletArray = [];

createLevel(0);

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
	ctx.fillRect(0,0, window.innerWidth, window.innerHeight);

	shootTimer += 1;
	fps += 1;
	if (fps == 60) {
		timer += 1;
		fps = 0;
	}

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
	for (var i = 0; i < enemyMobileArray.length; i++){
		enemyMobileArray[i].update();
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
	enemyMobileArray = [];
	barrierArray = [];
	invisArray = [];
	bulletArray = [];

	if(n > MAX_LEVEL + 1){	//this is a temporary fix, in case we make it to a level we haven't made yet, it'll just loop back to the first one.
		n = 0;
		player.level = 0;
	}

	nStr = "" + n;
	timer = 0;
	shootTimer = 0;

	//gets the objects from the "nStr"th level of levelData
	var newEnemies = levelData[nStr]["enemies"];	
	var newMobileEnemies = levelData[nStr]["mobileEnemies"];
	var newBorders = levelData[nStr]["barriers"];
	var newInvisWall = levelData[nStr]["invisWalls"];
	var newPlayer = levelData[nStr]["player"];
	
	//searches through each array of levelData to create the new objects
	for (var i = 0; i < newEnemies.length; i++){	
		enemyArray.push(new Enemy(newEnemies[i].x, newEnemies[i].y, newEnemies[i].width, newEnemies[i].height));
	}
	for (var i = 0; i < newMobileEnemies.length; i++){
		enemyMobileArray.push(new EnemyMobile(newMobileEnemies[i].x, newMobileEnemies[i].y, newMobileEnemies[i].width,
			newMobileEnemies[i].height, newMobileEnemies[i].color, newMobileEnemies[i].varArray, newMobileEnemies[i].funct));
	}
	for (var i = 0; i < newBorders.length; i++){
		barrierArray.push(new Wall(newBorders[i].x, newBorders[i].y, newBorders[i].width, newBorders[i].height));
	}
	//generates the outside walls, since they will be in every level
	barrierArray.push(new Wall(window.innerWidth/2, -20, window.innerWidth, 40));	//upper border
	barrierArray.push(new Wall(-20, window.innerHeight/2, 40, window.innerHeight));	//left border
	barrierArray.push(new Wall(window.innerWidth+20, window.innerHeight/2, 40, window.innerHeight));	//right border
	barrierArray.push(new Wall(window.innerWidth/2, window.innerHeight+20, window.innerWidth, 40));	//lower border
	for (var i = 0; i < newInvisWall.length; i++){
		invisArray.push(new InvisWall(newInvisWall[i].x, newInvisWall[i].y, newInvisWall[i].width,
			newInvisWall[i].height, newInvisWall[i].color));
	}
	
	player = new Player(newPlayer.x, newPlayer.y, newPlayer.width, newPlayer.height, n);
	// generates the energy bar on every level	
	rectArray.push(gravityBarBack);
	rectArray.push(gravityBar);
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

//COLLISION MANAGEMENT//
function checkCollision(rect1, rect2) {
	return  (checkCollisionX(rect1, rect2) && checkCollisionY(rect1, rect2));
}
function checkCollisionX(rect1, rect2) {	//takes the x-component of checkCollision
	return  (rect1.x - rect1.width/2 < rect2.x + rect2.width/2 &&
			rect1.x + rect1.width/2 > rect2.x - rect2.width/2);
}
function checkCollisionY(rect1, rect2) {	//takes the y-component of checkCollision
	return (rect1.y - rect1.height/2 < rect2.y + rect2.height/2 &&
			rect1.y + rect1.height/2 > rect2.y - rect2.height/2);
}
function eject(pushed, pusher) {
	/** A function to handle collision between two objects. 
	*	If object1 (pushed) is inside of object2 (pusher), object1 is pushed a small amount in each
	*	cardinal direction to see if there is anywhere object1 is no longer touching object2.
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
	return flags;
}
//COMMON MATH EQUATIONS//
function distance(x, y) {
	return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
