function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
    document.write("a="+ a+ "b=" + b)
}
let a = +prompt("nhap a")
let b = +prompt("nhap b")
swap(a,b)