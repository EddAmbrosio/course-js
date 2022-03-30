let button = window.document.querySelector("input#but")
button.addEventListener("click", ch3cking)
let res = window.document.querySelector("div#res")
let boxtxt = window.document.querySelector("input#nfield")
let vector = []

function ch3cking() {
    res.innerHTML = " "
    let boxnum = Number.parseInt(boxtxt.value)
    boxtxt.innerHTML = " "
    let val = vector.indexOf(boxnum)
    if(boxnum > 100 || boxnum < 1 || boxtxt.value.length == 0) {
        window.alert("Please, type a number between 0 and 101!")
    } else if(val == -1) { 
        vector.push(boxnum)
        boxtxt.value = " "
        boxtxt.focus()
        let position = vector.indexOf(boxnum)
        let boxtest = window.document.querySelector("select#boxtxt")
        let list = document.createElement("option");
        list.text = `The value ${vector[position]} was added.`
        boxtest.appendChild(list)      
    } else {
        window.alert("This number has been already added!") 
        boxtxt.value = " " 
        boxtxt.focus()  
        }
}  

function endup() { 
    if(vector.length >= 1) {
        var amount = 0; var biggest = 0; var smallest = 101; var average = 0; var amount2 = 0;
        for(let index0 in vector) {
            amount = vector[index0] + amount
        }
        for (let index1 in vector) {
            if (vector[index1] > biggest)
            biggest = vector[index1]
        }
        for (let index2 in vector) {
            if (vector[index2] < smallest)
            smallest = vector[index2]
        }
        for(let index3 in vector) {
            amount2 = vector[index3] + amount2
            average = amount2/(vector.length)
        }
        res.innerHTML = `<p>In all, we have ${vector.length} numbers!</p>`
        res.innerHTML += `<p>The plus of the numbers is ${amount}!</p>`
        res.innerHTML += `<p>The biggest value added was ${biggest}!</p>`
        res.innerHTML += `<p>The smallest value added was ${smallest}!</p>`
        res.innerHTML += `<p>The average of the numbers is ${average}!</p>`
    } else {
        window.alert("Type a value before you click FINISH!")
    }
}