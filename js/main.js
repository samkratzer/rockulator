var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");
var stringDisplay = document.getElementById("string-display");
var rock = document.getElementById("the-rock");
var toad = document.getElementById("toad");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);
toad.addEventListener("click", zoomin);

function add() {

var one = parseFloat(numOne.value) || 0;
var two = parseFloat(numTwo.value) || 0;
var passedString = (numOne.value + numTwo.value) || 0;
var myString = passedString.toLowerCase();

rock.className = "hide";
addSum.innerHTML = display(one+two);
stringDisplay.innnerHTML = trumpcheck(myString);
}

function display(number){
	if(number>10000){
	rock.className = "animated-gif";
 		return "hey... that's a pretty big number";
 	}
 	else if (number<10){
 		return "not very much";
 	}
 	else return "your number is: " + number;
}
	  
function trumpcheck(text){
	if(text.includes("trump")){
		toad.className = "big-splash";
		rock.className = "hide";
		return text;
	}
 	else{
 		toad.className = "hide";
 		return text;
 	}
 }

function zoomin(){
	alert("you clicked on trump's mushroom dick");
	var currWidth = toad.clientWidth;
	document.getElementById("the-rock").className = "hide";
	document.getElementById("add-sum") = "oh boy...";
	if (currWidth >= 1750){
		alert("Maximum mushroom reached!");
	}
	else{
        	toad.style.width = (currWidth + 50) + "px";
        }
	
}
	
