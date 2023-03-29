function sub() {
    let textHead = document.getElementById("textHead")
    console.log(textHead);
    if (textHead.innerHTML === "The most affordable learning platform") {
        textHead.innerHTML = "PW Skills"
    }
    else {
        textHead.innerHTML = "The most affordable learning platform"
    }
}