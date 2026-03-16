// let acess element then use get attribute method and setattribute method
// let atr = document.querySelector("div");
// let name = atr.getAttribute("id");
// console.log(name);
let para = document.querySelector("p");
// console.log(para.setAttribute("clas","saianayan"));
let atr = document.querySelector("div");
atr.style.height = "100px";
atr.style.width = "100px";
atr.style.backgroundColor = "blue";


//for add element
let newtr = document.createElement("button");
newtr.innerText = "hello";
//add element before in same node
atr.prepend("newtr");
// add element in last in same node
atr.append("newtr");
// add element in after
atr.after("newtr");
// add element in before 
atr.before("newtr");
//delete element
para.remove();

