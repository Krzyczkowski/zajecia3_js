const sum = (x) =>{
    if(Array.isArray(x)){
        let suma=0;
        for(let i = 0; i<x.length; i++){
            suma+=x.[i];
        }
        return suma;
    }
    else return undefined;
}
console.log(sum([1,2,3]));
