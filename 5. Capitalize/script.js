function res() {

    let input1 = document.getElementById("inp1").value
    let arr = input1.split(" ")


    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }

    let fin = arr.join(" ")
    document.getElementById("result").value = fin
}

