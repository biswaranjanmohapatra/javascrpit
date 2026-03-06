//push() -> it is used add item in array in the end
let arr = ["apple","orrange","grapes","bananna","litchi"];
arr.push("starwbeery");
console.log(arr);
//pop() -> it is used remove item from last and return it
 let ans = arr.pop();//it return what is removed
//toString() -> it is used convert in to string
console.log(arr.toString());
//concat() -> it is used to add 2 or more array
let mar = [90,100,89,29,39];
let mar2 = [28,24,45,90];
let mar3 = [40,80,56];
let marktotal = mar.concat(mar2,mar3);
console.log(marktotal);
//unshift() -> it is used add element in start 
arr.unshift("blueberry");
//shift() -> it is  used remove element in start and return it 
let val = arr.shift();
console.log(val);
// slice() -> it is for piece of an array it is doesnot change anything in array
console.log(arr.slice(1,4));
//splice() -> it is use for change original array (add,remove,replace) it work on this method
let aarr = [12,23,35,55,45,34,4,5];
aarr.splice(1 ,2, 101,153,56);
//add element
aarr.splice(1,0,18);
//remove the element
aarr.splice(1,2,0);
//replace elment
aarr.splice(3,1,13);
