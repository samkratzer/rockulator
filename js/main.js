var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");
var rock = document.getElementById("the-rock");
var toad = document.getElementById("toad");

numOne.addEventListener("input", add);
numOne.addEventListener("input", trumpcheck);
numTwo.addEventListener("input", add);
numTwo.addEventListener("input", trumpcheck);

function add() {

var one = parseFloat(numOne.value) || 0;
var two = parseFloat(numTwo.value) || 0;

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

function trumpcheck(){

	var stringOne = numOne.value.toLowerCase();
	var stringTwo = numTwo.value.toLowerCase();
	var stringCheck = stringOne.concat(stringTwo);
	
	if(stringCheck.contains("trump"){
	   rock.className = "hide";
	   toad.className = "animated-gif";
	   }
	else toad.className = "hide";
}
	   
