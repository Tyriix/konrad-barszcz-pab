import { timeStamp } from 'console';
import { title } from 'process';
import Tag from '../models/Tag'
class Note {
    public title: string;
    public content: string;
    public createDate?: string;
    public tags?: Tag[];
    public id?: number;
    public private: boolean;

    constructor(Note: Note)
    {
      this.title = Note.title;
      this.content = Note.content;
      this.createDate = Note.createDate;
      this.tags = Note.tags;
      this.id = Note.id;
      this.private = true;
    }
  }

  export const validateNote = (data: Note) =>{
    if(data.title == null || data.title == "") return false
    if(data.content == null || data.content == "") return false
    return true;
  }
  export default Note;