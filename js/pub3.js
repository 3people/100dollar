$(function(){
$(".return-top").hide();

$(window).scroll(function () {
   if ($(this).scrollTop() > 100) {
       $('.return-top').fadeIn();
   } else {
       $('.return-top').fadeOut();
   }
});

$('.return-top').click(function () {
   $('body,html').animate({
       scrollTop: 0
   }, 200);
   return false;
});
});
