import fs from 'fs'
import Note from '../models/Note';
import { notes } from '../models/SeedData';
import Tag from '../models/Tag';
const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://lab:lab1@lab.z0kcf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const noteSchema = new mongoose.Schema({title: {type: String, required: true}, content: {type: String, required: true}, private: Boolean}, {timestamps: true});
const NoteMongoose = new mongoose.model('Note', noteSchema);
const newNote = new NoteMongoose({title: "test", content: "test", private: true});
export class FileManagement{
public async readFile(): Promise<void> {
    try {
        const data = await fs.promises.readFile('./json/notes.json', 'utf-8');
    } catch (err) {
        console.log(err)
    }
  }
public async createNote(note: Note):   Promise<void>  {
    try{
      await fs.promises.appendFile('./json/notes.json', JSON.stringify(note) + ',\n');
    }
    catch (err){
      console.log(err)
    }
}
public async createTag(tag: Tag):   Promise<void>  {
  try{
    await fs.promises.appendFile('./json/tag.json', JSON.stringify(tag) + ',\n');
  }
  catch (err){
    console.log(err)
  }
}

}