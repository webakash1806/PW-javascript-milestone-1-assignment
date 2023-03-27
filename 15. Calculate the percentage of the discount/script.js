function cls() {
    document.getElementById("price").value = ""
    document.getElementById("disPer").value = ""
    document.getElementById("finalPrice").innerHTML = "Final Price :"
    document.getElementById("savingPrice").innerHTML = "Total Savings : "
}


function sub() {
    let price = document.getElementById("price").value
    let disPer = document.getElementById("disPer").value

    if (disPer > 0 && disPer <= 90 && price > 0) {
        let discountedPrice = (price * disPer) / 100
        let finalPrice = price - discountedPrice
        // let moneySaves = price - discountedPrice
        document.getElementById("finalPrice").innerHTML += finalPrice
        document.getElementById("savingPrice").innerHTML += discountedPrice
    }
    else {
        alert("Price Should be above 0 and Dicount % should be below 90 and above 0")
    }

}