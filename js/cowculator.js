var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");
var textField = document.getElementById("text-field");
var cattlePrice = 100;

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

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

function getPrice(){
	fetch(https://www.quandl.com/api/v3/datasets/ODA/PBEEF_USD.json?api_key=3xiT8B9xhdJEmqJLwTM_)
 		.then(function(data) {
    		// Here you get the data to modify as you please
    		})
 		})
		.catch(function(error) {
 	   	// If there is any error you will catch them here
 	});   
	return value;
