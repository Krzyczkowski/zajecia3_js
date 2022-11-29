const range  = (a,b) =>{
    let t = new Array();
    for(let i = a; i<=b;i++){
        t.push(i);
    }
    return t;
}
let tablica = range(10,55);
console.log(tablica);