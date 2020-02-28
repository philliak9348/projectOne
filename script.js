function expandSection(ex) {
  var element = document.getElementById(ex);
  element.classList.toggle("open");
  element.classList.toggle("close");
}

function openFile(file) {
  window.open(file);
}