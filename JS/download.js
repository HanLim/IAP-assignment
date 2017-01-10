window.onload = function(){
	initialize();
	setActiveNav(4);
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

function checkoutDiv(){
    document.getElementById('toApps').classList.toggle('active');
    document.getElementById('toCart').classList.toggle('active');
    document.getElementById('chooseApps').style.opacity = 0;
    setTimeout(function(){
        document.getElementById('chooseApps').style.display = 'none';
        document.getElementById('checkout').style.display = 'inline-block';
    }, 500);
    setTimeout(function(){ 
        document.getElementById('checkout').style.opacity = 1;
    }, 700);
}
function chooseAppsDiv(){
    document.getElementById('toApps').classList.toggle('active');
    document.getElementById('toCart').classList.toggle('active');
    document.getElementById('checkout').style.opacity = 0;
    setTimeout(function(){
        document.getElementById('checkout').style.display = 'none';
        document.getElementById('chooseApps').style.display = 'inline-block';
    }, 500);
    setTimeout(function(){
        
        document.getElementById('chooseApps').style.opacity = 1;
    }, 700);
}

var inCart = [];
function addToCart(div, changeColor){
    if(changeColor){
        div.style.color = '#00cc99';
        div.innerHTML = '<p>ADDED</p>';
        var newElement = div.parentElement.children[1].children[0].innerHTML,
            repeated = false;
        for(var a = 0; a < inCart.length; a++){
            if (inCart[a] == newElement){
                repeated = true;
            }
        }
        if(!repeated){
            inCart.push(newElement);
        }
        printChosen();
    }
}

function removeApps(app){
    app.parentNode.removeChild(app);
    for(var a = 0; a < inCart.length; a++){
        if (inCart[a] == app.innerHTML){
            inCart.splice(a, 1);
        }
    }
    var paragraph = document.getElementsByTagName('p');
    for(var a = 0; a < paragraph.length; a++){
        if (paragraph[a].textContent == app.innerHTML){
            paragraph[a].parentNode.parentNode.children[2].innerHTML = '<p class="addButton">ADD TO CART</p>';
            paragraph[a].parentNode.parentNode.children[2].style.color = 'white';
            break;
        }
    }
    printChosen();
}

function printChosen(){
    document.getElementById('showSelected').innerHTML = "";
    for(var a = 0; a < inCart.length; a++){
        document.getElementById('showSelected').innerHTML += '<li onclick="removeApps(this)" id="chosen"'+ a +'>'+inCart[a]+'</li>';
    }
}

function validateForm(event){
    var email = document.forms["orderForm"]["email"].value;
    var password = document.forms["orderForm"]["password"].value;
    var validEmail = true,
        validPassword = true,
        appsSelected = true;

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
    if(inCart.length <= 0){
        document.getElementById('listHeader').style.color = 'red';
        appsSelected = false;
    }
    else{
        document.getElementById('listHeader').style.color = 'white';
    }
    if(!validEmail || !validPassword || inCart.length <= 0){
        return false;
    }
    else{
        return true;
    }
}