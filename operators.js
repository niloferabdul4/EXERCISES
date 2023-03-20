let a=20,b=10,c;
c=a+b;
console.log(c);
console.log("Total:",c);
console.log(typeof c);
c=a-b;
console.log("Differene:",c);
c=a*b;
console.log("Mul:",c);
c=a%b;
console.log("Mod:",c);
a++;                     //a=a+1
console.log("increment",a);
a--;                     //a=a-1
console.log("decrement",a);


////   USING ARROW FUNCTION ////


let add=(a,b)=>(a+b);
let res1=add(3,4);
console.log(res1);
let diff=(a,b)=>(a-b);
let res2=diff(6,5);
console.log(res2);



