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
		/// The Screen Size Standard is 1920 by 969
		///	Please use these numbers instead of window.innerWidth and window.innerHeight
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
			x: 500 +1920/2,
			y: 405,
			width: 1920,
			height: 10,
		}, 
		{
			x: 205, 
			y: 700 + 969/2, 
			width: 10, 
			height: 969, 
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
				funct: railMovement	//<-- notice here: NO PARENTHESIS!
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