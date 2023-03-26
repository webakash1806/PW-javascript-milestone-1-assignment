function sub() {

    let cel = document.getElementById("inp").value
    let f = ((cel * 9) / 5) + 32
    document.getElementById("result").innerHTML = `Fahrenheit : ${f.toFixed(2)} `
    console.log(f);
}