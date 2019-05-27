//COMMENT YOUR STUFF PLEASE

var MAX_LEVEL = 29;
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
	"0":{"player":{"x":952,"y":744,"width":30,"height":30},"invisWalls":[{"x":972,"y":624,"width":280,"height":48}],"barriers":[{"x":392,"y":556,"width":112,"height":40}],"enemies":[{"x":416,"y":192,"width":64,"height":64}],"mobileEnemies":[],"absorbWalls":[{"x":1340,"y":328,"width":56,"height":416}], mobileWalls: [{x: null,
		y: null,
		width: 100,
		height: 20,
		varArray: [1550, 750, 160, 160, 800], //[x,yCenter, distance, distance, frames it takes to complete the orbit]
		funct: ellipticalMovement}]},

	"1" : {
		player: {
			x: 980, 
			y: 710, 
			width: 30, 
			height: 30
		},
		mobileWalls: [
		{
			x: 200,
			y: 300,
			width: 20,
			height: 100,
			varArray: [0, 0, 200, 700, 0.9], //[x1, x2, y1, y2, d]
			funct: railMovement
		}
		],
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
		mobileWalls: [
		{
			x: 960,
			y: 370,
			width: 100,
			height: 10,
			varArray: [800, 1100, 0, 0, 0.9], //[x1, x2, y1, y2, d]
			funct: railMovement
		}
		],
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
		mobileWalls: [
		{
			x: 1030,
			y: 200,
			width: 400,
			height: 20,
			varArray: [750, 1660, 0, 0, 1.3],
			funct: railMovement
		}
		],
		invisWalls: [
		{
			x: 600 +1920/2,
			y: 405,
			width: 1920,
			height: 10,
		}, 
		{
			x: 305, 
			y: 700 + 969/2, 
			width: 10, 
			height: 969, 
		}
		],
		
		enemies: [
			{
				x: 1300,
				y: 700,
				width: 30,
				height: 30
			}
		], 
		barriers: [

		], 
		absorbWalls:[
		{
			x: 800,
			y: 700,
			width: 30,
			height: 100
		}
		],
		mobileEnemies: [
			{
				x: 200,
				y: 300,
				width: 30,
				height: 30,
				varArray: [200, 400, 250, 450, 0.5],
				funct: railMovement	
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
		mobileWalls: [
		{
			x: 900,
			y: 750,
			width: 200,
			height: 30,
			varArray: [400, 1400, 0, 0, 0.6],
			funct: railMovement	
		}
		],
		invisWalls: [
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
		absorbWalls:[
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
			
				
		],
		
		barriers: [
			
		], 
		mobileEnemies: [
			{
				x: 110,
				y: 210,
				width: 30,
				height: 30,
				varArray: [0, 0, 100, 569, 0.7],
				funct: railMovement	
			},
			
			{
				x: 1840, 
				y: 210, 
				width: 30, 
				height: 30,
				varArray: [0, 0, 100, 669, 0.7],
				funct: railMovement	
			},
			{
				
				x: null,
				y: null,
				width: 30,
				height: 30,
				varArray: [960, 400, 300, 300, 1100], //[x,yCenter, distance, distance, frames it takes to complete the orbit]
				funct: ellipticalMovement
			}
		]
	}, 
	"5" : {	
			player: {
				x: 100,
				y: 900,
				width: 30,
				height: 30
			},

			invisWalls: [
				
			],
			mobileWalls: [],

			barriers : [

			],

			enemies : [
			{
				x: 960,
				y: 484.5,
				width: 30,
				height: 30
			}
			],
			mobileEnemies: [
			{
				x: 1800,
				y: 600,
				width: 30,
				height: 30,
				varArray: [0, 0, 600, 800, 0.5], //[x1, x2, y1, y2, d]
				funct: railMovement
				},
				{
					x: null,
					y: null,
					width: 30,
					height: 30,
					varArray: [960, 484.5, 200, 200, 1200], //[x,yCenter, distance, distance, frames it takes to complete the orbit]
					funct: ellipticalMovement
				}
			],
			absorbWalls: [
			{
				x: 300,
				y: 400,
				width: 20,
				height: 350
			}
			]
		},
	"6" : {
		player: {
			x: 430, 
			y: 430, 
			width: 75, 
			height: 75
		}, 
		mobileWalls: [],
		absorbWalls:[
		{
			x: 260, 
			y: 180, 
			width: 20, 
			height: 200		
		}
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

	"7" : { // level number	
		player: {
			x: 800,
			y: 300,
			width: 30,
			height: 30
		}, 
		mobileWalls: [],
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
	"8": {
		player: {
			x: 960,
			y: 920,
			width: 30,
			height: 30
		}, 
		mobileWalls: [],
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
	"9" : {
		player: {
			x: 980, 
			y: 510, 
			width: 20, 
			height: 20
		},
		absorbWalls:[
		],
		mobileWalls: [],
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
				width: 50,
				height: 50,
				varArray: [980, 510, 300, 300, 800],
				funct: ellipticalMovement
			}
		]
	},
	"10": {
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
		mobileWalls: [],
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
	"11": {
		"player":{"x":798,"y":170,"width":33,"height":33},
		"invisWalls":[
			{"x":371,"y":290,"width":164,"height":6},
			{"x":736,"y":139,"width":19,"height":105},
			{"x":1322,"y":88,"width":142,"height":23},
			{"x":204,"y":512,"width":35,"height":98}
		],
		mobileWalls: [],
		"absorbWalls":[{"x":884,"y":104,"width":83,"height":94},{"x":587,"y":736,"width":259,"height":55}],
		"barriers":[
			{"x":668,"y":424,"width":99,"height":21},
			{"x":1324,"y":296,"width":15,"height":187},
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
	"12":{
		"player":{"x":819,"y":694,"width":32,"height":32},
		"absorbWalls":[],
		mobileWalls: [],
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
	"13":{
		"player":{"x":856,"y":299,"width":23,"height":23},
		"absorbWalls":[],
		mobileWalls: [],
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
		"14":{"player":{"x":169,"y":774,"width":48,"height":48},"invisWalls":[{"x":1150,"y":338,"width":24,"height":96},{"x":593,"y":314,"width":24,"height":48}],"barriers":[],"enemies":[{"x":605,"y":242,"width":48,"height":48},{"x":1138,"y":242,"width":48,"height":48}],"mobileEnemies":[],"mobileWalls":[],"absorbWalls":[{"x":847,"y":448,"width":436,"height":24},{"x":641,"y":484,"width":24,"height":48},{"x":1053,"y":484,"width":24,"height":48},{"x":847,"y":314,"width":48,"height":48},{"x":1149.5,"y":157,"width":169,"height":24},{"x":617.5,"y":181,"width":121,"height":24}],"dimensions":{"width":1920,"height":969}},
		"15":{"player":{"x":569,"y":448,"width":24,"height":24},"invisWalls":[{"x":326,"y":459,"width":24,"height":532},{"x":956.5,"y":205,"width":1235,"height":24},{"x":944.5,"y":714,"width":1211,"height":24},{"x":1562,"y":472,"width":24,"height":508},{"x":1441,"y":447,"width":24,"height":266},{"x":896,"y":569,"width":920,"height":24},{"x":448,"y":435,"width":24,"height":242},{"x":944.5,"y":326,"width":969,"height":24},{"x":1344,"y":471.5,"width":24,"height":169},{"x":919.5,"y":399,"width":823,"height":24},{"x":520,"y":459,"width":24,"height":96},{"x":907,"y":496,"width":750,"height":24},{"x":1271,"y":472,"width":24,"height":24},{"x":1199,"y":435,"width":24,"height":48},{"x":1114,"y":472,"width":48,"height":24},{"x":993,"y":423,"width":48,"height":24},{"x":908,"y":460,"width":24,"height":48},{"x":811,"y":423,"width":24,"height":24},{"x":750,"y":472,"width":48,"height":24},{"x":666,"y":423,"width":24,"height":24},{"x":617,"y":472,"width":24,"height":24},{"x":1102,"y":544,"width":24,"height":24},{"x":787,"y":520,"width":24,"height":24},{"x":956,"y":520,"width":24,"height":24},{"x":871,"y":544,"width":48,"height":24},{"x":496,"y":472,"width":24,"height":24},{"x":472,"y":399,"width":24,"height":24},{"x":738,"y":351,"width":24,"height":24},{"x":593,"y":375,"width":24,"height":24},{"x":859,"y":375,"width":24,"height":24},{"x":981,"y":351,"width":24,"height":24}],"barriers":[],"enemies":[{"x":1647,"y":72,"width":48,"height":48},{"x":1743,"y":508,"width":48,"height":48},{"x":1622,"y":823,"width":48,"height":48},{"x":1114,"y":823,"width":48,"height":48},{"x":678,"y":847,"width":48,"height":48},{"x":193,"y":847,"width":48,"height":48},{"x":72,"y":556,"width":48,"height":48},{"x":120,"y":726,"width":48,"height":48},{"x":96,"y":314,"width":48,"height":48},{"x":556,"y":96,"width":48,"height":48},{"x":193,"y":72,"width":48,"height":48},{"x":1017,"y":96,"width":48,"height":48},{"x":1332,"y":120,"width":48,"height":48},{"x":1719,"y":290,"width":48,"height":48}],"mobileEnemies":[],"mobileWalls":[],"absorbWalls":[],"dimensions":{"width":1920,"height":969}},
		"16":{"player":{"x":48,"y":896,"width":48,"height":48},"invisWalls":[{"x":205.5,"y":811,"width":411,"height":24},{"x":399,"y":520.5,"width":24,"height":557},{"x":495.5,"y":254,"width":169,"height":24},{"x":1368,"y":254,"width":1090,"height":24},{"x":641,"y":593,"width":24,"height":266},{"x":787,"y":472,"width":266,"height":24},{"x":908,"y":823,"width":24,"height":290},{"x":1731,"y":580.5,"width":24,"height":145},{"x":1586,"y":811,"width":24,"height":314},{"x":1731,"y":375,"width":24,"height":218}],"barriers":[{"x":641,"y":847,"width":24,"height":242},{"x":1815.5,"y":496,"width":193,"height":24},{"x":1646.5,"y":641,"width":145,"height":24}],"enemies":[{"x":120,"y":581,"width":48,"height":48},{"x":435,"y":72,"width":48,"height":48},{"x":1671,"y":72,"width":48,"height":48},{"x":774,"y":581,"width":48,"height":48},{"x":1719,"y":799,"width":48,"height":48},{"x":1792,"y":581,"width":48,"height":48}],"mobileEnemies":[],"mobileWalls":[],"absorbWalls":[{"x":702,"y":254,"width":242,"height":24},{"x":908,"y":580.5,"width":24,"height":193}],"dimensions":{"width":1920,"height":969}},
		"17":{
			"player":{
				x: 200, 
				y: 700, 
				width: 40,
				height: 40
			},
			mobileWalls: [],
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
		"18":{
			"player":{
				x: 960,
				y: 484.5,
				width: 20, 
				height: 20
			},
			mobileWalls: [],
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
				varArray: [1650, 484.5, 200, 200, 900],
				funct: ellipticalMovement
			},
			{
				x: null,
				y: null,
				width: 30,
				height: 30,
				varArray: [270, 484.5, 200, 200, 900],
				funct: ellipticalMovement
			},
			{
				x: 960,
				y: 100, 
				width: 40,
				height: 40,
				varArray: [300, 1620, 0, 0, 0.6],//[x1, x2, y1, y2, d]
				funct: railMovement
			},
			{
				x: 960,
				y: 869, 
				width: 40,
				height: 40,
				varArray: [300, 1620, 0, 0, 0.6],//[x1, x2, y1, y2, d]
				funct: railMovement
			}
			]
			
		},
		"19":{
			"player":{
				x: 1620,
				y: 200, 
				width: 30,
				height: 30
			},
			"absorbWalls":[],
			mobileWalls: [],
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
				width: 40,
				height: 40,
				varArray: [495, 505, 300, 700, 1.4],//[x1, x2, y1, y2, d]
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
		},
		"20" : {	
			player: {
				x: 960,
				y: 700,
				width: 30,
				height: 30
			},

			invisWalls: [
				
			],

			barriers : [

			],
			mobileWalls: [
			
			],

			enemies : [
			{
				x: 1050,
				y: 100,
				width: 30,
				height: 30
			},
			{
				x: 870,
				y: 100,
				width: 30,
				height: 30
			}
			],
			mobileEnemies: [

			],
			absorbWalls: [
			{
				x: 960,
				y: 100,
				width: 30,
				height: 200
			},
			{
				x: 1075,
				y: 185,
				width: 200,
				height: 30
			},
			{
				x: 845,
				y: 185,
				width: 200, 
				height: 30
			},
			{
				x: 207.5,
				y: 100,
				width: 415,
				height: 200
			},
			{
				x: 1712.5,
				y: 100,
				width: 415,
				height: 200
			}
			]
		},
		"21":{"player":{"x":1484,"y":140,"width":40,"height":40},"invisWalls":[],mobileWalls: [],"barriers":[{"x":48,"y":188,"width":16,"height":168},{"x":1076,"y":768,"width":312,"height":16}],"enemies":[{"x":320,"y":96,"width":64,"height":64},{"x":196,"y":788,"width":40,"height":40}],"mobileEnemies":[{"x":972,"y":492,"width":40,"height":40, varArray: [950, 1420, 0, 0, 0.9],funct: railMovement}],"absorbWalls":[{"x":768,"y":80,"width":32,"height":160},{"x":236,"y":448,"width":232,"height":32},{"x":644,"y":356,"width":40,"height":120},{"x":1508,"y":700,"width":200,"height":40}]},
		"22" : {	
			player: {
				x: 960,
				y: 484.5,
				width: 20, 
				height: 20
			},
			mobileWalls: [],

			invisWalls: [
			{
				x: 875,
				y: 484.5,
				width: 30,
				height: 969
			},
			{
				x: 1045,
				y: 484.5,
				width: 30,
				height: 969
			},
			{
				x: 960,
				y: 75,
				width: 140,
				height: 30
			}
			],

			barriers : [

			],

			enemies : [
			{
				x: 960,
				y: 30,
				width: 30,
				height: 30
			}
			],
			mobileEnemies: [
			{
				x: 1460,
				y: 284.5,
				width: 40,
				height: 40,
				x: null,
				y: null,
				width: 40,
				height: 40,
				varArray: [1460, 484.5, 200, 200, 800],
				funct: ellipticalMovement
			},
			{
				x: 675,
				y: 484.5,
				width: 30,
				height: 30,
				varArray: [0, 0, 300, 700, 0.9],//[x1, x2, y1, y2, d]
				funct: railMovement
			}
			],
			absorbWalls: [
			{
				x: 960,
				y: 954,
				width: 140,
				height: 30
			},
			{
				x: 1460,
				y: 484.5,
				height: 200,
				width: 20
			},
			{
				x: 200,
				y: 484.5,
				width: 30,
				height: 400,
			}
			]
		},
		"23" : {	
			player: {
				x: 400,
				y: 200,
				width: 30,
				height: 30
			},
			mobileWalls: [],
			invisWalls: [
			{
				x: 960,
				y: 484.5,
				width: 30,
				height: 100
			}
			],

			barriers : [
			{
				x: 1160,
				y: 419.5,
				width: 400,
				height: 30
			},
			{
				x: 1160,
				y: 549.5,
				width: 400,
				height: 30
			}
			],

			enemies : [
			{
				x: 1295,
				y: 484.5,
				width: 20,
				height: 20
			}
			],
			mobileEnemies: [
			{
				x: 100,
				y: 900,
				width: 30,
				height: 30,
				varArray: [100, 600, 0, 0, 0.9],//[x1, x2, y1, y2, d]
				funct: railMovement
			}
			],
			absorbWalls: [
			{
				x: 960,
				y: 217.25,
				width: 30,
				height: 434.5
			},
			{
				x: 960,
				y: 751.75,
				width: 30,
				height: 434.5
			},
			{
				x: 1345,
				y: 484.5,
				width: 30,
				height: 100
			},
			{
				x: 15,
				y: 484.5,
				width: 30,
				height: 200
			}
			]
		},
		"24":{"player":{"x":200,"y":700,"width":40,"height":40},mobileWalls: [],"invisWalls":[],"barriers":[],"enemies":[{"x":980,"y":560,"width":40,"height":40},{"x":1000,"y":120,"width":40,"height":40},{"x":1700,"y":140,"width":40,"height":40}],"mobileEnemies":[{
			x: 75,
			y: 75,
			width: 30,
			height: 30,
			varArray: [75, 450, 0, 0, 0.6], //[x1, x2, y1, y2, d]
			funct: railMovement
		}],"absorbWalls":[{"x":590,"y":100,"width":60,"height":200},{"x":590,"y":540,"width":60,"height":160},{"x":250,"y":840,"width":300,"height":40},{"x":1030,"y":400,"width":340,"height":40},{"x":1180,"y":590,"width":40,"height":340},{"x":1010,"y":740,"width":300,"height":40},{"x":1770,"y":890,"width":300,"height":140},{"x":1580,"y":120,"width":40,"height":240},{"x":1760,"y":60,"width":320,"height":40},{"x":1900,"y":210,"width":40,"height":260}]},
		"25":{"player":{"x":145,"y":799,"width":48,"height":48},mobileWalls: [],"invisWalls":[{"x":1731,"y":568.5,"width":24,"height":799},{"x":1246.5,"y":181,"width":169,"height":24},{"x":1174,"y":302,"width":24,"height":218},{"x":981,"y":823,"width":24,"height":290}],"barriers":[{"x":1320,"y":84.5,"width":24,"height":169}],"enemies":[{"x":1816,"y":266,"width":48,"height":48},{"x":1816,"y":387,"width":48,"height":48},{"x":1816,"y":508,"width":48,"height":48},{"x":1816,"y":629,"width":48,"height":48},{"x":1816,"y":726,"width":48,"height":48},{"x":1816,"y":823,"width":48,"height":48},{"x":1816,"y":920,"width":48,"height":48},{"x":120,"y":72,"width":48,"height":48}],"mobileEnemies":[{
				x: 700,
				y: 50,
				width: 30,
				height: 30,
				varArray: [600, 1200, 0, 0, 0.9],//[x1, x2, y1, y2, d]
				funct: railMovement}],"absorbWalls":[{"x":1815.5,"y":145,"width":193,"height":48},{"x":811,"y":520,"width":24,"height":218},{"x":544,"y":265.5,"width":24,"height":145},{"x":520,"y":774.5,"width":24,"height":193},{"x":375,"y":84.5,"width":24,"height":169},{"x":60.5,"y":932,"width":121,"height":72}]},
		"26":{"player":{"x":605,"y":726,"width":48,"height":48},mobileWalls: [],"invisWalls":[{"x":738,"y":774.5,"width":24,"height":387},{"x":593,"y":593,"width":266,"height":24},{"x":472,"y":701.5,"width":24,"height":193},{"x":362.5,"y":787,"width":193,"height":24},{"x":278,"y":677.5,"width":24,"height":193},{"x":168.5,"y":593,"width":193,"height":24},{"x":84,"y":472,"width":24,"height":218},{"x":253,"y":375,"width":314,"height":24}],"barriers":[],"enemies":[{"x":145,"y":96,"width":48,"height":48},{"x":363,"y":678,"width":48,"height":48}],"mobileEnemies":[{
				x: 1800,
				y: 500,
				width: 30,
				height: 30,
				varArray: [0, 0, 300, 800, 0.9],//[x1, x2, y1, y2, d]
				funct: railMovement
		},{x: null, y: null, width: 30, height: 30, varArray: [900, 300, 200, 200, 1000],
		funct: ellipticalMovement},],"absorbWalls":[{"x":520,"y":375,"width":218,"height":24},{"x":24,"y":96.5,"width":48,"height":193},{"x":217.5,"y":12,"width":339,"height":24},{"x":363,"y":108.5,"width":48,"height":169},{"x":1126,"y":605,"width":24,"height":242},{"x":60.5,"y":944,"width":121,"height":48}]},
		"27":{"player":{"x":956,"y":302,"width":24,"height":24},"invisWalls":[{"x":872,"y":230,"width":436,"height":24},{"x":1077,"y":447.5,"width":24,"height":411},{"x":859.5,"y":641,"width":411,"height":24},{"x":666,"y":435.5,"width":24,"height":387},{"x":859,"y":363,"width":24,"height":48},{"x":823,"y":375,"width":48,"height":24},{"x":908,"y":423,"width":24,"height":74},{"x":859,"y":448,"width":75,"height":26},{"x":823,"y":423,"width":96,"height":24},{"x":799,"y":399,"width":48,"height":24}],"barriers":[],"enemies":[{"x":1211,"y":145,"width":48,"height":48},{"x":266,"y":145,"width":48,"height":48},{"x":1235,"y":629,"width":48,"height":48},{"x":411,"y":581,"width":48,"height":48},{"x":920,"y":847,"width":48,"height":48},{"x":1501,"y":314,"width":48,"height":48},{"x":653,"y":96,"width":48,"height":48},{"x":605,"y":774,"width":48,"height":48},{"x":1574,"y":508,"width":48,"height":48}],"mobileEnemies":[],"mobileWalls":[],"absorbWalls":[{"x":896,"y":363,"width":48,"height":48},{"x":811,"y":351,"width":72,"height":24},{"x":787,"y":375,"width":24,"height":24},{"x":859,"y":399,"width":72,"height":24},{"x":884,"y":423,"width":24,"height":24},{"x":847.5,"y":472,"width":145,"height":24},{"x":799,"y":448,"width":48,"height":24}],"dimensions":{"width":1920,"height":969}},
			"28" : {	
			player: {
				x: 1870,
				y: 60,
				width: 30,
				height: 30
			},

			invisWalls: [
			{
				x: 960,
				y: 484.5,
				width: 20,
				height: 969
			}
			],

			barriers : [
			{
				x: 1130,
				y: 600,
				width: 30,
				height: 150
			}
			],

			enemies : [
			{
				x: 1200, 
				y: 100,
				width: 30,
				height: 30
			},
			{
				x: 1700,
				y: 550,
				width: 30,
				height: 30
			}
			],
			mobileEnemies: [
			{
				x: null,
				y: null,
				width: 30,
				height: 30,
				varArray: [400, 484.5, 200, 200, 800], //[x,yCenter, distance, distance, frames it takes to complete the orbit]
				funct: ellipticalMovement
			}
			],
			absorbWalls: [
			
			],
			mobileWalls: [
			{
				x: 400,
				y: 484.5,
				width: 10,
				height: 150,
				varArray: [0, 0, 300, 600, 0.9], //[x1, x2, y1, y2, d]
				funct: railMovement
			},
			{
				x: 1460,
				y: 484.5,
				width: 10,
				height: 200,
				varArray: [0, 0, 300, 600, 0.9], //[x1, x2, y1, y2, d]
				funct: railMovement
			},
			{
				x: 1460,
				y: 800,
				width: 150,
				height: 10,
				varArray: [1110, 1700, 0, 0, 0.9], //[x1, x2, y1, y2, d]
				funct: railMovement
			}
			
			]
		},
		"29":{"player":{"x":993,"y":532,"width":20,"height":20},"invisWalls":[{"x":544,"y":508.5,"width":24,"height":339},{"x":1005,"y":666,"width":896,"height":24},{"x":1441,"y":496,"width":24,"height":314},{"x":993,"y":351,"width":872,"height":24},{"x":690,"y":447.5,"width":24,"height":169},{"x":859,"y":605,"width":24,"height":96},{"x":1017,"y":399,"width":48,"height":72},{"x":823,"y":435,"width":48,"height":48},{"x":1126,"y":605,"width":72,"height":96},{"x":1380,"y":569,"width":96,"height":24},{"x":1247,"y":399,"width":24,"height":72}],"barriers":[],"enemies":[{"x":217,"y":145,"width":48,"height":48},{"x":1719,"y":484,"width":48,"height":48}],"mobileEnemies":[
		{
			x: 600,
			y: 100,
			width: 30,
			height: 30,
			varArray: [600, 750, 0, 0, 0.9], //[x1, x2, y1, y2, d]
			funct: railMovement
		},
		{
			x: 960,
			y: 800,
			width: 30,
			height: 30,
			varArray: [300, 1500, 0, 0, 4.9], //[x1, x2, y1, y2, d]
			funct: railMovement
		},
		{
			x: 1100,
			y: 100,
			width: 30,
			height: 30,
			varArray: [1100, 1400, 0, 0, 0.9], //[x1, x2, y1, y2, d]
			funct: railMovement}
		],"mobileWalls":[],"absorbWalls":[],"dimensions":{"width":1920,"height":969}}
		
}
/*Template

"n" : {	
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
			absorbWalls: [
			
			],
			mobileWalls: [
			
			]
		}
		
		
		*/
		/* These are the templates for the mobile enemies, I put them here because I can't remember them.
		x: ,
		y: ,
		width: ,
		height: ,
		varArray: [200, 500, 300, 700, 0.9], //[x1, x2, y1, y2, d]
		funct: railMovement
		//////////////////////////////////////////////////////////////// distance is how far the enemy orbits from the center, keep both "distance" the same
		x: null,
		y: null,
		width: ,
		height: ,
		varArray: [1460, 484.5, 200, 200, 800], //[x,yCenter, distance, distance, frames it takes to complete the orbit]
		funct: ellipticalMovement
		*/
