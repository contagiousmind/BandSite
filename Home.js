// scripts for the home tab...

// can manage the about us kinda stuff here?

var aboutUs = new AboutUs(
      'The Penny Aspen Project'
    , 'Images/ThePennyAspenProjectHIGHRES5_websize.jpg'
    , '<b>\'The Penny Aspen Project\'</b> are a grunge influenced, alternative rock band from Cambridgeshire, UK. Birthed in 2025 from one of the few positive things to ceom out of 2020, where her art was written.'
);


var membersList = new Array();
membersList.push(new BandMember(
      'Benny Boy'
    , 'Images/BandMember_1.jpg'
    , 'Founding member, and one of the main writers of most of the music, but still in denial about the mid-life-crisis.'
    , 'Main Vocals'
));

membersList.push(new BandMember(
      'Nard'
    , 'Images/BandMember_2.jpg'
    , 'The othe Founding member, and the other main writer.'
    , 'Lead guitar and backing Vocals'
));

membersList.push(new BandMember(
      'Ed'
    , 'Images/BandMember_3.jpg'
    , 'The strongest drummer in town!'
    , 'Drums (+eggs)'
));

membersList.push(new BandMember(
      'Chris'
    , 'Images/BandMember_4.jpg'
    , ''
    , 'Bass'
));

membersList.push(new BandMember(
      'Seb'
    , 'Images/BandMember_5.jpg'
    , ''
    , 'Guitar'
));


var faqList = new Array();
faqList.push(new FAQ(
      'Where did the name come from?'
    , 'Penny was the name of Nard\'s first cat.'
));
faqList.push(new FAQ(
      'Where did the name come from?'
    , 'Penny was the name of the first girl Ben loved, but couldn\'t have.'
));
faqList.push(new FAQ(
      'Where did the name come from?'
    , 'Penny Aspen was the inspiration of the of Alan Turin to break the code.'
));
faqList.push(new FAQ(
      'Where did the name come from?'
    , 'Penny Aspen was the original bassist of The Melvins.'
));
faqList.push(new FAQ(
      'Where did the name come from?'
    , 'Penny Aspen was the name of our first bass player'
));
faqList.push(new FAQ(
      'Where did the name come from?'
    , '...we\'re named after the three things we always keep in our back pocket. A Penny, a pen and whole lotta ass.'
));
faqList.push(new FAQ(
      'Where did the name come from?'
    , 'we love coins and trees'
));



function BuildAboutUs() {
    var template = $("#AboutUs_Template").html();

    var html = template.replace(/\$ABOUTUSPICTURE\$/g, aboutUs.AboutUsPicture)
                        .replace(/\$ABOUTUSBLURB\$/g, aboutUs.Blurb)
                    ;

    $("#AboutUs_MainOuter").html(html);
}

function BuildFAQs() {
    var template = $("#FAQ_Template").html();

    var html = '';

    for(i = 0; i < faqList.length; i++) {
        html += template.replace(/\$ANSWER\$/g, faqList[i].Answer)
                    ;

    }

    $("#FAQ_Answers_MainOuter").html(html);
}

function BuildMembers() {
    var template = $("#BandMember_Template").html();

    var html = '';

    for(i = 0; i < membersList.length; i++) {
        html += template.replace(/\$MEMBERPICTURE\$/g, membersList[i].Picture)
                        .replace(/\$MEMBERNAME\$/g, membersList[i].Name)
                        .replace(/\$MEMBERPLAYS\$/g, membersList[i].Plays)
                        .replace(/\$MEMBERBLURB\$/g, membersList[i].Blurb)
                ;
    }

    $("#BandMembers_MainOuter").html(html);


}


//objects
function AboutUs(bandName, aboutUsPicture, blurb) {
    this.BandName = bandName;
    this.AboutUsPicture= aboutUsPicture;
    this.Blurb = blurb;

}


function BandMember(name, picture, blurb, plays) {
    this.Name = name;
    this.Picture = picture;
    this.Blurb = blurb;
    this.Plays = plays;
}


function FAQ(question, answer) {
    this.Question = question;
    this.Answer = answer;
}


