"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var express = require('express');
var app = express();
app.use(express.json());
var Note = /** @class */ (function () {
    function Note(title, content, createDate, tags, id) {
        this.title = title;
        this.content = content;
        this.createDate = createDate;
        this.tags = tags;
        this.id = id;
    }
    return Note;
}());
var notes = [];
app.post('/note', function (req, res) {
    var note = req.body;
    note.id = new Date().valueOf();
    notes.push(note);
    res.status(201).send(note);
});
app.get('/note/:id', function (req, res) {
    var id = +req.params.id;
    var note = notes.filter(function (x) { return x.id === id; });
    res.status(200).send(note);
});
app.put('/note/:id', function (req, res) {
    var note = req.body;
    var id = +req.params.id;
    var updateNote = notes.filter(function (x) { return x.id === id; });
    updateNote = __assign(__assign({}, updateNote), note);
    res.status(201).send(updateNote);
});
app["delete"]('/note/:id', function (req, res) {
    var id = +req.params.id;
    var deleteNote = notes.filter(function (x) { return x.id === id; });
    notes.splice(notes.findIndex(function (x) { return x.id === (id); }), 1);
    res.status(204).send("Usuni\u0119to notatk\u0119.");
});
app.get('/', function (req, res) {
    //const jsonNote = JSON.stringify(note)
    res.send('GET Hello World');
});
app.post('/', function (req, res) {
    console.log(req.body); // e.x. req.body.title
    //const title = req.body.title 
    res.status(200).send('POST Hello World');
});
app.listen(3000);
