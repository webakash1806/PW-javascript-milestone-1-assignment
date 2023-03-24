function cls() {
    document.getElementById("shirt").value = ""
    document.getElementById("jeans").value = ""
    document.getElementById("tshirt").value = ""
    document.getElementById("sweatshirt").value = ""
    document.getElementById("res").innerHTML = ""
}


function sub() {
    let arr = [];
    let shirt = parseInt(document.getElementById("shirt").value) || 0;
    let jeans = parseInt(document.getElementById("jeans").value) || 0;
    let tshirt = parseInt(document.getElementById("tshirt").value) || 0;
    let sweatshirt = parseInt(document.getElementById("sweatshirt").value) || 0;
    arr.push(shirt, jeans, tshirt, sweatshirt);
    let resultHtml = ""
    let total = 0;
    let totalArr = []
    arr.forEach((quantity, index) => {
        total = quantity * 2;
        totalArr.push(total)

    });
    resultHtml += "Shirt :" + totalArr[0] + '</p>';
    resultHtml += "Jeans :" + totalArr[1] + '</p>';
    resultHtml += "T-Shirt :" + totalArr[2] + '</p>';
    resultHtml += "Sweatshirt :" + totalArr[3] + '</p>';
    document.getElementById("res").innerHTML = resultHtml

}









