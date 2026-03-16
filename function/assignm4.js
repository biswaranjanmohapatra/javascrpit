let n = prompt("enter a number");
let arr = [];
for(let i = 1;i <= n;i++){
    arr[i-1] = i;
}
let arrnew = arr.reduce((cur,prev) => {
    return cur + prev ;
});
console.log(arrnew);

let arrnew1 = arr.reduce((cur,prev) => {
    return cur * prev ;
});
console.log(arrnew1);