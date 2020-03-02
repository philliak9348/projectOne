function expandSection(ex) {
  var nav = document.getElementById('nav');
  var body = document.getElementById('info')
  nav.classList.toggle("panelOpen");
  body.classList.toggle("infoPart");
  nav.classList.toggle("panelClose");
  body.classList.toggle("infoFull");
}
function openFile(file) {
  window.open(file);
}