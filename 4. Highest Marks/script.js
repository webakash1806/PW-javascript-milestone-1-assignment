function res() {
    let inp1 = document.getElementById("input1").value
    let inp2 = document.getElementById("input2").value
    let inp3 = document.getElementById("input3").value
    let inp4 = document.getElementById("input4").value
    let inp5 = document.getElementById("input5").value

    if (inp1 && inp2 && inp3 && inp4 && inp5) {
        let allMarks = [inp1, inp2, inp3, inp4, inp5];
        if (inp1 <= 1000 && inp2 <= 1000 && inp3 <= 1000 && inp4 <= 1000 && inp5 <= 1000) {
            // console.log(allMarks)
            let largest = allMarks[0];
            for (let i = 1; i < allMarks.length; i++) {
                if (allMarks[i] > largest) {
                    largest = allMarks[i];
                }
            }

            let finalResult = document.getElementById("resultPrint")
            finalResult.value = largest
        }
        else {
            alert("Input Below 10 digit")
        }
    }
    else {
        alert("Fill all five boxes");
    }
}

function clearInput() {
    document.getElementById("input1").value = ""
    document.getElementById("input2").value = ""
    document.getElementById("input3").value = ""
    document.getElementById("input4").value = ""
    document.getElementById("input5").value = ""
    document.getElementById("resultPrint").value = ""
}
