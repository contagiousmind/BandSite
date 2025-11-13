// scripts for the home tab...

// can manage the about us kinda stuff here?

var membersList = new Array();
var faqList = new Array();
var aboutUs = new AboutUs('', '', '');


// would be best to query the profile and get latest x posts
// but that looks way harder than it used to be...
var instaList = new Array();



function BuildAboutUs(data) {

    aboutUs = new AboutUs(
        data.values[1][0]
      , data.values[1][1]
      , data.values[1][2]
      , data.values[1][3]
      , data.values[1][4]
      , data.values[1][5]
      , data.values[1][6]
      , data.values[1][7]
  );

    // set page title
    $(document).prop('title', aboutUs.BandName);
    // and the title of the home page
    $("#HomeTabTitle").html(aboutUs.BandName.toLowerCase());

    // and the insta, and youtube bits...
    $("#InstaPage").html('/' + aboutUs.InstaPage.toLowerCase());
    $("#InstaLink").prop('href','https://www.instagram.com/' + aboutUs.InstaPage + '/');
    

    $("#YouTubePage").html(aboutUs.YouTubePage.toLowerCase());
    $("#YouTubeLink").prop('href', 'https://www.youtube.com/@' + aboutUs.YouTubePage)

    // and footer info...
    var socialItemTemplate = $("#FooterSocial_Template").html();
    if (aboutUs.InstaPage != "") {
        $(".socialouter").append(
            socialItemTemplate.replace(/\$SOCIALLINK\$/g, 'https://www.instagram.com/' + aboutUs.InstaPage)
                              .replace(/\$SOCIALICON\$/g, 'Images/Instagram_Glyph_Gradient.png')
                              .replace(/\$SOCIALPAGE\$/g, aboutUs.InstaPage)
        );
    }

    if (aboutUs.YouTubePage != "") {
        $(".socialouter").append(
            socialItemTemplate.replace(/\$SOCIALLINK\$/g, 'https://www.youtube.com/@' + aboutUs.AboutUs)
                              .replace(/\$SOCIALICON\$/g, 'Images/yt_logo.png')
                              .replace(/\$SOCIALPAGE\$/g, aboutUs.YouTubePage)
        );
    }

    if (aboutUs.SpotifyPage != "") {
        $(".socialouter").append(
            socialItemTemplate.replace(/\$SOCIALLINK\$/g, 'https://open.spotify.com/' + aboutUs.SpotifyPage)
                              .replace(/\$SOCIALICON\$/g, 'https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png')
                              .replace(/\$SOCIALPAGE\$/g, aboutUs.SpotifyPage)
        );
    }

    var template = $("#AboutUs_Template").html();

    var html = template.replace(/\$ABOUTUSPICTURE\$/g, aboutUs.AboutUsPicture)
                        .replace(/\$BANDNAME\$/g, aboutUs.BandName.toLowerCase())
                        .replace(/\$ABOUTUSBLURB\$/g, aboutUs.Blurb)
                    ;

    $("#AboutUs_MainOuter").html(html);


    // and the cover image...
    if (aboutUs.CoverImage != "") {
        $("#MainContent_CoverImage img").prop('src', aboutUs.CoverImage);
    }

    // and main top image
    if (aboutUs.MainLogo != "") {
        $("#MainLogo").prop('src', aboutUs.MainLogo);

    }

    SetFavIcon();
    SetMetaTags();
}

function SetFavIcon() {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = location.origin + location.pathname + aboutUs.BandName.toLowerCase().replace(/ /g, '') + '_favicon.ico';
    
}

function SetMetaTags() {

    // get description and add name to it...
    var metaDesc = document.querySelector('meta[name="description"]').content;
    $('meta[name="description"]').attr("content", aboutUs.BandName + metaDesc);



    $("head").append('<meta property="og:title" content="' + aboutUs.BandName + ' | Your favourite local band" />');
    $("head").append('<meta property="og:description" content="' + aboutUs.BandName + aboutUs.Blurb + '" />');
    $("head").append('<meta property="og:url" content="' + location.href + '" />');
    $("head").append('<meta property="og:image" content="' + aboutUs.AboutUsPicture + '" />');
    $("head").append('<meta property="og:image:width" content="' + $('.aboutuspicture').width() + '" />');
    $("head").append('<meta property="og:image:height" content="' + $('.aboutuspicture').height() + '" />');


    
  


    // 
}

function BuildFAQs(data) {

    // Title for this section is the header...
    var title = data.values[0][0];

  for(i = 1; i < data.values.length; i++) {
      faqList.push(new FAQ(
              ''
          , data.values[i][0]
      ));
  }

    var template = $("#FAQ_Template").html();

    var html = '';

    for(i = 0; i < faqList.length; i++) {
        html += template.replace(/\$ANSWER\$/g, faqList[i].Answer)
                    ;

    }

    $("#FAQ_Answers_MainOuter").html(html);
    $(".faqtitle span").html(title.toLowerCase());
    
}

