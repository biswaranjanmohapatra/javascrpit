let btn1 = document.querySelector("button");
let body = document.querySelector("body");
let curmode = "light";

btn1.addEventListener("click", () => {
   if (curmode === "light") {
      curmode = "dark";
      body.style.backgroundColor = "black";
      
   } else {
      curmode = "light";
      body.style.backgroundColor = "white";
    
   }
});