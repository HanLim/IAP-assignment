function spin(reverse){
	var logo = document.getElementById('logo');
	var deg = 0;
	setInterval(
		function(){
			if(deg <= 360){
				if(!reverse){
					logo.style.transform = "rotate("+deg+"deg)";
				}
				else{
					logo.style.transform = "rotate(-"+deg+"deg)";
				}
				deg += 10;
			}		
	}, 30);
}
var reverse = false;
function toggleSpin(){
	setInterval(
		function(){
			spin(reverse);
			reverse = !reverse;
		}, 5000);
}
function hideAds(){
	var ads = document.getElementById('ads'),
		content = document.getElementById('content'),
		show = document.getElementById('show');
	ads.style.display = "none";
	content.style.width = "100%";
	show.style.display = "inline";
}
function showAds(){
	var ads = document.getElementById('ads'),
		content = document.getElementById('content'),
		show = document.getElementById('show');
	ads.style.display = "inline";
	content.style.width = "90%";
	show.style.display = "none";
}

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

function loadTemplate(){
	$('#header').load('Template/header.html');
	$('#nav').load('Template/navigation.html');
	$('#ads').load('Template/sidebar.html');
	$('#show').load('Template/show-sidebar.html');
	$('#footer').load('Template/footer.html');
	$('#show-footer').load('Template/show-footer.html');
}

function showFooter(show){
	var footer = document.getElementById('footer');
	footer.style.opacity = '0';
	footer.style.display = 'block';
	show.style.opacity = '0';
	setTimeout(function(){	
		show.style.display = 'none';
	}, 500);
	setTimeout(function(){	
		footer.style.opacity = '1'
	}, 500);
	
}

function hideFooter(hide){
	var showfooter = document.getElementById('show-footer');
	showfooter.style.opacity = '0';
	showfooter.style.display = 'block';
	hide.style.opacity = '0';
	setTimeout(function(){
		hide.style.display = 'none';
	}, 500);
	setTimeout(function(){
		showfooter.style.opacity = '1'
	}, 500);
}

function setActiveNav(num){
	setTimeout(function(){
		document.getElementsByClassName('nav-tabs')[num].className += ' active';
	}, 100);
}

function changeAds(){
	var img = [
		'../Img/coc.png',
		'../Img/cr.png',
		'../Img/whatsapp.png',
		'../Img/fb.png',
		'../Img/pkmnGo.png'
	],
	name = [
		'Clash Of Clans',
		'Clash Royale',
		'Whatsapp',
		'Facebook',
		'Pokemon Go'
	], num1, num2;
	
	setTimeout(function(){
		var img1 = document.getElementsByClassName('ads-img')[0],
			img2 = document.getElementsByClassName('ads-img')[1],
			name1 = document.getElementsByClassName('ads-name')[0],
			name2 = document.getElementsByClassName('ads-name')[1];

		setInterval(function(){
			num1 = Math.floor(Math.random() * 5);
			num2 = Math.floor(Math.random() * 5);
			while(num1 == num2){
				num2 = Math.floor(Math.random() * 5);
			}
			setTimeout(function(){
				img1.style.opacity = 0;
				img2.style.opacity = 0;
				name1.style.opacity = 0;
				name2.style.opacity = 0;
			}, 500);
			setTimeout(function(){
				name1.innerHTML = name[num1];
				img1.src = img[num1];
				
				name2.innerHTML = name[num2];
				img2.src = img[num2];
			}, 1500);	
			setTimeout(function(){
				img1.style.opacity = 1;
				img2.style.opacity = 1;
				name1.style.opacity = 1;
				name2.style.opacity = 1;
			}, 2000);
		},10000);
	}, 200);
	
}

function initialize(){
	loadTemplate();
	toggleSpin();
	changeAds();
}
function detectOrientation(){
	window.addEventListener("orientationchange", function() {
		forceLandscape();
	}, false);
}

function detectScreenResize(){
	if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		setTimeout(function(){
			if(window.innerWidth < window.innerHeight){
				document.getElementById('html').style.width = "1024px";
				document.getElementById('html').style.height = "768px";
				document.getElementById('show-footer').style.position = "relative";
				document.getElementById('show-footer').style.top = "-6.15%";
				document.getElementById('footer').style.position = "relative";

			}
			else{
				document.getElementById('html').style.width = "100%";
				document.getElementById('html').style.height = "100%";
			}
		}, 1);
		window.addEventListener('resize', function () { 
		    "use strict";
		    window.location.reload(); 
		});
	}
}

function forceLandscape(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		if(screen.orientation.angle == '0'){
 			setTimeout(function(){
 				document.getElementById('normal-content').style.display = 'none';
 				document.getElementById('warning').style.display = 'block';
 			},1);
 		}
 		else{
 			setTimeout(function(){
 				document.getElementById('normal-content').style.display = 'block';
 				document.getElementById('warning').style.display = 'none';
 			},1);
 		}
	}
}