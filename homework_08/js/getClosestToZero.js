/*global console*/
"use strict";

function getClosestToZero() {
    var number = 0,
    res = arguments[0],
    diff = Math.abs(number - res);
    for (var i = 0; i < arguments.length; i++) {
        var newdiff = Math.abs(number - arguments[i]);
        if (!Number.isInteger(arguments[i])) {
            res = "among the arguments are not integers";
        } else if (newdiff < diff) {
            diff = newdiff;
            res = arguments[i];
        }
    }
    return res;
}

var result = getClosestToZero(9, 5, -4, -9);
console.log(result);
