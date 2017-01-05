window.onload = function(){
    initialize();
    setActiveNav(3);
    modVid();
    setTimeout(function(){
        changeVid(1);
    }, 1);
}

function modVid(){
    setTimeout(function(){
        $('video').mouseenter(function(){
            this.setAttribute("controls", "controls");
        });
        $('video').mouseleave(function(){
            this.removeAttribute("controls");
        });
    }, 1);
}

function playPause(vid){
    if(vid.paused){
        vid.play();
    }
    else{
        vid.pause();
    }
}
// setTimeout(function(){}, );
function changeVid(num){
    if(num == 1){
        document.getElementById('cocVid').currentTime = 0;
        setTimeout(function(){
            document.getElementById('crVid').pause();
            document.getElementById('pkmnVid').pause();
            document.getElementById('vid2').style.opacity = '0'; 
            document.getElementById('vid3').style.opacity = '0';
            document.getElementById('vid1').style.display = 'block'; 
            document.getElementById('vid2').style.display = 'none'; 
            document.getElementById('vid3').style.display = 'none';
        }, 500);
        setTimeout(function(){
            document.getElementById('vid1').style.opacity = '1'; 
        }, 1000);
        setTimeout(function(){
            
            document.getElementById('cocVid').play();
            
       }, 1500);
       
    }
    else if(num == 2){
        document.getElementById('crVid').currentTime = 0;
        setTimeout(function(){
            document.getElementById('cocVid').pause();
            document.getElementById('pkmnVid').pause();
            document.getElementById('vid1').style.opacity = '0'; 
            document.getElementById('vid3').style.opacity = '0';
            document.getElementById('vid1').style.display = 'none'; 
            document.getElementById('vid2').style.display = 'block'; 
            document.getElementById('vid3').style.display = 'none';
        }, 500);
        setTimeout(function(){
            document.getElementById('vid2').style.opacity = '1'; 
        }, 1000);
        setTimeout(function(){
            
            document.getElementById('crVid').play();
            
       }, 1500);
    }
    else{
        document.getElementById('pkmnVid').currentTime = 0;
        setTimeout(function(){
            document.getElementById('crVid').pause();
            document.getElementById('cocVid').pause();
            document.getElementById('vid1').style.opacity = '0'; 
            document.getElementById('vid2').style.opacity = '0';
            document.getElementById('vid1').style.display = 'none'; 
            document.getElementById('vid2').style.display = 'none'; 
            document.getElementById('vid3').style.display = 'block';
        }, 500);
        setTimeout(function(){
            document.getElementById('vid3').style.opacity = '1'; 
        }, 1000);
        setTimeout(function(){
           
            document.getElementById('pkmnVid').play(); 
       }, 1500);
    }
}


