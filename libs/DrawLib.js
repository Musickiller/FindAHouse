const ROT = Math.PI / 180

/*function Draw (object)
{
	console.log("started Draw");
	console.log("types: " + object.type[1])
	if (object.type == )
		DrawSVG (object)
}*/


function Draw2 ( stuff )
{
	for (i=1; i<stuff.n.length; i++)
		if (stuff.type[i] == "plainSVG")
		{
			console.log(stuff.type[i]);
			DrawSVG(stuff,i);
		}
		else if (stuff.type[i] == "poly")
		{
			//console.log("is poly")
			DrawPoly( stuff, i )
		};

};


function DrawRect( leftX, topY, width, height, drawColor )
{
	console.log( "screen is cleared" );
	ctx.fillStyle = drawColor;
	ctx.fillRect( leftX, topY, width, height );
}

function DrawSVG( object, n )
{
	//console.log(object.id[n])
	//console.log(object.source[n])
	ctx.drawImage(object.source[n],50,50);
}

/*
	ctx.rotate( object.rotation * ROT );
	crx.translate( object.offset );			// add screen position here
	ctx.scale( size * absScale );
	var p = new Path2D( object.SVG1 );
	ctx.fillStyle = object.SVG2;
	ctx.fill( p );
*/


function DrawPoly( object, n )
{
	console.log( "started DrawPoly!" );
	for ( i = 0; i < object.drawCommands.length; i++ ) {	//  For %numberOfCommands% do %commands%
		if ( object.drawCommands[i] == "beginPath" ) {
			ctx.beginPath();
		}
		else if ( object.drawCommands[i] == "moveTo")
		{
			ctx.moveTo( object.drawParams[0], object.drawParams[1] );
		}
		else if ( object.drawCommands[i] == "fill")
		{
			ctx.fillStyle = object.drawParams;
			ctx.fill();
		}
		else if ( object.drawCommands[i] == "stroke")
		{
			console.debug("under construction. info: DrawLib.js/DrawPoly.stroke")
		}
		else {
			console.debug( "Unknown command received by DrawPoly "
			+ "function in DrawLib.js file by MK. "
			+ "Additional informanion on received object:"
			+ object )
		}
	};
};

function DrawNet()
{
	console.log("drawing a net");
	ctx.beginPath();
	ctx.moveTo (c.width * 0.5, 0);
	ctx.lineTo (c.width * 0.5, c.height);
	ctx.strokeStyle="white";
	ctx.stroke ();
	ctx.moveTo(0,c.height * 0.5);
	ctx.lineTo(c.width, c.height * 0.5);
	ctx.stroke ();
}