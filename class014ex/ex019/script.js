function t4ble() {
let b0x = window.document.querySelector("input#gerade");
let table = window.document.querySelector("select#table");
let n = Number.parseInt(b0x.value);
    if (b0x.value.length == 0) {
        window.alert("Please type a valid number on the box field!");
    } else {
        table.innerHTML = " "
        for(let c = 1; c <= 10; c ++) {
            let item = document.createElement("option"); // it create an "element option" into select element
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `${c}` // tell to some languages which column has been selected
            table.appendChild(item)// add a child into table element which is the item
        }
    }
}