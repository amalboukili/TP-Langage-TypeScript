class User{
    public name:string;
    public age:number;
    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }
    affiche(){
        console.log('Bonjour '+this.name+' !');
    }
}
let user=new User('Jean', 35);
user.affiche();

// Héritage
class Redactor extends User{
    public category:string;
    constructor(name:string,age:number,category:string){
        super(name,age);
        this.category=category;
    }
    affiche(){
        console.log('Bonjour '+this.name+' de la catégorie '+this.category+' !');
    }
}
let redactor=new Redactor('Jean',35,'Jeunesse');
redactor.affiche();