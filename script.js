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
    reset();
    popup.classList.toggle('hidePopup');
}
function reset() {
    document.getElementById('contactForm').reset();
    clientFName.disabled = false;
    clientLName.disabled = false;
}
function toggleParentPopup() {
    var popup = document.getElementById('parentPopup');
    popup.classList.toggle('showPopup');
    popup.classList.toggle('hidePopup');
}
    var clientAge = document.getElementById("ages");
    var clientIdCheckbox = document.getElementById("contactIsClient");
    var contactFName = document.getElementById("contactFName");
    var contactLName = document.getElementById("contactLName");
    var clientFName = document.getElementById("clientFName");
    var clientLName = document.getElementById("clientLName");
    var submitButton = document.getElementById("submitButton");
    var contactForm = document.getElementById("contactForm");
    clientIdCheckbox.checked = false;
    clientIdCheckbox.addEventListener('change', (event) => {
        if (clientAge.selectedIndex == 1 || clientAge.selectedIndex == 2 || clientAge.selectedIndex == 3) {
            clientIdCheckbox.checked = false;
            toggleParentPopup();
        }
        if (clientIdCheckbox.checked == true) {
            clientFName.disabled = true;
            clientLName.disabled = true;
        }
        if (clientIdCheckbox.checked == false) {
            clientFName.disabled=false;
            clientLName.disabled=false;
        }
     })
     clientAge.addEventListener('change',(event) => {
        if((clientAge.selectedIndex == 1 || clientAge.selectedIndex == 2 || clientAge.selectedIndex == 3) && clientIdCheckbox.checked == true) {
            clientIdCheckbox.checked = false;
            clientFName.disabled = false;
            clientLName.disabled = false;
            toggleParentPopup();
        }
     })

function toggleLogin() {
    var popup = document.getElementById('signInPopup');
    popup.classList.toggle('showPopup');
    document.getElementById('loginForm').reset();
    popup.classList.toggle('hidePopup');
    document.getElementById('loginForm').reset();
}
