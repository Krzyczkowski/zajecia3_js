const fibo = (x)=>{
 if(x<=0) return 0;
 if(x==1) return 1;
 let f = [0,1];
 for(let i = 2; i<x;i++){
    f.push(f[i-2]+f[i-1]);
 }
return f;
}
console.log(fibo(9));