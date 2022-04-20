import jwt from "jsonwebtoken";
import { Request, Response } from "express";
class User {
  public login: string;
  public password: string;
  public id?: number;
  public noteId?: number[];
  public tagId?: number[];

  constructor(User: User) {
    this.login = User.login;
    this.password = User.password;
    this.id = User.id;
    this.noteId = User.noteId;
    this.tagId = User.tagId;
  }
}
export const verifyToken = (res: Response, req: Request, secret: string) => {
  try {
    const authData = req.headers["authorization"];
    console.log(authData)
    if(authData == null || authData == '')
    {
      return false
    }
    const token = authData?.split(" ")[1] ?? "";
    const payload = jwt.verify(token, secret);
    console.log(payload)
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