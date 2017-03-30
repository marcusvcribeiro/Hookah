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

        $(document).ready(function() {
            // e.preventDefault();
            if ($(window.matchMedia("(max-width: 420px)").matches)) {
                $("galeria-responsiva").owlCarousel({
                autoPlay: false,
                slideSpeed : 700,
                paginationSpeed : 700,
                singleItem:true,
                responsive: true,
                navigation : false,
                rewindNav : true,
                scrollPerPage : false,
            
                });
                // $("#owl-demo").removeClass("fotoGaleria");
            } 
            // if ($(window.matchMedia("(min-width: 421px)").matches)) {
            //     // $('#owl-demo').removeAttr('id');
            //      document.getElementById("owl-demo").setAttribute("id", "teste");
            //     $("#teste").addClass("fotoGaleria");    
            //     $("div").removeClass("owl-carousel");
            //     $("div").removeClass("owl-theme");
            //     $("div").removeClass("owl-wrapper");
            //     $("div").removeClass("owl-wrapper-outer");
            //     $("div").removeClass("owl-controls");
            //     $("div").removeClass("owl-item");
            //     $("div").removeClass("clickable");
                
                
            // }

        
        });