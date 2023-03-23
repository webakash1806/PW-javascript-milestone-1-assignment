function clear1() {
    document.getElementById("color1").value = ""
}

function clear2() {
    document.getElementById("color2").value = ""
}

function btn1() {

    let c1 = document.getElementById("color1").value
    let c2 = document.getElementById("color2").value

    let msg = document.getElementById("res")

    switch (c1) {
        case "red":
            switch (c2) {
                case "blue":
                    // alert("purple")
                    msg.textContent = "*PURPLE"
                    document.getElementsByTagName("body")[0].style.backgroundColor = "#9B1FE8"
                    break;
                case "yellow":
                    // alert("orange")
                    msg.textContent = "*ORANGE"
                    document.getElementsByTagName("body")[0].style.backgroundColor = "#F25815"
                    break;
                default:
                    // alert("no")
                    msg.textContent = "*Invalid"
                    break;
            }
            break;
        case "blue":
            switch (c2) {
                case "red":
                    msg.textContent = "*PURPLE"
                    document.getElementsByTagName("body")[0].style.backgroundColor = "#9B1FE8"
                    break;
                case "yellow":
                    msg.textContent = "*GREEN"
                    document.getElementsByTagName("body")[0].style.backgroundColor = "#00F700"
                    break;
                default:
                    msg.textContent = "*Invalid"
                    break;
            }
            break;
        case "yellow":
            switch (c2) {
                case "red":
                    msg.textContent = "*ORANGE"
                    document.getElementsByTagName("body")[0].style.backgroundColor = "#F25815"
                    break;
                case "blue":
                    msg.textContent = "*GREEN"
                    document.getElementsByTagName("body")[0].style.backgroundColor = "#00F700"
                    break;
                default:
                    msg.textContent = "Invalid"
                    break;
            }
            break;
        default:
            msg.textContent = "invalid first color";
            break;

    }

}