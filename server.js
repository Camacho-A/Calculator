require("dotenv").config();

const express = require("express")
const app = express()




app.get("/calc/:num1/:num2", (request, response) => {
	// this is a test to ensure we have the correct path
	// console.log(request.params.num1,
	// request.params.num2,
	// The params come in as strings
	// typeof request.params.num1)

	// to add them together as numbers they must be parseInt'ed or Number()'ed
	const num1 = parseInt(request.params.num1)
	const num2 = parseInt(request.params.num2)

	// this is consider dry code
	//  DRY code is a software principle that stands for Don’t Repeat Yourself (DRY), where the goal is to reduce the repetition of code.
	const operation = request.query.operation

	// where as Write Everything Twice (WET) is a cheeky abbreviation to mean the opposite i.e. code that doesn’t adhere to DRY principle.

	//  conditional statement
	if (operation === "add") {
		response.send(`the sum is ${num1 + num2}`)
	} else if (operation === "subtract") {
		response.send(`the value is ${num1 - num2}`)
	} else if (operation === "multiply") {
		response.send(`the value is ${num1 * num2}`)
	} else if (operation === "divide") {
		response.send(`the value is ${num1 / num2}`)
    } else {
        response.send("No Operation")
    }
})

app.listen(process.env.PORT, () => {
	console.log(`Express is listening on port: ${process.env.PORT}`)
})
