function dienTich(a){
    S = Math.PI*Math.pow(a,2)
    return S
}
function chuVi(a){
    C = 2* Math.PI* a
    return C
}
let number = +prompt("nhap ban kinh")
document.write(dienTich(number).toFixed(1)+"<br>" )
document.write(chuVi(number).toFixed(1))