import jwt from "jsonwebtoken";
import { Request, Response } from "express";
class User {
  public login: string;
  public password: string;
  public id?: number;
  public noteId?: number[];
  public tagId?: number[];

  constructor(user?: User) {
    if(user)
    {
      this.login = user.login;
      this.password = user.password;
      this.noteId = user.noteId;
      this.tagId = user.tagId;
    }
    else
    {
      this.login = '';
      this.password = '';
      this.noteId = [];
      this.tagId = [];
    }
  }
}
export const verifyToken = (res: Response, req: Request, secret: string) => {
  try {
    const authData = req.headers["authorization"];
    if(authData == null || authData == '')
    {
      return false
    }
    const token = authData?.split(" ")[1] ?? "";
    const payload = jwt.verify(token, secret);
    if (payload)
    {
      return true
    }
  } catch (error) {
    res.status(401).send(error);
  }
};
export const validateRegister = (data: User) =>{
  if(data.login == null || data.password == null) return false;
  if(data.login.length < 6 || data.password.length < 6) return false;
  return true;
}
export default User;