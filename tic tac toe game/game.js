let boxes = document.querySelectorAll(".nox");
let newbutton = document.querySelector("#newbtn");
let resetbutton = document.querySelector("#resetbtn");

let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msgcon");

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

// ✅ Show Winner
const showWinner = (winner) => {
    msg.innerText = `🎉 Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

// ✅ Disable all boxes
const disablebtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// ✅ Enable + Clear board
const enablebtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

// ✅ Reset Game
const resetgame = () => {
    turnO = true;
    enablebtn();
    msgContainer.classList.add("hide");
};

// ✅ Check Winner
const checkwinner = () => {
    for (let pattern of checkwin) {
        let pat1 = boxes[pattern[0]].innerText;
        let pat2 = boxes[pattern[1]].innerText;
        let pat3 = boxes[pattern[2]].innerText;

        if (pat1 !== "" && pat2 !== "" && pat3 !== "") {
            if (pat1 === pat2 && pat2 === pat3) {
                disablebtn();
                showWinner(pat1);
                return true;
            }
        }
    }
    return false;
};

// ✅ Check Draw
const checkDraw = () => {
    let isDraw = true;

    for (let box of boxes) {
        if (box.innerText === "") {
            isDraw = false;
            break;
        }
    }

    if (isDraw) {
        msg.innerText = "😅 It's a Draw!";
        msgContainer.classList.remove("hide");
    }
};

// ✅ Game Click Logic
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

        let isWinner = checkwinner();
        if (!isWinner) {
            checkDraw();
        }
    });
});

// ✅ Buttons
newbutton.addEventListener("click", resetgame);
resetbutton.addEventListener("click", resetgame);
