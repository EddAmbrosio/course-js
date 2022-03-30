let button = window.document.querySelector("input#but")
button.addEventListener("click", ch3cking)

function endup() {

}
let boxtxt = window.document.querySelector("input#nfield")
let vector = []
function ch3cking() {
    let boxnum = Number.parseInt(boxtxt.value)
    let val = vector.indexOf(boxnum)
    if(boxnum > 100 || boxnum < 1 || boxtxt.value.length == 0) {
        window.alert("Please, type a valid number!")
    } else if(val == -1) {  
        vector.push(boxnum)
        let position = vector.indexOf(boxnum)
        let boxtest = window.document.querySelector("select#boxtxt")
        let list = document.createElement("option");
        list.text = `The value ${vector[position]} was added.`
        boxtest.appendChild(list)       
    } else {
        window.alert("This number has been already typed!")    
        }
}  

        

/*
else {
    window.alert("This number has been already typed!")    
    }
*/