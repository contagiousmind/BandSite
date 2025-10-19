// JavaScript source code
$(function () {

    MenuItem_Click(1);

});

// this was fun to do, but useless!
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
    var newHeight = currentImageHeight - (nowScrollY / 10);
    // if we're going up, add it back..
    if (downUp == 'up') {
        newHeight = currentImageHeight + (nowScrollY / 10);
    }

    // but we can't scroll up - as it's at the top of the page... so account for this...
    var toAdd = startingImageSize - newHeight;

    if (newHeight > 50) { //  || newHeight <= startingImageSize) {
        // set height of image...
        // $("#MainLogo").height(newHeight);

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


            GetData('https://docs.google.com/spreadsheets/d/e/2PACX-1vRB4E_6RnpLP1wWMjqcwsUvotNATB8Np3OntlXb7066ULcAHI9oqqRhucltFifPTYNd7DRNRE56oTdt/pub?output=csv&callback=googleDocCallback');

            break;

        case 2:
            break;

        case 3:         // videos
            BuildVideos();

            break;

        case 4:
            break;

        case 5:
            BuildGigsDisplay();
            break;

        case 6:
            break;

        case 7:
            break;
    }


}



// found a way to ready from a google sheet?...
// https://github.com/jsoma/tabletop?tab=readme-ov-file
// https://github.com/jsoma/tabletop/blob/master/examples/simple/no-tabletop.html
// cors issues of course...

// https://github.com/mholt/PapaParse/issues/809
// to help cors errors? nope
/*
window.googleDocCallback = function () { 
    return true; 
};



function GetData(url) {
        Papa.parse(url, {
          download: true,
          header: true,
          complete: GetData_Complete
        })
}

function GetData_Complete() {
    var data = results.data;

    alert("Successfully processed " + data.length + " rows!")


}

*/