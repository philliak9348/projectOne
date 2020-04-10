//service pages script
    function toggleInfoLeft() {
        var centers = document.getElementsByClassName("infoCenter");
        var center = centers[0];
        var lefts = document.getElementsByClassName("infoLeft");
        left = lefts[0];
        var rights = document.getElementsByClassName("infoRight");
        right = rights[0];
        center.classList.remove('infoCenter');
        center.classList.add('infoLeft');
        left.classList.remove('infoLeft');
        left.classList.add('infoRight');
        right.classList.remove('infoRight');
        right.classList.add('infoCenter')
    }
    function toggleInfoRight() {
        var centers = document.getElementsByClassName("infoCenter");
        var center = centers[0];
        var lefts = document.getElementsByClassName("infoLeft");
        left = lefts[0];
        var rights = document.getElementsByClassName("infoRight");
        right = rights[0];
        center.classList.remove('infoCenter');
        center.classList.add('infoRight');
        left.classList.remove('infoLeft');
        left.classList.add('infoCenter');
        right.classList.remove('infoRight');
        right.classList.add('infoLeft')
    }
