/*global console*/
"use strict";

function isPrime(parameter) {
    var prime = "among the arguments are not integers";
    if (!Number.isInteger(parameter)) {
        return prime;
    } else if (parameter === 1) {
        return false;
    } else if (parameter === 2) {
        return true;
    } else {
        for (var i = 2; i < parameter; i++) {
            if (parameter % i === 0) {
                return false;
            }
        }
        return true;
    }
}
console.log(isPrime(5));
