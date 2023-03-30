function cls() {
    document.getElementById("shirtPrice").value = ""
    document.getElementById("shirtQua").value = ""
    document.getElementById("jeansPrice").value = ""
    document.getElementById("jeansQua").value = ""
    document.getElementById("tshirtPrice").value = ""
    document.getElementById("tshirtQua").value = ""
    document.getElementById("sweatshirtPrice").value = ""
    document.getElementById("sweatshirtQua").value = ""
    document.getElementById("totalPrice").innerHTML = "Total Price : "
}

function sub() {
    let shirtPrice = document.getElementById("shirtPrice").value
    let shirtQua = document.getElementById("shirtQua").value
    let jeansPrice = document.getElementById("jeansPrice").value
    let jeansQua = document.getElementById("jeansQua").value
    let tshirtPrice = document.getElementById("tshirtPrice").value
    let tshirtQua = document.getElementById("tshirtQua").value
    let sweatshirtPrice = document.getElementById("sweatshirtPrice").value
    let sweatshirtQua = document.getElementById("sweatshirtQua").value
    let totalCost = 0
    let arr = [
        { price: shirtPrice, Qua: shirtQua },
        { price: jeansPrice, Qua: jeansQua },
        { price: tshirtPrice, Qua: tshirtQua },
        { price: sweatshirtPrice, Qua: sweatshirtQua }
    ]
    arr.forEach((item) => {
        totalCost += parseInt(item.price * item.Qua);
    });
    document.getElementById("totalPrice").innerHTML = `Total Price : ${totalCost}`
}