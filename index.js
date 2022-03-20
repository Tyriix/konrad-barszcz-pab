"use strict";
exports.__esModule = true;
var express = require('express');
var app = express();
app.get('/:num1/:num2/:operation', function (req, res) {
    //let operations = {
    //    add: (num1, num2) => res.send(num1 + num2),
    //    sub:  (num1, num2) => res.send(num1 - num2),
    //    div: (num1, num2) => res.send(num1 / num2),
    //    mul: (num1, num2) => res.send(num1 * num2),
    //}
    var num1 = +req.params.num1;
    var num2 = +req.params.num2;
    var operation = req.params.operation;
    switch (operation) {
        case 'add':
            res.send("Tw\u00F3j wynik to ".concat(num1 + num2, "."));
            break;
        case 'sub':
            res.send("Tw\u00F3j wynik to ".concat(num1 - num2, "."));
            break;
        case 'div':
            res.send("Tw\u00F3j wynik to ".concat(num1 / num2, "."));
            break;
        case 'mul':
            res.send("Tw\u00F3j wynik to ".concat(num1 * num2, "."));
            break;
    }
});
app.listen(3000);
