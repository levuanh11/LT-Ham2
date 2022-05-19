function giaiThua(a){
    if ( a === 2)
        return 2
        return a*giaiThua(a-1)
}
let number = +prompt("nhap number")
document.write(giaiThua(number))