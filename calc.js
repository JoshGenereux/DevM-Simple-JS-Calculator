const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	console.log("mathSymbol", mathSymbol);
	console.log("num1", num1);
	console.log("num2", num2);

	let answer;
	switch (mathSymbol){
		case "+" :
			answer = num1 + num2;
			console.log(`${num1} + ${num2} = ${answer}`);
			break
		case "-" :
			answer = num1 - num2;
			console.log(`${num1} - ${num2} = ${answer}`);
			break
		case "*" :
			answer = num1 * num2;
			console.log(`${num1} * ${num2} = ${answer}`);
			break
		case "/" :
			answer = num1 / num2;
			console.log(`${num1} / ${num2} = ${answer}`);
			break
		case "sqrt" :
			answer = Math.sqrt(num1);
			console.log(`The Square Root of ${num1} is ${answer}`)
			break
	}
	// This line closes the connection to the command line interface.
	reader.close()
});

