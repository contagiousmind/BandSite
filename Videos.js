
var videoList = new Array();
videoList.push(new YoutubeVideo(
      'czhJQ-_EJwE'
    , '\'Barking at Ghosts\' Live @Hunstanton Battle of the Bands 2025'
    , 'wide'
));

videoList.push(new YoutubeVideo(
      'GP6FhKt3C4U'
    , '\'Strange by my Side\' Live @The Tram Depot - August 2025'
    , 'wide'
));

videoList.push(new YoutubeVideo(
      'iKNnCNSaMDk'
    , '\'Better Than Before\' Live @The Tram Depot - August 2025'
    , 'wide'
));




function BuildVideos() {
    var template = $("#VIdeoItem_Template").html();

    var html = "";

    for(i = 0; i < videoList.length; i++) {
        html += template.replace(/\$VIDEOTITLE\$/g, videoList[i].Title)
                        .replace(/\$VIDEOID\$/g, videoList[i].ID)
                        .replace(/\$DISPLAYSIZE\$/g, videoList[i].DisplaySize)
                    ;

    }

    $("#TabContent_3").html(html);

}


function YoutubeVideo(id, title, displaySize) {
    this.ID = id;
    this.Title = title;
    this.DisplaySize = displaySize;
}

