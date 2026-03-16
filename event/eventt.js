let btn = document.querySelector("button");
btn.onclick = () => {
    console.log("button was clicked");
}
document.querySelector("div").onmouseover = () =>{
    console.log("you are inside div");
}
document.querySelector("p").onmouseover = (evt) =>{
    console.log(evt.type);
     console.log(evt.target);
}