// Declaring variables
let result = document.querySelector(".result");
let num1 = ""
let num2 = ""
let output = ""
let op = ""

// Function to update the result text
function updateResult(text) {
    result.textContent = text;
}



// Clear
const clear = Array.from(document.querySelectorAll(".clear"))

// Map through the Array to assign Event listeners
clear.map(item => item.addEventListener("click", event => {
    num1 = ""
    num2 = ""
    operatorSelected = false
    enteringSecondNumber = false
    updateResult(num1)
}))


// What state am I in
let enteringFirstNumber = true
let operatorSelected = false
let enteringSecondNumber = false


// Assign EventListeners to every button,
// so that I an easily update state depending on what button has been pressed
let numberButtons = Array.from(document.querySelectorAll(".num"))
let operatorButtons = Array.from(document.querySelectorAll(".op"))

numberButtons.map(item => item.addEventListener("click", event => {
    if (enteringFirstNumber == true) {
        num1 += event.target.textContent
        updateResult(num1)
    }
    if (enteringSecondNumber == true) {
        num2 += event.target.textContent
        updateResult(num2)
    }
}))

operatorButtons.map(item => item.addEventListener("click", event => {
    if (num1 != "") {
        op = event.target.textContent
        // console.log(op)
        enteringFirstNumber = false
        enteringSecondNumber = true
        operatorSelected = true
        
        if (num1 != "" && num2 != "" && operatorSelected == true) {
            switch (op) {
                case "+": {
                    output = add(num1, num2)
                    enteringFirstNumber = true
                    enteringSecondNumber = false
                    operatorSelected = false
                    break;
                }
                case "-": {
                    output = sub(num1, num2)
                    enteringFirstNumber = true
                    enteringSecondNumber = false
                    operatorSelected = false
                    break;
                }
                case "*": {
                    output = mult(num1, num2)
                    enteringFirstNumber = true
                    enteringSecondNumber = false
                    operatorSelected = false
                    break;
                }
                case "/": {
                    output = div(num1, num2)
                    enteringFirstNumber = true
                    enteringSecondNumber = false
                    operatorSelected = false
                    break;
                }
            }
            updateResult(output)
            console.log(output)
            console.log(num1, num2, op)
            console.log(typeof num1, typeof num2, typeof output)
            num1 = output
            num2 = ""
        // Checks if a function ran, which means that
        // the user is now entering the first number again!
        
        }
    }
}))

let equalsButton = document.querySelector(".eq")
equalsButton.addEventListener("click", event => {
    if (num1 != "" && num2 != "" && operatorSelected == true) {
        switch (op) {
            case "+": {
                output = add(num1, num2)
                break;
            }
            case "-": {
                output = sub(num1, num2)
                break;
            }
            case "*": {
                output = mult(num1, num2)
                break;
            }
            case "/": {
                output = div(num1, num2)
                break;
            }
        }
        updateResult(output)
        console.log(output)
        console.log(num1, num2, op)
        console.log(typeof num1, typeof num2, typeof output)
        num1 = output
        num2 = ""
        enteringFirstNumber = true
        enteringSecondNumber = false
        operatorSelected = false
    }
})

// Basic Math functions
const add = (num1, num2) => Number(num1) + Number(num2)
const sub = (num1, num2) => Number(num1) - Number(num2)
const mult = (num1, num2) => Number(num1) * Number(num2)
const div = (num1, num2) => Number(num1) / Number(num2)