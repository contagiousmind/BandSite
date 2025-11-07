// photo's page...
// can we do it 

var photoList = new Array();


function BuildPhotos(data) {

    // each column is a folder/event
    // each cell in that column is a picture url
    for(i = 0; i < data.values[0].length; i++) {
        var thisTitle = data.values[0][i];
        var thisDate = new Date(data.values[1][i])
        var thisItemList = new Array();

        for(ii = 2; ii < data.values.length; ii++) {
            if (data.values[ii][i] == undefined || data.values[ii][i] == "") {
                continue;
            }

            thisItemList.push(data.values[ii][i]);
        }

        photoList.push(new PhotoItem(thisTitle, thisDate, thisItemList));
    }

    // sort by date...
    photoList.sort((a, b) => b.Date - a.Date);


    var folderTemplate = $("#PhotosFolder_Template").html();
    var itemTemplate = $("#PhotosItem_Template").html();

    var html = "";
    // get size of screen to size the cover image...
    var w = ($("#TabContent_7").width() / 100) * 45;        // 45%
    var h = w / 0.75;

    // start by showing the titls, and the first picture
    for(i = 0; i < photoList.length; i++) {
        // pick a random picture for the 'cover'
        var r = RandomNum(0, photoList[i].Items.length-1);
        var coverImage = itemTemplate.replace(/\$PICTURE\$/g, photoList[i].Items[r])
                                    .replace(/\$COVER\$/g, 'cover')
                                ;

        var thisFolderName = GetCleanFolderName(photoList[i].Title);

        html += folderTemplate.replace(/\$TITLE\$/g, photoList[i].Title)
                            .replace(/\$TITLEPICTURE\$/g, photoList[i].Items[0])
                            .replace(/\$FOLDERID\$/g, i.toString())
                            .replace(/\$PICTURE\$/g, coverImage)
                            .replace(/\$DATE\$/g, photoList[i].Date.toLocaleDateString('en-GB', dateOptions))
                            .replace(/\$IDNAME\$/g, thisFolderName)
                        ;

    }

    $("#TabContent_7").html(html);

    // set size of cover image
    $(".photoitemouter.cover").width(w).height(h);

    if (c_PhotoFolderName != "") {
        // click it!?
        $("#PhotoFolder_" + c_PhotoFolderName).find('.photofoldertitleouter').click();
    }
}


function PhotoItemFolderClick(idName) {

    if (idName != undefined) {
        c_PhotoFolderName = idName;
    }
    
    // close all first...
    $(".photositemsouter").hide();

    $("#PhotoItems_" + c_PhotoFolderName).show(300);
    if ($("#PhotoItems_" + c_PhotoFolderName).data('loaded') != 'yes') {
        // load the pictures in...
        LoadItems();

    }

    // scroll to
    $('html, body').animate({
        scrollTop: $("#PhotoItems_" + c_PhotoFolderName).offset().top - 100 
    }, 'slow');


    // always add to url for easy sharing, and we can link from other places...
    var parms = window.location.protocol + "//" + window.location.host + window.location.pathname + '?p=Photos' + (c_LoadedSite != '' ? '&s=' + c_LoadedSite : '') + '&f=' + c_PhotoFolderName;
    window.history.pushState({ path: parms }, '', parms);

}

function LoadItems() {
    var itemTemplate = $("#PhotosItem_Template").html();
    var html = '';

    // size the grid inages,,,
    var w = ($("#TabContent_7").width() / 100) * 15;        // just under 16 & so we get 6 across
    var h = w / 0.75;

    // find the photo's based on name...
    var id = -1;
    for(i = 0; i < photoList.length; i++) {
        var thisFolderName = GetCleanFolderName(photoList[i].Title);
        if (thisFolderName == c_PhotoFolderName) {
            id = i;
            break;
        }
    }

    for(i = 0; i < photoList[id].Items.length; i++) {
        html += itemTemplate.replace(/\$PICTURE\$/g, photoList[id].Items[i])
                            .replace(/\$COVER\$/g, 'grid')
                        ;
    }

    $("#PhotoItems_" + c_PhotoFolderName).data('loaded', 'yes');
    $("#PhotoItems_" + c_PhotoFolderName).append(html);

    $(".photoitemouter.grid").width(w).height(h);
}

function PhotoItem(title, date, items) {
    this.Title = title;
    this.Date = date;
    this.Items = items;
}


function GetCleanFolderName(name) {
    return name.replace(/ /g, '')
                .replace(/@/g, '')
                .replace(/-/g, '')
        ;
}



function GigViewPhotos(photosFolder) {
    window.location = urlWithParms = window.location.protocol + "//" + window.location.host + window.location.pathname + '?p=Photos&f=' + GetCleanFolderName(photosFolder);
}



