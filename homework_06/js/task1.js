/*global console, prompt*/
var a = Number(prompt("Please enter a", "0"));
var b = Number(prompt("Please enter b", "0"));
var c = Number(prompt("Please enter c", "0"));

var checkNan = (isNaN(a) || isNaN(b) || isNaN(c));
var checkZerro = (a <= 0 || b <= 0 || c <= 0);
var triangleType;
var square;
var addZerro;
var output;

if (checkNan || checkZerro) {
    output = "“Incorrect data”";
} else if (a === b && b === c) {
    var equilateral = Math.pow(a, 2) * Math.sqrt(3) / 4;
    triangleType = "equilateral";
    square = equilateral.toString();

    if (square.indexOf(".") === -1) {
        addZerro = square + ".0";
    } else {
        addZerro = square;
    }

    var divide = addZerro.split(".", 2);
    var first = divide[0].toString();
    var second = divide[1].toString();
    var shorten = second.slice(0, 2);
    var connect = first.concat(".", shorten);
    var result = Number(connect);

    output = "“Type of triangle is " + triangleType + " triangle and square is " + result + "”";

} else if (a === b || b === c || c === a) {
    triangleType = "isosceles";
    if (a === b) {
        c = c / 2;
        var h = Math.pow(a, 2) - Math.pow(c, 2);
        var h2 = Math.sqrt(h);
        var isosceles = 1 / 2 * (c + c) * h2;
        square = isosceles.toString();

        if (square.indexOf(".") === -1) {
            addZerro = square + ".0";
        } else {
            addZerro = square;
        }

        var divide = addZerro.split(".", 2);
        var first = divide[0].toString();
        var second = divide[1].toString();
        var shorten = second.slice(0, 2);
        var connect = first.concat(".", shorten);
        var result = Number(connect);
        
    } else if (b === c) {
        a = a / 2;
        var h = Math.pow(b, 2) - Math.pow(a, 2);
        var h2 = Math.sqrt(h);
        var isosceles = 1 / 2 * (a + a) * h2;
        square = isosceles.toString();

        if (square.indexOf(".") === -1) {
            addZerro = square + ".0";
        } else {
            addZerro = square;
        }

        var divide = addZerro.split(".", 2);
        var first = divide[0].toString();
        var second = divide[1].toString();
        var shorten = second.slice(0, 2);
        var connect = first.concat(".", shorten);
        var result = Number(connect);

    } else if (c === a) {
        b = b / 2;
        var h = Math.pow(c, 2) - Math.pow(b, 2);
        var h2 = Math.sqrt(h);
        var isosceles = 1 / 2 * (b + b) * h2;
        square = isosceles.toString();

        if (square.indexOf(".") === -1) {
            addZerro = square + ".0";
        } else {
            addZerro = square;
        }

        var divide = addZerro.split(".", 2);
        var first = divide[0].toString();
        var second = divide[1].toString();
        var shorten = second.slice(0, 2);
        var connect = first.concat(".", shorten);
        var result = Number(connect);
    }

    output = "“Type of triangle is " + triangleType + " triangle and square is " + result + "”";

} else if ((Math.pow(a, 2) + Math.pow(b, 2)) === Math.pow(c, 2) || (Math.pow(b, 2) + Math.pow(c, 2)) === Math.pow(a, 2) || (Math.pow(c, 2) + Math.pow(a, 2)) === Math.pow(b, 2)) {
    triangleType = "right";
    if ((Math.pow(a, 2) + Math.pow(b, 2)) === Math.pow(c, 2)) {
        var right = (a * b) / 2;
        square = right.toString();

        if (square.indexOf(".") === -1) {
            addZerro = square + ".0";
        } else {
            addZerro = square;
        }

        var divide = addZerro.split(".", 2);
        var first = divide[0].toString();
        var second = divide[1].toString();
        var shorten = second.slice(0, 2);
        var connect = first.concat(".", shorten);
        var result = Number(connect);

    } else if ((Math.pow(b, 2) + Math.pow(c, 2)) === Math.pow(a, 2)) {
        var right = (b * c) / 2;
        square = right.toString();

        if (square.indexOf(".") === -1) {
            addZerro = square + ".0";
        } else {
            addZerro = square;
        }

        var divide = addZerro.split(".", 2);
        var first = divide[0].toString();
        var second = divide[1].toString();
        var shorten = second.slice(0, 2);
        var connect = first.concat(".", shorten);
        var result = Number(connect);
        
    } else if ((Math.pow(c, 2) + Math.pow(a, 2)) === Math.pow(b, 2)) {
        var right = (c * a) / 2;
        square = right.toString();

        if (square.indexOf(".") === -1) {
            addZerro = square + ".0";
        } else {
            addZerro = square;
        }

        var divide = addZerro.split(".", 2);
        var first = divide[0].toString();
        var second = divide[1].toString();
        var shorten = second.slice(0, 2);
        var connect = first.concat(".", shorten);
        var result = Number(connect);
    }

    output = "“Type of triangle is " + triangleType + " triangle and square is " + result + "”";
} else if (a !== b && b !== c && c !== a) {
    triangleType = "scalene";
    var perimeter = (a + b + c) / 2;
    var scalene = Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c));
    square = scalene.toString();

    if (square.indexOf(".") === -1) {
        addZerro = square + ".0";
    } else {
        addZerro = square;
    }

    var divide = addZerro.split(".", 2);
    var first = divide[0].toString();
    var second = divide[1].toString();
    var shorten = second.slice(0, 2);
    var connect = first.concat(".", shorten);
    var result = Number(connect);

    output = "“Type of triangle is " + triangleType + " triangle and square is " + result + "”";
}
console.log(output);