//COMMENT YOUR STUFF PLEASE
GRID_SIZE = 8;
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
		ctx.fillRect(this.x, this.y, this.width, this.height);
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
	var xMin = makeStandardWidth(this.varArray[0]); var xMax = makeStandardWidth(this.varArray[1]);
	var yMin = makeStandardHeight(this.varArray[2]); var yMax = makeStandardHeight(this.varArray[3]);
	var dx = makeStandardWidth(this.varArray[4]); var dy = makeStandardHeight(this.varArray[5]);

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
	constructor(x, y, height, width) {
		super(x, y, makeStandardWidth(width), makeStandardHeight(height));
		this.condense = false;
		this.gravityPoints = 150;
		this.pen = new Pen(x,y);
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

		if(this.drawEnemy || this.drawWall || this.drawInvWall){
			this.pen.x2 = this.x;
			this.pen.y2 = this.y;
			if(this.drawEnemy){
				this.pen.renderAddition("FF0000");
			}
			if(this.drawWall){
				this.pen.renderAddition("FFFFFF");
			}
			if(this.drawInvWall){
				this.pen.renderAddition("#00ff99");
			}
		}
		// //collision handling
		// for (var i = 0; i < enemyArray.length; i++) {
		// 	if(checkCollision(this, enemyArray[i])){
		// 		eject(this, enemyArray[i]);
		// 	}
		// }
		// for (var i = 0; i < barrierArray.length; i++) {
		// 	if(checkCollision(this, barrierArray[i])){
		// 		eject(this, barrierArray[i]);
		// 	}
		// }
		// for (var i = 0; i < invisArray.length; i++) {
		// 	if(checkCollision(this, invisArray[i])){
		// 		eject(this, invisArray[i]);
		// 	}
		// }
		// for (var i = 0; i < enemyMobileArray.length; i++) {
		// 	if(checkCollision(this, enemyMobileArray[i])){
		// 		eject(this, enemyMobileArray[i]);
		// 	}
		// }
		//
		// for (var i = 0; i < bulletArray.length; i++) {
		// 	if (checkCollision(this, bulletArray[i])){
		// 		createLevel(player.level);
		// 		this.gravityPoints = 150;
		// 		shootTimer = 1;
		// 	}
		// 	if (this.condense && this.gravityPoints > 0){
		// 		//calculate distance
		// 		var xDist = this.x + this.width/2 - bulletArray[i].x;
		// 		var yDist = this.y + this.height/2 - bulletArray[i].y;
		// 		var dist = distance(xDist, yDist);
		// 		//calculate power of gravity
		// 		var pull = 20/dist;
		// 		if(xDist > 0){
		// 			bulletArray[i].dx += pull;
		// 		}
		// 		else{
		// 			bulletArray[i].dx -= pull;
		// 		}
		//
		// 		if(yDist > 0){
		// 			bulletArray[i].dy += pull;
		// 		}
		// 		else{
		// 			bulletArray[i].dy -= pull;
		// 		}
		// 	}
		//
		// }
		// 	//manage gravityPoints
		// if(this.condense && this.gravityPoints > 0){
		// 	this.gravityPoints -= 0.8;
		// }
		// else if(!this.condense && this.gravityPoints < 150){
		// 	this.gravityPoints += 0.3;
		// }
		// 	//bar cooldown when gravityPoints hits 0
		// if(this.gravityPoints <= 0) {
		// 	forceStop = true;
		// 	player.condense = false;
		// }
		// if(forceStop == true) {
		// 	this.condense == false;
		// 	if (this.gravityPoints >= 100) {
		// 		forceStop = false;
		// 	}
		// }
		//
		// gravityBar.width = this.gravityPoints;
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

//This class is unique to this file, and is completely dedicated to drawing out a level and committing them to a JSON variable
class Pen {
	constructor(x, y){
		this.x1 = x;	//variables with a subscript of 1 show a starting point
		this.y1 = y;
		this.x2 = x;	//variables with a subscript of 2 show an end point
		this.y2 = y;
		this.drawing = false;  //this boolean shows whether the pen is in the process of drawing
		this.drawEnemy = false;	//the rest of these are analogous to an artist's palette: select your paints with the buttons!
		this.drawInvWall = false;
		this.drawWall = false;
		this.drawPlayer = false;
	}

	sketchEnemy(){ //each of these functions sketch the objects onto the screen, and commit them to the JSON variable
		this.standardizeCoords();
		let width = this.x2 - this.x1;
		if(width >= 4){	//minimum size requirement
			let div = document.createElement("div");
			/*so just like how you can edit HTML elements in JS, you can also create them with the createElement() function
				In this case, I created a div element and give it all the style attributes it needs to look like
				the enemies and walls we've been rendering in JS all along.  The reason I did this is because we can
				add eventListeners to these bad boys, like clicking.
			*/
			let style =   "position: absolute;"
									+ "left: " + this.x1 + "px;"
									+ "top: " + this.y1 + "px;"
									+ "width: " + width + "px;"
									+ "height: " + width + "px;"
									+ "background: #B22222;";
			div.setAttribute("style", style);	//this is how edit attributes of said elements.  I did the styling in a funky way, but you can probs tell it's just CSS code in string form
			div.addEventListener("click", (e) => {
				div.remove();
			});
			/*Above this is the creation of an eventListener. In HTML, there are a bunch of built in eventListeners like
				"onclick" or "mousemove", that you can look up online.  These listen for certain actions on an HTML doc
				and if that thing happens then it calls the function it's been specified to call.  So the first parameter
				is the action to listen for, and the second is what to do if that thing happens.
			*/
			document.getElementById("enemyfield").appendChild(div);	//this is just a div containing all other enemy divs.  Makes it easier to put different objects into their respective JSON arrays
		}
	}

	sketchInvWall(){
		this.standardizeCoords();
		let width = this.x2 - this.x1;
		let height = this.y2 - this.y1;
		if(height > 2 && width > 2){
			ctx.fillStyle = "#00ff99";
			let div = document.createElement("div");
			let style =   "position: absolute;"
									+ "left: " + this.x1 + "px;"
									+ "top: " + this.y1 + "px;"
									+ "width: " + width + "px;"
									+ "height: " + height + "px;"
									+ "background: #00ff99;";
			div.setAttribute("style", style);
			div.addEventListener("click", (e) => {
				div.remove();
			});
			document.getElementById("invfield").appendChild(div);
		}
	}

	sketchWall(){
		this.standardizeCoords();
		let width = this.x2 - this.x1;
		let height = this.y2 - this.y1;
		if(width > 2 && height > 2){
			ctx.fillStyle = "#FFFFFF";
			let div = document.createElement("div");
			let style =   "position: absolute;"
									+ "left: " + this.x1 + "px;"
									+ "top: " + this.y1 + "px;"
									+ "width: " + width + "px;"
									+ "height: " + height + "px;"
									+ "background: #FFFFFF;";
			div.setAttribute("style", style);
			div.addEventListener("click", (e) => {
				div.remove();
			});
			document.getElementById("wallfield").appendChild(div);
		}
	}

	sketchPlayer(){
		this.standardizeCoords();
		let width = this.x2 - this.x1;
		if(width > 4){
			ctx.fillStyle = "#FFFFFF";
			let div = document.getElementById("playerstart");
			//I'm only going to edit a pre-existing div because there should only be one player in a level
			let style =   "position: absolute;"
									+ "left: " + this.x1 + "px;"
									+ "top: " + this.y1 + "px;"
									+ "width: " + width + "px;"
									+ "height: " + width + "px;"
									+ "background: #FFFF00;";
			div.setAttribute("style", style);
		}
	}

	standardizeCoords(){	//this function always makes variables with subscript 1 smaller than the variables
		//with subscript 2
		//It also standardizes them to a grid, making connections easier.
		let tx1 = Math.min(this.x1, this.x2);
		let tx2 = Math.max(this.x1, this.x2);
		let ty1 = Math.min(this.y1, this.y2);
		let ty2 = Math.max(this.y1, this.y2);
		this.x1 = tx1;
		this.x1 = this.x1 - (this.x1 % GRID_SIZE);
		this.x2 = tx2;
		this.x2 = this.x2 - (this.x2 % GRID_SIZE);
		this.y1 = ty1;
		this.y1 = this.y1 - (this.y1 % GRID_SIZE);
		this.y2 = ty2;
		this.y2 = this.y2 - (this.y2 % GRID_SIZE);
	}

	renderAddition(){//creates a phantom rectangle while holding the mouse button down and dragging out dimensions
		if(this.drawEnemy){
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(this.x1, this.y1, this.x2 - this.x1, this.x2 - this.x1);
		}
		else if(this.drawInvWall){
			ctx.fillStyle = "#0000FF";
			ctx.fillRect(this.x1, this.y1, this.x2 - this.x1, this.y2 - this.y1);
		}
		else if(this.drawWall){
			ctx.fillStyle = "#00FF00";
			ctx.fillRect(this.x1, this.y1, this.x2 - this.x1, this.y2 - this.y1);
		}
		else if(this.drawPlayer){
			ctx.fillStyle = "#FFFFFF";
			ctx.fillRect(this.x1, this.y1, this.x2 - this.x1, this.y2 - this.y1);
		}
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
		ctx.fillRect(this.x, this.y, this.width, this.height);
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
		super (x, y, makeStandardWidth(10), makeStandardHeight(10), "#808000");
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
	constructor(x,y,width,height){
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

printJSON = function(){	//as you can guess, this prints out the JSON data representing this level
	let level = {
		"n" : {	//This "n" is a substitute for whatever level you're creating.  Once you get your JSON
						//REMEMBER TO EDIT THIS LEVEL NUMBER
			player: {

			},

			invisWalls: [

			],

			barriers : [

			],

			enemies : [

			],
			mobileEnemies: [

			]
		}
	};

	let player = document.getElementById("playerstart");	//gets specified div
	if(player.hasAttribute("style")){//checks if the player was given a style, and thus given a position
		let x = player.style.left;	//I can get the data from a div, but the dimensions are returned as strings
																//with a "px" for pixels attatched at the end
		let y = player.style.top;
		let sideLength = player.style.width;
		sideLength = parseInt(sideLength.substr(0, sideLength.length - 2), 10);
		x = parseInt(x.substr(0, x.length - 2), 10) + sideLength/2;	//this gets rid of the "px" and turns it into an integer
		y = parseInt(y.substr(0, y.length - 2), 10) + sideLength/2;
		level["n"].player = {	//here we create the JSON object and commit it to the level
			x: x,
			y: y,
			width: sideLength,
			height: sideLength
		};
	}

	//same thing as above, except there is a field of enemies, so we have to cycle through all of the enemy divs
	let enemies = document.getElementById("enemyfield").childNodes;	//childNodes returns all of the elements inside of an HTML element
	//for instance, all the childNodes of the body tag, is all the stuff in between <body> and </body>
	//think of it as inheritance of a sort
	for(var i = 0; i < enemies.length; i++){
		let x = enemies[i].style.left;
		let y = enemies[i].style.top;
		let sideLength = enemies[i].style.width;
		sideLength = parseInt(sideLength.substr(0, sideLength.length - 2), 10);
		x = parseInt(x.substr(0, x.length - 2), 10) + sideLength/2;
		y = parseInt(y.substr(0, y.length - 2), 10) + sideLength/2;

		level["n"].enemies.push({
			x: x,
			y: y,
			width: sideLength,
			height: sideLength
		});
	}

	let walls = document.getElementById("wallfield").childNodes;
	for(var i = 0; i < walls.length; i++){
		let x = walls[i].style.left;
		let y = walls[i].style.top;
		let width = walls[i].style.width;
		let height = walls[i].style.height;
		width = parseInt(width.substr(0, width.length - 2), 10);
		height = parseInt(height.substr(0, height.length - 2), 10);
		x = parseInt(x.substr(0, x.length - 2), 10) + width/2;
		y = parseInt(y.substr(0, y.length - 2), 10) + height/2;
		level["n"].barriers.push({
			x: x,
			y: y,
			width: width,
			height: height
		});
	}

	let invwalls = document.getElementById("invfield").childNodes;
	for(var i = 0; i < invwalls.length; i++){
		let x = invwalls[i].style.left;
		let y = invwalls[i].style.top;
		let width = invwalls[i].style.width;
		let height = invwalls[i].style.height;

		width = parseInt(width.substr(0, width.length - 2), 10);
		height = parseInt(height.substr(0, height.length - 2), 10);
		x = parseInt(x.substr(0, x.length - 2), 10) + width/2;
		y = parseInt(y.substr(0, y.length - 2), 10) + height/2;
		level["n"].invisWalls.push({
			x: x,
			y: y,
			width: width,
			height: height
		});
	}

	console.log(JSON.stringify(level));
}

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

pen = new Pen(0, 0);
var enemyBtn = document.getElementById("enemy");	//represents the enemy button.  If clicked, then you're creating an enemy
																									//this is another way of creating an event listener.  In this case, onclick is the event.
enemyBtn.onclick = () => {	//This fat arrow (=>) is just another way of creating a function in JS.  It's relatively new, coming from ES6
														//but it's the same as saying function(){...} instead of () => {...}
	pen.drawEnemy = true;
	pen.drawInvWall = false;
	pen.drawPlayer = false;
	pen.drawWall = false;
};

var invwallBtn = document.getElementById("invwall");
invwallBtn.onclick = () => {
	pen.drawEnemy = false;
	pen.drawInvWall = true;
	pen.drawPlayer = false;
	pen.drawWall = false;
};

var wallBtn = document.getElementById("wall");
wallBtn.onclick = () => {
	pen.drawEnemy = false;
	pen.drawInvWall = false;
	pen.drawPlayer = false;
	pen.drawWall = true;
};

var playerBtn = document.getElementById("player");
playerBtn.onclick = () => {
	pen.drawEnemy = false;
	pen.drawInvWall = false;
	pen.drawPlayer = true;
	pen.drawWall = false;
};

let toggleGrid = false;
var gridBtn = document.getElementById("grid");
gridBtn.onclick = () => {
	toggleGrid = !toggleGrid;
}

var printBtn = document.getElementById("print");
printBtn.onclick = printJSON;	//We're not gonna use an anonymous function here, but a function defined as a variable.

window.onload = function() {
	canvas = document.getElementById("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx = canvas.getContext("2d");
	mouse = new Mouse();
	//refresh rate / fps
	setInterval(main, 1/60 * 1000);
}

function main() {//notice how we don't have to render or update anything in JS, the HTML does it for us!
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	//clear screen
	ctx.fillStyle = "#110422";
	ctx.fillRect(0,0, window.innerWidth, window.innerHeight);
	//text
	ctx.textAlign = "left";
	ctx.fillStyle = "#FF3333";
	ctx.font = "24px Arial";
	ctx.textAlign = "center";
	//debug text which shows the x and y-coords the mouse would be at on the "Standard Screen"
	//it will also help with designing levels since you can know where to place something
	if(toggleGrid){
		ctx.lineWidth = 1;
		ctx.strokeStyle = "#000000";
		for(var x = 0; x <= window.innerWidth; x += GRID_SIZE){
			ctx.beginPath();
			ctx.moveTo(x, 0);
			ctx.lineTo(x, window.innerHeight);
			ctx.stroke();
		}
		for(var y = 0; y <= window.innerWidth; y += GRID_SIZE){
			ctx.beginPath();
			ctx.moveTo(0, y);
			ctx.lineTo(window.innerWidth, y);
			ctx.stroke();
		}
	}
	ctx.fillText("Converted Screen X: " + Math.trunc(inverseStandardWidth(mouse.x)), window.innerWidth/2, 20);
	ctx.fillText("Converted Screen Y: " + Math.trunc(inverseStandardHeight(mouse.y)), window.innerWidth/2, 40);
}

//INPUT MEHTODS//
Mouse = function(){
	var mouse = {};
	mouse.x = 0;
	mouse.y = 0;
	function move(e){	//function if mouse is moving
		mouse.x = e.clientX;
		mouse.y = e.clientY;
		if(!pen.drawing){//the two points should be equal to each other if the user isn't drawing
			pen.x1 = mouse.x;
			pen.x2 = pen.x1;
			pen.y1 = mouse.y;
			pen.y2 = pen.y1;
		}
		else{	//if the user is drawing, then make these two points different.
			pen.x2 = mouse.x;
			pen.y2 = mouse.y;
			pen.renderAddition();	//drags out the potential dimensions of whatever object the user is drawing
		}
	}

	function mouseDown(e){	//function if left mouse button is pressed down
		if(!pen.drawing){ //allows first point to be set
			pen.drawing = true;
			pen.x1 = pen.x1;
			pen.y1 = pen.y1;
		}
		//disabling paint buttons
		enemyBtn.disabled = true;
		invwallBtn.disabled = true;
		wallBtn.disabled = true;
		playerBtn.disabled = true;
		printBtn.disabled = true;
	}

	function mouseUp(e){//function for when mouse button is released
		//updates the second point to get the final dimensions
		pen.x2 = mouse.x;
		pen.y2 = mouse.y;
		if(pen.drawEnemy){
			pen.sketchEnemy();
		}
		if(pen.drawWall){
			pen.sketchWall();
		}
		if(pen.drawInvWall){
			pen.sketchInvWall();
		}
		if(pen.drawPlayer){
			pen.sketchPlayer();
		}
		//reset paints
		pen.drawing = false;
		enemyBtn.disabled = false;
		invwallBtn.disabled = false;
		wallBtn.disabled = false;
		playerBtn.disabled = false;
		printBtn.disabled = false;
	}

	//adds all of those functions above to eventListeners below
	canvas.addEventListener('mousemove', move);
	canvas.addEventListener('mousedown', mouseDown);
	canvas.addEventListener('mouseup', mouseUp);
	return mouse;
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

//COMMON MATH EQUATIONS//
function distance(x, y) {
	return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
function makeStandardWidth(width) {
	//width is the width of the object on your screen.
	return width * (canvas.width / 1920);
}
function makeStandardHeight(height) {
	//height is the height of the object on your screen.
	return height * (canvas.height / 969);
}
function inverseStandardWidth(width) {
	return width * (1920 / canvas.width);
}
function inverseStandardHeight(height) {
	return height * (969 / canvas.height);
}
