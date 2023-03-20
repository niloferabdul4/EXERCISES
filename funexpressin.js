

///  Normal Function ///

function sum(a,b) 
{
	return a+b;
}
console.log(sum(4,5));



///////  IN FUNCTION EXPRESSION /////


let add=function(a,b)                    // create an anonymous fn & assign to a variable (add)
{
	return a+b;
}
console.log(add(4,5));



////  FUNCTN EXPRESSION WITH DEFAULT PARAMETER ////

		let prod=function(x,y=8) 
		{
			return x*y;
		}
		console.log(prod(10));


////////  WITH ARROW FUNTN  ////////////

let prod2=(p1,p2)=>(p1*p2);
console.log(prod2(3,4));


