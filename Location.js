var things = {
	n: [0],
	name: [0],
	type:[0],
	size: [0],
	absPositon: [[0, 0]],
	isVisible: [false],
	scrPosition: [[0, 0]],
	rotation: [0],
	source: [0]
}

var thingsToDraw = {
	n:[0],
	id:[0],
	type: [0],
	size: [0],
	scrPosition: [0],
	source: [0]
	
}


function LoadLocation()
{
	console.log( "Location.js is loaded" )
	StoreObject( square1 );

	DisplayThings();
}

function StoreObject( object )
{
	//console.log( "number of object to load: " + things.n.length );
	//console.log("Object name: " + object.name)
	n = things.n.length;
	things.n.push( n );
	things.name.push( object.name );
	things.type.push( object.type );
	things.size.push( object.size );
	things.absPositon.push( object.position );
	things.isVisible.push( false );
	things.scrPosition.push( [0, 0] );
	things.rotation.push( object.rotation );
	if (object.type == "plainSVG")
		things.source.push(object.source )
	else things.source.push(null);
}

function DisplayThings()
{
	for ( i = 1; i < things.n.length; i++ ) {
		console.log();
		console.log( things.n[i] );
		console.log( things.name[i] );
		console.log( things.absPositon[i] );
	};
}


// Stuff on the screen:

var square1 = {
	name: "Square1",
	type: "poly",
	size: 1,
	position: [0, 0],
	rotation: 0,
	offset: [-1,-1],
	drawCommands: ["moveTo", "beginPath", "moveTo", "moveTo", "fill"],
	drawParams: [[1, 0], null, [-1, 2], [1, 0], ["white"]],
	SVG1: "M 1 0 L 0 2 H 1 V 0",
	SVG2: "white",
}

var playerSVG = {
	name: "Player",
	type: "plainSVG",
	size: 3,
	position: [0,0],
	source: "objects/Player.svg",
	offset: [0,0]
}
