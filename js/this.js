$(function() {
  var sections = $("section");
  var navigation_links = $("#menu a");
  
  sections.waypoint({
    handler: function(event, direction) {
    
      var active_section;
      active_section = $(this);
      if (direction === "up") active_section = active_section.prev();
    },
    offset: 50
  });

});
$(function() {
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        
        $("#menu li a").css("background", "transparent");
     
        var id = $(this).attr('href'),

        top = $(id).offset().top;

        $('body,html').animate({scrollTop: top-46}, 1500);
    });
    $("#menu-footer").on("click","a", function (event) {
        event.preventDefault();
        
        $("#menu li a").css("background", "transparent");

        var id = $(this).attr('href'),

        top = $(id).offset().top;

        $('body,html').animate({scrollTop: top-82}, 1500);
    });
    $("#responsive-menu").on("click","a", function (event) {
        event.preventDefault();
        
        $("#menu li a").css("background", "transparent");

        var id = $(this).attr('href'),

        top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);
    });
});