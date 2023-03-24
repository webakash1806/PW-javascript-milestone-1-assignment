let i = 6
let pattern = ""
for (let n = 1; n <= i; n++) {
    for (let num = 1; num <= 7 - n; num++) {
        pattern += "*"
    }
    pattern += "\n"
}
console.log(pattern);