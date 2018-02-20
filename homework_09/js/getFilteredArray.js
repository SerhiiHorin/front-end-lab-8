/*global console*/
"use strict";

function predicateFunction(el) {
    return el > 3;
}

function getFilteredArray(arr, func) {
    var res = [];
    forEach(arr, function(el) {
        if (func(el)) {
            res.push(el);
        }
    });
    return res;
}

console.log(getFilteredArray([1, 7, 20], function predicateFunction(el) {
    return el > 3;
}));