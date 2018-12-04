namespace A{
    export function calcule(x:number, y:number){
        return x+y;
    }
}
namespace B{
    export function calcule(x:number, y:number){
        return x*y;
    }
}
console.log(A.calcule(2,3));
console.log(B.calcule(2,3));
