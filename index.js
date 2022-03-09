"use strict";
exports.__esModule = true;
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    var num1 = req.query.num1;
    var num2 = req.query.num2;
    var operation = {
        add: function (num1, num2) { return num1 + num2; },
        sub: function (num1, num2) { return num1 - num2; },
        div: function (num1, num2) { return num1 / num2; },
        mul: function (num1, num2) { return num1 * num2; }
    };
    res.send(operation, num1, num2);
});
app.listen(3000);
