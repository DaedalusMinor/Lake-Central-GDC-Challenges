//COMMENT YOUR STUFF PLEASE

//.prototype allows you to edit class functions in base.js
Bullet.prototype.update = function() {
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
		}
	}	
	if (checkCollision(this, player)){
		location.reload();
	}
	this.render();
}

///adding things
var player = new Player (window.innerWidth/2, window.innerHeight/2, makeStandardWidth(30), makeStandardWidth(30));
var gravityBarBack = new RectColored (95, 30, 150, 15, "#FFFFFF");
var gravityBar = new EnergyBar (95, 30, 150, 15, null);
var enemy = new Enemy (makeStandardWidth(960), makeStandardHeight(200), makeStandardWidth(30), makeStandardHeight(30));
var topWall = new Wall(window.innerWidth/2, -20, window.innerWidth, 40);	//upper border
var leftWall = new Wall(-20, window.innerHeight/2, 40, window.innerHeight);	//left border
var rightWall = new Wall(window.innerWidth+20, window.innerHeight/2, 40, window.innerHeight);	//right border
var bottomWall = new Wall(window.innerWidth/2, window.innerHeight+20, window.innerWidth, 40);	//lower border
var fps = 0;
var timer = 0;

//barriers
barrierArray.push(topWall);
barrierArray.push(leftWall);
barrierArray.push(rightWall);
barrierArray.push(bottomWall);
enemyArray.push(enemy);
rectArray.push(gravityBarBack);
rectArray.push(gravityBar);

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
	for (var i = 0; i < bulletArray.length; i++){
		bulletArray[i].update();
	}
	
	//text
	ctx.textAlign = "left";
	ctx.fillStyle = "#ffffff";
	ctx.font = "small-caps lighter 30px Montserrat";
	ctx.fillText("Time: " + Math.trunc(timer), makeStandardWidth(200), makeStandardHeight(100));
	if (timer >= 0 && timer < 21)
		ctx.fillText("Stay Alive For As Long As You Can!", window.innerWidth /2, makeStandardHeight(100));
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
