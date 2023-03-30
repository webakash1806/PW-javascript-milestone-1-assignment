function res() {
    document.getElementById("password").value = ""
    document.getElementById("confirmpassword").value = ""
    document.getElementById("message").innerHTML = ""
}



function btn() {
    let pas = document.getElementById("password").value
    let confirm = document.getElementById("confirmpassword").value
    let msg = document.getElementById("message")



    if ((pas.length != 0) & (confirm.length != 0) & (pas.length > 8) & (confirm.length > 8)) {
        if (pas == confirm) {
            msg.textContent = "Password Matched"
            alert("Password Matched")
            msg.style.color = "1A8F14"
            console.log("Password Matched. Password Validation Successfull")
        }
        else {
            msg.textContent = "Password Not Matched"
            alert("Password Not Matched")
            msg.style.color = "E41D1D"
            console.log("Password Not Matched. Password Validation Unsuccessfull")
        }
    }
    else {
        msg.textContent = ""
        alert("Password should be greater than 8 digits")
    }
}