import {Request, Response} from 'express'
import Tag from '../models/Tag'
import {tags} from '../models/SeedData'
const express = require('express')  
const app = express()
const router = express.Router();
app.use(express.json())


//GET LIST OF TAGS
router.get('/list', (req: Request, res: Response) =>
{
  if(tags.length === 0)
  {
    res.status(400).send(`Brak tagów.`)
  }
  res.status(200).send(tags);
})

//GET ONE TAG
router.get('/:id', (req:Request, res:Response) =>
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
router.post('', (req: Request, res: Response)=>{
  const tag: Tag = req.body;
  tag.id = new Date().valueOf();
  tag.name = req.body.name.toLowerCase();
  tags.push(tag)
  res.status(201).send(tag)
})

//UPDATE TAG
router.put('/:id', (req: Request, res: Response) =>
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
router.delete('/:id', (req: Request, res: Response) =>
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

module.exports = router;