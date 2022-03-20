import {Request, Response} from 'express'
import Note from '../src/Note'
const express = require('express')  
const app = express()

app.use(express.json())

const notes: Note[] = []

app.post('/note', (req: Request, res: Response)=>{
  const note: Note = req.body;
  note.id = new Date().valueOf();
  notes.push(note)
  res.status(201).send(note)
})

app.get('/note/:id', (req: Request, res: Response) =>
{
  const id = +req.params.id;
  const note = notes.find(x => x.id === id);
  if(note == undefined)
  {
    res.status(404).send("Ta notatka nie istnieje");
  }
  else
  {
  res.status(200).send(note);
  }
})

app.put('/note/:id', (req: Request, res: Response) =>
{
  const note: Note = req.body;
  const id = +req.params.id;

  res.status(201).send(note);
})

app.delete('/note/:id', (req: Request, res: Response) =>
{
  const id = +req.params.id;
  let note = notes.find(x => x.id === id)
  if(note == undefined)
  {
    res.status(400).send(`Nie znaleziono notatki.`);
  }
  else{
  notes.splice(notes.findIndex(x => x.id === (id)), 1)
  res.status(204).send(`Usunięto notatkę.`);
  }
})


app.get('/', function (req: Request, res: Response) {
  //const jsonNote = JSON.stringify(note)
  res.send('GET Hello World')
})
app.post('/', function (req: Request, res: Response) {
  console.log(req.body) // e.x. req.body.title
  //const title = req.body.title 
  res.status(200).send('POST Hello World')
})

app.listen(3000)