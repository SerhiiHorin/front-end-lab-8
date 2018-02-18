/*global console*/
"use strict";

function reverseNumber(parameter) {
        var result;

        if(!Number.isInteger(parameter)) {
            result = "argument is not an integer";
        } else if(parameter > 0){
              result = parameter.toString();
              result = result.split("").reverse().join("");
              result = Number(result);
        } else if(parameter < 0) {
            result = Math.abs(parameter);
            result = result.toString();
            result = result.split("").reverse().join("");
            result = "-" + result;
            result = Number(result);
        }
        return result;
}

console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(1000));
