let list: any[] = [true, false];

function traitement(valeur: any) {
    if (typeof valeur === "number") {
        return valeur * 2;
    }
    else if (typeof valeur === "boolean") {
        return !valeur;
    }
}
console.log(traitement(true));
console.log(traitement(5));
