$(document).ready(function() {

  // switches between nav-bar if scroll is farther than 15
  $(window).scroll(function() {
    var scrollHeight = $(window).scrollTop();
    $('.nav-bar-item').each(function(event) {
      if (scrollHeight >= $($(this).children().attr('href')).offset().top - 71) {
        $('.nav-bar-item').not(this).removeClass('active');
        $(this).addClass('active');
      }
    });
  });

  $('.nav-bar-item').click(function(e){
    e.preventDefault();
    var navHeight;
    if($(window).width() < 768)
      navHeight = 50;
    else
      navHeight = 70;
    var target = ""+ $(this).children('a').attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top - navHeight
    }, {duration: 1200, easing: 'swing'});
  });

  $('#logo').click(function(e){
    e.preventDefault();
    var navHeight;
    if($(window).width() < 768)
      navHeight = 50;
    else
      navHeight = 70;
    var target = '#hero';
    $('html, body').animate({
        scrollTop: $(target).offset().top - navHeight
    }, {duration: 1200, easing: 'swing'});
  });
});