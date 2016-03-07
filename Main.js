// Dependancies: (none)

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var screenCeter = [0,0];

var visibleObjects = null
var absPositons
var sizes
var positionsOnScr
var absScale = 10; //screen scale

const NAME = "FindAHouse v. 0.0.0"
const PLAYER_SIZE = 10;


window.onload = function()
{
	console.log("Initialised");
		
	document.getElementById("NAME").innerHTML = NAME
	document.getElementById("TITLE").innerHTML = NAME
		
	//addScript( 'DrawRect.js' );
	//addScript( 'Rectangle.js' );
	//addScript( 'Location.js' );

	/*setInterval(function()
		{
			PositionUpdate();
			ScreenUpdate();
		}, 5000);
	*/
	ScreenUpdate();
};
	
/*function addScript( src )
{
	var script = document.createElement( 'script' );
	script.src = src;
	script.async = false; // чтобы гарантировать порядок
	document.head.appendChild( script );

	script.onload = function ()
	{
		if ( src == "Location.js" ) LoadLocation();
	}
}*/


	
	
var drawOffset = [0,0] // temp
function ScreenUpdate()
{
	DrawRect( 0, 0, c.width, c.height, 'black' ); // Clear Screen
	DrawNet();
	StoreObject( square1 );
	FindScrPos( things, thingsToDraw );
	Draw2( thingsToDraw );
	//DrawPoly( square1, drawOffset );	// temporary here
	console.log("screen updated!")
}
	
// send here and object and get where to start drawing it (offset)
function FindScrPos(inp, outp)
{
	thingsToDraw.n = [0]
	for (i=1,j=1;i<inp.n.length;i++) // finds where to draw everything
	{
		inp.scrPosition[0] = inp.absPositon[0] * inp.size[i] * absScale;
		inp.scrPosition[1] = inp.absPositon[1] * inp.size[i] * absScale;
		if (inp.isVisible = true)
		{
			outp.n[j] = j;
			outp.id[j] = inp.name[i];
			outp.type[j] = inp.type[i];
			outp.size[j] = inp.size[i];
			outp.scrPosition[j] = inp.scrPosition[i];
			if ( inp.type == "plainSVG" )
				outp.source[j] = inp.source[i];
			j++
		}
		i++;
	}
}

function VisibilityCheck (inp, outp)
{
}


function DrawObjects (visibleObjects, positionsOnScr)
{
	
}