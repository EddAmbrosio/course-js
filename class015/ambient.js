/*let num = [1, 5, 8]

num[3] = 10

num.push(7)
num.length // tell the linear measurement of the vector
num.sort() // put the elements into vector in crescent order
*/

let num = [5, 8, 12]
num.push(8)
num.sort()
console.log(num)
console.log(`${num}`)
console.log(`My vector has ${num.length} positions!`)
console.log(`My first value is ${num[0]}!`)

let pos = num.indexOf(8)
console.log(pos)