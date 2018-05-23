// JavaScript Document
var pColor = "red";
var player1 = true;
function changeColor(id){
	if(player1 == true && document.getElementById(id).style.backgroundColor != "red" && document.getElementById(id).style.backgroundColor != "black"){
	pColor = "red";
	document.getElementById(id).style.backgroundColor = pColor;
	id.value = "red";
	player1 = false;
	document.getElementById("turn").innerHTML = "Player 2's Turn";
	return player1;
}
	
	
	else if(player1 == false && document.getElementById(id).style.backgroundColor != "black" && document.getElementById(id).style.backgroundColor != "red"){
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