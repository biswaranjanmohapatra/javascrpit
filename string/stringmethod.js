let stri = "   Muskan Pradan";
console.log(stri.length);
console.log(stri)
let newStr = stri.toUpperCase();
console.log(newStr);
let oldstr = stri.toLowerCase();
console.log(oldstr);
console.log(stri.trim());//remove white space from strating and end
console.log(stri.slice(5,7));//never include the end values
let str1 = "Rahul";
let str2 = "Muskan";
//just add to 2 string
let res = str1 + str2;
console.log(res);
console.log(str1.concat(str2));
// string replacement
let str3 = "Muskan Mohapatra";
console.log(str3.replace("Muskan","Smrutipriya"));
//find char index
console.log(str3.charAt(3));
