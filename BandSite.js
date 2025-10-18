// JavaScript source code
$(function () {

    // check url for tab to run...
    var endOfUrl = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    if (endOfUrl.toLowerCase() == "index.html") {
        // carry on...
        MenuItem_Click(1);

    } else {
        urlSet = true;

        switch (endOfUrl.toLowerCase()) {
            case "news":
                MenuItem_Click(2);
                break;

            case "videos":
                MenuItem_Click(3);
                break;

            case "music":
                MenuItem_Click(4);
                break;

            case "gigs":
                MenuItem_Click(5);
                break;

            case "lyrics":
                MenuItem_Click(6);
                break;

            case "photos":
                MenuItem_Click(7);
                break;

            default:
                MenuItem_Click(1);
                break;
        }
    }
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

    // set url?
    var host = window.location.protocol + '//' + window.location.host;

    switch (tab) {

        case 1:
            window.location = host;
            BuildAboutUs();
            BuildFAQs();
            BuildMembers();
            BuildInsta();


            break;

        case 2:
            window.location = host + '/News';
            break;

        case 3:         // videos
            window.location = host + '/Videos';
            BuildVideos();

            break;

        case 4:
            window.location = host + '/Music';
            break;

        case 5:
            window.location = host + '/Gigs';
            BuildGigsDisplay();
            break;

        case 6:
            window.location = host + '/Lyrics';
            break;

        case 7:
            window.location = host + '/Photos';
            break;

    }
}





