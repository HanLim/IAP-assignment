window.onload = function(){
    initialize();
    setActiveNav(3);
    modVid();
    detectOrientation();
    forceLandscape();
    detectScreenResize();
}

function modVid(){
    setTimeout(function(){
        $('video').mouseenter(function(){
            this.setAttribute("controls", "controls");
        });
        $('video').mouseleave(function(){
            this.removeAttribute("controls");
        });
    }, 500);
}

function playPause(vid){
    if(vid.paused){
        vid.play();
    }
    else{
        vid.pause();
    }
}


