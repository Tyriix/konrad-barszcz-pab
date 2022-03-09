import { Server } from "http"

const express = require('express')  
const app = express()
app.get('/', function (req, res) { 
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    let operation = req.query.operation;
    let operations = {
        add: (num1, num2) => num1 + num2,
        sub:  (num1, num2) => num1 - num2,
        div: (num1, num2) => num1 / num2,
        mul: (num1, num2) => num1 * num2,
    }
    switch(operation){
        case 'dodaj':
            operations.add;
        case 'odejmij':
            operations.div;
        case 'pomnoz':
            operations.mul;
        case 'dziel':
            operations.div;
    }
    let wynik;
    res.send(wynik.toString());
})
app.listen(3000)
