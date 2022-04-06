import {Request, Response} from 'express'
import jwt from 'jsonwebtoken';
import User from '../models/User';
import {users} from '../models/SeedData'
const express = require('express')  
const router = express.Router();
const app = express()
app.use(express.json())

router.post('/login', (req: Request, res: Response) =>
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
})
module.exports = router;