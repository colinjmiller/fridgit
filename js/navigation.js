$(document).ready(function() {


/******* Navigation *******/

   var first = false;
   var corner = 20;
   $("#logo").css("left", corner);
   var position = $(".active").position();
   $(".nav-circle").css("left", $(window).width() - ($(window).width() - position.left ) + $(".active").width() / 2.5);

   /* Toggles CSS Animation for Circle */
   function toggleNavigation(navigationState) {
      $("li").each(function(index) {
         if(navigationState === true) {
            $("#logo").removeClass("open");
            $(this).css("opacity", 0);
         } else {
            $("#logo").addClass("open");
            $(this).css("opacity", 1);
         }
      });   
      if(navigationState === true) {
         $("#logo").css("opacity", 0);
         $("#circle").css({
               'border-radius': '25px',
               'width': '50px',
               'height': '50px',
               '-webkit-border-radius': '50px',
               '-moz-border-radius': '50px'
            });
         $(".nav-circle").css("left", $(window).width() - 70);
         $(".nav-bar").css("background-color", 'rgba(255, 255, 255, 0.0)');
      }
      else {
         $("#logo").css("opacity", 1);
         $("#circle").css({
               'border-radius': '5px',
               'width': '10px',
               'height': '10px',
               '-webkit-border-radius': '5x',
               '-moz-border-radius': '5px'
            });
         $(".nav-circle").css("left", $(window).width() - ($(window).width() - $(".active").position().left) + $(".active").width() / 2.5);
         if($(document).scrollTop() <= 20) 
            $(".nav-bar").css("background-color", 'rgba(255, 255, 255, 0.0)');
         else 
            $(".nav-bar").css("background-color", 'rgba(255, 255, 255, 0.9)');
      }
   }

   // makes the nav-bar pop up when the logo or the circle is clicked
   $("#logo").click(function(evt) {
         if ($("#logo").hasClass("open")) {
            toggleNavigation(true);
         } else {
            toggleNavigation(false);
         }
         centernav();
   });
   $("#circle").click(function(evt) {
         if ($("#logo").hasClass("open")) {
            toggleNavigation(true);
         } else {
            toggleNavigation(false);
         }
   });

   // switches between nav-bar if scroll is farther than 20
   $(window).scroll(function() {
         var scrollHeight = $(window).scrollTop();
         if (scrollHeight <= 20) {
            toggleNavigation(false);
            first = false;
         } else if (scrollHeight >= 20 && $("#logo").hasClass("open")){
            toggleNavigation(true);
            first = true;
         } else {
            if (first === false) {
               toggleNavigation(true);
               first = true;
            }
         } 
         $('.fade-overlay').css({'top': -.7*scrollHeight });
         $('.fade-overlay').css({'opacity':( 95 - scrollHeight )/100});
         centernav();
   });

   // center navigation on phones
   function centernav() {
      if($(window).width() < 768) {
         var side = ($(window).width() - $(".navigation-ul").width()) / 2;
         $(".navigation-ul").css("margin-left", side);
         if($("#logo").hasClass("open"))
            $(".nav-circle").css("left", $(window).width() - ($(window).width() - position.left ) + $(".active").width() / 2.5 + side);
         else 
            $(".nav-circle").css("left", $(window).width() - 70);

      }
   } centernav();

   // adjust logo navbear position
   $(window).resize(function() {
         centernav();
         overlayresize();
         var width = corner;
         $("#logo").css("left", width);
         if($("#logo").hasClass("open"))
            $(".nav-circle").css("left", $(window).width() - ($(window).width() - $(".active").position().left ) + $(".active").width() / 2.5);
         else 
            $(".nav-circle").css("left", $(window).width() - 70);
   });

/************ END OF NAVIGATION JAVASCRIPT ************/

/************      Overlay Fade in/out     ************/

   function overlayresize() {
      $(".fade-overlay").css("height", $(window).height());
      $(".fade-overlay").css("width", $(window).width());
      $(".text-center").css("top", $(window).height() / 2 - $(".text-center").height() / 2.5);
   } overlayresize();






});