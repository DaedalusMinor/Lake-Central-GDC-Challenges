//COMMENT YOUR STUFF PLEASE
const GRID_SIZE = window.innerHeight/40;	
//grid size is no longer determined by dimension, but by how many squares should exist in the y-axis

//This class is completely dedicated to drawing out a level and committing them to a JSON variable
class Pen {
	constructor(x, y){
		this.x1 = x;	//variables with a subscript of 1 show a starting point
		this.y1 = y;
		this.x2 = x;	//variables with a subscript of 2 show an end point
		this.y2 = y;
		this.drawing = false;  //this boolean shows whether the pen is in the process of drawing
		this.drawEnemy = false;	//the rest of these are analogous to an artist's palette: select your paints with the buttons!
		this.drawInvWall = false;
		this.drawAbsWall = false;
		this.drawWall = false;
		this.drawPlayer = false;
	}

	sketchEnemy(){ //each of these functions sketch the objects onto the screen, and commit them to the JSON variable
		this.standardizeCoords();
		let width = this.x2 - this.x1;
		if(width > 4){	//minimum size requirement
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
			div.addEventListener(deleteBtn, (e) => { div.remove();});
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
	sketchAbsWall(){
		this.standardizeCoords();
		let width = this.x2 - this.x1;
		let height = this.y2 - this.y1;
		if(height > 2 && width > 2){
			ctx.fillStyle = "#006600";
			let div = document.createElement("div");
			let style =   "position: absolute;"
									+ "left: " + this.x1 + "px;"
									+ "top: " + this.y1 + "px;"
									+ "width: " + width + "px;"
									+ "height: " + height + "px;"
									+ "background: #006600;";
			div.setAttribute("style", style);
			div.addEventListener("click", (e) => {
				div.remove();
			});
			document.getElementById("absfield").appendChild(div);
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
			div.addEventListener("click", (e) => {
				let style =    "position: absolute;"
									+ "left: " + 0 + "px;"
									+ "top: " + 0 + "px;"
									+ "width: " + 0 + "px;"
									+ "height: " + 0 + "px;"
									+ "background: #FFFF00;";
				div.setAttribute("style", style);
			});
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
		this.x1 = this.roundToGrid(this.x1);
		this.x2 = tx2;
		this.x2 = this.roundToGrid(this.x2);
		this.y1 = ty1;
		this.y1 = this.roundToGrid(this.y1);
		this.y2 = ty2;
		this.y2 = this.roundToGrid(this.y2);
	}

	roundToGrid(p){	//takes a dimension and pushes it to the closest grid line
		let margin = p % GRID_SIZE;
		if (margin < GRID_SIZE/2){
			return p - margin;
		}
		else{
			return p + GRID_SIZE - margin;
		}
	}
	renderAddition(){//creates a phantom rectangle while holding the mouse button down and dragging out dimensions
		if(this.drawEnemy){
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(this.x1, this.y1, this.x2 - this.x1,  Math.sign(this.y2 - this.y1) * Math.abs(this.x2 - this.x1));
		}
		else if(this.drawInvWall){
			ctx.fillStyle = "#0000FF";
			ctx.fillRect(this.x1, this.y1, this.x2 - this.x1, this.y2 - this.y1);
		}
		else if(this.drawAbsWall){
			ctx.fillStyle = "#0000FF";
			ctx.fillRect(this.x1, this.y1, this.x2 - this.x1, this.y2 - this.y1);
		}
		else if(this.drawWall){
			ctx.fillStyle = "#00FF00";
			ctx.fillRect(this.x1, this.y1, this.x2 - this.x1, this.y2 - this.y1);
		}
		else if(this.drawPlayer){
			ctx.fillStyle = "#FFFFFF";
			ctx.fillRect(this.x1, this.y1, this.x2 - this.x1, Math.sign(this.y2 - this.y1) * Math.abs(this.x2 - this.x1));
		}
	}
}


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

			],
			
			mobileWalls: [
			
			],
			
			absorbWalls: [

			],
			
			dimensions: {

			}
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
	let abswalls = document.getElementById("absfield").childNodes;
	for(var i = 0; i < abswalls.length; i++){
		let x = abswalls[i].style.left;
		let y = abswalls[i].style.top;
		let width = abswalls[i].style.width;
		let height = abswalls[i].style.height;

		width = parseInt(width.substr(0, width.length - 2), 10);
		height = parseInt(height.substr(0, height.length - 2), 10);
		x = parseInt(x.substr(0, x.length - 2), 10) + width/2;
		y = parseInt(y.substr(0, y.length - 2), 10) + height/2;
		level["n"].absorbWalls.push({
			x: x,
			y: y,
			width: width,
			height: height
		});
	}
	level["n"].dimensions.width = window.innerWidth;
	level["n"].dimensions.height = window.innerHeight;
	console.log(JSON.stringify(level));
}

pen = new Pen(0, 0);
var enemyBtn = document.getElementById("enemy");	//represents the enemy button.  If clicked, then you're creating an enemy
																									//this is another way of creating an event listener.  In this case, onclick is the event.
enemyBtn.onclick = () => {	//This fat arrow (=>) is just another way of creating a function in JS.  It's relatively new, coming from ES6
														//but it's the same as saying function(){...} instead of () => {...}
	pen.drawEnemy = true;
	pen.drawInvWall = false;
	pen.drawAbsWall = false;
	pen.drawPlayer = false;
	pen.drawWall = false;
};

var invwallBtn = document.getElementById("invwall");
invwallBtn.onclick = () => {
	pen.drawEnemy = false;
	pen.drawInvWall = true;
	pen.drawAbsWall = false;
	pen.drawPlayer = false;
	pen.drawWall = false;
};

var wallBtn = document.getElementById("wall");
wallBtn.onclick = () => {
	pen.drawEnemy = false;
	pen.drawInvWall = false;
	pen.drawAbsWall = false;
	pen.drawPlayer = false;
	pen.drawWall = true;
};

var playerBtn = document.getElementById("player");
playerBtn.onclick = () => {
	pen.drawEnemy = false;
	pen.drawInvWall = false;
	pen.drawAbsWall = false;
	pen.drawPlayer = true;
	pen.drawWall = false;
};

var abswallBtn = document.getElementById("abswall");
abswallBtn.onclick = () => {
	pen.drawEnemy = false;
	pen.drawInvWall = false;
	pen.drawAbsWall = true;
	pen.drawPlayer = false;
	pen.drawWall = false;
};

let toggleGrid = false;
var gridBtn = document.getElementById("grid");
gridBtn.onclick = () => {
	toggleGrid = !toggleGrid;
}

var printBtn = document.getElementById("print");
printBtn.onclick = printJSON;	//We're not gonna use an anonymous function here, but a function defined as a variable.

var deleteBtn = document.getElementById("delete");
deleteBtn.onclick = () => {
	pen.drawEnemy = false;
	pen.drawInvWall = false;
	pen.drawAbsWall = false;
	pen.drawPlayer = false;
	pen.drawWall = false;
	var v = document.getElementsByTagName("div");
	for (var x = v.length - 1; x >= 0; x--) {
		if (v[x].id == "playerstart") {
			let style =    "position: absolute;"
					+ "left: " + 0 + "px;"
					+ "top: " + 0 + "px;"
					+ "width: " + 0 + "px;"
					+ "height: " + 0 + "px;"
					+ "background: #FFFF00;";
			v[x].setAttribute("style", style);
		} else if (v[x].id != "absfield" && v[x].id != "invfield" && v[x].id != "wallfield"
			&& v[x].id != "enemyfield") {
			v[x].remove();
		}
	}
}

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
	//debug text which shows the x and y-coords the mouse would be at on the "Standard Screen"
	//it will also help with designing levels since you can know where to place something
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
		abswallBtn.disabled = true;
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
		if(pen.drawAbsWall){
			pen.sketchAbsWall();
		}
		if(pen.drawPlayer){
			pen.sketchPlayer();
		}
		//reset paints
		pen.drawing = false;
		enemyBtn.disabled = false;
		invwallBtn.disabled = false;
		abswallBtn.disabled = false;
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
