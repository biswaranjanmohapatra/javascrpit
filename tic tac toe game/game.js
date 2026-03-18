let boxes = document.querySelectorAll(".nox");
let newbutton = document.querySelector("#newbtn");
let resetbutton = document.querySelector("#resetbtn");
let turnO = true;

let checkwin = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const showWinner = (winner) => {
    msg.innerText = `Congruation the winner is ${winner}`;
    msg.classList.re
}

const checkwinner = () => {
    for (let pattern of checkwin) {
        let pat1 = boxes[pattern[0]].innerText;
        let pat2 = boxes[pattern[1]].innerText;
        let pat3 = boxes[pattern[2]].innerText;

        if (pat1 !== "" && pat2 !== "" && pat3 !== "") {
            if (pat1 === pat2 && pat2 === pat3) {
                console.log("Winner:", pat1);
                showWinner(pat1);
            }
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;
        checkwinner();
        
    });
});

