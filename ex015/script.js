function ch3cking() {
    var nowad4ys  = new Date();
    var now4days = nowad4ys.getFullYear();
    var box = window.document.querySelector("input#textbox");
    var desc = window.document.querySelector("div#res");
    var b0x = box.value.length
    if (b0x == 0 || b0x < 4 || box.value > now4days) {
        window.alert("[ERROR] Please type a valid text on the box field!")
    } else {
        var sex = window.document.getElementsByName("sex");
        var age = now4days - box.value
        var xsex = " "
        var img = document.createElement("img")
        img.setAttribute("id", "photo")
        if (sex[0].checked) {
            var xsex = "woman"
            if (age > 0 && age < 4) {
                //babywoman
                img.setAttribute("src", "image/baby_woman.png")
            } else if (age >= 4 && age < 9) {
                //childwoman
                img.setAttribute("src", "image/child_woman.png")
            } else if (age >= 9 && age < 15) {
                //teenwoman
                img.setAttribute("src", "image/teen_woman.png")
            } else if (age >= 15 && age < 27) {
                //youngwoman
                img.setAttribute("src", "image/young_woman.png")
            } else if (age >= 27 && age < 42) {
                //maturewoman
                img.setAttribute("src", "image/mature_woman.png")
            } else if (age >= 42 && age < 65) {
                //oldwoman
                img.setAttribute("src", "image/old_woman.png")
            } else {
                //elderlywoman
                img.setAttribute("src", "image/elderly_woman.png")
            }
        } else if (sex[1].checked) {
            var xsex = "man"
            if (age > 0 && age <4) {
                //babyman
                img.setAttribute("src", "image/baby_man.png")
            } else if (age >= 4 && age < 9) {
                //childman
                img.setAttribute("src", "image/child_man.png")
            } else if (age >= 9 && age < 15) {
                //teenman
                img.setAttribute("src", "image/teen_man.png")
            } else if (age >= 15 && age < 27) {
                //youngman
                img.setAttribute("src", "image/young_man.png")
            } else if (age >= 27 && age < 42) {
                //matureman
                img.setAttribute("src", "image/mature_man.png")
            } else if (age >= 42 && age < 65) {
                //oldman
                img.setAttribute("src", "image/old_man.png")
            } else {
                //elderlyman
                img.setAttribute("src", "image/elderly_man.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `You're a ${xsex} with ${age} years old!`
        res.appendChild(img)
    }

}