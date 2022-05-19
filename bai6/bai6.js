function checkNum(a){
    if (a>0){
        return "true"
    }else {
        return "false"
    }
}
let number = +prompt("nhap number")
document.write(checkNum(number))