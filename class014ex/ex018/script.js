function ch3cking() {
    let start = window.document.querySelector("input#start")
    let end = window.document.querySelector("input#end")
    let jump = window.document.querySelector("input#jumpoff")
    let res = window.document.querySelector("div#res")

    if (start.value.length == 0 || end.value.length == 0 || jump.value.length == 0) {
        window.alert("Data incorrect! Plase type again!")
    } else {
        res.innerHTML = "Counting: \u{1F603}"
        let ns = Number(start.value)
        let ne = Number(end.value)
        let nj = Number(jump.value)
        let nc = ns

        while(nc <= ne) {
            res.innerHTML += `${c} `
            let nc = nc + nj
        }  
    }
}