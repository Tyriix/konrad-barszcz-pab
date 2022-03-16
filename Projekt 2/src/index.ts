import express from 'express'
import {Request, Response} from 'express'

const app = express()

app.use(express.json())

class Note {
  private title: string;
  private content: string;
  private createDate?: string;
  private tags?: string[];
  private id?: number;

  constructor(title: string, content: string, createDate?: string, tags?: string[], id?: number)
  {
    this.title = title;
    this.content = content;
    this.createDate = createDate;
    this.tags = tags;
    this.id = id;
  }
}
const notes: Note[] = []
app.post('/note', (req, res)=>{
  const note = req.body;
  notes.push(note)
  res.send('Dodano notatkę');
})

app.get('/notes', (req, res) =>
{
  res.send(notes);
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