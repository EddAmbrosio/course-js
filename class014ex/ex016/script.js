function c0unt() {
    var start = window.document.querySelector("input#stepone");
    var n1 = Number.parseInt(start.value);
    var end = window.document.querySelector("input#steptwo");
    var n2 = Number.parseInt(end.value);
    var jump = window.document.querySelector("input#jumpoff");
    var n3 = Number.parseInt(jump.value);
    var res = window.document.querySelector("div#res");

    if (start.value.length == 0) {
        window.alert("Please, type a valid number on the firt box field!")
    } else if (end.value.length == 0) {
        window.alert("Please, type a valid number on the second box field!")
    } else if (jump.value.length == 0) {
        window.alert("Please type a valid number on the third box field!")
    } else if (n1 >= n2) { 
        window.alert("Please, type a bigger number on the second box field")
    } else if (n3 > n2) {
        window.alert("Please type smaller number on the third box or a bigger on the second one!")
    } else {
        do {
            res.innerHTML += `${n1} `
            var n1 = n1 + n3
        } while (n1 <= n2)
}       
}