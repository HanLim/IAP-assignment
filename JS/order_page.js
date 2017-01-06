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
		validName = false;
	}
	if(!gender){
		validGender = false;
	}
	if(!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)){
		validEmail = false;
	}
	if(password.length < 6 || password.length > 9){
		validPassword = false;
	}
	if(password != confirmPassword){
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
