function c0unt() {
var boxstart = window.document.querySelector("input#stepone");
var boxend = window.document.querySelector("input#steptwo");
var jump = window.document.querySelector("input#jumpoff");
var res = window.document.querySelector("div#res");

var boxstart1 = boxstart.value;
var boxend1 = boxend.value;
var jump1 = jump.value;

while (boxstart1 < boxend1) {
    var b0xstart = boxstart1
    boxstart1 += jump1
    res.innerHTML += `${b0xstart}, ${boxstart1}, ${boxend1}`
} 
    
}