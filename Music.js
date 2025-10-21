



function BuildMusic(data) {
    var musicList = new Array();

    for(i = 1; i < data.values.length; i++) {

        musicList.push(new Music(
              data.values[i][0]
        ));

    }

    var template = $("#Music_Template").html();

    var html = "";

    for(i = 0; i < musicList.length; i++) {
        html += template.replace(/\$MUSICLINK\$/g, musicList[i].SpotifyLink)

                    ;

    }

    $("#TabContent_4").html(html);

}


function Music(spotifyLink) {
    this.SpotifyLink = spotifyLink;
}

