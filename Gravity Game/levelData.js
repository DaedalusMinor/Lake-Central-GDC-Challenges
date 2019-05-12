//COMMENT YOUR STUFF PLEASE

var MAX_LEVEL = 18;
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
		absorbWalls: [
		{
			x: 900,
			y: 200,
			width: 30,
			height: 150
		}
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
		absorbWalls:[
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
		absorbWalls:[
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
		absorbWalls:[
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
		absorbWalls:[
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
		absorbWalls:[
		],
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
		absorbWalls:[
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
			varArray: [1745, 1755, 234.5, 734.5, 1.3],
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
		absorbWalls:[
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
		absorbWalls:[
		],
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
		"absorbWalls":[],
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
		"absorbWalls":[],
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
		"absorbWalls":[],
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
		"absorbWalls":[],
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
		"13":{"player":{"x": 200,"y":775,"width":30,"height":30},"absorbWalls":[],"invisWalls":[{"x":856.5,"y":407,"width":43,"height":34},{"x":1040.5,"y":205.5,"width":91,"height":23},{"x":716.5,"y":215.5,"width":99,"height":29},{"x":638.5,"y":373.5,"width":17,"height":93}],"barriers":[{"x":844,"y":533,"width":370,"height":12},{"x":1016,"y":559.5,"width":22,"height":35},{"x":669.5,"y":558,"width":23,"height":32}],"enemies":[{"x":1083.5,"y":278.5,"width":55,"height":55},{"x":662.5,"y":284.5,"width":57,"height":57}],"mobileEnemies":[]},
		"14":{"player":{"x":1132,"y":372,"width":16,"height":16},"absorbWalls":[],"invisWalls":[{"x":883,"y":200,"width":1018,"height":26},{"x":390,"y":433.5,"width":34,"height":441},{"x":897,"y":637,"width":980,"height":34},{"x":1369,"y":419.5,"width":36,"height":401},{"x":488,"y":430.5,"width":30,"height":237},{"x":882,"y":531,"width":758,"height":36},{"x":1249.5,"y":414.5,"width":23,"height":197},{"x":845.5,"y":322.5,"width":681,"height":21},{"x":1170.5,"y":391,"width":25,"height":114},{"x":853.5,"y":432.5,"width":609,"height":31},{"x":1098,"y":391,"width":24,"height":40},{"x":1024.5,"y":353,"width":21,"height":34},{"x":968,"y":395.5,"width":24,"height":25},{"x":900.5,"y":357.5,"width":17,"height":31},{"x":830.5,"y":395.5,"width":33,"height":27},{"x":745.5,"y":355.5,"width":27,"height":41},{"x":672.5,"y":391,"width":17,"height":48},{"x":594,"y":349.5,"width":20,"height":29},{"x":549.5,"y":395,"width":15,"height":36}],"barriers":[],"enemies":[{"x":1640,"y":135,"width":54,"height":54},{"x":1682,"y":466,"width":54,"height":54},{"x":1645,"y":744,"width":76,"height":76},{"x":1247.5,"y":819.5,"width":57,"height":57},{"x":493.5,"y":834.5,"width":65,"height":65},{"x":825.5,"y":859.5,"width":47,"height":47},{"x":143,"y":780,"width":36,"height":36},{"x":85.5,"y":513.5,"width":29,"height":29},{"x":105.5,"y":146.5,"width":65,"height":65},{"x":1298,"y":87,"width":58,"height":58},{"x":543.5,"y":77.5,"width":29,"height":29},{"x":843.5,"y":107.5,"width":65,"height":65}],"mobileEnemies":[]},
		"15":{"player":{"x":66,"y":884,"width":44,"height":44},"absorbWalls":[],"invisWalls":[{"x":212.5,"y":806,"width":425,"height":12},{"x":442,"y":539.5,"width":34,"height":545},{"x":1190,"y":272,"width":1458,"height":14},{"x":677,"y":583,"width":32,"height":270},{"x":899.5,"y":456,"width":411,"height":20},{"x":1085.5,"y":823.5,"width":31,"height":285},{"x":1754,"y":468.5,"width":330,"height":29},{"x":1605,"y":549,"width":32,"height":132},{"x":1480,"y":809.5,"width":28,"height":315}],"barriers":[{"x":693,"y":245,"width":230,"height":26},{"x":681.5,"y":842,"width":23,"height":244},{"x":1086.5,"y":573,"width":31,"height":212},{"x":1796.5,"y":366.5,"width":29,"height":167},{"x":1544.5,"y":636,"width":153,"height":34}],"enemies":[{"x":851,"y":548,"width":66,"height":66},{"x":93,"y":437,"width":62,"height":62},{"x":476.5,"y":85.5,"width":53,"height":53},{"x":1584,"y":85,"width":60,"height":60},{"x":1760.5,"y":798.5,"width":37,"height":37},{"x":1693.5,"y":534.5,"width":35,"height":35},{"x":1267,"y":906,"width":38,"height":38}],"mobileEnemies":[]},
		"16":{
			"player":{
				x: 200, 
				y: 700, 
				width: 40,
				height: 40
			},
			"absorbWalls":[],
			"invisWalls":
			[
			{
				x: 960,
				y: 484.5,
				width: 30,
				height: 1920
			}
			],
			"barriers":[ //1920, 969
			{
				x: 300, 
				y: 484.5,
				width: 30,
				height: 75
			},
			{
				x: 500,
				y: 684.5, 
				width: 30, 
				height: 75
			},
			{
				x: 500, 
				y: 284.5,
				width: 30, 
				height: 75
			}
			],
			"enemies": [
			],
			"mobileEnemies":[
			{
				x: 1420,
				y: 480,
				width: 30,
				height: 30,
				varArray: [1415, 1425, 350, 550, 1.3],//[x1, x2, y1, y2, d]
				funct: railMovement
			},
			{
				x: 1620,
				y: 200,
				width: 30,
				height: 30,
				varArray: [1615, 1625, 200, 400, 0.9],//[x1, x2, y1, y2, d]
				funct: railMovement
			},
			{
				x: 1620,
				y: 769,
				width: 30,
				height: 30,
				varArray: [1615, 1625, 600, 800, 0.9],//[x1, x2, y1, y2, d]
				funct: railMovement
			}
			]
		},
		"17":{
			"player":{
				x: 960,
				y: 484.5,
				width: 20, 
				height: 20
			},
			"absorbWalls":[],
			"enemies":[],
			"invisWalls":[
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
			"barriers":[
			{
				x: 1650, 
				y: 484.5,
				width: 60, 
				height: 60
			},
			{
				x: 270,
				y: 484.5,
				width: 60,
				height: 60
			}
			],
			"mobileEnemies":[
			{
				x: null,
				y: null,
				width: 30,
				height: 30,
				varArray: [1650, 484.5, 200, 200, 500],
				funct: ellipticalMovement
			},
			{
				x: null,
				y: null,
				width: 30,
				height: 30,
				varArray: [270, 484.5, 200, 200, 500],
				funct: ellipticalMovement
			},
			{
				x: 960,
				y: 100, 
				width: 30,
				height: 30,
				varArray: [300, 1620, 0, 0, 0.9],//[x1, x2, y1, y2, d]
				funct: railMovement
			},
			{
				x: 960,
				y: 869, 
				width: 30,
				height: 30,
				varArray: [300, 1620, 0, 0, 0.9],//[x1, x2, y1, y2, d]
				funct: railMovement
			}
			]
			
		},
		"18":{
			"player":{
				x: 1620,
				y: 200, 
				width: 30,
				height: 30
			},
			"absorbWalls":[],
			"invisWalls":[
			{
				x: 1520,
				y: 225,
				width: 30,
				height: 300
			},
			{
				x: 1420,
				y: 600,
				width: 300,
				height: 30
			}
			],
			"enemies":[
			{
				x: 300,
				y: 100,
				width: 30,
				height: 30
			},
			{
				x: 200, 
				y: 869,
				width: 30,
				height: 30
			},
			{
				x: 1820,
				y: 869,
				width: 30,
				height: 30
			}
			], 
			"mobileEnemies":[
			{
				x: 500,
				y: 484.5,
				width: 30,
				height: 30,
				varArray: [495, 505, 300, 700, 0.9],//[x1, x2, y1, y2, d]
				funct: railMovement
			}
			],
			"barriers": [
			{
				x: 400, 
				y: 484.5,
				width: 30, 
				height: 400
			},
			{
				x: 1820,
				y: 225,
				width: 30,
				height: 200 
			}
			]
		}
}
