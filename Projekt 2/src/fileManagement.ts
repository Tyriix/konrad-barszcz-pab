import fs from 'fs'
import Note from './Note';
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
        
      await fs.promises.appendFile('./json/notes.json',   JSON.stringify(note) + ',\n');
    }
    catch (err){
      console.log(err)
    }
}
}