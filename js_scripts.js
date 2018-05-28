// JavaScript Document
var pColor = "red";
var player1 = true;
var win1 = false;
var win2 = false;
var square = document.getElementsByClassName("square");
for(var j =0; j < square.length; j++){
	square[j].style.backgroundColor = "white";
}
function diagonal(aColor){
	for(var i=0; i < square.length; i++){
		console.log(i);
	}
}
function changeColor(id){
	if(player1 == true && document.getElementById(id).style.backgroundColor != "red" && document.getElementById(id).style.backgroundColor != "black"){
	document.getElementById("message").innerHTML = "";
	pColor = "red";
	document.getElementById(id).style.backgroundColor = pColor;
	id.value = "red";
	player1 = false;
	diagonal(pColor);
	document.getElementById("turn").innerHTML = "Player 2's Turn";
	return player1;
}
	
	
	else if(player1 == false && document.getElementById(id).style.backgroundColor != "black" && document.getElementById(id).style.backgroundColor != "red"){
	document.getElementById("message").innerHTML = "";
	pColor="black";
	document.getElementById(id).style.backgroundColor = pColor;
	player1 = true;
	document.getElementById("turn").innerHTML = "Player 1's Turn";
	return player1;
}
	else{
		document.getElementById("message").innerHTML = "Message: Choose another square!";
	}
}

console.log(square.length);


