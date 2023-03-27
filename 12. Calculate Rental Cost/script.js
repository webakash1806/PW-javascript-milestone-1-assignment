function res() {
    document.getElementById("day").value = ""
    document.getElementById("result").value = ""
}


function finSub() {
    let noOfDays = document.getElementById("day").value

    let finalResult
    if (document.getElementById("carType1").checked && noOfDays != 0) {
        finalResult = noOfDays * 4000
    }

    else if (document.getElementById("carType2").checked && noOfDays != 0) {
        finalResult = noOfDays * 10000
    }

    else if (document.getElementById("carType3").checked && noOfDays != 0) {
        finalResult = noOfDays * 20000
    }

    else if (noOfDays == 0) {
        alert("No of days should be more than 0")
    }

    else {
        alert("Types of car Info. Should be needed")
    }

    document.getElementById("result").value = finalResult

}
