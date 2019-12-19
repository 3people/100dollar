// window.onbeforeunload = function() {
//   window.scrollTo(0, 0);
// };

window.onload = function() {
  this.loadBg();
};

function loadBg() {
  var bg = document.getElementById("bg");
  bg.style.transform = "scale(1.0)";
}
