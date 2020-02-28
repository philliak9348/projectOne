function expandSection(ex) {
  var expand = document.getElementById(ex);
  expand.classList.toggle("open");
  expand.classList.toggle("close");
}

function openFile(file) {
  window.open(file);
}