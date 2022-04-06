<<<<<<< HEAD
import Tag from '../src/Tag'
class User{
    public Login: string;
    public Password: string;
    public Tags: string;

    constructor(User: User)
    {
        this.Login = User.Login;
        this.Password = User.Password;
        this.Tags = Tag.name;
    }
}
export default User;
=======
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
    const token = authData?.split(" ")[1] ?? "";
    const payload = jwt.verify(token, secret);
    if (payload) {
      return payload;
    }
  } catch (error) {
    res.status(401).send(error);
  }
};
export default User;
>>>>>>> 16f16905d5971ae168c2b4ee14e0c6c1e7529b6d
