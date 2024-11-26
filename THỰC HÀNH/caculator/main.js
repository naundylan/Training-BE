const result = document.getElementById("result");

function add() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    result.textContent = num1 + num2;
}

function subtract() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    result.textContent = num1 - num2;
}

function multiply() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    result.textContent = num1 * num2;
}

function divide() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    result.textContent = num1 / num2;
}