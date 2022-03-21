var age = 20
console.log(`You're ${age} years old!`)
if (age < 16) {
    console.log("Underage! You can't vote for!")
} else if (age < 18 || age > 65) {
        console.log("If you want to, you can vote for!")
    } else {
        console.log("You must vote for!!!")
    }
 