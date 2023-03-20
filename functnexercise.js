
////////////   REVERSE A NUMBER //////////////////

function reverse(num) 
{
    a=String(num);
	return a.split("").reverse().join("");

}
console.log(Number(reverse(3556)));


///////////// PALINDROME OR NOT //////////

function palindrome(str)
{
	
	rev=str.split("").reverse().join("");
	if(str==rev)
            return true;
	else
			return false;
	
}
console.log(palindrome("madam"));

////////////IN ALPHABETICAL ORDER ///////

function sort(str)
{

	return str.split("").sort().join("");
	
}
console.log(sort("javascript"));

///////////////////////////


