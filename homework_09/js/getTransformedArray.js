/*global console*/
"use strict";

function increment(el) {
    return el + 1;
}

function getTransformedArray(arr, func) {
    var res = [];
    forEach(arr, function(el) {
        res.push(func(el));
    });
    return res;
}

console.log(getTransformedArray([1, 7, 20], function increment(el) {
    return el + 1;
}));