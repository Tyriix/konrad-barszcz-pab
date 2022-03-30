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