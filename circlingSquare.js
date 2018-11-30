class CirclingSquare
{
	constructor(x, y, w, h, t)
	{
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
		this.theta = t;
	}
	render(){
		canvas.getContext("2d").fillStyle = "#000000";
		canvas.getContext("2d").fillRect(this.x, this.y, this.width, this.height);
		this.x += Math.sin(this.theta);
		this.y += Math.cos(this.theta);
		this.theta += 0.01;
	}
}

window.onload = function()
{	
	var canvas = document.getElementById("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	setInterval(main, 1/60);
}

box = new CirclingSquare(window.innerWidth / 2, window.innerHeight / 2 + 50, 50, 50, 0);
	
function main()
{
	canvas.getContext("2d").fillStyle = "#FFFFFF";
	canvas.getContext("2d").fillRect(0, 0, window.innerWidth, window.innerHeight);
	box.render();
}