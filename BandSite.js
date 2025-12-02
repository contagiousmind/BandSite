// JavaScript source code

var c_LoadedSite = ''; 
var c_PhotoFolderName = '';
var c_songNameID = "";


// here's the docs for js date formating options as i always forget them
// https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
var dateOptions = {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
};

$(function () {
    
    // always start by loaded about us...
    GetData('Home_AboutUs', BuildAboutUs);

    // MenuItem_Click('Home');
    ReadQueryParam();
    
    GetThemeColors();

});

function ReadQueryParam() {

    var searchParams = new URLSearchParams(window.location.search);
    var page = 'Home';
    if (searchParams.has('p')) {
        page = searchParams.get('p');
    }
    if (searchParams.has('f')) {
        c_PhotoFolderName = searchParams.get('f');
    }
    if (searchParams.has('l')) {
        c_songNameID = searchParams.get('l');
    }

    MenuItem_Click(page);

}

function GetThemeColors() {
    GetData('Theme', function(data) {
        if (data.values.length > 0) {
            var r = document.querySelector(':root');
            // var rs = getComputedStyle(r);
        
            for(i=1; i < data.values.length; i++) {
                // r.style.setProperty('--background', 'green');

                r.style.setProperty('--'+data.values[i][0], data.values[i][1]);
            }

            // set the segments to gradients...
            //   border-image: linear-gradient(to right, #3acfd5 0%, #3a4ed5 100%) 1;
            // subtle
            $(".bordergradienttag").prop('style', 'border-image: linear-gradient(to right, var(--accentcolor3) 0%, var(--accentcolor4) 100%) 1;');

        }
    })
}


// keep track of what data has been loaded, so we don't double up by clicking around..
var loadedTabs = new Array();



// this was fun to do, but useless!
// var lastSrollY = 0;
// var startingImageSize = 0;

// // main image is full screen on load, then size on scroll down
// window.onscroll = function (e) {

//     // are we going up or down?...
//     var downUp = 'down';
//     var nowScrollY = window.scrollY;  // Value of scroll Y in px

//     if (nowScrollY < lastSrollY) {
//         // downUp = 'up';
//     }
//     lastSrollY = nowScrollY;

//     // set the height of images to be minus how much they've scrolled...
//     var currentImageHeight = $("#MainLogo").height();
//     if (startingImageSize == 0) {
//         startingImageSize = currentImageHeight;
//     }

//     // new height...
//     var newHeight = currentImageHeight - (nowScrollY / 10);
//     // if we're going up, add it back..
//     if (downUp == 'up') {
//         newHeight = currentImageHeight + (nowScrollY / 10);
//     }

//     // but we can't scroll up - as it's at the top of the page... so account for this...
//     var toAdd = startingImageSize - newHeight;

//     if (newHeight > 50) { //  || newHeight <= startingImageSize) {
//         // set height of image...
//         // $("#MainLogo").height(newHeight);

//         // $("body").css({"padding-top": toAdd});

//     }
// };


function MenuItem_Click(tab) {
    $(".menuitemouter").removeClass("selected");
    $("#MenuItemOuter_" + tab).addClass("selected");

    $(".maincontent").hide();
    $("#MainContent_" + tab).show();

    switch (tab.toLowerCase()) {

        case 'home':
            // GetData('Home_AboutUs', BuildAboutUs);
            GetData('Home_WhereDidThatNameComeFrom', BuildFAQs);
            GetData('Home_Members', BuildMembers);
            GetData('Insta', BuildInsta);

            // prep gig data here
            GetData('Gigs', SetupGigs);

            break;

        case 'news':     // news
            GetData('News', BuildNews);

            break;

        case 'videos':         // videos
            GetData('Videos', BuildVideos);

            break;

        case 'music':     // music
            GetData('Music', BuildMusic);

            break;

        case 'gigs':
            BuildGigsDisplay();

            break;

        case 'lyrics':
            GetData('Lyrics', BuildLyrics);

            break;

        case 'photos':
            GetData('Photos', BuildPhotos);

            break;

        case 'merch':
            GetData('Merch', BuildMerch);

            break;

    }

    var urlWithParms = '';
    // add it to url...
    if (tab != 'Home') {
        // window.history.pushState(tab + ' | ' + aboutUs.BandName, 'Title', location.host + location.pathname + '?p=' + tab + (c_LoadedSite != '' ? '&s=' + c_LoadedSite : ''));
        urlWithParms = window.location.protocol + "//" + window.location.host + window.location.pathname + '?p=' + tab + (c_LoadedSite != '' ? '&s=' + c_LoadedSite : '');
        window.history.pushState({ path: urlWithParms }, '', urlWithParms);

        if (aboutUs.BandName != undefined) {
            document.title = tab + " | " + aboutUs.BandName;
        }

    } else {
        // window.history.pushState(aboutUs.BandName, 'Title', location.host + location.pathname + (c_LoadedSite != '' ? '&s=' + c_LoadedSite : ''));
        urlWithParms = window.location.protocol + "//" + window.location.host + window.location.pathname + (c_LoadedSite != '' ? '&s=' + c_LoadedSite : '');
        window.history.pushState({ path: urlWithParms }, '', urlWithParms);

    }

}


function BuildMerch(data) {
    // merch simply a link we rediect to for now...
    if (data.values.length > 0) {
        if (data.values[0].length > 0) {
            // window.open(data.values[1][0], '_blank').focus();
            // window.open(data.values[1][0]);
            // link in html now

            // and put link on page...
            $("#TabContent_8").html(data.values[1][0]);

        }
    }
}


function GetData(sheetName, completeEvent) {

    if (loadedTabs.includes(sheetName)) {
        return;
    }

    var searchParams = new URLSearchParams(window.location.search);

    if (searchParams.has('s')) {
        c_LoadedSite = searchParams.get('s');
    }

    // photo's key - AIzaSyBnvRLQ5Wfv5MNb5q0APNsijA9xXpOYnaA

    // read site from url to get sheet id?\
    var aaa = 'AIzaSyBnvRLQ5Wfv5MNb5q0APNsijA9xXpOYnaA'; 
    var spreadsheetId = '17D3wVbnIUR5WS0LpTRUniBTU9rGuXmbWuq94i2GmRPQ'; // Replace with your spreadsheet ID

    if (location.host == 'contagiousmind.github.io') {
        aaa = 'AIzaSyAjynx0jJxrinbDqmsVFEA3cCmKEDC9NG0';
        spreadsheetId = '17D3wVbnIUR5WS0LpTRUniBTU9rGuXmbWuq94i2GmRPQ';

    } else if (location.host == 'ftf') {
        aaa = 'AIzaSyB4w1wbWjlq-__PtXnAG-PDZUia3xKxHxc';
        spreadsheetId = '1plf2xZA8KHbPHT_Lb1MZp7Lsq3AC4uFGh36eUVL4xHM';

    } else {
        // check for param that we use in dev...
        if (c_LoadedSite != "") {
            if (c_LoadedSite == 'ftf') {
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

}



function RandomNum(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