function BuildMembers(data) {

    // loop starting on 1, and there's a header row in 0
    for(i = 1; i < data.values.length; i++) {
        membersList.push(new BandMember(
            data.values[i][0]
          , data.values[i][1]
          , data.values[i][2]
          , data.values[i][3]
          , data.values[i][4]
        ));
    }

    var template = $("#BandMember_Template").html();

    var html = '';

     // set the size of these based on screen size... or actually just the div we're using
     var screenWidth = $("#BandMembers_MainOuter").width(); //  window.innerWidth;
     // and get width for each member
     var width = screenWidth / membersList.length;
     // and remove a few to fit it all in
     width = width-15;
     // and set the height so the width is 75% of height
     var height = width / 0.75;

    for(i = 0; i < membersList.length; i++) {

      // there are two picturesfor each member, profile, and wide...
      var picList = new Array();
      picList = membersList[i].Picture.split(',\n');
      // randomise it?
      var randomNum = RandomNum(1, picList.length) - 1;


      html += template.replace(/\$MEMBERNAME\$/g, membersList[i].Name)
                      .replace(/\$MEMBERPLAYS\$/g, membersList[i].Plays)
                      .replace(/\$MEMBERBLURB\$/g, membersList[i].Blurb)
                      //.replace(/\$MEMBERPICTURE\$/g, membersList[i].Picture)
                      .replace(/\$MEMBERPICTURE\$/g, picList[randomNum])
                      .replace(/\$INSTA\$/g, membersList[i].Insta)
                      
              ;
    }

    $("#BandMembers_MainOuter").html(html);

    // and set the height and widths...
    $(".memberouter").height(height).width(width);
    $(".memberpicture").height(height).width(width);

}

// and on click on member, enlarge?
function MemberPicture_Click(e) {
    // 'simply' remove our sizes, but store in data to put back
    

    if ($(e).data('large') == 'yes') {
        // put them back...
        $(e).width($(e).data('width')).height($(e).data('height'));
        $(e).find(".memberpicture").width($(e).data('width')).height($(e).data('height'));
        
        // reset tags
        $(e).data('large', 'no');
        $(e).removeClass('large');

    } else {

        // when making them big, make sure this is the only one that is big...


        $(e).data('width', $(e).width());
        $(e).data('height', $(e).height());
        $(e).data('large', 'yes');

        $(e).width("").height("");
        $(e).find(".memberpicture").width("").height("");
        
        $(e).addClass('large');
    }

      // scroll to
    $('html, body').animate({
      scrollTop: $(e).offset().top - 20 
  }, 'slow');
}


function BuildInsta(data) {
    for (i = 1; i < data.values.length; i++) {
        instaList.push(new InstaPic(
              data.values[i][0]
            , data.values[i][1]
        ));
    }


    var template = $("#InstaItem_Template").html();
    var html = "";

    for(i = instaList.length-1; i > -1; i--) {
        html += template.replace(/\$INSTAPICTURE\$/g, instaList[i].Src)
                        .replace(/\$INSTALINK\$/g, instaList[i].Link)
                ;
    }


    $("#InstaPictures_MainOuter").html(html);

    var w = ($("#InstaPictures_MainOuter").width() / 5) - 5;        // 5 across with a gap
    var h = w / 0.75;
    // and set size of pictures...
    $(".instaitemouter").width(w).height(h);

}



// and on click on member, enlarge?
function Picture_Click_Enlarge(e) {
    // 'simply' remove our sizes, but store in data to put back
    if ($(e).data('large') == 'yes') {
        // put them back...
        $(e).width($(e).data('width')).height($(e).data('height'));
        
        // reset tags
        $(e).data('large', 'no');
        $(e).removeClass('large');

    } else {

        // when making them big, make sure this is the only one that is big...

        $(e).data('width', $(e).width());
        $(e).data('height', $(e).height());
        $(e).data('large', 'yes');

        $(e).width("").height("");
        
        $(e).addClass('large');
    }

      // scroll to
    $('html, body').animate({
      scrollTop: $(e).offset().top - 20 
  }, 'slow');
}


//objects
function AboutUs(bandName, aboutUsPicture, blurb, coverImage, instaPage, youTubePage, spotifyPage, mainLogo) {
    this.BandName = bandName;
    this.AboutUsPicture= aboutUsPicture;
    this.Blurb = blurb;
    this.CoverImage = coverImage;
    this.InstaPage = (instaPage == null ? '' : instaPage);
    this.YouTubePage = (youTubePage == null ? '' : youTubePage);
    this.SpotifyPage = (spotifyPage == null ? '' : spotifyPage);
    this.MainLogo = mainLogo;
}


function BandMember(name, picture, blurb, plays, insta) {
    this.Name = name;
    this.Picture = picture;
    this.Blurb = blurb;
    this.Plays = plays;
    this.Insta = insta;
}


function FAQ(question, answer) {
    this.Question = question;
    this.Answer = answer;
}

function InstaPic(src, link) {
    this.Src = src;
    this.Link = link;       // link to post
}
