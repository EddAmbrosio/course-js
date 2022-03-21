var now = new Date()
var time = now.getHours()
console.log(`Now it's ${time} o'clock!`)
if (time < 12 ) {
    console.log("Good Morning!")
} else if (time < 18 ) {
    console.log("Good Afternoon!")
} else if (time < 22) {
    console.log("Good Evening!")
} else {
    console.log("Good Night!")
}