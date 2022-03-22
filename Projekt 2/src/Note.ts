class Note {
    public title: string;
    public content: string;
    public createDate?: string;
    public tags?: string[];
    public id?: number;
  
    constructor(title: string, content: string, createDate?: string, tags?: string[], id?: number)
    {
      this.title = title;
      this.content = content;
      this.createDate = createDate;
      this.tags = tags;
      this.id = id;
    }
  }
  export default Note;