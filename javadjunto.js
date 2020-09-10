$(document).ready(function(){
    var masclaro = $(".borde");
    var cambiotexto = $(".letra")

    cambiotexto.mouseenter(function(){
        $("#titulo").text("???")
    });

    cambiotexto.mouseleave(function(){
        $("#titulo").text("A donde veranear?")
    });

    masclaro.mouseenter(function(){
        $(this).fadeTo("fast",0);
    });

    masclaro.mouseleave(function(){
        $(this).fadeTo("fast",1);
    });

    $("#subray").mouseenter(function(){
        $(this).css("background-color","red");
    });

    $("#subray").mouseleave(function(){
        $(this).css("background-color","rosybrown");
    });

    var escondido = false;

    $("#boton").click(function(){
        if (escondido==true) {
            escondido=false;
            $("div").show();
        } else {
            escondido=true;
            $("div").hide();
        }
    });


});