function cls() {
    document.getElementById("inp").value = ""
    document.getElementById("res").innerHTML = "Total Vowel is : "
}


function sub() {

    let input = document.getElementById("inp").value.toLowerCase()
    const vowel = ['a', 'e', 'i', 'o', 'u']
    let vowelsCount = 0

    for (let character of input) {
        console.log(character);
        if (vowel.includes(character)) {
            vowelsCount++
        }
    }

    document.getElementById("res").innerHTML = `Total Vowel is : ${vowelsCount}`

}