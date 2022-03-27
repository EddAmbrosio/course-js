//RECURSIVIDADE
/*function factorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(5))*/

function factorial(n) {
    let fact = 1
    for(n = 5; n >1; n--) {
        fact *= n
    }
    return fact
}

console.log(factorial(8))
