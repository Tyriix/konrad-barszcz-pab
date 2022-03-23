import Tag from '../src/Tag'
class Note {
    public title: string;
    public content: string;
    public createDate?: string;
    public tags?: Tag[];
    public id?: number;
  
    constructor(title: string, content: string, createDate?: string, tags?: Tag[], id?: number)
    {
      this.title = title;
      this.content = content;
      this.createDate = createDate;
      this.tags = tags;
      this.id = id;
    }
  }
  export default Note;