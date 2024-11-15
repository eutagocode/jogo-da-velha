const resetBtn = document.querySelector("button");
const squares = document.querySelectorAll(".square");

document.addEventListener("DOMContentLoaded", () => {
    for (let square of squares) {
        square.addEventListener("click", handleClick);
    }
});

const handleClick = (event) => {
    if (handleMove(event.target.id)) {
        setTimeout(() => {
            alert("O jogo acabou!");
            resetBtn.style.display = "block";
        }, 10);
    }

    updateSquare(event.target.id);
};

const updateSquare = (position) => {
    const square = document.getElementById(position.toString());
    let symbol = board[position];
    if (symbol !== "") {
        square.innerHTML = `<div class="${symbol}"></div>`;
    }
};

const updateSquares = () => {
    for (let square of squares) {
        square.innerHTML = "";
    }
};

const resetGame = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
    gameOver = false;
    updateSquares();
    resetBtn.style.display = "none";
};
