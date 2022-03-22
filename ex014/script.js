function timecurrent() {
    var msg = window.document.querySelector("div#message");
    var messab = window.document.querySelector("div#picture");
    var time = new Date();
    var tim3 = time.getHours();
    var min = new Date();
    var m1n = min.getMinutes();
    msg.innerHTML = `Now it's ${tim3} ${m1n} o'clock!`;
    if (tim3 >= 0 && tim3 < 6) {
        messab.innerHTML += "<br/> Good Midnight"
        window.document.body.style.background = "#363e48"
    }
    if (tim3 >= 6 && tim3 <= 13) {
        messab.innerHTML = "<img src='images/morning.png' alt='Morning Picture' title='Morning Picture'> <br/> Good Morning!"
        window.document.body.style.background = "#fed58d"
    } else if (tim3 > 13 && tim3 < 18) {
        messab.innerHTML = "<img src='images/afternoon.png' alt='Afternoon Picture' title='Afternoon Picture'> <br/> Good Afternoon!"
        window.document.body.style.background = "#d6d699"
    } else if (tim3 >= 18 && tim3 <= 21) {
        messab.innerHTML = "<img src='images/evening.png' alt='Evening Picture' title='Evening Picture'> <br/> Good Evening!"
        window.document.body.style.background = "#762f27"
    } else if (tim3 > 21 && tim3 <= 23) {
        messab.innerHTML = "<img src='images/night.png' alt='Night Picture' title='Night Picture'> <br/> Good Night!"
        window.document.body.style.background = "#453851"
    }
}