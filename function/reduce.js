// perform operation and reduces array in to a single value . it basically return a single value
let arr7 = [1,20,30,40];
const ans = arr7.reduce((prev,cur) => {
    return prev > cur ? prev : cur ;
});
console.log(ans);