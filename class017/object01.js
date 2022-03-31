let friend = {
    name: "Hina", 
    sex: "female", 
    height: 1.66, 
    weight: 65.7, 
    bodyfat(p=0) {
        console.log("It's fat!")
        this.weight += p
    }
}
friend.bodyfat(15)
console.log(`${friend.name} weights ${friend.weight}kgs!`)