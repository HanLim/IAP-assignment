window.onload = function(){
	initialize();
	setActiveNav(2);
}

function validateForm(){
	var name = document.forms["orderForm"]["name"].value;
	var email = document.forms["orderForm"]["email"].value;
	var gender = document.forms["orderForm"]["gender"].value;
	var validName = true,
		validEmail = true,
		validGender = true;

	if(!/^[A-Za-z\s]+$/.test(name) || !name){
		validName = false;
	}
	if(!gender){
		validGender = false;
	}
	if(!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)){
		validEmail = false;
	}
	if(!validName || !validEmail || !validGender){
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
