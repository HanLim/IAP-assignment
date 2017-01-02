var previousSlide;
window.onload = function(){
	initialize();
	setActiveNav(0);	
	previousSlide = document.getElementById('content1');
	document.getElementsByTagName("label")[0].style.background = "green";
	slide1();
forceLandscape();
}

function slide1(){
	document.getElementById('content1').style.display = 'inline-block';
	document.getElementById('content2').style.display = 'none';
	document.getElementById('content3').style.display = 'none';

	document.getElementById('p1').style.opacity = "0";
	document.getElementById('img1').style.opacity = "0";

	setTimeout(function(){
		document.getElementById('p1').style.opacity = "1";
	}, 500);
	setTimeout(function(){
		document.getElementById('img1').style.opacity = "1";
	}, 1500);
}

function slide2(){
	document.getElementById('content1').style.display = 'none';
	document.getElementById('content2').style.display = 'inline-block';
	document.getElementById('content3').style.display = 'none';

	document.getElementById('img2').style.opacity = "0";
	document.getElementsByClassName('slide2_p')[0].style.opacity = "0";
	document.getElementsByClassName('slide2_p')[1].style.opacity = "0";

	setTimeout(function(){
		document.getElementById('img2').style.opacity = "1";		
	}, 500);
	setTimeout(function(){
		document.getElementsByClassName('slide2_p')[0].style.opacity = "1";
		document.getElementsByClassName('slide2_p')[1].style.opacity = "1";
	}, 1500);
}

function slide3(){
	document.getElementById('content1').style.display = 'none';
	document.getElementById('content2').style.display = 'none';
	document.getElementById('content3').style.display = 'inline-block';

	document.getElementById('p3').style.opacity = "0";
	document.getElementsByClassName('slide3_img')[0].style.opacity = "0";
	document.getElementsByClassName('slide3_img')[1].style.opacity = "0";

	setTimeout(function(){
		document.getElementById('p3').style.opacity = "1";
	}, 500);
	setTimeout(function(){
		document.getElementsByClassName('slide3_img')[0].style.opacity = "1";
		document.getElementsByClassName('slide3_img')[1].style.opacity = "1";
	}, 1500);
}

function changeSlide(slideNo){
	var currentSlideNo = slideNo.id.substring(slideNo.id.length - 1),
		previousSlideNo = previousSlide.id.substring(previousSlide.length - 1);

	if(currentSlideNo != previousSlideNo){
		var color;
		for(var a = 0; a < 3; a++){
			color = document.getElementsByTagName("label")[a];
			if(a == currentSlideNo - 1){
				color.style.background = "green";
			}
			else{
				color.style.background = "#aaa";
			}
		}

		if(currentSlideNo == 1){
			slide1();
		}

		if(currentSlideNo == 2){
			slide2();
		}

		if(currentSlideNo == 3){
			slide3();
		}

		previousSlide.classList.toggle('fade');
		document.getElementById('content' + currentSlideNo).classList.toggle('fade');
		previousSlide = document.getElementById('content' + currentSlideNo);
	}
}

	