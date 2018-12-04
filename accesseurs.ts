class User{
    protected _name:string;
    get name():string{
        return this._name;
    }
    set name(newName:string){
        if(newName.length<11){
            this._name=newName;
            console.log('Le nom ' + newName + ' a bien été enregistré !')
        }
        else{
            console.log("Erreur : le nom ne doit pas comporter plus de 10 caractère !");
        }
        
    }


}
let user=new User();
user.name='Un nom bien trop long'
