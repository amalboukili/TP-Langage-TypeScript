/*
function carre(x: number): number {
    return x * x;
};

function affiche(texte: string): void {
    console.log(texte);
};

function afficheNom(nom: string, prenom?: string): void {
    let texte = nom;
    if (prenom) {
        texte += ' ' + prenom;
    }
    console.log(texte);
}
afficheNom('Durand');
afficheNom('Dupont', 'Marcel');
*/

//Valeur par défaut
function afficheNom1(nom:string, prenom ='Jean'): void{
    let texte=nom;
    if(prenom){
        texte+=' '+prenom;
    }
    console.log(texte);
}
afficheNom1('Durand');
afficheNom1('Dupont', 'Marcel');
