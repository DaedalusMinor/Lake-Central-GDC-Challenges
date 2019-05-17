//COMMENT YOUR STUFF PLEASE
var HEIGHT = 1920;
var WIDTH  = 969;
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
*	motion functions for each object, and then call them every time update() is called. This allows
*	us to define a range of objects that move in different ways without creating a new class for each
*	individual object. But how are we going to pass all of the different necessary parameters to the
*	object if this.funct() is hard-coded to pass nothing? I used varArray, since it can have a variable
*	size in JavaScript, which is defined when the object is instantiated, and the function takes those
*	array values, and understands what to do with them. I note what should be given to the array at the
*	beginning of each function, so that it is clear what each variable in the array does for the entire
*	function.							- Wight_
*/
function railMovement() {
	///Description: Moves object along a linear segment between (x1, y1) and (x2, y2) at speed d
	/* @preconditions: this.varArray = [x1, x2, y1, y2, d];
	(this.x, this.y) MUST be a solution to: (y2 - y) = (y2-y1)/(x2-x1) * (x2 - x),
	therefore (this.x, this.y) is a point on the line connecting (x1, y1) and (x2, y2).
	x1 is the x-coordinate of the first point, x2 for the second point,
	same for y1 and y2 but for the y-coordinate, d is its speed */
	var x1 = makeStandardWidth(this.varArray[0]); var x2 = makeStandardWidth(this.varArray[1]);
	var y1 = makeStandardHeight(this.varArray[2]); var y2 = makeStandardHeight(this.varArray[3]);
	var d = makeStandardWidth(this.varArray[4]);
	if (this.direction === undefined)	//determine the direction to be traveling
		this.direction = (d > 0)?1:-1;	//Ignore the syntax. It works. Trust me. :P
	if ((this.x < Math.min(x1, x2) || this.x > Math.max(x1,x2)) &&
		(this.y < Math.min(y1, y2) || this.y > Math.max(y1, y2)))	//determines whether to switch direction
		this.direction *= -1;
	d *= this.direction;

	this.x += d * Math.cos(Math.atan2(y2-y1,x2-x1));
	this.y += d * Math.sin(Math.atan2(y2-y1,x2-x1));
}
function ellipticalMovement() {
	///Description: Moves object along an ellipse with axes of lengths axX and axY at center (x, y),
	///Making a revolution in d frames, therefore the object covers 2*PI/d radians per frame
	/* @preconditions: this.varArray = [x, y, axX, axY, d];
	(this.x, this.y) MUST be a solution to the ellipse OR null, in which case it will be set to a valid point.
	cenX is the x co-ordinate of the circle's center, cenY is the y co-ordinate,
	axX is the distance between the center and a point on the ellipse with the same x-coordinate,
	axY is the same for y, d is the number of frames the object needs to make one complete rotation
	(cenX + axX cost, cenY + axY sint) */
	var cenX = makeStandardWidth(this.varArray[0]); var cenY = makeStandardHeight(this.varArray[1]);
	var axX = makeStandardWidth(this.varArray[2]); var axY = makeStandardWidth(this.varArray[3]);
	var d = this.varArray[4];

	if (this.x == null || this.y == null) {
		this.x = cenX + axX;
		this.y = cenY;
	} else {
		var thta = Math.atan2(this.y-cenY,this.x-cenX);
		thta += 2*Math.PI/d;
		this.x = cenX + axX * Math.cos(thta);
		this.y = cenY + axY * Math.sin(thta);
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
		if (this.left)
			this.x -= makeStandardWidth(3);
		if (this.right)
			this.x += makeStandardWidth(3);
		if (this.up)
			this.y -= makeStandardHeight(3);
		if (this.down)
			this.y += makeStandardHeight(3);

		for (var i = 0; i < enemyArray.length; i++) {
			eject(this, enemyArray[i]);
		}
		for (var i = 0; i < barrierArray.length; i++) {
			eject(this, barrierArray[i]);
		}
		for (var i = 0; i < invisArray.length; i++) {
			eject(this, invisArray[i]);
		}
		for (var i = 0; i < enemyMobileArray.length; i++) {
			eject(this, enemyMobileArray[i]);
		}
		for (var i = 0; i < absorbArray.length; i++) {
			eject(this, absorbArray[i]);
		}

		for (var i = 0; i < bulletArray.length; i++) {
			if (this.condense && this.gravityPoints > 0){
				//calculate distance
				var xDist = this.x - bulletArray[i].x;
				var yDist = this.y - bulletArray[i].y;
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
		if(forceStop) {
			this.condense = false;
			if (this.gravityPoints >= 100) {
				forceStop = false;
			}
		}

		gravityBar.width = this.gravityPoints;
		this.render();
	}
	render() {
		if (!this.condense)
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
		//finds the angle to point at
		this.theta = Math.atan2(player.y - this.y, player.x - this.x);
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
		this.theta = Math.atan2(player.y - this.y, player.x - this.x);
		if(shootTimer % FIRE_INTERVAL == 0){
			shootTimer = 0;
			this.shoot();
		}
		this.render();
	}
	shoot(){
		var yBuffer = this.y + this.buffer * Math.sin(this.theta);
		var xBuffer = this.x + this.buffer * Math.cos(this.theta);
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
		super (x, y, makeStandardWidth(10), makeStandardHeight(10), "#808000");
		this.dx = dx;
		this.dy = dy;
		this.collisionCounter=0;
	}
	update() {
		this.y += this.dy;
		this.x += this.dx;
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
				this.collisionCounter+=1;
				if(this.collisionCounter >= 4){
					bulletArray.splice(bulletArray.indexOf(this), 1);
				}
			}
		}
		//handles everything the bullet can kill
		for (var i = 0; i < enemyArray.length; i++) {
			if(checkCollision(this, enemyArray[i])){
				enemyArray.splice(i, 1);
				bulletArray.splice(bulletArray.indexOf(this), 1);
			}
		}
		for (var i = 0; i < enemyMobileArray.length; i++) {
			if(checkCollision(this, enemyMobileArray[i])){
				enemyMobileArray.splice(i, 1);
				bulletArray.splice(bulletArray.indexOf(this), 1);
			}
		}
		if (checkCollision(this, player)){
			createLevel(player.level);
			player.gravityPoints = 150;
			deathCounter += 1;
			shootTimer = 1;
		}
		for (var i = 0; i < absorbArray.length; i++) {
			if(checkCollision(this, absorbArray[i])){
				bulletArray.splice(bulletArray.indexOf(this), 1);
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
class AbsorbentWall extends RectColored{
	constructor(x,y,width,height,color){
		super(x,y,width,height,"#006600");
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
		if (forceStop)
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
var deathCounter = 0;
var shootTimer = 0;
var FIRE_INTERVAL = 250;
var forceStop = false;

//arrays
var rectArray = [];
var enemyArray = [];
var enemyMobileArray = [];
var barrierArray = [];
var invisArray = [];
var absorbArray = [];
var bulletArray = [];

window.onload = function() {
	canvas = document.getElementById("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx = canvas.getContext("2d");
	document.addEventListener("keydown", keydown);
	document.addEventListener("keyup", keyup);
	mouse = new Mouse();
	createLevel(0);
	//refresh rate / fps
	setInterval(main, 1/60 * 1000);
}

function main() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
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
	for (var i = 0; i < absorbArray.length; i++){
		absorbArray[i].update();
	}
	for (var i = 0; i < bulletArray.length; i++){
		bulletArray[i].update();
	}
	for (var i = 0; i < enemyMobileArray.length; i++){
		enemyMobileArray[i].update();
	}

	//text
	ctx.textAlign = "left";
	ctx.fillStyle = "#ffffff";
	ctx.font = "small-caps lighter 30px Montserrat";
	ctx.fillText("Level: " + (player.level+1), window.innerWidth - 200, 35);
	ctx.fillText("Time: " + Math.trunc(timer), 200, 35); //shows time, Math.trunc(n) is a method to round down to the greatest integer of a floating number
	ctx.fillText("Deaths: " + (deathCounter), 345, 35);
	if(timer > 0 && timer < 21)
	{
		ctx.fillText("Use Spacebar to change your gravity and throw the bullets back!", 30, 900);
	}
	ctx.textAlign = "center";
	//debug text which shows the x and y-coords the mouse would be at on the "Standard Screen"
	//it will also help with designing levels since you can know where to place something
	ctx.fillText("Converted Screen X: " + Math.trunc(inverseStandardWidth(mouse.x)), window.innerWidth/2, 20);
	ctx.fillText("Converted Screen Y: " + Math.trunc(inverseStandardHeight(mouse.y)), window.innerWidth/2, 50);
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
	absorbArray = [];
	bulletArray = [];

	if(n > MAX_LEVEL + 1){	//this is a temporary fix, in case we make it to a level we haven't made yet, it'll just loop back to the first one.
		n = 0;
		player.level = 0;
	}

	nStr = "" + n;
	shootTimer = 0;

	//gets the objects from the "nStr"th level of levelData
	var newEnemies = levelData[nStr]["enemies"];
	var newMobileEnemies = levelData[nStr]["mobileEnemies"];
	var newBorders = levelData[nStr]["barriers"];
	var newInvisWall = levelData[nStr]["invisWalls"];
	var newAbsorbWall = levelData[nStr]["absorbWalls"];
	var newPlayer = levelData[nStr]["player"];
	var dimensions = levelData[nStr]["dimensions"];

	if(dimensions){
		WIDTH = dimensions.width;
		HEIGHT = dimensions.height;
	}
	else{
		WIDTH = 1920;
		HEIGHT = 969;
	}

	//searches through each array of levelData to create the new objects
	for (var i = 0; i < newEnemies.length; i++){
		enemyArray.push(new Enemy(makeStandardWidth(newEnemies[i].x), makeStandardHeight(newEnemies[i].y),
			makeStandardWidth(newEnemies[i].width), makeStandardHeight(newEnemies[i].height)));
	}
	for (var i = 0; i < newMobileEnemies.length; i++){
		enemyMobileArray.push(new EnemyMobile(makeStandardWidth(newMobileEnemies[i].x), makeStandardHeight(newMobileEnemies[i].y),
			makeStandardWidth(newMobileEnemies[i].width), makeStandardHeight(newMobileEnemies[i].height),
			newMobileEnemies[i].color, newMobileEnemies[i].varArray, newMobileEnemies[i].funct));
	}
	for (var i = 0; i < newBorders.length; i++){
		barrierArray.push(new Wall(makeStandardWidth(newBorders[i].x), makeStandardHeight(newBorders[i].y),
			makeStandardWidth(newBorders[i].width), makeStandardHeight(newBorders[i].height)));
	}
	//generates the outside walls, since they will be in every level
	barrierArray.push(new Wall(window.innerWidth/2, -20, window.innerWidth, 40));	//upper border
	barrierArray.push(new Wall(-20, window.innerHeight/2, 40, window.innerHeight));	//left border
	barrierArray.push(new Wall(window.innerWidth+20, window.innerHeight/2, 40, window.innerHeight));	//right border
	barrierArray.push(new Wall(window.innerWidth/2, window.innerHeight+20, window.innerWidth, 40));	//lower border
	for (var i = 0; i < newInvisWall.length; i++){
		invisArray.push(new InvisWall(makeStandardWidth(newInvisWall[i].x), makeStandardHeight(newInvisWall[i].y),
			makeStandardWidth(newInvisWall[i].width), makeStandardHeight(newInvisWall[i].height), newInvisWall[i].color));
	}
	for (var i = 0; i < newAbsorbWall.length; i++){
		absorbArray.push(new AbsorbentWall(makeStandardWidth(newAbsorbWall[i].x), makeStandardHeight(newAbsorbWall[i].y),
			makeStandardWidth(newAbsorbWall[i].width), makeStandardHeight(newAbsorbWall[i].height), newAbsorbWall[i].color));
	}
	player = new Player(makeStandardWidth(newPlayer.x), makeStandardHeight(newPlayer.y),
		makeStandardWidth(newPlayer.width), makeStandardHeight(newPlayer.height), n);
	// generates the energy bar on every level
	rectArray.push(gravityBarBack);
	rectArray.push(gravityBar);
}

//INPUT MEHTODS//
Mouse = function(){
	var mouse = {};
	mouse.x = 0;
	mouse.y = 0;
	function move(e){
		mouse.x = e.clientX;
		mouse.y = e.clientY;
	}
	function click(e){
		//add stuff here when we know what we want clicking to do
	}
	canvas.addEventListener('mousemove', move);
	canvas.addEventListener('click', click);
	return mouse;
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
		if (!forceStop) {
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
function mouseRectCollision(m, rect) {
	return m.x > rect.x - rect.width/2 && m.x < rect.x + rect.width/2 &&
		m.y > rect.y - rect.height/2 && m.y < rect.y + rect.height/2;
}
function eject(pushed, pusher) {
	/** A function to handle collision between two objects.
	*	If object1 (pushed) is inside of object2 (pusher), object1 is pushed a small amount in each
	*	cardinal direction to see if there is anywhere object1 is no longer touching object2.
	*	If it doesn't find any direction which removes it, it increases the push radius and tries again.
	*	Upon finding the correct direction(s), object1 is moved to where it was discovered to no longer
	*	be touching object2.			- Wight_
	*/
	const DELTA_CHANGE = 0.01
	var delta = 0;
	var flags = [false, false, false, false];
	const PREV_X = pushed.x;
	const PREV_Y = pushed.y;
	if (!checkCollision(pushed, pusher)) { return flags; }

	do {
		delta += DELTA_CHANGE;
		pushed.x += delta;
		if (!checkCollision(pushed, pusher)){
			flags[0] = true;
		}
		pushed.x -= 2*delta;
		if (!checkCollision(pushed, pusher)){
			flags[1] = true;
		}
		pushed.x = PREV_X;
		pushed.y += delta;
		if (!checkCollision(pushed, pusher)){
			flags[2] = true;
		}
		pushed.y -= 2*delta;
		if (!checkCollision(pushed, pusher)){
			flags[3] = true;
		}
		pushed.y = PREV_Y;
	} while (!flags[0] && !flags[1] && !flags[2] && !flags[3]);

	if (flags[0]) {
		pushed.x += (delta + DELTA_CHANGE);
	} else if (flags[1]) {
		pushed.x -= (delta + DELTA_CHANGE);
	}
	if (flags[2]) {
		pushed.y += (delta + DELTA_CHANGE);
	} else if (flags[3]) {
		pushed.y -= (delta + DELTA_CHANGE);
	}
	return flags;
}

//COMMON MATH EQUATIONS//
function distance(x, y) {
	return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
function makeStandardWidth(width) {
	//width is the width of the object on your screen.
	return width * (canvas.width / WIDTH);
}
function makeStandardHeight(height) {
	//height is the height of the object on your screen.
	return height * (canvas.height / HEIGHT);
}
function inverseStandardWidth(width) {
	return width * (WIDTH / canvas.width);
}
function inverseStandardHeight(height) {
	return height * (HEIGHT / canvas.height);
}
