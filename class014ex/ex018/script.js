function ch3cking() {
    let start = window.document.querySelector("input#start")
    let end = window.document.querySelector("input#end")
    let jump = window.document.querySelector("input#jumpoff")
    let res = window.document.querySelector("div#res")

    if (start.value.length == 0 || end.value.length == 0 || jump.value.length == 0) {
        window.alert("Data incorrect! Plase type again!")
    } else if (start.value < end.value) {
        res.innerHTML = "Counting: \u{1F603}"
        let s = Number(start.value)
        let e = Number(end.value)
        let j = Number(jump.value)

        for(let c = s; c <= e; c += j) {
            res.innerHTML += ` ${c} `
        }
    } else if (end.value < start.value) {
        res.innerHTML = "Counting: \u{1F603}"
        let s = Number(start.value)
        let e = Number(end.value)
        let j = Number(jump.value)

        for(let c = s; c >= e; c -= j) {
            res.innerHTML += ` ${c} `
        }
    }
}