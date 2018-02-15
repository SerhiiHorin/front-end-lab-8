/*global console, prompt*/
var number = Number(prompt("Please enter natural number from 1 to 20", "1"));

var emp = "   ",
kub = "[~]",
pyramid = "";

if (!Number.isInteger(number) || number <= 0 || number > 20) {
    console.error("‘Incorrect!’");
} else {
    for (var i = 0; i < number; i++) {
        for (var x = 0; x < (number - i); x++) {
            pyramid += emp;
        }
        for (var k = 0; k < (2 * i + 1); k++) {
            pyramid += kub;
        }
        pyramid += "\n";
    }
    console.log(pyramid);
}