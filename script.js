function togglePanel() {
  var nav = document.getElementById('nav');
  var navButton = document.getElementById('toggleNav')
  nav.classList.toggle("openMenu");
  nav.classList.toggle("closedMenu");
}
function toggleServices() {
  var service = document.getElementById('services');
  var servButton = document.getElementById('servButton');
  service.classList.toggle("servicesClose");
  service.classList.toggle("servicesOpen");
}
function openFile(file) {
  window.open(file);
}