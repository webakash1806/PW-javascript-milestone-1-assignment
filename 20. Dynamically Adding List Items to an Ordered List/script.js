let i = 0
function add() {
    let eleArr = ["Projects using HTML & CSS", "Version Control and Git", "Getting Started with JavaScript", "Advance JavaScript"]
    // let node = document.getElementById("main")
    let node
    if (i < eleArr.length) {
        node = document.createElement("li")
        let textnode = document.createTextNode(eleArr[i])
        node.appendChild(textnode)
        i = i + 1
    }
    else {
        document.getElementById("res").innerHTML = " All items have been added!"
        document.getElementById("res").style.color = "red"
    }
    document.getElementById("main").appendChild(node)
}