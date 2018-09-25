var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");
var stringDisplay = document.getElementById("string-display");
var rock = document.getElementById("the-rock");
var toad = document.getElementById("toad");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {

var one = parseFloat(numOne.value) || 0;
var two = parseFloat(numTwo.value) || 0;
var passedString = (numOne.value + numTwo.value) || 0;
var myString = passedString.toLowerCase();

toad.className = "hide";
rock.className = "hide";
addSum.innerHTML = display(one+two, myString);
stringDisplay.innnerHTML = trumpcheck(myString);
}

function display(number, text){
	if(number>10000 && (text.includes("trump") == false) {
		rock.className = "animated-gif";
		return "hey... that's a pretty big number";
	}
	else if (number<10 && (text.includes("trump") == false) {
		return "not very much";
	}
	else if (text.includes("trump") == false) {
		return "your number is: " + number;
	}
	else return null;
}
	  
function trumpcheck(text){
	if(text.includes("trump")){
		toad.className = "animated-gif";
		return "yeti pubes and a dick like the mushroom character from mario kart...";
	}
	else return null;
}
