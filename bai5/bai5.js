function min(a,b,c){
    if (a<b && a <c){
        return a+"la so nho nhat"
    }else if ( b<c) {
        return  b+" la so nho nhat"
    } else {
        return  c+"la so nho nhat"
    }
}
let a = +prompt( "nhap a")
let b = +prompt( "nhap b")
let c = +prompt( "nhap c")
document.write(min(a,b,c))