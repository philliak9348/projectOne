function togglePanel(ex) {
  var nav = document.getElementById('nav');
  nav.classList.toggle("panelOpen");
  nav.classList.toggle("panelClose");
}
function openFile(file) {
  window.open(file);
}