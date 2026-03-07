// function countvow(str){
//     let count = 0;
//     for(let ch of str){
//         if(ch === "a" || ch === "e" || ch === "i" || ch === "o"|| ch ==="u"){
//             count++;
//         }
//     }
//     return count;
// }
//create using arrowfunction
const counarrow = (stri) => {
    let count = 0;
    for(let ch of stri){
        if(ch === "a" || ch === "e" || ch === "i" || ch === "o"|| ch ==="u"){
            count++;
        }
    }
    return count;
}