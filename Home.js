// scripts for the home tab...

// can manage the about us kinda stuff here?

var aboutUs = new AboutUs(
      'The Penny Aspen Project'
    , 'Images/ThePennyAspenProjectHIGHRES5_websize.jpg'
    , ' are a grunge influenced, alternative rock band from Cambridgeshire, UK. Birthed in 2025 from one of the few positive things to come out of 2020, where her art was written.'
);


var membersList = new Array();
membersList.push(new BandMember(
      'Benny Boy'
    , 'Images/BandMember_1.jpg'
    , 'Founding member, and one of the main writers of most of the music, but still in denial about the mid-life-crisis.'
    , 'Vocals + Dance'
));

membersList.push(new BandMember(
      'Nard'
    , 'Images/BandMember_2.jpg'
    , 'The othe Founding member, and the other main writer.'
    , 'Guitar + Vocals'
));

membersList.push(new BandMember(
      'Ed'
    , 'Images/BandMember_3.jpg'
    , 'The strongest drummer in town!'
    , 'Drums + eggs'
));

membersList.push(new BandMember(
      'Chris'
    , 'Images/BandMember_4.jpg'
    , ''
    , 'Bass + bass face'
));

membersList.push(new BandMember(
      'Seb'
    , 'Images/BandMember_5.jpg'
    , ''
    , 'Guitar + Vocals'
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
faqList.push(new FAQ(
      'Where did the name come from?'
    , 'Penny Aspen was Elvis\' 2nd wife.'
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

instaList.push(new InstaPic(
      'https://scontent-lhr8-2.cdninstagram.com/v/t51.82787-15/548128056_17844178221572517_8123209191877304141_n.webp?_nc_cat=106&ig_cache_key=MzcyMTU3NTY2NjgwMzAzNTk4Mw%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=d7ebc9Fj4FcQ7kNvwFRuPZb&_nc_oc=Admz9Cf7ZLPBm9DLELZKPVw8zgABHyq-5kiSDvV46qPHMGwxboM80FrsLOcrf--DILQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr8-2.cdninstagram.com&_nc_gid=xUjiNnQP9Hi4dAqhZaeN3Q&oh=00_AfeQnmOKfx7_kKebnCKBb2V4Yl3YBG9i0UGIdQ9D1YeKnw&oe=68F9AA2F'
    , 'https://www.instagram.com/p/DOlsVnoiE9P/'
));

instaList.push(new InstaPic(
      'https://scontent-lhr8-2.cdninstagram.com/v/t51.82787-15/547565392_17843970843572517_8212625362780717244_n.webp?_nc_cat=103&ig_cache_key=MzcyMDgyNDYzMjQzODcyMjY0Nw%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwNzl4NzE5LnNkci5DMyJ9&_nc_ohc=OYW_0A6CBPIQ7kNvwE7DiZK&_nc_oc=Admm3YSxOuqRaZ9a_IaSpgGqbWxW4bjNxhA0k_MJ2mIbzvu2kg4DpUInMHDYJNllE74&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr8-2.cdninstagram.com&_nc_gid=xUjiNnQP9Hi4dAqhZaeN3Q&oh=00_AfdesZoZ1HeijsnjHRjxMpQLmX9VLTnu-55jeGCgfT-8zQ&oe=68F990A0'
    , 'https://www.instagram.com/p/DOjBkoYCJBX/'
));

instaList.push(new InstaPic(
      'https://scontent-lhr8-2.cdninstagram.com/v/t51.82787-15/544349142_17843656599572517_6460629029289615585_n.webp?_nc_cat=101&ig_cache_key=MzcxOTUxOTg1NjYzMDk5OTE5OQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=01fgd-pUl90Q7kNvwGGC7Fh&_nc_oc=AdkvlJ41hXf94RmdSuPW1vrn5qGC3pmrABLryJT-vMMdFEltXghVdTqVfOvlBwu9BH8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr8-2.cdninstagram.com&_nc_gid=xUjiNnQP9Hi4dAqhZaeN3Q&oh=00_AfeNVSs65hEucRGWwPqeHDRvFX226dtIMzcYjVms8dVGHA&oe=68F98DB6'
    , 'https://www.instagram.com/p/DOeY5utAEUL/?img_index=1'
));

instaList.push(new InstaPic(
      'https://scontent-lhr6-2.cdninstagram.com/v/t51.82787-15/544634511_17843618172572517_3573465446158225378_n.webp?_nc_cat=105&ig_cache_key=MzcxOTM4NTczNzU2MTk0MjMwNA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=3JIZGov95A4Q7kNvwFns6QK&_nc_oc=AdldCfMuhF7uA7kmFkZIMiEpdhc9R3lWdsy6N5oTaIFvRQ07-KP860m-A3ZZwZ8Da9g&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr6-2.cdninstagram.com&_nc_gid=xUjiNnQP9Hi4dAqhZaeN3Q&oh=00_AfdHFzxBVUa7BwQxPq3UO6vzGdJ0I-R8EGh3372eAkB5Rg&oe=68F99024'
    , 'https://www.instagram.com/p/DOd6aL8iC0Y/?img_index=1'
));

instaList.push(new InstaPic(
      'https://scontent-lhr6-2.cdninstagram.com/v/t51.82787-15/544854232_17843277294572517_8575669797634479116_n.webp?_nc_cat=100&ig_cache_key=MzcxNzk0ODAwNTk1MDIwODM2OQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=mauo1L4omdAQ7kNvwGGnljC&_nc_oc=Adl3jIWCB2epYTvH2lcRAjLGOK6hHOPqKvzvToNAcQP5ZL2IqrL5N6pJw7YFNEx5NSI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr6-2.cdninstagram.com&_nc_gid=xUjiNnQP9Hi4dAqhZaeN3Q&oh=00_AfcA1HNUiqFhQO3gsnHw_H6d35d1Jb2M800KJfz3PieC9A&oe=68F9B660'
    , 'https://www.instagram.com/p/DOYzgcICA5A/?img_index=1'
));

instaList.push(new InstaPic(
      'https://scontent-lhr8-2.cdninstagram.com/v/t51.82787-15/543664784_17843106150572517_2328731438255909100_n.webp?_nc_cat=103&ig_cache_key=MzcxNzIyMTgxOTUyMzU0MzI2Mw%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=gSBfqYC-NuwQ7kNvwF_8dMw&_nc_oc=Adn4DVuT_iIzVJBjVKbvsuTTmEAnULvXBYnVDKnNI5WKtfKrZt-8V9XrQYzwMuDHADg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr8-2.cdninstagram.com&_nc_gid=xUjiNnQP9Hi4dAqhZaeN3Q&oh=00_AffjWUBVS6n93GPevwV-RGn55GoDLGXta4z8X7ToTegspg&oe=68F9B3EF'
    , 'https://www.instagram.com/p/DOWOYzYCDDf/'
));










function BuildAboutUs() {
    var template = $("#AboutUs_Template").html();

    var html = template.replace(/\$ABOUTUSPICTURE\$/g, aboutUs.AboutUsPicture)
                        .replace(/\$BANDNAME\$/g, aboutUs.BandName.toLowerCase())
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
      picList.push('Images/BandMember_' + (i+1) + 'p.jpg');
      picList.push('Images/BandMember_' + (i+1) + 'w.jpg');
      // randomise it?
      var oneOrZero = (Math.random()>=0.5)? 1 : 0;


      html += template.replace(/\$MEMBERNAME\$/g, membersList[i].Name)
                      .replace(/\$MEMBERPLAYS\$/g, membersList[i].Plays)
                      .replace(/\$MEMBERBLURB\$/g, membersList[i].Blurb)
                      .replace(/\$HEIGHT\$/g, height)
                      .replace(/\$WIDTH\$/g, width)
                      //.replace(/\$MEMBERPICTURE\$/g, membersList[i].Picture)
                      .replace(/\$MEMBERPICTURE\$/g, picList[oneOrZero])
                      
              ;
    }

    $("#BandMembers_MainOuter").html(html);

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

function BuildInsta() {
    var template = $("#InstaItem_Template").html();
    var html = "";

    for(i = 0; i < instaList.length; i++) {
        html += template.replace(/\$INSTAPICTURE\$/g, instaList[i].Src)
                        .replace(/\$INSTALINK\$/g, instaList[i].Link)
                ;
    }


    $("#InstaPictures_MainOuter").html(html);

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
