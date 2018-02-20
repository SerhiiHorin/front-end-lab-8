/*global console*/
"use strict";

function cypherPhrase(someObj, someStr) {
    someStr = someStr.split("");
    var newStr = getTransformedArray(someStr, function(el) {
        for (var key in someObj) {
            if (el === key) {
                return someObj[key];
            }
        }
        return el;
    }).join("");
    return newStr;
}

var charactersMap = {
    a: "o",
    c: "d",
    t: "g"
};

console.log(cypherPhrase(charactersMap, "kitty cat"));