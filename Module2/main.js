 //Geting data from the DOM
 var heightInput = document.querySelector("#heightInput");
 var weightInput = document.querySelector("#weightInput");
 var calculateButton = document.querySelector("#calculateBtn");
 var Calculator = document.querySelector("#calculator-container");
 var result = document.querySelector("#result");
 var statement = document.querySelector("#result-statement");
 var BMI, height, weight;

 //A separate function to handle the click event
 function handleSubmit(event) {
   // Prevent the form, from submitting and reloading the page
   event.preventDefault();

   height = heightInput.value.trim();
   weight = weightInput.value.trim();

   // Check if input values are valid numbers
   if (height === "" || weight === "" || isNaN(height) || isNaN(weight)) {
     result.innerText = "";
     statement.innerText = "Invalid input, Provide number.";
     return;
   }

   BMI = (weight / height ** 2).toFixed(1);
   result.innerText ="BMI: " + BMI;

   //the if-else statements to determine the weight category
   if (BMI < 18.5) {
     statement.innerText = "BMI range: Underweight";
   } else if (BMI > 18.5 && BMI <= 24.9) {
     statement.innerText =
       "BMI range: Healthy weight";
   } else if (BMI >= 25 && BMI <= 29.9) {
     statement.innerText = "BMI range: Overweight";
   } else {
     statement.innerText = "BMI range: Obese";
   }
 }
 //When the "Calculate Button" is clicked,it triggers the handleSubmit function.
 Calculator.addEventListener("submit", handleSubmit);
