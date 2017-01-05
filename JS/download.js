window.onload = function(){
	initialize();
	setActiveNav(4);
	addToCart();
}

function addToCart(){

}

function hover(div){
    div.children[0].style.width = '22%';
    setTimeout(function(){
        div.children[1].style.opacity = 0;   
    }, 1);
    setTimeout(function(){   
        div.children[1].style.display = 'none';
        div.children[2].style.display = 'inline-block';
        div.children[2].style.opacity = 1;
    }, 300);
    

   
}

function unhover(div){
    div.children[0].style.width = '20%';
    setTimeout(function(){
        div.children[2].style.opacity = 0;   
    }, 1);
    setTimeout(function(){   
        div.children[2].style.display = 'none';
        div.children[1].style.display = 'inline-block';
        div.children[1].style.opacity = 1;
    }, 300);
}