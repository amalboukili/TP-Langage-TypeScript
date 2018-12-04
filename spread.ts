function ajouter(base, ...elements) {
    for (var i = 0; i < elements.length; i++) {
        base += elements[i];
    }
    return base;
}

var resultat = ajouter(10, 1, 2);
console.log(resultat);