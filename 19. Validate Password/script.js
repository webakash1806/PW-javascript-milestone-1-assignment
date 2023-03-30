function cls() {
    document.getElementById("mailId").value = ""
    document.getElementById("idPass").value = ""
    document.getElementById("res").innerHTML = ""
}

function sub() {
    let mailId = document.getElementById("mailId").value
    let idPass = document.getElementById("idPass").value
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (mailId.match(mailFormat) && idPass.length >= 8) {
        document.getElementById("res").innerHTML = "LOGIN SUCCESSFULL!"
        document.getElementById("res").style.color = "green"
    }
    else {
        document.getElementById("res").innerHTML = "** Invalid email Or password!"
        document.getElementById("res").style.color = "red"
    }
}