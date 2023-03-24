function cls() {
    document.getElementById("dish1").value = ""
    document.getElementById("dish2").value = ""
    document.getElementById("dish3").value = ""
    document.getElementById("dish4").value = ""
    document.getElementById("resTotal").value = ""
    document.getElementById("resSplit").value = ""
    document.getElementById("noOfPeople").value = ""
}






function sub() {
    let amountArr = []
    let noOfPeople = document.getElementById("noOfPeople").value
    let dish1 = document.getElementById("dish1").value
    let dish2 = document.getElementById("dish2").value
    let dish3 = document.getElementById("dish3").value
    let dish4 = document.getElementById("dish4").value
    amountArr.push(dish1, dish2, dish3, dish4)
    console.log(amountArr);
    let sum = 0
    amountArr.forEach((element) => {
        sum += parseInt(element)
    })
    let s = {
        totalbill: sum,
        amountsplit: sum / noOfPeople
    }
    console.log(s);
    // console.log(s.totalbill)
    document.getElementById("resTotal").value = s.totalbill
    document.getElementById("resSplit").value = s.amountsplit
}

