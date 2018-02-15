/*global console, prompt, confirm, alert */
var askForPlay = confirm("‘Do you want to play a game?’"),
    attempts = 4,
    totalPrize = 0,
    posibllePrize,
    shot = 3,
    ask,
    enterNumb,
    i = 0,
    randomly = Math.floor(Math.random() * 6);

if (askForPlay === true) {

    while (i < 3) {
        shot = shot - 1;
        attempts = attempts - 1;
        if (shot === 2) {
            posibllePrize = 10;
        } else if (shot === 1) {
            posibllePrize = 5;
        } else if (shot === 0) {
            posibllePrize = 2;
        }

        enterNumb = prompt("Please enter an integer from 0 to 5" + "\n" + "Attempts left: " + attempts + "\n" + "Total prize: " + totalPrize +
            "$\n" + "Possible price on current attempt: " + posibllePrize + "$", "");

        if (enterNumb === "") {
            alert("Incorrect input");
            break;
        }
        enterNumb = Number(enterNumb);
        if (!Number.isInteger(enterNumb) || enterNumb < 0 || enterNumb > 5) {
            alert("Incorrect input");
            break;
        }

        if (randomly === enterNumb && shot === 2) {
            totalPrize += 10;
            ask = confirm("Do you want to continue the game?");
            break;
        } else if (randomly === enterNumb && shot === 1) {
            totalPrize += 5;
            ask = confirm("Do you want to continue the game?");
            break;
        } else if (randomly === enterNumb && shot === 0) {
            totalPrize += 2;
            ask = confirm("Do you want to continue the game?");
            break;
        } else if (randomly !== enterNumb && shot === 0) {
            console.log("‘Thank you for a game. Your prize is: " + totalPrize + "’");
            ask = confirm("Do you want to continue the game?");
            break;
        }

    }

    if (ask === false) {
        console.log("‘Thank you for a game. Your prize is: " + totalPrize + "’");
        ask = confirm("Do you want to continue the game?");
    } else if (ask === true) {
        while (true) {
            shot = 3;
            attempts = 4;
            randomly = Math.floor(Math.random() * 11);

            while (i < 3) {
                shot = shot - 1;
                attempts = attempts - 1;

                if (shot === 2) {
                    posibllePrize = 30;
                } else if (shot === 1) {
                    posibllePrize = 15;
                } else if (shot === 0) {
                    posibllePrize = 7;
                }

                enterNumb = prompt("Please enter an integer from 0 to 5" + "\n" + "Attempts left: " + attempts + "\n" + "Total prize: " + totalPrize +
                    "$\n" + "Possible price on current attempt: " + posibllePrize + "$", "");

                if (enterNumb === "") {
                    alert("Incorrect input");
                    break;
                }
                enterNumb = Number(enterNumb);
                if (!Number.isInteger(enterNumb) || enterNumb < 0 || enterNumb > 5) {
                    alert("Incorrect input");
                    break;
                }

                if (randomly === enterNumb && shot === 2) {
                    totalPrize += 30;
                    ask = confirm("Do you want to continue the game?");
                    break;
                } else if (randomly === enterNumb && shot === 1) {
                    totalPrize += 15;
                    ask = confirm("Do you want to continue the game?");
                    break;
                } else if (randomly === enterNumb && shot === 0) {
                    totalPrize += 7;
                    ask = confirm("Do you want to continue the game?");
                    break;
                } else if (randomly !== enterNumb && shot === 0) {
                    console.log("‘Thank you for a game. Your prize is: " + totalPrize + "’");
                    ask = confirm("Do you want to continue the game?");
                    break;
                }

            }
            if (ask === false) {
                console.log("‘Thank you for a game. Your prize is: " + totalPrize + "’");
                break;
            }
            if (enterNumb === null) {
                console.log("‘Thank you for a game. Your prize is: " + totalPrize + "’");
                break;
            }

        }
    }

} else {
    console.log("`You did not become a millionaire`");
}