let operator = "";

function setOperator(id) {
    operator = id;
    console.log(operator);
}

function cls() {
    document.getElementById("num1").value = ""
    document.getElementById("num2").value = ""
    document.getElementById("finres").innerHTML = ""
}

document.getElementById("multiplyBtn").innerHTML = "X"
document.getElementById("divideBtn").innerHTML = "÷"
document.getElementById("subtractBtn").innerHTML = "-"

function res() {
    let first = document.getElementById("num1").value;
    console.log(first);

    let second = document.getElementById("num2").value;
    console.log(second);

    let res = 0; // Initialize the result variable

    switch (operator) {
        case "multiplyBtn":
            res = first * second;
            break;
        case "divideBtn":
            res = first / second;
            break;
        case "addBtn":
            res = parseInt(first) + parseInt(second); // Convert the strings to numbers before addition
            break;
        case "subtractBtn":
            res = first - second;
            break;
        default:
            alert("Invalid operator"); // Alert the user about invalid input
            break;
    }

    document.getElementById("finres").innerHTML = `Result: ${res}`;
}