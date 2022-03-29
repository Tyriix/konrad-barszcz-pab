import {Request, Response} from 'express'
import Note from '../src/Note'
import Tag from '../src/Tag'
import { FileManagement} from './fileManagement'
const express = require('express')  
const app = express()

app.use(express.json())
import fs, { readFile } from 'fs';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants'
import { createContext } from 'vm'

const notes: Note[] = [];
const tags: Tag[] = [];

const validateNote = (data: Note) =>{
  if(data.title == null || data.title == "") return false
  if(data.content == null || data.content == "") return false
  return true;
}

// -----NOTES-----
//ADD NOTE
app.post('/note', (req: Request, res: Response)=>{
  const note: Note = req.body;
  let newTags: string[] = req.body.tags;
  if(!validateNote(note))
  {

    res.status(400).send("Nie podałeś tytułu lub treści.");
  }
  else
  {
        note.id = new Date().valueOf();
        notes.push(note);
        let fileManagement = new FileManagement();
        if(!tags.some(r => newTags.indexOf(r.name) == 0))
        {
        newTags.forEach(element => {
          let tagId = new Date().valueOf();
          let tagName = element;
          let newTag: Tag = new Tag(tagId, tagName);
          tags.push(newTag);
          fileManagement.createTag(newTag);
        });
        }
        fileManagement.createNote(note);
        res.status(201).send(note)
  }
})

//GET ONE NOTE
app.get('/note/:id', (req: Request, res: Response) =>
{
  const id = +req.params.id;
  const note = notes.find(x => x.id === id);
  if(note == undefined)
  {
    res.status(404).send("Ta notatka nie istnieje.");
  }
  else
  {
  res.status(200).send(note);
  }
})

//UPDATE NOTE
app.put('/note/:id', (req: Request, res: Response) =>
{
  const updatedNote: Note = req.body;
  const id = +req.params.id;
  let currentNote = notes.find(x => x.id === id)
  if(currentNote == undefined)
  {
    res.status(404).send("Ta notatka nie istnieje.");
  }
  notes[notes.indexOf(currentNote!)] = updatedNote;
  res.status(204).send(updatedNote);
})

//DELETE NOTE
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

//GET LIST OF NOTES
app.get('/notes', (req: Request, res: Response) =>
{
  if(notes.length === 0)
  {
    res.status(400).send(`Brak notatek.`)
  }
  res.status(200).send(notes);
})


// -----TAGS-----
//GET ONE TAG
app.get('/tag/:id', (req:Request, res:Response) =>
{
  const id = +req.params.id;
  const tag = tags.find(x => x.id === id);
  if(tags == undefined)
  {
    res.status(404).send("Ten tag nie istnieje.");
  }
  else
  {
  
  res.status(200).send(tag);
  }
})

//ADD TAG
app.post('/tag', (req: Request, res: Response)=>{
  const tag: Tag = req.body;
  tag.id = new Date().valueOf();
  tag.name = req.body.name.toLowerCase();
  tags.push(tag)
  res.status(201).send(tag)
})

//UPDATE TAG
app.put('/tag/:id', (req: Request, res: Response) =>
{
  const updatedTag: Tag = req.body;
  const id = +req.params.id;
  let currentTag = tags.find(x => x.id === id)
  if(currentTag == undefined)
  {
    res.status(404).send("Ten tag nie istnieje.");
  }
  updatedTag.name = req.body.name.toLowerCase();
  tags[tags.indexOf(currentTag!)] = updatedTag;
  res.status(204).send(updatedTag);
})

//DELETE TAG
app.delete('/tag/:id', (req: Request, res: Response) =>
{
  const id = +req.params.id;
  let tag = tags.find(x => x.id === id)
  if(tag == undefined)
  {
    res.status(400).send(`Nie znaleziono tagu.`);
  }
  else{
  tags.splice(tags.findIndex(x => x.id === (id)), 1)
  res.status(204).send(`Usunięto notatkę.`);
  }
})

//GET LIST OF TAGS
app.get('/tags', (req: Request, res: Response) =>
{
  if(tags.length === 0)
  {
    res.status(400).send(`Brak tagów.`)
  }
  res.status(200).send(tags);
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
