function checkNum(a) {

    if (isNaN(a)) {
        return  "false"
    }else {
        return "true"
    }
}
let number = +prompt("nhap number")
document.write(checkNum(number))