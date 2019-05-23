//COMMENT YOUR STUFF PLEASE

//adding things
var gravityBarBack = new RectColored (95, 30, 150, 15, "#FFFFFF");
var gravityBar = new EnergyBar (95, 30, 150, 15, null);
var fps = 0;
var timer = 0;
var deathCounter = 0;

window.onload = function() {
	canvas = document.getElementById("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx = canvas.getContext("2d");
	document.addEventListener("keydown", keydown);
	document.addEventListener("keyup", keyup);
	mouse = new Mouse();
	var n = parseInt(localStorage.getItem("level"));
	createLevel(n);
	//refresh rate / fps
	setInterval(main, 1/60 * 1000);
}

function main() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	//clear screen
	ctx.fillStyle = "#110422";
	ctx.fillRect(0,0, window.innerWidth, window.innerHeight);

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
	for (var i = 0; i < permArray.length; i++){
		permArray[i].update();
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
	for (var i = 0; i < wallMobileArray.length; i++){
		wallMobileArray[i].update();
	}
	for (var i = 0; i < sparkArray.length; i++){
		sparkArray[i].update();
	}
	//text
	ctx.textAlign = "left";
	ctx.fillStyle = "#ffffff";
	ctx.font = "small-caps lighter 30px Montserrat";
	ctx.fillText("Level: " + (player.level+1), makeStandardWidth(WIDTH - 200), makeStandardHeight(35));
	//Math.trunc(n) is a method to round down to the greatest integer of a floating number
	ctx.fillText("Time: " + Math.trunc(timer), makeStandardWidth(300), makeStandardHeight(35));
	ctx.fillText("Deaths: " + (deathCounter), makeStandardWidth(500), makeStandardHeight(35));
	ctx.textAlign = "center";
	if (timer >= 0 && timer < 21) {
		ctx.fillText("Use Spacebar to change your gravity and throw the bullets back!",
			makeStandardWidth(WIDTH / 2), makeStandardHeight(900));
	}
	//debug text which shows the x and y-coords the mouse would be at on the "Standard Screen"
	//it will also help with designing levels since you can know where to place something
	ctx.fillText("Converted Screen X: " + Math.trunc(inverseStandardWidth(mouse.x)), window.innerWidth/2, 20);
	ctx.fillText("Converted Screen Y: " + Math.trunc(inverseStandardHeight(mouse.y)), window.innerWidth/2, 50);

	if (enemyArray.length == 0 && enemyMobileArray.length == 0){	//if there are no more enemies left, show animation and move to next level
		player.level++;
		createLevel(player.level);
	}
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
			player.condense = true;
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
