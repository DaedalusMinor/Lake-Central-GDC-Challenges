//Collide with boxes and add them to a count

class Rectangle {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	
	update() {
	
		var prevx = this.x;
		var prevy = this.y;
		
		if(this.right == true) {
			this.x += 1;
		}
		if(this.left == true) {
			this.x -= 1;
		}
		if(this.up == true) {
			this.y -= 1;
		}
		if(this.down == true) {
			this.y += 1;
		}
		//beep beep collisions
		for (var i = 0; i < rectArray.length; i++) {
			if (rectArray[i] != this && checkCollision(this, rectArray[i])) {
				rectArray.splice(i, 1);
				count += 1;
			}
		}
	}
	render() {
		ctx.fillStyle="#000000";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

class Collect extends Rectangle //kinda separate class for coins
{
		constructor(x, y, width, height) {
		super (x, y, width, height);
	}
		render() {
		ctx.fillStyle="#FFFF00";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

var rectArray = [];
var collectArray = [];
var player = new Rectangle (10, 10, 10, 10);
var coin = new Collect (Math.floor((Math.random() * 100/*adjust this number*/) + 1),Math.floor((Math.random() * 100) + 1), 10, 10); //coins are randomly generated between 0 and 100 pixels
var coin2 = new Collect (Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), 10 ,10 );
rectArray.push(player);
rectArray.push(coin);
rectArray.push(coin2);
var count = 0;

function main() {
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

	
	for(var x = 0; x < rectArray.length; x+=1) {
		rectArray[x].update();
		rectArray[x].render();
	}
	
	for(var x = 0; x < collectArray.length; x+=1) {
		collectArray[x].update();
		collectArray[x].render();
	}
	
	//text
	ctx.fillStyle = "#F33";
	ctx.font = "30px Times New Roman";
	ctx.fillText(count, 10, 200);
}

window.onload = function()
{
	canvas=document.getElementById("canvas");
	ctx=canvas.getContext("2d");
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;

	document.addEventListener("keydown",keydown);
	document.addEventListener("keyup",keyup);
	
	setInterval(main, 1/60 * 10);
}

function keydown(e) {
	switch(e.keyCode) {
		case 37:
			player.left = true
			break;
		case 38:
			player.up = true
			break;
		case 39:
			player.right = true
			break;
		case 40:
			player.down = true
			break;
	}
}
function keyup(e) {
	switch(e.keyCode) {
		case 37:
			player.left = false
			break;
		case 38:
			player.up = false
			break;
		case 39:
			player.right = false
			break;
		case 40:
			player.down = false
			break;
	}
}

function checkCollision(player, rect) {
	return  (player.x < rect.x + rect.width &&
			player.x + player.width > rect.x &&
			player.y < rect.y + rect.height &&
			player.height + player.y > rect.y);
}