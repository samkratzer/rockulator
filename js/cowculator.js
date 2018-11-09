var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");
var textField = document.getElementById("text-field");
var url = "https://www.quandl.com/api/v3/datasets/ODA/PBEEF_USD/data.json?start_date=2017-01-01&column_index=1&collapse=annual&api_key=3xiT8B9xhdJEmqJLwTM_";
var request = new XMLHttpRequest();
var cattlePrice = 100;

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

request.open("GET", url, true);
request.onload = function() {
	//Begin accessing JSON data here
	var data = JSON.parse(this.response).dataset_data.data[0];
	console.log(data[1]);
	cattlePrice = data[1];
}
request.send();

function add() {
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	textField.innerHTML = display(one+two);
}

function display(number){
	var value = Math.round(number/cattlePrice);
	if((parseFloat(numOne.value) || 0) == 0 && (parseFloat(numTwo.value) || 0) == 0){
		return " ";
	}
 	else return 
	("The current market value of cattle per head is $" + cattlePrice + 
	". Your value, " + number + ", is worth about " + value + " head(s) of cattle.");
}
