function checkNum(a,b){
    let count = 0
    for (let i = 0 ;i<a.length;i++){
        if (a[i]===b){
            count++
        }
    } if (count===0) {
        count = -1
    }
    return count
}
let array = [1,3,5,7,9,1,3,5,7,9]
let number = +prompt()
document.write(checkNum(array,number))