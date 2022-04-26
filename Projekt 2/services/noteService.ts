import { Request, Response } from 'express'
import Note from '../models/Note'
import Tag from '../models/Tag'
import { validateNote } from '../models/Note'
import { FileManagement } from './DataStorage'
import User, { verifyToken } from '../models/User';
import { notes, tags, users } from '../models/SeedData'
const express = require('express');
const router = express.Router();
const app = express()
app.use(express.json())

let registerUser = new User();
//ADD NOTE
router.post('', (req: Request, res: Response) => {
  //Verify
  const note: Note = req.body;
  const secret = req.body.password;
  let newTags: string[] = req.body.tags;
  let verify = verifyToken(res, req, secret)
  if (!validateNote(note)) {
    res.status(400).send("Nie podałeś tytułu lub treści.");
  }
  if (verify == true) {
    note.id = new Date().valueOf();
    notes.push(note);
    let fileManagement = new FileManagement();
    if (!tags.some(r => newTags.indexOf(r.name) == 0)) {
      newTags.forEach(element => {
        let tagId = new Date().valueOf();
        let tagName = element;
        let newTag: Tag = new Tag(tagId, tagName);
        tags.push(newTag);
        fileManagement.createTag(newTag);
        registerUser.tagId?.push(newTag.id ?? 0);
      });
    }
    registerUser.noteId?.push(note.id ?? 0);
    fileManagement.createNote(note);
    res.status(201).send(note)
  }
  else {
    let fileManagement = new FileManagement();
    if (!tags.some(r => newTags.indexOf(r.name) == 0)) {
      newTags.forEach(element => {
        let tagId = new Date().valueOf();
        let tagName = element;
        let newTag: Tag = new Tag(tagId, tagName);
        tags.push(newTag);
        fileManagement.createTag(newTag);
      });
    }
    note.private = false;
    note.id = new Date().valueOf();
    notes.push(note);
    fileManagement.createNote(note);
    res.status(201).send(note)
  }
})

//GET LIST OF NOTES
router.get('/list', (req: Request, res: Response) => {
  if (notes.length == 0) {
    res.status(400).send(`Brak notatek.`)
  }
  res.status(200).send(notes.filter(x => x.private === false));
})

//GET LIST OF NOTES BY USERNAME
router.get('/user/:userName', (req: Request, res: Response) =>{
  const userName = req.params.userName;
  const secret = req.body.password;
  let verify = verifyToken(res, req, secret);
  if(verify)
  {
    const user = users.find(x => x.login == userName);
    if (user) {
      res.status(200).send(notes.filter((n) => n.private === true));
    } else {
      res.status(404).send('Brak takiego użytkownika.');
    }
  }
  else
  {
    res.status(404).send('Zaloguj się.');
  }
})
//GET ONE NOTE
router.get('/:id', (req: Request, res: Response) => {
  const id = +req.params.id;
  const note = notes.find(x => x.id === id);
  if (note == undefined) {
    res.status(404).send("Ta notatka nie istnieje.");
  }
  else {
    res.status(200).send(note);
  }
})

//UPDATE NOTE
router.put('/:id', (req: Request, res: Response) => {
  const updatedNote: Note = req.body;
  const id = +req.params.id;
  let currentNote = notes.find(x => x.id === id)
  if (currentNote == undefined) {
    res.status(404).send("Ta notatka nie istnieje.");
  }
  notes[notes.indexOf(currentNote!)] = updatedNote;
  res.status(204).send(updatedNote);
})

//DELETE NOTE
router.delete('/:id', (req: Request, res: Response) => {
  const id = +req.params.id;
  let note = notes.find(x => x.id === id)
  if (note == undefined) {
    res.status(400).send(`Nie znaleziono notatki.`);
  }
  else {
    notes.splice(notes.findIndex(x => x.id === (id)), 1)
    res.status(204).send(`Usunięto notatkę.`);
  }
})
module.exports = router;