// JavaScript source code
$(function () {
    MenuItem_Click(1);
    
});

var lastSrollY = 0;
var startingImageSize = 0;

// main image is full screen on load, then size on scroll down
window.onscroll = function (e) {

    // are we going up or down?...
    var downUp = 'down';
    var nowScrollY = window.scrollY;  // Value of scroll Y in px

    if (nowScrollY < lastSrollY) {
        // downUp = 'up';
    }
    lastSrollY = nowScrollY;

    // set the height of images to be minus how much they've scrolled...
    var currentImageHeight = $("#MainLogo").height();
    if (startingImageSize == 0) {
        startingImageSize = currentImageHeight;
    }

    // new height...
    var newHeight = currentImageHeight - (nowScrollY / 120);
    // if we're going up, add it back..
    if (downUp == 'up') {
        newHeight = currentImageHeight + (nowScrollY / 120);
    }

    // but we can't scroll up - as it's at the top of the page... so account for this...
    var toAdd = startingImageSize - newHeight;

    if (newHeight > 50) { //  || newHeight <= startingImageSize) {
        // set height of image...
        $("#MainLogo").height(newHeight);

        // $("body").css({"padding-top": toAdd});

    }
};


function MenuItem_Click(tab) {
    $(".menuitemouter").removeClass("selected");
    $("#MenuItemOuter_" + tab).addClass("selected");

    $(".maincontent").hide();
    $("#MainContent_" + tab).show();


    switch (tab) {

        case 1:
            BuildAboutUs();
            BuildFAQs();
            BuildMembers();
            BuildInsta();

            break;
        case 5:
            BuildGigsDisplay();
            break;


        case 7:
            // BuildVideos();

            break;

    }
}





