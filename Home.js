// scripts for the home tab...

// can manage the about us kinda stuff here?

var aboutUs = new AboutUs(
      'The Penny Aspen Project'
    , 'Images/ThePennyAspenProjectHIGHRES5_websize.jpg'
    , '<b>\'The Penny Aspen Project\'</b> are a grunge influenced, alternative rock band from Cambridgeshire, UK. Birthed in 2025 from one of the few positive things to come out of 2020, where her art was written.'
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
    , 'Guitar and backing Vocals'
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
    , 'Penny Aspen was the inspiration of Alan Turin to break the code.'
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
faqList.push(new FAQ(
      'Where did the name come from?'
    , 'Penny Aspen was the original bassist of The Melvins.'
));


// would be best to query the profile and get latest x posts
// but that looks way harder than it used to be...
var instaList = new Array();
instaList.push(new InstaPic(
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.82787-15/563362502_17849278116572517_1277406326610318107_n.webp?_nc_cat=111&ig_cache_key=Mzc0MDM2MzQ3ODMzNTQ5MzY2OQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=qDLzaJ0t_TsQ7kNvwETIDMw&_nc_oc=AdnZvbioaUfF7FFj6AUyEafc4gsFdmTWapYsMpGnm1UDDU3yudwD-A3JWYGbGVai0IE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_gid=aCT0tC6bvrrJ7FZbEp3mKQ&oh=00_AfcBL_M2CtSzRADKPlz48kBVwJHOlT37YZQX9D6q-0cweA&oe=68F93FFD'
    , 'https://www.instagram.com/p/DPocMQpCBYl/'
));

instaList.push(new InstaPic(
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.82787-15/559328474_17848180461572517_9169486026731393268_n.webp?_nc_cat=108&ig_cache_key=MzczNTc4ODg0MjM0ODE5OTgyMA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwMTR4MTM1MS5zZHIuQzMifQ%3D%3D&_nc_ohc=0rR4Z4NSrzMQ7kNvwEI5u37&_nc_oc=AdnEVhXz92eqqjQQ3wLanPxgr3Ys82E2RnUg_GUwZmofDadloY6qXVhgRXNaJKLc-UI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_gid=aCT0tC6bvrrJ7FZbEp3mKQ&oh=00_AfeNqdXRVMelx6bzcVHCgsknHFaBlQgx9aVMezA_D0VV9w&oe=68F93D5E'
    , 'https://www.instagram.com/p/DPYMCi4CD-M/'
));

instaList.push(new InstaPic(
      'https://scontent-lhr6-1.cdninstagram.com/v/t51.82787-15/557824402_17848180122572517_3905937809090189049_n.webp?_nc_cat=110&ig_cache_key=MzczNTc4NzcwNjQ3MTk0ODAyNQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4NzIxLnNkci5DMyJ9&_nc_ohc=Z3-aGLdK5MoQ7kNvwGITIbF&_nc_oc=AdmbfA_epbo0sMuD9mApWpJokna_RsFXNn8K5PBUOKT10qSAdhpLcfHgYz1kJRjsSbc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_gid=aCT0tC6bvrrJ7FZbEp3mKQ&oh=00_Afca_3497DszdrYNK9WRU2-80ztssafdtf2l_WCbmWEzug&oe=68F9449B'
    , 'https://www.instagram.com/p/DPYLyBAiB75/'
));

instaList.push(new InstaPic(
      'https://scontent-lhr6-2.cdninstagram.com/v/t51.82787-15/558294772_17848179633572517_3485527912244570977_n.webp?_nc_cat=104&ig_cache_key=MzczNTc4NjA2NDc4Nzg1MTQwMg%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwMTJ4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=Zy7g6Ix7bGQQ7kNvwFZRrpo&_nc_oc=Adk2_7Jnf2iwlsXEl7NAqm01Yyh3l64WBJYCkwLFYHxp7dy0CDF0cgXP_f64gStwz58&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr6-2.cdninstagram.com&_nc_gid=aCT0tC6bvrrJ7FZbEp3mKQ&oh=00_AffrXnvMkDAezivfPg7B7yn6s6xbG6N1IldtEvD_JlSiQw&oe=68F9458D'
    , 'https://www.instagram.com/p/DPYLaIEiMiK/'
));

instaList.push(new InstaPic(
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.82787-15/553576003_17847011160572517_7919405975308119938_n.webp?_nc_cat=111&ig_cache_key=MzczMTgwMjU4OTM4MjA4MTE4OA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwMTN4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=G3OT_hn21MYQ7kNvwEBhVjy&_nc_oc=AdkJObApJLRoMWx7UxR6caEV_EQiuD3K3FqIDPoqq8wvFULQLtOd-OnaoN9OED9NBx4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_gid=aCT0tC6bvrrJ7FZbEp3mKQ&oh=00_Afc16SQDPymNc9xkqhY5PiQGFNYvx4vz3pgorsNPcvptog&oe=68F96011'
    , 'https://www.instagram.com/p/DPKBq7gAHqk/'
));

instaList.push(new InstaPic(
      'https://scontent-lhr8-2.cdninstagram.com/v/t51.82787-15/554291407_17846685309572517_3195757697256663624_n.webp?_nc_cat=103&ig_cache_key=MzczMDc0MDY3ODkwMTY4ODc2Mw%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=918O5mxBkaYQ7kNvwFvEyZz&_nc_oc=AdnAT2NqVSByM8tsMksYeyrSSRn0LpaLXj4WtaJiPDdz4JUseJb_SZv1i_6-tgaamno&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr8-2.cdninstagram.com&_nc_gid=aCT0tC6bvrrJ7FZbEp3mKQ&oh=00_Afc3KUWfVVt-fpoA3FbumU6JF5NL7yL9tQqtdGE-5Dd8OA&oe=68F95C44'
    , 'https://www.instagram.com/p/DPGQOGTCOm7/'
));

instaList.push(new InstaPic(
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.82787-15/550141573_17844733350572517_471748181381442682_n.webp?_nc_cat=107&ig_cache_key=MzcyMzc3MzkwODk3ODUwNTAyMQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=yZNRNp_e22gQ7kNvwF8CDgb&_nc_oc=AdkxMUdhvX0ivNLuzMV_h6LBjMdB72XRNkArltnPZmas5d2SObgAson-1qF5vI32W0w&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_gid=aCT0tC6bvrrJ7FZbEp3mKQ&oh=00_Afc7h3FbKQyV5Pfx4nB-9nSopdReC06b6optyZrzVMk6xg&oe=68F9674B'
    , 'https://www.instagram.com/p/DOtgKZwCBOk/?img_index=1'
));

instaList.push(new InstaPic(
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.82787-15/549177125_17844570267572517_5529363896161699202_n.webp?_nc_cat=111&ig_cache_key=MzcyMzEzODI3Mzk0MjQzODQwOA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=gXLwP_0WFvMQ7kNvwF1CH6c&_nc_oc=Adnq9M3y3vqLKyURj6AWRMFcijqNCe1PqIeaUzK58HAAEnVoes2yFNtmHEXXnNl3kSE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_gid=aCT0tC6bvrrJ7FZbEp3mKQ&oh=00_AffylEalVhXF2NE6YrnllsqclXkThSk-xnPZsBLXsXrJdw&oe=68F94BE9'
    , 'https://www.instagram.com/p/DOrPoi8AAII/'
));

instaList.push(new InstaPic(
      'https://scontent-lhr6-2.cdninstagram.com/v/t51.82787-15/549298110_17844467265572517_322381967913535174_n.webp?_nc_cat=104&ig_cache_key=MzcyMjc2MTM4NDY3Mzk5MzQ4MQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=-9gHMoRIrkYQ7kNvwFKLXNT&_nc_oc=AdmpsLdQEpId1g6XbOCfsU_magSqa22RKHGxFRmTZZpOsHesnZt1fiwfKh2BLEq_nmo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr6-2.cdninstagram.com&_nc_gid=aCT0tC6bvrrJ7FZbEp3mKQ&oh=00_Aff7Im1DREkDAPWZDv3cdHMwplyvA6jORgZ1xiQRy1mr7Q&oe=68F9652B'
    , 'https://www.instagram.com/p/DOp58FdCOMJ/'
));

instaList.push(new InstaPic(
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.82787-15/548835385_17844396219572517_6759649492796782473_n.webp?_nc_cat=111&ig_cache_key=MzcyMjQzNTc4MDM1ODk5OTM3OQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=U9t9r76GZ1UQ7kNvwGsKiQC&_nc_oc=Adk3A07wkEvINfCDU-zyel4k5fjmLRqyUHX-PNqXRzNqWyJzqWsqE-zYKapmrl4YANY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_gid=aCT0tC6bvrrJ7FZbEp3mKQ&oh=00_AffKFw7VBGIvINTSuLkAeqEdDCWpgsaghESh65YS5hdR9g&oe=68F9447D'
    , 'https://www.instagram.com/p/DOov56zgI1T/'
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

function InstaPic(src, link) {
    this.Src = src;
    this.Link = link;       // link to post
}
