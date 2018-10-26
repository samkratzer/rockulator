var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");
var stringDisplay = document.getElementById("string-display");
var rock = document.getElementById("the-rock");
var nineThousand = document.getElementById("nine-thousand");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {

var one = parseFloat(numOne.value) || 0;
var two = parseFloat(numTwo.value) || 0;
var passedString = (numOne.value + numTwo.value) || 0;
var myString = passedString.toLowerCase();

rock.className = "hide";
nineThousand.className = "hide";
addSum.innerHTML = display(one+two);
}

function display(number){
	if((parseFloat(numOne.value) || 0) == 0 && (parseFloat(numTwo.value) || 0) == 0){
		return " ";
	}
	else if(number == 1){
		return "one is loneliest number that you'll ever do...";
	}
	else if(number == 9001){
		nineThousand.className = "animated-gif";
		return "IT'S OVER 9000!!!!!";
	}
	else if(number>10000){
		rock.className = "animated-gif";
 		return "hey... that's a pretty big number";
 	}
 	else if(number<10){
 		return "not very much";
 	}
 	else return "your number is: " + number;
}
