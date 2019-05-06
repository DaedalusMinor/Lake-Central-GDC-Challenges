//COMMENT YOUR STUFF PLEASE

var MAX_LEVEL = 13;
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
		barriers : [ //all the barrier objects contained within this level, except for the outer barriers
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
			x: 980, 
			y: 710, 
			width: 30, 
			height: 30
		},
		invisWalls: [
		
		],
		enemies: [
		
		],
		barriers: [
		{
			x: 500, 
			y: 969/2,
			width: 60, 
			height: 60
		}, 
		{
			x: 1000, 
			y: 969/2,
			width: 60, 
			height: 60
		}, 
		{
			x: 1500, 
			y: 969/2,
			width: 60, 
			height: 60
		}
		], 
		mobileEnemies: [
		{
			x: 980,
			y: 100,
			width: 45,
			height: 45,
			//        x/left, x/right, y/bottom, y/top, moveSpeed
			varArray: [300, 1660, 0, 0, 1.3],
			funct: railMovement
		}
		]
	}, 
	"2" : {
		player: {
			x: 980, 
			y: 484.5, 
			width: 30, 
			height: 30
		},
		invisWalls: [
		{
			x: 700,
			y: 400,
			width: 40, 
			height: 80
		}
		],
		enemies: [
		
		],
		barriers: [
		{
			x: 1220,
			y: 400,
			width: 40, 
			height: 80
		}
		], 
		mobileEnemies: [
		{
			x: 1660,
			y: 100,
			width: 45,
			height: 45,
			//        x/left, x/right, y/bottom, y/top, moveSpeed
			varArray: [300, 1660, 0, 0, 1.3],
			funct: railMovement
		}, 
		{
			x: 300,
			y: 869,
			width: 45,
			height: 45,
			//        x/left, x/right, y/bottom, y/top, moveSpeed
			varArray: [300, 1660, 0, 0, 1.3],
			funct: railMovement
		}
		]
	}, 
	"3" : {
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
				varArray: [150, 250, 350, 450, 0.5],
				funct: railMovement	//<-- notice here: NO PARENTHESIS!
			}		
		]
	},
	
	"4" : {
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
	
	"5" : {
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
		
	},

	"6" : { // level number	
		player: {
			x: 800,
			y: 300,
			width: 30,
			height: 30
		}, 
		invisWalls: [
		{
			x: 1500, 
			y: 0, 
			width: 30, 
			height: 1920
			
		}, 
		{
			x: 1010, 
			y: 550, 
			width: 950, 
			height: 30
		}
		],
		barriers : [ 
			{
				x: 600, 
				y: 300, 
				width: 30, 
				height: 100
			}, 
			{
				x: 1000,
				y: 400,
				width: 300,
				height: 30
			}, 
			{
				x: 1250,
				y: 300,
				width: 30,
				height: 100
			}
		],

		enemies : [
			{
				x : 250,
				y : 100,
				width : 20,
				height : 20
			}, 
			{
				x : 260,
				y : 500,
				width : 20,
				height : 20
			}
		],
		mobileEnemies: [
		{
			x: 1750,
			y: 969/2,
			width: 20,
			height: 20,
			//        x/left, x/right, y/bottom, y/top, moveSpeed
			varArray: [0, 0, 234.5, 734.5, 1.3],
			funct: railMovement
		}
		]
	}, 
	"7": {
		player: {
			x: 960,
			y: 920,
			width: 30,
			height: 30
		}, 
		invisWalls: [
		{
			x: 960, 
			y: 850, 
			width: 1920, 
			height: 30
		}
		], 
		barriers: [
		], 
		enemies: [
		{
			x: 100,
			y: 80, 
			width: 30, 
			height: 30
		}, 
		{
			x: 200,
			y: 80, 
			width: 30, 
			height: 30
		}, 
		{
			x: 300,
			y: 80, 
			width: 30, 
			height: 30
		}, 
		{
			x: 400,
			y: 80, 
			width: 30, 
			height: 30
		}, 
		{
			x: 500,
			y: 80, 
			width: 30, 
			height: 30
		}, 
		{
			x: 600,
			y: 80, 
			width: 30, 
			height: 30
		}, 
		{
			x: 700,
			y: 80, 
			width: 30, 
			height: 30
		}, 
		{
			x: 800,
			y: 80, 
			width: 30, 
			height: 30
		}, 
		{
			x: 900,
			y: 80, 
			width: 30, 
			height: 30
		}, 
		{
			x: 1000,
			y: 80, 
			width: 30, 
			height: 30
		}, 
		{
			x: 1100,
			y: 80, 
			width: 30, 
			height: 30
		},
{
			x: 1200,
			y: 80, 
			width: 30, 
			height: 30
		}, 
{
			x: 1300,
			y: 80, 
			width: 30, 
			height: 30
		}, 		
		{
			x: 1400,
			y: 80, 
			width: 30, 
			height: 30
		}, 
		{
			x: 1500,
			y: 80, 
			width: 30, 
			height: 30
		}, 
		{
			x: 1600,
			y: 80, 
			width: 30, 
			height: 30
		}, 
		{
			x: 1700,
			y: 80, 
			width: 30, 
			height: 30
		}, 
		{
			x: 1800,
			y: 80, 
			width: 30, 
			height: 30
		}
		], 
		mobileEnemies: [
		]
		
	}, 
	"8" : {
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
			x: 1330, 
			y: 730,
			width: 60, 
			height: 60
		}
		],
		barriers: [
		], 
		mobileEnemies: [
			{
				x: null,
				y: null,
				width: 60,
				height: 60,
				varArray: [980, 510, 300, 300, 1000],
				funct: ellipticalMovement
			}
		]
	},
	"9": {
		"player":{"x":689,"y":362,"width":16,"height":16},
		"invisWalls":[
			{"x":403,"y":161,"width":20,"height":508},
			{"x":424,"y":641,"width":764,"height":28},
			{"x":1150,"y":162,"width":36,"height":476},
			{"x":425,"y":160,"width":725,"height":26},
			{"x":478,"y":254,"width":19,"height":329},
			{"x":499,"y":558,"width":532,"height":20},
			{"x":1001,"y":283,"width":28,"height":270},
			{"x":541,"y":256,"width":489,"height":24},
			{"x":541,"y":281,"width":31,"height":219},
			{"x":572,"y":472,"width":378,"height":28},
			{"x":916,"y":316,"width":35,"height":156},
			{"x":624,"y":314,"width":289,"height":22},
			{"x":624,"y":336,"width":25,"height":85},
			{"x":650,"y":395,"width":212,"height":23},
			{"x":775,"y":375,"width":25,"height":10}
		],
		"barriers":[],
		"enemies":[
			{"x":1706,"y":142,"width":24,"height":24},
			{"x":1508,"y":360,"width":85,"height":85},
			{"x":1490,"y":664,"width":22,"height":22},
			{"x":650,"y":783,"width":75,"height":75},
			{"x":203,"y":425,"width":30,"height":30},
			{"x":188,"y":706,"width":73,"height":73},
			{"x":191,"y":123,"width":43,"height":43},
			{"x":657,"y":46,"width":41,"height":41},
			{"x":1283,"y":101,"width":86,"height":86},
			{"x":1196,"y":827,"width":46,"height":46}
		],
		"mobileEnemies":[]
		},
	"10": {
		"player":{"x":798,"y":170,"width":33,"height":33},
		"invisWalls":[
			{"x":371,"y":290,"width":164,"height":6},
			{"x":736,"y":139,"width":19,"height":105},
			{"x":1322,"y":88,"width":142,"height":23},
			{"x":204,"y":512,"width":35,"height":98}
		],
		"barriers":[
			{"x":668,"y":424,"width":99,"height":21},
			{"x":1324,"y":296,"width":15,"height":187},
			{"x":884,"y":104,"width":83,"height":94},
			{"x":587,"y":736,"width":259,"height":55},
			{"x":1087,"y":421,"width":37,"height":148},
			{"x":1650,"y":634,"width":127,"height":74},
			{"x":1649,"y":197,"width":81,"height":109}
		],
		"enemies":[
			{"x":394,"y":125,"width":65,"height":65},
			{"x":1480,"y":822,"width":39,"height":39},
			{"x":290,"y":728,"width":36,"height":36},
			{"x":1567,"y":127,"width":30,"height":30}
		],
		"mobileEnemies":[]
		},
	"11":{
		"player":{"x":819,"y":694,"width":32,"height":32},
		"invisWalls":[
			{"x":960,"y":145,"width":1920,"height":30},
			{"x":92,"y":476,"width":140,"height":17},
			{"x":312,"y":639,"width":122,"height":16},
			{"x":580,"y":325,"width":19,"height":108},
			{"x":844,"y":410,"width":213,"height":161},
			{"x":1268,"y":360,"width":17,"height":206}
		],
		"barriers":[
			{"x":357,"y":393,"width":39,"height":144},
			{"x":1580,"y":456,"width":339,"height":28}
		],
		"enemies":[
			{"x":212,"y":56,"width":57,"height":57},
			{"x":705,"y":56,"width":50,"height":50},
			{"x":1268,"y":56,"width":47,"height":47}
		],
		"mobileEnemies":[]
		},	
	"12":{
		"player":{"x":856,"y":299,"width":23,"height":23},
		"invisWalls":[
			{// left wall
				x: 780, 
				y: 310, 
				width: 10, 
				height: 200 
			},
			{//the bottom wall
				x: 885, 
				y: 405, 
				width: 200, 
				height: 10
			}, 
			
			{// right wall
				x: 980, 
				y: 310, 
				width: 10, 
				height: 200
			},
			
			{//the top wall
				x: 885,  
				y: 215, 
				width: 200, 
				height: 10
			}
		],
		"barriers":[
			{"x":1700,"y":417,"width":214,"height":32},
			{"x":366,"y":485,"width":164,"height":22},
			{"x":709,"y":237,"width":24,"height":90},
			{"x":929,"y":613,"width":35,"height":163},
			{"x":1067,"y":306,"width":25,"height":133}
		],
		"enemies":[
			{"x":181,"y":165,"width":61,"height":61},
			{"x":150,"y":760,"width":53,"height":53},
			{"x":1598,"y":766,"width":86,"height":86},
			{"x":1586,"y":133,"width":61,"height":61}
		],
		"mobileEnemies":[]
		},
		"13":{
			"player":{"x":58,"y":612,"width":49,"height":49},
			"invisWalls":[
				{"x":563,"y":252,"width":20,"height":70},
				{"x":779,"y":401,"width":350,"height":17},
				{"x":779,"y":418,"width":28,"height":44},
				{"x":1104,"y":416,"width":26,"height":36}
			],
			"barriers":[
				{"x":915,"y":223,"width":33,"height":63},
				{"x":515,"y":93,"width":146,"height":8},
				{"x":1200,"y":104,"width":139,"height":14},
				{"x":1340,"y":112,"width":13,"height":28},
				{"x":499,"y":96,"width":15,"height":33}
			],
			"enemies":[
				{"x":552,"y":149,"width":70,"height":70},
				{"x":1239,"y":159,"width":74,"height":74}
			],
			"mobileEnemies":[]
		}
}
