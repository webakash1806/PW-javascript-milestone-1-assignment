function res() {

    let input1 = document.getElementById("inp1").value
    let arr = input1.split(" ")


    arr.forEach((element, index) => {
        arr[index] = arr[index].charAt(0).toUpperCase() + arr[index].slice(1)
    });

    let fin = arr.join(" ")
    document.getElementById("result").value = fin
}

