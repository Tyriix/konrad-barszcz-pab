import {Request, Response} from 'express'
import Note from '../src/Note'
import Tag from '../src/Tag'
import User from '../src/User'
import { FileManagement} from './fileManagement'
<<<<<<< HEAD
import jwt from 'jsonwebtoken'
import { json } from 'stream/consumers'
=======
import jwt from 'jsonwebtoken';
import User from '../src/User';
import {verifyToken} from '../src/User';
>>>>>>> 16f16905d5971ae168c2b4ee14e0c6c1e7529b6d
const express = require('express')  
const app = express()
app.use(express.json())
<<<<<<< HEAD
=======
import fs, { readFile } from 'fs';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants'
import { createContext } from 'vm'
import { Console } from 'console';
>>>>>>> 16f16905d5971ae168c2b4ee14e0c6c1e7529b6d

const notes: Note[] = [];
const tags: Tag[] = [];
const users: User[] = [
  {
<<<<<<< HEAD
  Login: 'Test',
  Password: 'Test',
  Tags: 'test'
  }
];
=======
  //eyJhbGciOiJIUzI1NiJ9.dGVzdA.2WmFS_EAdYFCBOFM9pVPo9g4bpuI2I9U_JGTCfrx7Tk
  id: 1,
  login: 'test',
  password: 'test'
  },
  {
  //eyJhbGciOiJIUzI1NiJ9.dGVzdDI.I3XYG0SRKrOomGPui5MFMrKhkeQCTKXVrQotOrt6kZI
  id:2,
  login: 'test2',
  password: 'test2'
  },
  {
    //eyJhbGciOiJIUzI1NiJ9.dGVzdDM.Pau-V2DK8ZNbIGegXBzKlJ_9g9wNpQ3T9UL4yvOtd4c
    id:3,
    login: 'test3',
    password: 'test2'
  }
];

>>>>>>> 16f16905d5971ae168c2b4ee14e0c6c1e7529b6d
const validateNote = (data: Note) =>{
  if(data.title == null || data.title == "") return false
  if(data.content == null || data.content == "") return false
  return true;
}

// -----NOTES-----
//ADD NOTE
app.post('/note', (req: Request, res: Response)=>{
  //Verify
  const note: Note = req.body;
  const secret = req.body.password;
  let newTags: string[] = req.body.tags;
  if(!validateNote(note))
  {
    res.status(400).send("Nie podałeś tytułu lub treści.");
  }
  else if(verifyToken(res, req, secret))
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

<<<<<<< HEAD
//------LOGIN-----
app.post('/login', (req: Request, res: Response) =>
{
  // const authData= req.headers.authorization;
  // const token = authData?.split(' ')[1] ?? ''
  // const payload = jwt.verify(token, secret)
  // console.log(payload);
  const payload = req.body.Login;
  const secret = req.body.Password;
  let isPresent = false;
  let isPresentIndex = null;

  for(let i=0; i<users.length; i++)
  {
    if(users[i].Login === payload && users[i].Password === secret)
    {
      isPresent = true;
      isPresentIndex = i;
      break;
    }
  }
  if(isPresent)
    {
      const token = jwt.sign(payload, secret);
      // res.json({
      //   login: true,
      //   token: token,
      //   data: users
      // });
      res.status(200).send(token);
    }
    else{
      res.status(401).send('Wrong login or password.');
    }
=======
//------LOGIN------

app.post('/login', (req: Request, res: Response) =>
{
  const user: User = req.body;
  const payload = user.login;
  const secret = user.password;
  let isPresent = false;
  for(let i=0; i<users.length; i++){
 
    if(users[i].login === payload &&
    users[i].password === secret){

        isPresent = true;
        break;
    }
  }
  if (isPresent) {
    const token = jwt.sign(payload, secret);
    res.status(200).send(token);
  } else {
    res.status(401).send({
      error: 'Please check name and password.',
    });
  }
>>>>>>> 16f16905d5971ae168c2b4ee14e0c6c1e7529b6d
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
