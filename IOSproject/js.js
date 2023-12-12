
function formValidation()
{	

	var uname=document.registration.username.value;
	var uemail = document.registration.email.value;
	var ubirthday = document.registration.birthday.value;
	var uphone = document.registration.phone.value;
    var udate=document.registration.today.value;
	var code = document.getElementById('code').value;
    var birth =Date.parse(ubirthday);
    var todayDate= Date.parse(udate);
//Date validation
 // Get the user input date value
 var userInput = document.getElementById('today').value;
 // Create a Date object for the user input date
 var userDate = new Date(userInput);
 // Get the current date
 var currentDate = new Date();
 // Get the user day, month, year
 var userDay = userDate.getDate();
 var userMonth = userDate.getMonth();
 var userYear = userDate.getFullYear();
// Get the current day, month, year
var currentDay = currentDate.getDate();
var currentMonth = currentDate.getMonth();
var currentYear = currentDate.getFullYear();

 if ((userDay === currentDay) && (userMonth === currentMonth) && (userYear === currentYear)){
	var d = true;
 }

 else{
	
	alert("INVALID DATE ENTERED!");
	date.focus();
 }

    
    
//name validation
	var name = /[\u0600-\u06FF]/;
	if(!name.test(uname))
	{	
		var ename = /^[A-Za-z]+$/;
		if(!ename.test(uname))
	{	
		alert('Username Invalid!');
		uname.focus();
	}
	else{
		var x = true;
	}

	}
	else
	{
		var x = true;
	}
//email validation
	var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(!email.test(uemail))
		{
			alert("you have entered an invalid email adress!");
			uemail.focus();
		}
		else
	{
		var y = true;
	}
//birthday validation
	var birthdate = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
	if(!birthdate.test(ubirthday))
	{
		alert("you have entered an invalid date!");
		date.focus();
	}
	else
	{
		var z = true;
	}
//date validation
    var today = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
	if(!today.test(udate))
	{
		alert("you have entered an invalid date!");
		date.focus();
	}
	else
	{
		var t = true;
	}
//birth validation*/
    var age=todayDate-birth;
   
    if (age < 0){
        alert("Your age makes no sense!");
        date.focus();
    }
    else
    {
        var o = true;
    }
//phone validation
	var phone = /^\d{6}$/;
	if(!phone.test(uphone)){
		alert('The phone number you entered is invalid!');
		uphone.focus();

	}
	else
	{	if(code=="Code"){
		alert("Invalid Code!");
	}else{
		var r = true;
	}
}
	if((x && y) && (z && r) && (o && t) && d)
	{
		alert("Information added Successfully :) \nYour phone number is: "+code+"-"+uphone);
		window.location.reload()
		return true;
	}
	else
	{
	return false;
	}	

}
