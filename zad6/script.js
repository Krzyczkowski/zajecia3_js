const palindrom= (x)=>{
    let l = Math.floor(x.length/2);
    for(let i = 0; i<l; i++){
        if(x.at(i)!=x.at(-i-1))return false; 
    }
    return true;
}
console.log(palindrom("kajak"));