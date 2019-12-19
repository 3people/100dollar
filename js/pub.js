//아코디언메뉴
var acc = document.getElementsByClassName("accordion");
var i;
var opened = document.getElementsByClassName("panel_opened");
  opened[0].style.maxHeight = "1148px";
  opened[0].previousElementSibling.classList.toggle("active");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
//탑버튼
$(document).ready(function()
{
    var speed = 500;
    $(".gotop").css("cursor", "pointer").click(function()
    {
        $('body, html').animate({scrollTop:0}, speed);
    });
});
