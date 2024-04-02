import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { message: "enter your first number", type: "number", name: "firstNumber" },
    { message: "enter your second number", type: "number", name: "secondNumber" },
    { message: "select one of operator to perform action ",
    type: "list", 
    name: "operator", 
    choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
 },
])

// CONDITIONAL STATMENT
if (answer.operator === "ADDITION"){
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "SUBTRACTION"){
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "MULTIPLICATION"){
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "DIVISION"){
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("Please select a correct operator");
}

