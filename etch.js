//Function for creating the grids.
numGrid = 16;
color = black;
function createGrid(numGrid){
	for(var i = 0; i < numGrid + 1; i++){
		$(".wrapper").append("<div id='" + i + "'class='holder'></div>");
		for(var j = 0; j < numGrid; j++){
			$("div#" + i).append("<div class = 'square'></div>");
		}
	}
}


function clear(){
	color = black;
	$(".square").css("background-color", "#ededed");
}

$(document).ready(function(){
	createGrid(numGrid);
	var clearB = document.getElementById("clear");
	var red = document.getElementById("red");
	var blue = document.getElementById("blue");
	var white = document.getElementById("white");
	var green = document.getElementById("green");
	var black = document.getElementById("black");
	
	clearB.addEventListener('click', function(){
			clear();
	});
	red.addEventListener('click', function(){
			color = "red";
	});
	blue.addEventListener('click', function(){
			color = "blue";
	});
	green.addEventListener('click', function(){
			color = "green";
	});
	white.addEventListener('click', function(){
			color = "white";
	});
	black.addEventListener('click', function(){
			color = "black";
	});
	$(".square").hover(function(){
		$(this).css("background-color", color);
	});
	
});


