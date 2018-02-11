/*global console, prompt*/
var euro = Number(prompt("Please enter the amount in EURO", "0"));
var usd = Number(prompt("Please enter the amount in USD", "0"));

var checkNan = (isNaN(euro) || isNaN(usd));
var checkZerro = (euro <= 0 || usd <= 0);

var resultEuro;
var resultUsd;
var output = "“Incorrect data”";
var oneEuro = 29;
var oneUsd = 27;
var equal = oneEuro / oneUsd;
equal = equal.toFixed(3);

if (checkNan || checkZerro) {
    console.log(output);
} else if (euro && usd) {
    resultEuro = euro * oneEuro;
    resultUsd = usd * oneUsd;
    console.log(euro + " euros are equal " + resultEuro + " UAH, " + usd + " dollars are equal " + resultUsd + " UAH, one euro is equal " + equal + " dollars");
}