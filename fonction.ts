
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