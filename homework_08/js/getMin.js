/*global console*/
"use strict";

function getMin() {
    var min = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (!Number.isInteger(arguments[i])) {
            min = "among the arguments are not integers";
        } else if (min > arguments[i]) {
            min = arguments[i];
        }
    }
    return min;
}

var minResult = getMin(3, 0, -3);
console.log(minResult);
