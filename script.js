// Result
let result = document.querySelector(".result");

// Function to update the result text
function updateResult(text) {
    result.textContent = text;
}





// First number
let num1;
let buttons = Array.from(document.querySelectorAll(".num"));

// Map through the Array to assign Event listeners
buttons.map(button => {
    button.addEventListener("click", event => {
        num1 = event.target.textContent
        updateResult(num1)
    })
})