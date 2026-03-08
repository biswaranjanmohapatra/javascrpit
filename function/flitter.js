//create a new array of element that give true for a given condition (ex:all even number)
//basically fliter all the val need for new array
let arr6 = [1,3,4,5,6,7,8,10,12,14];
let evenArray = arr6.filter((val) => {
  return val % 2 === 0;
});
console.log(evenArray);