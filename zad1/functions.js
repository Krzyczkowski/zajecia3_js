function isOdd(x){
    if(Number.isInteger(x))return x%2!=0;
    return undefined;
    

}
const isEven=(x)=>{
    if(Number.isInteger(x))return x%2==0; 
    return undefined;
}
console.log(isOdd(5));
console.log(isEven(1));
console.log(isOdd(null));
console.log(isEven(undefined));