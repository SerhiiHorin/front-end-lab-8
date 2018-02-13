
/*global console, prompt, confirm, alert */
var askForPlay = confirm("‘Do you want to play a game?’");

var attempts = 3,
    totalPrize = 0,
    posibllePrize = 10,
    shot = 3,
    ask,
    enterNumb;

if (askForPlay === true) {

    var randomly = Math.floor(Math.random() * 1);

    while (shot) {

        enterNumb = prompt("Please enter an integer from 0 to 5" + "\n" + "Attempts left: " + attempts + "\n" + "Total prize: " + totalPrize +
                        "$\n" + "Possible price on current attempt: " + posibllePrize + "$", "");
        shot = shot - 1;

        if (enterNumb === "") {
            alert("Incorrect input");
            break;
        }
        enterNumb = Number(enterNumb);
        if (!Number.isInteger(enterNumb) || enterNumb < 0 || enterNumb > 5) {
            alert("Incorrect input");
            break;
        }

        if (randomly === enterNumb) {
            totalPrize += 10;
            ask = confirm("Do you want to continue the game?");

            if (ask === false) {

                console.log("‘Thank you for a game. Your prize is: " + totalPrize + "’");
                ask = confirm("Do you want to play the game again?");
            } else if (ask === true) {
                posibllePrize = 30;
                
                

                    enterNumb = prompt("Please enter an integer from 0 to 10" + "\n" + "Attempts left: " + attempts + "\n" + "Total prize: " + totalPrize +
                        "$\n" + "Possible price on current attempt: " + posibllePrize + "$", "");
                    shot = shot - 1;
                    if (shot === 2) {
                        attempts = attempts - 1;
                        posibllePrize = 15;
                        
                            break;
                        }
                    } else if (shot === 1) {
                        attempts = attempts - 1;
                        posibllePrize = 7;
                       
                            break;
                            
                        }
                    }

                break;

            } else if (shot === 2) {
                attempts = attempts - 1;
                posibllePrize = 5;
                if (randomly === enterNumb) {
                    totalPrize += 5;
                    ask = confirm("Do you want to continue the game?");
                    break;
                }

            } else if (shot === 1) {
                attempts = attempts - 1;
                posibllePrize = 2;
                if (randomly === enterNumb) {
                    totalPrize += 2;

                    ask = confirm("Do you want to continue the game?");
                    break;
                }

            }

        }
    }

    } else {
        console.log("`You did not become a millionaire`");
    }

    if (randomly !== enterNumb) {
        console.log("‘Thank you for a game. Your prize is: " + totalPrize + "’");
        confirm("Do you want to play the game again?");
    }