var time = new Date()
var weekdays = time.getDay()
/*
    0 - sunday
    1 - monday ichi
    2 - tuesday ni
    3 - wednesday san
    4 - thursday
    5 - friday
    6 - saturday
 */

switch (weekdays) {
    case 0:
        console.log("Sunday")
        break
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    default:
        console.log("Saturday")
        break
}