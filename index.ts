import { Server } from "http"

const express = require('express')  
const app = express()

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
    
})
app.listen(3000)
