const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);


	if (mathSymbol === "+"){
    console.log(num1 + num2)
  }

  if (mathSymbol === "-"){
    console.log(num1 - num2)
  }

  if (mathSymbol === "*"){
    console.log(num1 * num2)
  }

  if (mathSymbol === "%"){
    console.log(num1 % num2)
  }

	reader.close()



});
