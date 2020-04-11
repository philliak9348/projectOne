    //global script
    function togglePanel() {
      var nav = document.getElementById('nav');
      var navButton = document.getElementById('toggleNav')
      nav.classList.toggle("openMenu");
      nav.classList.toggle("closedMenu");
    }
    function openFile(file) {
      window.open(file, "_self");
    }
    //Main Page script
    function toggleServices() {
      var service = document.getElementById('services');
      var servButton = document.getElementById('servButton');
      service.classList.toggle("servicesClose");
      service.classList.toggle("servicesOpen");
    }
    var num = 0;
    function togglePanelTest() {
      var home = document.getElementById('homeButton');
      var service = document.getElementById('navService');
      var about = document.getElementById('aboutButton');
      var contact = document.getElementById('contactButton');
      home.classList.toggle('hiddenNavButton');
      home.classList.toggle('navButton');
      service.classList.toggle('hiddenNavButton');
      service.classList.toggle('navButton');
      about.classList.toggle('hiddenNavButton');
      about.classList.toggle('navButton');
      contact.classList.toggle('hiddenNavButton');
      contact.classList.toggle('navButton');
    }