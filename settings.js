const inputs = document.querySelectorAll(".chordType")
// her untjekker jeg dem jeg untjekkede sdiste gang, så den gemmer det
let foundBannedChords = JSON.parse(localStorage.getItem("banned"))
console.log(foundBannedChords)
if (foundBannedChords !== null) {
    foundBannedChords.forEach(idName => {
        console.log("check")
        document.getElementById(idName).checked = false
    })
}



console.log(inputs)
inputs.forEach(element => {
    element.addEventListener("input", inputChange)
    console.log(element)
})


function inputChange(evt) {
    //først tager jeg fat i min localstorage item
    let bannedChords = JSON.parse(localStorage.getItem("banned"))
    console.log(bannedChords)
    if (bannedChords == null) {
        bannedChords = []
    }
    console.log(this.checked)
    let checkVal = this.checked
    if (!checkVal) {
        bannedChords.push(this.getAttribute("id"))
        console.log(bannedChords)
        const bannedChordsSend = JSON.stringify(bannedChords)

        localStorage.setItem("banned", bannedChordsSend)
    }else{
        const indexofRemove = bannedChords.indexOf(this.getAttribute("id"))
        console.log(indexofRemove)
        bannedChords.splice(indexofRemove, 1)
       
        localStorage.setItem("banned", JSON.stringify(bannedChords))
    }
}