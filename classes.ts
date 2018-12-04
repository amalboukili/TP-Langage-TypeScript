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