
////   Exponential Method//////////////////

var a=7.9;
console.log(a.toExponential(0));
console.log(a.toExponential(1));
console.log(a.toExponential(2));
console.log(a.toExponential(3));

////// Fixed Method ////////////////
var a=7.9;
console.log(a.toFixed(2));

var a=7.9;
console.log(a.toPrecision(2));



/////// Random Num /////////////////

function random() {
	
let a=Math.floor(Math.random()*10);
		var b=3;
		if(Number(b)==Number(a))
			console.log("Good Work");
		else
			console.log("Not Match");
	}
		random();


		
/////////Largest of 3 int/////////

let x=5,y=7,z=2;
let  g=Math.max(x,y,z);
console.log(g);

		
		