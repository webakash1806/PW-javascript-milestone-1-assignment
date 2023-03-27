function sub() {
    let a = "0123456789ABCDEF"
    let hash = "#"
    for (let i = 0; i < 6; i++) {
        hash = hash + a[Math.floor(Math.random() * 16)]
        // console.log(colCode);
    }
    document.body.style.backgroundColor = hash
}