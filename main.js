var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");
var img = document.getElementById("the-rock");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {

var one = parseFloat(numOne.value) || 0;
var two = parseFloat(numTwo.value) || 0;

img.className = "hide"
addSum.innerHTML = display(one+two);
}

function display(number){
	if(number>10000){
		img.className = "animated-gif";
		return "hey... that's a pretty big number";
	}
	else if (number<10){
		return "not very much";
	}
	else return "your number is: " + number;
}
