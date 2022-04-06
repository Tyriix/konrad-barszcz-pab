import Note from '../models/Note'
import Tag from '../models/Tag'
import User from '../models/User';
 
export const notes: Note[] = [];
export const tags: Tag[] = [];
export const users: User[] = [
  {
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