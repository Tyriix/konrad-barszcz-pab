import fs from 'fs'
import Note from '../models/Note';
import Tag from '../models/Tag';
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