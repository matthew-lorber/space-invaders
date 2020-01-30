let keys = [];

$(document).keydown(function(e){
        
    if (e.keyCode === 65 || e.keyCode === 68) {
        keys.push(e.keyCode);
        keying();
    }

//$("#player").stop(true,false).animate({"left":"+=100vw"},4000,"linear");
});

function keying() {
    for (let i=0; i<keys.length; i++) {
        if (keys[i] === 65) {
            $("#player").stop(true,false).animate({"left":"-=100vw"},4000,"linear");
        } else {
            $("#player").stop(true,false).animate({"left":"+=100vw"},4000,"linear");
        }
    }
    resetKeys();
}

function resetKeys() {
    keys = [];
}