  /////////  REGULAR EXPRESSION EXERCISES //////////////

/////// If first letter is uppercase ////

function validate() 

	{
		let str="Happy";
		var regx = /^[A-Z]/;
		if (regx.test(str))
		{
			console.log("First Letter is uppercase");
		}
		else
		{
			console.log("First Letter is uppercase");
		}
	}
	validate();


	///////// Credit Card Number Check ////////

	function creditCheck()
	{
		var cnum="4342_5587_8904_3567";
		var regx=/^(4\d{3}_\d{4}_\d{4}_\d{4})$/;
		if(regx.test(cnum))
		{
			console.log("Valid Number");
		}
		else
		{
			console.log("InValid Number");
		}
	}
	creditCheck();


	////  Search a Date within a string
  ////////

function searchDate() 

	{
		let str="Welcome to JS..Today date is 02-Feb-2022";
		let regx=/(\d{2}-[A-Z]{1}[a-z]{1}[a-z]{1}-\d{4})/;
		if(regx.test(str))
		{
			console.log("date");
		}
		else
		{
			console.log("no date");
		}
	}
	searchDate();


	////  Count Vowels in String ///

function countVowels() 

{
	var str="javascript";
	var res=str.match(/[aeiou]/gi).length;
    console.log(res);
}
countVowels();
	