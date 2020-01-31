/* GAME LOOP SETUP AND KEYBOARD LISTENERS */
let keys = {};
ww = Math.floor(window.innerWidth - $('#player').width());
hh = Math.floor(window.innerHeight * 0.87);

$("#start").on("click",()=>{
    if ($("#start").html() === "start") {
        gameLoop();
        $("#start").html("end");
    } else {
        location.reload();
    }
});

$(document).keydown((e)=>{
    e.preventDefault();
    if (e.keyCode === 65 || e.keyCode === 68 || e.keyCode === 32) {
        keys[e.keyCode] = true;
    }
});    
$(document).keyup((e)=>{
    e.preventDefault();
    if (e.keyCode === 65 || e.keyCode === 68 || e.keyCode === 32) {
        keys[e.keyCode] = false;
    }
});

/* GAME LOOP */
function gameLoop() {

    dx = 2.5;
    x = $("#player").position().left;

    
    if (keys[32]){shoot();}
    if (keys[65]){
        x -= dx;
    }    
    if (keys[68]){
        x += dx;
    }
    if (x <= 0) {x = 0}
    if (x >= ww) {x = ww}

    $("#player").css("left",x);
    
    setTimeout(gameLoop, 10);
}

/* GAME SETUP */
$(window).on("load",()=>loadInvaders());
function loadInvaders() {
    for (let i=0; i<11; i++) {$("#inv-row0").append("<div class='invader'><img id='inv" + i + "' src='./inv-A.svg' alt='invader'/></div>");}
    for (let i=0; i<11; i++) {$("#inv-row1").append("<div class='invader'><img id='inv" + i + "' src='./inv-B.svg' alt='invader'/></div>");}
    for (let i=0; i<11; i++) {$("#inv-row2").append("<div class='invader'><img id='inv" + i + "' src='./inv-B.svg' alt='invader'/></div>");}
    for (let i=0; i<11; i++) {$("#inv-row3").append("<div class='invader'><img id='inv" + i + "' src='./inv-C.svg' alt='invader'/></div>");}
    for (let i=0; i<11; i++) {$("#inv-row4").append("<div class='invader'><img id='inv" + i + "' src='./inv-C.svg' alt='invader'/></div>");}
}

/* SHOOT */
function shoot() {
    let n = document.querySelectorAll(".shot");
    if (n.length === 0) {
        $("#wrapper").append("<div class='shot' id='shot' style='left:" + (x+48) + "px; top:87vh'></div>");
        
        let shot = setInterval(shooting,50);
        function shooting() {
            newpos = Math.round($("#shot").position().top) - 30;
            if (newpos > 0) {
                $("#shot").css("top",newpos);
            }
            else {
                clearInterval(shot);
                $(".shot").remove();
            }
        };
    }
}
