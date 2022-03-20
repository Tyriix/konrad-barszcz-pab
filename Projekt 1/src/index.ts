import { Server } from "http"

const express = require('express')  
const app = express()
<<<<<<< HEAD:index.ts

app.get('/:operation/:num1/:num2', function (req, res) { 
    
    //let operations = {
    //    add: (num1, num2) => res.send(num1 + num2),
    //    sub:  (num1, num2) => res.send(num1 - num2),
    //    div: (num1, num2) => res.send(num1 / num2),
    //    mul: (num1, num2) => res.send(num1 * num2),
    //}
    
    let num1 = +req.params.num1;
    let num2 = +req.params.num2;
    let operation = req.params.operation;

    switch(operation){
        case 'add':
            res.send(`Twój wynik to ${num1 + num2}.`);
            break;
        case 'sub':
            res.send(`Twój wynik to ${num1 - num2}.`);
            break;
        case 'div':
            res.send(`Twój wynik to ${num1 / num2}.`);
            break;
        case 'mul':
            res.send(`Twój wynik to ${num1 * num2}.`);
            break;
    }
    
=======
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
    let wynik;
    switch(operation){
        case 'dodaj':
            wynik = operations.add;
        case 'odejmij':
            wynik =operations.div;
        case 'pomnoz':
            wynik = operations.mul;
        case 'dziel':
            operations.div;
    }
    res.send(wynik.toString());
>>>>>>> 15955883ad03cd55025e6b0410ca3d87187a4f5b:Projekt 1/src/index.ts
})
app.listen(3000)
