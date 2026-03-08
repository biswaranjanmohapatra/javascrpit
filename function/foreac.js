// a callback function passed as an argument to another function
let arr1 = [1,3,5,7,88,90];
arr1.forEach((val) => {
    console.log(val);
});
//forEach() is used to perform a specific task
let arr2 = ["delhi","mumbai","pune"];
arr2.forEach((val,idx,arr2) => {
     console.log(val.toUpperCase(),idx,arr2);//here for each loop perform a specific task
});
//higher order function/metthod are which used function as parameter or return a function