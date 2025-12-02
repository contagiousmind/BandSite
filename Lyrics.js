
// objects
function SongLyric(songName, lyrics) {
    this.SongName = songName;
    this.Lyrics = lyrics;
}


function BuildLyrics(data) {

    var songLyricList = new Array();

    for (i=1; i < data.values.length; i++) {
        songLyricList.push(new SongLyric(
            data.values[i][0]
          , data.values[i][1]
        ));
    }

    var template = $("#LyricsItem_Template").html();
    var html = "";

    for(i=0; i<songLyricList.length; i++) {
        html += template.replace(/\$SONGNAME\$/g, songLyricList[i].SongName)
                        .replace(/\$SONGNAMEID\$/g, songLyricList[i].SongName.replace(/ /g,''))
                        .replace(/\$LYRICS\$/g, songLyricList[i].Lyrics.replace(/\n/g, '</br>'))
                    ;

    }

    $("#TabContent_6").html(html);

    if (c_songNameID != "") {
        // click it!?
        $("#LyricsOuter_" + c_songNameID).find('.lyricstitleouter').click();
    }

}


function LyricsClick(songNameID) {

    if (songNameID != undefined) {
        c_songNameID = songNameID;
    }

    // if this one is open already, just close it...
    if ($("#Lyrics_" + c_songNameID).is(":visible")) {
        $("#Lyrics_" + c_songNameID).hide(300);
        return;
    }
    
    // close all first...
    $(".lyricsitemsouter").hide();

    $("#Lyrics_" + c_songNameID).show(300);

    // scroll to
    $('html, body').animate({
        scrollTop: $("#Lyrics_" + c_songNameID).offset().top - 100 
    }, 'slow');


    // always add to url for easy sharing, and we can link from other places...
    var parms = window.location.protocol + "//" + window.location.host + window.location.pathname + '?p=Lyrics' + (c_LoadedSite != '' ? '&s=' + c_LoadedSite : '') + '&l=' + c_songNameID;
    window.history.pushState({ path: parms }, '', parms);

}