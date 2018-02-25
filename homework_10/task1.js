/*global console*/
"use strict";
var iterator = 0;

function debounce(funk, delay) {
    var timeout;
    return function() {
        var thiscontext = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            funk.call(thiscontext, args);
        }, delay);
    };
};

function increaseIteratorBy1() {
    iterator++;
    printIteratorValue();
}

function printIteratorValue() {
    console.log('Iterator value ', iterator);
}


var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator(); 
increaseIterator(); 
increaseIterator();
increaseIterator(); 
increaseIterator(); 
increaseIterator();
increaseIterator(); 
increaseIterator(); 
increaseIterator();


// Example

// let iterator = 0;

// function increaseIteratorBy1() {
//   iterator++;

//   printIteratorValue();
// }

// function printIteratorValue() {
//   console.log('Iterator value ', iterator);
// }

// var increaseIterator = debounce(increaseIteratorBy1, 1000);

// increaseIterator();
// increaseIterator();
// increaseIterator();
// increaseIterator();
// increaseIterator();
// increaseIterator();
// increaseIterator();
// increaseIterator();
// increaseIterator(); // Should print 'Iterator value 2'