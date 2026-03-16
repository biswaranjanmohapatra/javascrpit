let newbtn = document.createElement("button");
newbtn.innerText = "click me!";
newbtn.style.color = "red";
newbtn.style.backgroundColor = "black";

document.querySelector("body").append(newbtn);
 

// qus 2
// document.querySelector("p").setAttribute("class" , "newclss");
document.querySelector("p").classList.add("newclss");

