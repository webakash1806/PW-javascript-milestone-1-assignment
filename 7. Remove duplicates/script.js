function cls() {
    document.getElementById("withoutDuplicacy").value = ""
    document.getElementById("duplicacy").value = ""
    cart = []
}


let cart = []

function shirt() {
    let shirt = document.getElementById("shirt").value
    cart.push(shirt)
    alert("item added to cart")
    document.getElementById("duplicacy").value = cart
}

function jeans() {
    let jeans = document.getElementById("jeans").value
    cart.push(jeans)
    alert("item added to cart")
    // console.log(cart);
    document.getElementById("duplicacy").value = cart
}

function tshirt() {
    let tShirt = document.getElementById("tShirt").value
    cart.push(tShirt)
    alert("item added to cart")
    // console.log(cart);
    document.getElementById("duplicacy").value = cart
}

function sweatshirt() {
    let SweatShirt = document.getElementById("SweatShirt").value
    cart.push(SweatShirt)
    alert("item added to cart")
    // console.log(cart);
    document.getElementById("duplicacy").value = cart
}



function removeDuplicates(cart) {
    let newCart = cart.filter((item, index) => cart.indexOf(item) === index)
    // console.log(newCart);

    document.getElementById("withoutDuplicacy").value = newCart
}

