import {Request, Response} from 'express'
const express = require('express')  
const app = express()
const notes = require('../services/noteService');
const tags = require('../services/tagsService');
const users = require('../services/userService');
app.use(express.json())

app.use('/note', notes);
app.use('/tag', tags);
app.use('/login', users);

app.listen(3000)
