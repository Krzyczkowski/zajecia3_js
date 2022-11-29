const happyNumber = (x) =>{
    const MAX = 100;
    let str = x.toString();
    for(let i = 0; i<MAX; i++){
        if(str=="1")return true;
        let suma=0;
        for(let j = 0 ; j<str.length;j++){
            let k =parseInt(str[j]); // (int)k to cyfra liczby
            suma+=k*k;
        }
        str=suma.toString();
    }
    return false;
}
console.log(happyNumber(13));