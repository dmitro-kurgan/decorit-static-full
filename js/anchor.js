$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        // $(event).css({"background": "transparent", "color": "#00af43"});
        $("#menu li a").css("background", "transparent");
        // $(this).css("color", "#00af43");
        var id = $(this).attr('href'),

        top = $(id).offset().top;

        $('body,html').animate({scrollTop: top-82}, 1500);
    });
});