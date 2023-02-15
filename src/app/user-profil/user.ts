export class User {
    public name: String;
    public firstName: String;
    public age: Number;
    public quote: String; 
    public photo: String;

    constructor(name:string, firstname: String, age: Number, quote: String, photo: String){
        this.name = name;
        this.firstName = firstname;
        this.age = age;
        this.quote = quote;
        this.photo = photo;
    }
}