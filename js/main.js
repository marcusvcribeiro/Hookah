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

//RESIZE
        $(document).ready(function() {
            if ($(window.matchMedia("(max-width: 420px)").matches)) {

            } 
        });

//SLICK
        $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        swipeToSlide: true,
        
        infinite: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 0,
                slidesToScroll: 0,
                infinite: false,
                dots: false
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
        });