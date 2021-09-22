// Global Variables
let zerosCrosses = Array.from(document.querySelectorAll(".child"));
let zeroAndCross = Array.from(document.querySelectorAll(".selector"));
let selectionBox = document.querySelector(".player1");
let h1 = document.querySelector("h1");
let body = document.querySelector("body");
let player1;
let ox = [];

let a = 0;

let textinspect = [];
let oOrC = [];

function ifStatement(f1, s1, s2) {
    return (
        zerosCrosses[f1].innerText === zerosCrosses[s1].innerText &&
        zerosCrosses[f1].innerText === zerosCrosses[s2].innerText
    );
}

function color(n1, n2, n3) {
    zerosCrosses[n1].style.color = "lightgreen"
    zerosCrosses[n2].style.color = "lightgreen"
    zerosCrosses[n3].style.color = "lightgreen";
}

let condition_check = false;

function IfElse() {
    if (oOrC.includes(0) && oOrC.includes(1) && oOrC.includes(2)) {
        if (ifStatement(0, 1, 2)) {
            color(0, 1, 2)
            setTimeout(() => {
                h1.innerText = zerosCrosses[0].innerText;
                h1.innerText += " Won";
            }, 150)
            condition_check = true;
        }
    }
    if (oOrC.includes(3) && oOrC.includes(4) && oOrC.includes(5)) {
        if (ifStatement(3, 4, 5)) {
            color(3, 4, 5)
            setTimeout(() => {
                h1.innerText = zerosCrosses[3].innerText;
                h1.innerText += " Won";
            }, 150)
            condition_check = true;

        }
    }
    if (oOrC.includes(6) && oOrC.includes(7) && oOrC.includes(8)) {
        if (ifStatement(6, 7, 8)) {
            color(6, 7, 8)
            setTimeout(() => {
                h1.innerText = zerosCrosses[6].innerText;
                h1.innerText += " Won";
            }, 150)
            condition_check = true;

        }
    }
    if (oOrC.includes(0) && oOrC.includes(4) && oOrC.includes(8)) {
        if (ifStatement(0, 4, 8)) {
            color(0, 4, 8)
            setTimeout(() => {
                h1.innerText = zerosCrosses[0].innerText;
                h1.innerText += " Won";
            }, 150)
            condition_check = true;

        }
    }
    if (oOrC.includes(2) && oOrC.includes(4) && oOrC.includes(6)) {
        if (ifStatement(2, 4, 6)) {
            color(2, 4, 6)
            setTimeout(() => {
                h1.innerText = zerosCrosses[2].innerText;
                h1.innerText += " Won";
            }, 150)
            condition_check = true;

        }
    }
    if (oOrC.includes(0) && oOrC.includes(3) && oOrC.includes(6)) {
        if (ifStatement(0, 3, 6)) {
            color(0, 3, 6)
            setTimeout(() => {
                h1.innerText = zerosCrosses[0].innerText;
                h1.innerText += " Won";
            }, 150)
            condition_check = true;

        }
    }
    if (oOrC.includes(1) && oOrC.includes(4) && oOrC.includes(7)) {
        if (ifStatement(1, 4, 7)) {
            color(1, 4, 7)
            setTimeout(() => {
                h1.innerText = zerosCrosses[1].innerText;
                h1.innerText += " Won";
            }, 150)
            condition_check = true;

        }
    }
    if (oOrC.includes(2) && oOrC.includes(5) && oOrC.includes(8)) {
        if (ifStatement(2, 5, 8)) {
            color(2, 5, 8)
            setTimeout(() => {
                h1.innerText = zerosCrosses[2].innerText;
                h1.innerText += " Won";
            }, 150)
            condition_check = true;

        }
    }
    return condition_check;
    // reset(condition_check);
}
let resetArr = [];

let newox = [];
let b = 0;

function reset() {
    setTimeout(() => {
        let resetBtn = document.createElement("button");
        resetBtn.classList.add("reset");
        resetBtn.setAttribute("type", "submit");
        resetBtn.innerText = "Reset";
        let form = document.querySelector("form");
        form.appendChild(resetBtn)
    }, 400);

}

function GameLoop() {
    zeroAndCross.map((item) => {

        zerosCrosses.map(item => {
            item.style.opacity = "0";
        })
        item.addEventListener("click", () => {
            player1 = item.innerText;

            item.style.height = "80%";

            selectionBox.style.display = "none";
            zerosCrosses.map(item => {
                item.style.opacity = "1";
            })


            if (player1 === "O") {
                ox = ["O", "X", "O", "X", "O", "X", "O", "X", "O"];
            } else if (player1 === "X") {
                ox = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
            }
            if (ox[0] === "O") {
                if (oOrC.length % 2 == 0) {
                    h1.innerText = "O";
                } else {
                    h1.innerText = "X";
                }
            } else {
                if (oOrC.length % 2 == 0) {
                    h1.innerText = "X";
                } else {
                    h1.innerText = "O";
                }
            }
            for (let i = 0; i < zerosCrosses.length; i++) {
                zerosCrosses[i].addEventListener("click", () => {

                    zerosCrosses[i].innerText = ox[a++];
                    zerosCrosses[i].style.pointerEvents = "none";
                    oOrC.push(i);
                    console.log(oOrC)
                    textinspect.push(zerosCrosses[i].innerText);
                    if (
                        oOrC.length == 5 ||
                        oOrC.length == 6 ||
                        oOrC.length == 7 ||
                        oOrC.length == 8 ||
                        oOrC.length == 9
                    ) {
                        setTimeout(() => {
                            let a = IfElse();

                            if (oOrC.length == 9) {
                                if (a != true) {
                                    setTimeout(() => {
                                        h1.innerText = "It's a Tie";
                                        reset()
                                    }, 200);
                                }
                            }

                            if (a == true) {
                                zerosCrosses.forEach((item) => {
                                    item.style.pointerEvents = "none";
                                });
                                reset();
                            }
                        }, 200);
                    }
                });
            }
        });
    });
}
GameLoop();