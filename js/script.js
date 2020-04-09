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
    //Main Page script
    function toggleServices() {
      var service = document.getElementById('services');
      var servButton = document.getElementById('servButton');
      service.classList.toggle("servicesClose");
      service.classList.toggle("servicesOpen");
    }
    function toggleLogin() {
        var popup = document.getElementById('signInPopup');
        popup.classList.toggle('showPopup');
        document.getElementById('loginForm').reset();
        popup.classList.toggle('hidePopup');
        document.getElementById('loginForm').reset();
    }