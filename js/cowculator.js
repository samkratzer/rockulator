//Instantiate variables and link them to elements of the webpage when necessary
var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");
var textField = document.getElementById("text-field");
var url = "https://www.quandl.com/api/v3/datasets/ODA/PBEEF_USD/data.json?start_date=2017-01-01&column_index=1&collapse=annual&api_key=3xiT8B9xhdJEmqJLwTM_";
var request = new XMLHttpRequest();
var cattlePrice = 0;

//Start listening for any changes in the number input fields, and run the "add" function every time a change occurs
numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

//Request data from the commodity value API
request.open("GET", url, true);
request.onload = function() {
	//Parse data using JSON and assign value to the cattlePrice variable
	var data = JSON.parse(this.response).dataset_data.data[0];
	cattlePrice = data[1];
    	console.log(cattlePrice);
}
request.send();

//Add the two numbers in the input fields
function add() {
	var one = parseFloat(numOne.value) || 0; //Change the input from a string to a number, defaulting to 0
	var two = parseFloat(numTwo.value) || 0; // if the input is not in numerical form
	textField.innerHTML = display(one+two);
}

//Display the result
function display(number){
	var value = Math.round(number/cattlePrice); //Calculate value of input in terms of cattle rounded to the nearest integer

	if((parseFloat(numOne.value) || 0) == 0 && (parseFloat(numTwo.value) || 0) == 0){return " ";} //Blank if no input
	
 	else return ("The current market value of cattle per head is $" + cattlePrice + 
	". Your value, " + number + ", is worth about " + value + " head(s) of cattle.");
}
