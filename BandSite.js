// JavaScript source code


$(function () {
    
    MenuItem_Click('Home');
    // ReadQueryParam();
    
    GetThemeColors();

});

// function ReadQueryParam() {
//     var query = window.location.search;
//     if (query != "") {
//         MenuItem_Click(query.replace('?',''));
//     } else {
//         MenuItem_Click('Home');
//     }
// }


function GetThemeColors() {
    GetData('Theme', function(data) {
        if (data.values.length > 0) {
            var r = document.querySelector(':root');
            // var rs = getComputedStyle(r);
        
            for(i=1; i < data.values.length; i++) {
                // r.style.setProperty('--background', 'green');

                r.style.setProperty('--'+data.values[i][0], data.values[i][1]);
            }
        }
    })
}


// keep track of what data has been loaded, so we don't double up by clicking around..
var loadedTabs = new Array();



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

    switch (tab.toLowerCase()) {

        case 'home':
            // BuildAboutUs();
            // BuildFAQs();
            // BuildMembers();
            // BuildInsta();

            GetData('Home_AboutUs', BuildAboutUs);
            GetData('Home_WhereDidThatNameComeFrom', BuildFAQs);
            GetData('Home_Members', BuildMembers);
            GetData('Photos', BuildInsta);

            break;

        case 'news':     // news
            break;

        case 'videos':         // videos
            GetData('Videos', BuildVideos);

            break;

        case 'music':     // music
            GetData('Music', BuildMusic);
            break;

        case 'gigs':
            GetData('Gigs', BuildGigsDisplay);
            break;

        case 'lyrics':
            break;

        case 'photos':
            break;
    }


    // // add it to url...
    // if (location.host != "") {
    //     if (tab != 'Home') {
    //         window.history.replaceState(tab + ' | ' + aboutUs.BandName, 'Title', location.host + location.pathname + '?' + tab);

    //     } else {
    //         window.history.replaceState(aboutUs.BandName, 'Title', location.host + location.pathname);
    //     }
    // }

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

// try this?
function GetData(sheetName, completeEvent) {

    if (loadedTabs.includes(sheetName)) {
        return;
    }

    // photo's key - AIzaSyBnvRLQ5Wfv5MNb5q0APNsijA9xXpOYnaA

    // read site from url to get sheet id?\
    var aaa = ''; 
    var spreadsheetId = ''
    if (location.host == 'tpap') {
        aaa = 'AIzaSyAjynx0jJxrinbDqmsVFEA3cCmKEDC9NG0';
        spreadsheetId = '17D3wVbnIUR5WS0LpTRUniBTU9rGuXmbWuq94i2GmRPQ';

    } else if (location.host == 'ftf') {
        aaa = 'AIzaSyB4w1wbWjlq-__PtXnAG-PDZUia3xKxHxc';
        spreadsheetId = '1plf2xZA8KHbPHT_Lb1MZp7Lsq3AC4uFGh36eUVL4xHM';

    } else {
        // check for param that we use in dev...
        var query = window.location.search;
        if (query != "") {
            if (query.replace('?','') == 'ftf') {
                aaa = 'AIzaSyB4w1wbWjlq-__PtXnAG-PDZUia3xKxHxc';
                spreadsheetId = '1plf2xZA8KHbPHT_Lb1MZp7Lsq3AC4uFGh36eUVL4xHM';
            }
        } else {
            // dev
            aaa = 'AIzaSyBnvRLQ5Wfv5MNb5q0APNsijA9xXpOYnaA'; 
            spreadsheetId = '17D3wVbnIUR5WS0LpTRUniBTU9rGuXmbWuq94i2GmRPQ'; // Replace with your spreadsheet ID
        
        }
    }


    // var sheetName = 'Sheet1'; // Replace with your sheet name
    var url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${aaa}`;


    Ajax(url, function(data) {

        // keep track of what we've loaded.
        loadedTabs.push(sheetName);

        completeEvent.call('', data);
        

    }, '');
}

// https://docs.google.com/spreadsheets/d/e/2PACX-1vRB4E_6RnpLP1wWMjqcwsUvotNATB8Np3OntlXb7066ULcAHI9oqqRhucltFifPTYNd7DRNRE56oTdt/pub?output=csv


//https://github.com/orgs/community/discussions/108921
function Ajax(url, completeEvent, args) {

    $.ajax({
        url: url,
        type: 'GET',
        success: function(data) {
            completeEvent.call(this, data);
        }
    });


    // fetch(url)
    // .then(
    //     response => response.json()
    // )
    // // .then(
    // //     data => console.log(data.values)
    // // )
    // .catch(
    //     error => console.error('Error:', error)
    // );

}



function RandomNum(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


