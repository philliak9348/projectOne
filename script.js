function togglePanel() {
  var nav = document.getElementById('nav');
  var navButton = document.getElementById('toggleNav')
  nav.classList.toggle("openMenu");
  nav.classList.toggle("closedMenu");
}
function openFile(file) {
  window.open(file);
}