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
        // $(document).ready(function() {
        //     if ($(window.matchMedia("(max-width: 420px)").matches)) {

        //     } 
        // });

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


function mascaraData(inputData, e){

var tecla;

if(document.all) // Internet Explorer
tecla = event.keyCode;
else //Outros Browsers
tecla = e.which;

if(tecla >= 48 && tecla < 58){ // numeros de 0 a 9 e '/'
var data = inputData.value;

//validar o dia do mês
if (data.length == 2){
if(inputData.value >= 1 && inputData.value <= 31) {
data += '/';
inputData.value = data;
return true;
}
else
return false;
}

//validar o mês (de 1 a 12)
if (data.length == 5){
mes = data[3]+""+data[4];
if(mes >= 1 && mes < 13) {
data += '/';
inputData.value = data;
return true;
}
else
return false;
}

//validar o ano (de 1900 a 2100)
if (data.length == 8){
ano = data[6]+""+data[7];
if(ano >= 19 && ano <= 21){
inputData.value = data;
return true;
}
else
return false;
}

}else if(tecla == 8 || tecla == 0) // Backspace, Delete e setas direcionais(para mover o cursor, apenas para FF)
return true;
else
return false;
}