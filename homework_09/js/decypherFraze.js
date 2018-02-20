/*global console*/
"use strict";

function decypherPhrase(someObj, someStr) {
    var newObject = {};
    for (var key in someObj) {
        newObject[someObj[key]] = key;
    }
    return cypherPhrase(newObject, someStr);
}

var charactersMap = {
    a: "o",
    c: "d",
    t: "g"
};

console.log(decypherPhrase(charactersMap, "kiggy dog"));
