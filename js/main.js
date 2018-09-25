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
var string = (numOne.value + numTwo.value).toLowerCase;
stringDisplay.innnerHTML = string;

	if(string.contains("trump"){
	   toad.className = "animated-gif";
	   }
	else toad.className = "hide";

rock.className = "hide"
addSum.innerHTML = display(one+two);
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
	   
