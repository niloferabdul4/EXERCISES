/// WITHOUT REGULAR EXPRESSION /////

////// If Boolean Or NOt ///////

function ifBoolean() 
{
	let a=4>9;
	if (a==true||a==false)
	{
		console.log("Given value is boolean");
	}
	else
	{
   console.log("Given value is not boolean");
	}
}
ifBoolean();

//////////////If NAN Or Not /////////

function ifNan() 
{
	

	let result=Number.isNaN(5/"gh"); 
	if(result==true)
		console.log("NaN");
	else
		console.log("Number");

}ifNan();

////////  If Object Or Not ///////

function ifObj() 
{
	let a= {name:"nila",age:36};
	let res=typeof(a);
	if (res=="object")
		console.log("Given value  is object");
	else
		console.log("Not An object");

}
ifObj();


/////If Null OrNot /////////

function checkNull(res)
 {
return res==null;

}
console.log(checkNull(null));


//// If Number Or Not //////

function ifNum() 
{
	let num=45;
	let res=typeof(num);
	if (res=="number")
	console.log("Given value is Number");
	else
		console.log("Given value is not Number");
	
}
ifNum();
