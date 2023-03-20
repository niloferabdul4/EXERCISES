/*    Area of a Triangle  */

var a=5,b=6,c=7;
var p=(a+b+c)/2;
var area=Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log("Area:",area);

/* To Find extension of filename */


const file="nila.jpg"
console.log(file.split(".").pop());


/// ////////////////////////

    function ifsum(a,b)
 		{

 			var a,b;
 			var sum=Number(a+b);
 			if((a==50)||(b==50)||(sum==50))
 				return true;
 			else
 				return false;
		}
		console.log(ifsum(20,30));
		console.log(ifsum(20,20));

///////////////FIND WHETHER +VE  OR -VE///////////////////////


		function ifpositivenegative(a,b)
    {
			var a,b;
			if(((a>0)||(b<0))&&((a<0)||(b>0)))
	 			return true;
 			else
 				return false;

 	}
 	console.log(ifpositivenegative(1,-3));
 	console.log(ifpositivenegative(2,2));


/////////////  Add a letter to a string ///////////////////////



function addletter()
{
	let a= "thon";
	let b="py";
	console.log(b+a);
}
addletter();

//////// remove a character at the specified position of a given string and return the new string.  ////////////////////

function removeLetter()
{   
	let a="happy";
	
	console.log(a.slice(1));           /// remove the first lettr

}
removeLetter();

///////first character of the given string added at the front and back.///////////////////////////////////////////////

function addletr() 
{
	str="hello";
	first=str.substr(0,1);
	console.log(first+str+first);
}
addletr();


//////change the position of 1st & last  char in string///////

function changeletter()
{
	str="abcd";
	len=str.length;
		if(len>=1)
		{
			first=str.substr(0,1);   /// (first position,1 char)
			last=str.substr(len-1,1);  // (last positn 1 char)
			mid=str.substr(1,len-1); 
			console.log(last+mid+first);
		}
}
changeletter();


/////////////////////////////////////////////////////////////


//////check if 1st 4 char is java////////////////////

function check(str)
{
	if(str.length<4)
		return false;
	front=str.substr(0,4);
	if(front=="java")
		return true;
	else
		return false;
}
console.log(check("javascript"));


////////////check if 5th char is"script"///////////////////////////////////

function fifthletr(str)
{
	if(str.substr(4,6)=="script")
	return str.substr(0,4);
	else
		return str;
}console.log(fifthletr("javascript"));


////////if in range /////////////////////////////////////////


function range(a,b)
{
	if(((a>=40)&&(a<=60))&&((b>=40)&&(b<=60)))
		return true;
	else if (((a>=70)&&(a<=100))&&((b>=70)&&(b<=100)))
		return false;

}console.log(range(80,96));



////////////////////////////////////////////

function checkchar(str)
{


for (i=1;i<=3;i++)
{
	if(str.charAt(i)=="f")
	
		return true;


}
return false;
}
console.log(checkchar("surfeel"));


//////////if last digit of intgrs are same ////////

///////////////not right/////////////

/*
function lastDigit() {
x=String(25);
y=String(45);
z=String(35);
if(x.substr(1,1)==y.substr(1,1) && y.substr(1,1)==z.substr(1,1)&& z.substr(1,1)==x.substr(1,1));

	return true;
else

	return false;
}

lastDigit();
*/

////////////if strg length is greatr than 3 then, to upper and lower case///////

function caseChange(str)
{
if (str.length>3)
	return str.toLowerCase();
else
	return str.toUpperCase();

}console.log(caseChange("Hab"));


///////////////////////////////////

function Int(a,b)
{
	var sum=a+b;
	var diff=Math.abs(a-b);
	if ((a==8)||(b==8))
	
			return  true;
	
	  if((sum==8)||(diff==8))

		   return true;
	else
		return false

}
console.log(Int(3,3));



///////find the largest/////

function findLarge(a,b) 
{

	if(a>b)
	console.log("The lagest is:", a);
	else if(b>a)
		console.log("The lagest is:" ,b);
	else
		console.log("a and b is equal");
}
findLarge(19,19);


//////   Sort The Numbers /////

var array= [1,5,0];
//array.sort();
array.sort();
console.log("The sorted numbers are in ascending order: " +array);


///  if odd or even upto 15 numbers ////

for(i=1;i<=15;i++)
{
	if(i%2==0)
		console.log(`${i} is Even`);
	else
		console.log(`${i} is Odd`);
}

///////////////////////////////////////////


for(i=1;i<=100;i++)
{
	if(i%3==0&&i%5==0)
		console.log(`${i} is fizzzbuzz`);
	else if(i%3==0)
		console.log(`${i} is buzz`);
   else if(i%5==0)
	console.log(`${i} is fizzz`);
else
	console.log(i);
}


///   Armstrong Number ///////////////////////


let num=371;
var arr=num.toString().split("");
var arms=Number(Math.pow(arr[0],3)+Math.pow(arr[1],3)+Math.pow(arr[2],3));
if(arms==num)
{
	console.log(`${num} is an Armstrong Number`);
}
else
{
	console.log(`${num} is not an Armstrong Number`);
}
                                                        
                                                             //   *
///////////////////////////////////////                      //   **
                                                             //   ***
                                                             //   ****

for (var i=1;i<=1;i++)
{   

    var start= "";
	for(var j=1;j<5; j++) 
	{
        
        start=start+"*";                        //  "" + "*" //
        console.log(start);
		
		
	}
	
}
///////   sum of multiples of 3 and 5 under 1000////


let sum=0;
for (var i=3;i<1000;i++)
{	
	if(i%3==0||i%5==0)
	{
		sum=sum+i;
		
	}

}
console.log(sum);



/// display day and time //////

function displayfn()
{
	let today=new Date();      
	let day=today.getDay();    
	let hr = today.getHours();
	let min=today.getMinutes();
	console.log("Today is" ,+day);
	console.log("Time is" ,+hr,":",+min);

}
displayfn();


/////   to rotate or reversea string //////

let str2="nilofer";
let res = str2.split("").reverse().join("");
console.log(res);



///// //////// if 2  nos are same then triple the sum ///////////

let num1=4;
let num2=2;
let sum2=num1+num2;
if(num1==num2)
{
	let res=Math.pow(sum2,3);
	console.log(res);
}
else 
{
	console.log(sum2);
}

/**


let alphabet = "abcdefghijklmnopqrstuvwxyz"
let alpha=alphabet.split("");
console.log(alpha);
let string="java";
let mystr=string.split("");
//console.log(mystr);
for (i=0;i<=mystr.length;i++)
{
	
		if(mystr[i]==alpha[i])
		{
		mystr[i]=alpha[i+1];
		//var reslt= mystr[i];
		}
	
}
console.log(mystr);
**/
 






