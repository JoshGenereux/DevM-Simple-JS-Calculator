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
	num3 = Number(tokens[3]);

	// console.log("mathSymbol", mathSymbol);
	// console.log("num1", num1);
	// console.log("num2", num2);

	let answer;
	switch (mathSymbol){
		case "+" :
			if(!num3){
				answer = num1 + num2;
				console.log(`${num1} + ${num2} = ${answer}`)
			} else {
				answer = num1 + num2 + num3;
				console.log(`${num1} + ${num2} + ${num3} = ${answer}`);
			}
			break
		case "-" :
			if(!num3){
				answer = num1 - num2;
				console.log(`${num1} - ${num2} = ${answer}`)
			} else {
				answer = num1 - num2 - num3;
				console.log(`${num1} - ${num2} - ${num3} = ${answer}`);
			}
			break
		case "*" :
			if(!num3){
				answer = num1 * num2;
				console.log(`${num1} * ${num2} = ${answer}`)
			} else {
				answer = num1 * num2 * num3;
				console.log(`${num1} * ${num2} * ${num3} = ${answer}`);
			}
			break
		case "/" :
			if(!num3){
				answer = num1 / num2;
				console.log(`${num1} / ${num2} = ${answer}`)
			} else {
				answer = num1 / num2 / num3;
				console.log(`${num1} / ${num2} / ${num3} = ${answer}`);
			}
			break
		case "sqrt" :
			answer = Math.sqrt(num1);
			console.log(`The Square Root of ${num1} is ${answer}`)
			break
		case "sqr" :
			answer = num1 * num1;
			console.log(`The square of ${num1} is ${answer}`)
			break
		case "^3" :
			answer = Math.pow(num1, 3);
			console.log(`${num1}^3 = ${answer}`)
			break
		case "^" :
			answer = Math.pow(num1, num2);
			console.log(`${num1}^${num2} = ${answer}`)
			break
		case "%" :
			answer = num1 % num2;
			console.log(`${num1} % ${num2} = ${answer}`)
			break
	}
	// This line closes the connection to the command line interface.
	reader.close()
});

