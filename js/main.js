function navBarEffect() {
    var nav = document.getElementById("topNav");
    if (nav.className === "nav-links") {
        nav.className += " responsive";
    } else {
        nav.className = "nav-links";
    }
}

$(document).ready(function() {
    $('#map').addClass('desliga-frame'); // set the mouse events to none when doc is ready

    $('#overlay').on("mouseup", function() { // lock it when mouse up
        $('#map').addClass('desliga-frame');
        //somehow the mouseup event doesn't get call...
    });
    $('#overlay').on("mousedown", function() { // when mouse down, set the mouse events free
        $('#map').removeClass('desliga-frame');
    });

    $("#map").mouseleave(function() { // because the mouse up doesn't work... 
        $('#map').addClass('desliga-frame'); // set the pointer events to none when mouse leaves the map area
        // or you can do it on some other event
    });
});

//Scroll Menu
var $doc = $('html, body');
$(".nav li a").click(function() {
    $doc.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
    return false;
});