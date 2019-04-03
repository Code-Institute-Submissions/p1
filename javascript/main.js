//This js code is used to validate the form


function checkempty() {
if(document.getElementById('firstname').value == ""){
	alert('Enter Firstname');
	return false;
}
if(document.getElementById('secondname').value == ""){
	alert('Enter Secondname');
	return false;
}
if(document.getElementById('email').value == ""){
	alert('Enter Email');
	return false;
}
if(document.getElementById('telephone').value == ""){
	alert('Enter Telephone Number');
	return false;
}
if(document.getElementById('inquiry').value == ""){
	alert('Enter Your Inquiry');
	return false;
}else{
	alert('Your Inquiry has been submitted')
}

}



