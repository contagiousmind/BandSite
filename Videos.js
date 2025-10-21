
var videoList = new Array();
// videoList.push(new YoutubeVideo(
//       'czhJQ-_EJwE'
//     , 'Barking at Ghosts'
//     , ' Live @Hunstanton Battle of the Bands 2025'
//     , 'wide'
// ));

// videoList.push(new YoutubeVideo(
//       'GP6FhKt3C4U'
//     , 'Strange by my Side'
//     , ' Live @The Tram Depot - August 2025'
//     , 'wide'
// ));

// videoList.push(new YoutubeVideo(
//       'iKNnCNSaMDk'
//     , 'Better Than Before'
//     , ' Live @The Tram Depot - August 2025'
//     , 'wide'
// ));




function BuildVideos(data) {
    for(i = 1; i < data.values.length; i++) {

        videoList.push(new YoutubeVideo(
              data.values[i][0]
            , data.values[i][1]
            , data.values[i][2]
            , 'wide'
        ));

    }



    var template = $("#VIdeoItem_Template").html();

    var html = "";

    for(i = 0; i < videoList.length; i++) {
        html += template.replace(/\$VIDEOTITLE\$/g, ' ' + videoList[i].Title)
                        .replace(/\$SONGNAME\$/g, videoList[i].SongName)
                        .replace(/\$VIDEOID\$/g, videoList[i].ID)
                        .replace(/\$DISPLAYSIZE\$/g, videoList[i].DisplaySize)
                    ;

    }

    $("#TabContent_3").html(html);

}


function YoutubeVideo(id, songName, title, displaySize) {
    this.ID = id;
    this.SongName = songName;
    this.Title = title;
    this.DisplaySize = displaySize;
}

