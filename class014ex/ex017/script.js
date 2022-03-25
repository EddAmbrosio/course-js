function generate() {
    var boxfield = window.document.querySelector("input#boxnumber")
    var b0xfield = Number.parseInt(boxfield.value)
    var res = window.document.querySelector("div#res")
    if (boxfield.value.length == 0) {
        window.alert("Please type a number on the box field!")
    } else {
        var c = 1
        while (c <= 10) {
            res.innerHTML += `${b0xfield} X ${c} = ${b0xfield * c } </br>`
            var c = c + 1
        }
    }
}