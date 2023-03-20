

///   SIMPLE FUNCTIONS WITHOUT ARGUMENTS/////

function sayHello() 
{
	console.log("hello World");
}
sayHello();


/// FUNCTION WITH ARGUMENTS ////

function add1(a,b) 
{
	console.log(a+b);
}
add1(4,6);
add1(8,2);



/////FUNCTION WITH RETURN VALUE /////

function add(a,b)
{
	return a+b;
}
console.log(add(4,8));



//////////////////////////////

function  prod(a,b) 
{
	return a*b;
}
let res=prod(3,8);
console.log(res);



////// CLOSURES (Fun within a fn) //////
 


function myFun1(a,b) 
{
	return myFun2();

function myFun2() 
{
	console.log("hello"+" "+a+" "+b);
}

myFun2();
}
myFun1("nila","haji");



////   if leap year or not /////

function ifLeap(y)
{
	if(y%4==0)
	{
		return true;
	}
	else
	{
		return false;
	} 
}
console.log(ifLeap("2024"));


//// /////////////////


