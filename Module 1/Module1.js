// program to generate a multiplication table

// a function called "multiplicationTable" that takes single parameter called "num"
function multiplicationTable(num) {

    // a for loop to iterate through the numbers 1 to 10
    for (let i = 1; i <= 10; i++) {

      // Multiply the input number by the current loop index to get the product
      const product = num * i;

      // Print out a string that displays the multiplication table to the console
      console.log(`${num} * ${i} = ${product}`);
    }
  }

  //testing the function with different input numbers to generate multiplication tables.
  multiplicationTable(5);
  multiplicationTable(8);
  multiplicationTable(12);
