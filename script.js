//global script
function togglePanel() {
  var nav = document.getElementById('nav');
  var navButton = document.getElementById('toggleNav')
  nav.classList.toggle("openMenu");
  nav.classList.toggle("closedMenu");
}
function openFile(file) {
  window.open(file);
}
//Main Page specific
function toggleServices() {
  var service = document.getElementById('services');
  var servButton = document.getElementById('servButton');
  service.classList.toggle("servicesClose");
  service.classList.toggle("servicesOpen");
}
//Contact Page specific javascript
function togglePopup() {
    var popup = document.getElementById('popup');
    popup.classList.toggle('showPopup');
    popup.classList.toggle('hidePopup');
}
    var clientIdCheckbox = document.getElementById("contactIsClient");
    var contactFName = document.getElementById("contactFName");
    var contactLName = document.getElementById("contactLName");
    var clientFName = document.getElementById("clientFName");
    var clientLName = document.getElementById("clientLName");
    var submitButton = document.getElementById("submitButton");
    var contactForm = document.getElementById("contactForm");
    clientIdCheckbox.checked = false;
    clientIdCheckbox.addEventListener('change', (event) => {
        if (clientIdCheckbox.checked == true) {
            clientFName.disabled = true;
            clientLName.disabled = true;
        }
        else {
            clientFName.disabled=false;
            clientLName.disabled=false;
        }
     })
