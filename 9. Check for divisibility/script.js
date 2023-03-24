let num = [32, 33, 34, 35, 36, 39, 40, 12, 3]

for (let a of num) {
    if (a % 3 == 0) {
        if (a % 2 != 0) {
            console.log(a);
        }
    }
}

// OR WE CAN DO THE SAME FROM BELOW CODE


// let finNum = num.filter((element) => {
//     return element % 2 != 0 && element % 3 == 0
// })
// for (let a of finNum)
//     console.log(a);