window.onload = function(){
	initialize();
	setActiveNav(2);
}

function validateForm(event){
	var name = document.forms["orderForm"]["name"].value;
	var email = document.forms["orderForm"]["email"].value;
	var gender = document.forms["orderForm"]["gender"].value;
	var password = document.forms["orderForm"]["password"].value;
	var confirmPassword = document.forms["orderForm"]["confirmPassword"].value;
	var validName = true,
		validEmail = true,
		validGender = true,
		validPassword = true,
		validPassword2 = true;

	if(!/^[A-Za-z\s]+$/.test(name) || !name){
		document.getElementById('name').value = '';
		document.getElementById('name').placeholder = 'Invalid name';
		document.getElementById('name').classList.toggle('invalid');
		validName = false;
	}
	if(!gender){
		document.getElementById('gender').style.color = 'red';
		validGender = false;
	}
	else{
		document.getElementById('gender').style.color = 'black';
	}
	if(!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)){
		document.getElementById('email').value = '';
		document.getElementById('email').placeholder = 'Invalid email';
		document.getElementById('email').classList.toggle('invalid');
		validEmail = false;
	}
	if(password.length < 6 || password.length > 9){
		document.getElementById('password').value = '';
		document.getElementById('password').placeholder = '6-8 alphanumeric char only';
		document.getElementById('password').classList.toggle('invalid');
		validPassword = false;
	}
	if(password != confirmPassword){
		document.getElementById('confirmPassword').value = '';
		document.getElementById('confirmPassword').placeholder = 'Does not match';
		document.getElementById('confirmPassword').classList.toggle('invalid');
		validPassword2 = false;
	}
	if(!validName || !validEmail || !validGender || !validPassword || !validPassword2){
		return false;
	}
	else{
		return true;
	}
}

function color(label){
	var coloredLabel = document.getElementsByClassName('gender');
	for(var a = 0; a < coloredLabel.length; a++ ){
		coloredLabel[a].className = 'gender';
	}
	label.className += ' active';
}