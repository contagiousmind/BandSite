// gigs info and functions...

 var gigList = new Array();
//  gigList.push(new Gig(
//       new Date('2025-03-15')
//     , 'Cambridge Band Comp 2025'
//     , ''
//     , 'The Portland Arms'
//     , 'Cambridge'
//     , 'UK'
//     , new Array(['', '', '', 'Bin Weasel'])
//     , ''
//     , '19:00'
//     , '20:30'
//     , ''
//     , ''
//  ));

//  gigList.push(new Gig(
//       new Date('2025-03-21')
//     , ''
//     , ''
//     , 'Hanks'
//     , 'Cambridge'
//     , 'UK'
//     , new Array(['Eels Eels Eels', '', '', ''])
//     , ''
//     , '19:00'
//     , '20:30'
//     , ''
//     , ''
//  ));

// gigList.push(new Gig(
//       new Date('2025-04-26')
//     , 'St. Neots Battle of the Bands 2025'
//     , 'Part of the summer fate'
//     , 'St. Neots Rugby Club'
//     , 'St. Neots'
//     , 'UK'
//     , new Array(['', '', '', ''])
//     , ''
//     , '19:00'
//     , '20:30'
//     , ''
//     , ''
//  ));

// gigList.push(new Gig(
//       new Date('2025-06-08')
//     , 'Cambridge Buskers Festival'
//     , 'Raising money for the Strawberry fair'
//     , 'Six Six Bar'
//     , 'Cambridge'
//     , 'UK'
//     , new Array(['', '', '', ''])
//     , ''
//     , 'All day'
//     , '15:30'
//     , ''
//     , ''
//  ));

// gigList.push(new Gig(
//       new Date('2025-06-08')
//     , 'Cambridge Buskers Festival'
//     , 'Raising money for the Strawberry fair'
//     , 'The Tram Depot'
//     , 'Cambridge'
//     , 'UK'
//     , new Array(['', '', '', ''])
//     , ''
//     , 'All day'
//     , '18:00'
//     , ''
//     , ''
//  ));

// gigList.push(new Gig(
//       new Date('2025-06-27')
//     , ''
//     , 'Presented by The Penny Aspen Project'
//     , 'The Voodoo Lounge @ Mama Liz\'s'
//     , 'Stamford'
//     , 'UK'
//     , new Array(['', '', '', ''])
//     , ''
//     , '19:30'
//     , '20:30'
//     , ''
//     , ''
//  ));

// gigList.push(new Gig(
//       new Date('2025-07-03')
//     , 'Norwich Battle of the Bands 2025'
//     , 'Heat 1'
//     , 'B2 @ The Brickmakers'
//     , 'Norwich'
//     , 'UK'
//     , new Array(['', '', '', ''])
//     , ''
//     , '19:30'
//     , '20:30'
//     , ''
//     , ''
//  ));

//  gigList.push(new Gig(
//       new Date('2025-08-07')
//     , 'Norwich Battle of the Bands 2025'
//     , 'Semi Final'
//     , 'B2 @ The Brickmakers'
//     , 'Norwich'
//     , 'UK'
//     , new Array(['', '', '', ''])
//     , ''
//     , '19:30'
//     , '20:30'
//     , ''
//     , ''
//  ));

// gigList.push(new Gig(
//       new Date('2025-08-23')
//     , 'Hunstanton Battle of the Bands 2025'
//     , 'Grand final'
//     , 'The Green'
//     , 'Hunstanton'
//     , 'UK'
//     , new Array(['', '', '', ''])
//     , ''
//     , '12:00'
//     , '14:00'
//     , 'Images/20250823_PromoPoster.jpeg'
//     , 'Images/20250823_GigPicture.jpeg'
//  ));

// gigList.push(new Gig(
//       new Date('2025-08-29')
//     , 'Weasels Nest'
//     , 'First one in a while!'
//     , 'The Tram Depot'
//     , 'Cambridge'
//     , 'UK'
//     , new Array(['Mutiny', 'Bin Weasel', '', ''])
//     , ''
//     , '19:00'
//     , '19:30'
//     , 'Images/20250829_PromoPoster.jpeg'
//     , 'Images/20250829_GigPicture.jpeg'
//  ));

// gigList.push(new Gig(
//       new Date('2025-09-06')
//     , 'Summer at the Beach'
//     , ''
//     , 'SOUNDLAB @ Waterbeach Barracks'
//     , 'Cambridge'
//     , 'UK'
//     , new Array(['', 'Bin Weasel', '', ''])
//     , ''
//     , '19:00'
//     , '19:30'
//     , 'Images/20250906_SummerAtTheBeach.jpg'
//     , 'Images/20250906_GigPicture.jpeg'
//  ));

// gigList.push(new Gig(
//       new Date('2025-12-06')
//     , 'Bin Weasel XMAS XTRAVAGANZA!'
//     , 'Punk rock Christmas all-dayer with so many awesome bands!'
//     , 'The Tram Depot'
//     , 'Cambridge'
//     , 'UK'
//     , new Array(['', 'Bin Weasel', '', ''])
//     , ''
//     , '19:00'
//     , '19:30'
//     , 'Images/20251206_Promo.jpg'
//     , ''
//  ));


// objects
function Gig(date, event, info, venue, city, country, bandList, ticketLink, doorsTime, stageTime, promoPoster, gigPicture) {
    this.Date = date;
    this.Event = event;
    this.Info = info;
    this.Venue = venue;
    this.City = city;
    this.Country = country;
    this.BandList = bandList;
    this.TicketLink = ticketLink;
    this.DoorsTime = doorsTime;
    this.StageTime = stageTime;
    this.PromoPoster = promoPoster;
    this.GigPicture = gigPicture
}


function BuildGigsDisplay(data) {

    for (i=1; i < data.values.length; i++) {
        gigList.push(new Gig(
            new Date(data.values[i][0])
          , data.values[i][1]
          , data.values[i][2]
          , data.values[i][3]
          , data.values[i][4]
          , data.values[i][5]
          , data.values[i][6]
          , data.values[i][7]
          , data.values[i][8]
          , data.values[i][9]
          , data.values[i][10]
          , data.values[i][11]
        ));
    }


    // do we have a gig in the future/?... put all figure gigs in seperate array we sort the other way
    var futureGigs = false;
    var futureGigList = new Array();
    var pastGigList = new Array();
    var todayDate =  new Date();
    todayDate.setHours(0);
    todayDate.setMinutes(0);
    todayDate.setSeconds(0);
    todayDate.setMilliseconds(0);

    for(i = 0; i < gigList.length; i++) {
        if (gigList[i].Date >= todayDate) {
          futureGigList.push(gigList[i]);
          futureGigs = true;
        } else {
          pastGigList.push(gigList[i]);
        }
    }

    // sort by latest first...
    pastGigList.sort((a, b) => b.Date - a.Date);
    // and otherway round for future gigs...
    futureGigList.sort((a, b) => a.Date - b.Date);


    // then put them back together...
    gigList = new Array();
    for(i = 0; i < futureGigList.length; i++) {
        gigList.push(futureGigList[i]);
    }
    for(i = 0; i < pastGigList.length; i++) {
        gigList.push(pastGigList[i]);
    }



    // then display them...
    // here's the docs for js date formating options as i always forget them
    // https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
    var dateOptions = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    };

    // get the size of the panel to size the images on left and right...
    var panelWidth = $("#TabContent_5").width();
    // left picture is 25% width... which is then 75% of the height...
    var pictureWidth = (panelWidth / 100.00) * 25.00;
    var pictureHeight = pictureWidth / 0.75;

    var itemTemplate = $("#GigItem_Template").html();
    var gigTitleTemplate = $("#GigSectionTitle_Template").html();
    var html = '';

    // track the year of each gig, to ut them in sections...
    var lastGigYear = 0;


    // if we have gig's coming put a title up top..
    html += gigTitleTemplate.replace("$TITLE$", 'Upcoming')
                            .replace("$UPCOMING$", 'upcoming')
                        ;
    

    for (i = 0; i < gigList.length; i++) {


        // is gig tomorrow?!
        var gigDate = gigList[i].Date.getFullYear() + '-' + (gigList[i].Date.getMonth()+1) + '-' + gigList[i].Date.getDate();
        var tomorrowDate = new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' + (new Date().getDate()+1);
        // tomorrowDate.setDate(tomorrowDate.getDate() + 1);
        var upcoming = 'upcoming';

        if (gigDate == tomorrowDate) {
            html += gigTitleTemplate.replace("$TITLE$", 'Tomorrow!')
                                    .replace("$UPCOMING$", 'upcoming')
                                ;

        } else if (gigDate == new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate()) {
            html += gigTitleTemplate.replace("$TITLE$", 'Today!')
                                    .replace("$UPCOMING$", 'upcoming')
                                ;
        } else {

            // gig in the past?
            if (gigList[i].Date <= todayDate) {
                if (lastGigYear != gigList[i].Date.getFullYear()) {
                    // add section title for this year...
                    html += gigTitleTemplate.replace("$TITLE$", gigList[i].Date.getFullYear())
                                            .replace("$UPCOMING$", '')
                                          ;
                }

              lastGigYear = gigList[i].Date.getFullYear();

              upcoming = '';
            }
        }

        html += itemTemplate.replace(/\$PROMOPOSTER\$/g, gigList[i].PromoPoster)
                            .replace(/\$DATE\$/g, gigList[i].Date.toLocaleDateString('en-GB', dateOptions))
                            .replace(/\$EVENT\$/g, gigList[i].Event)
                            .replace(/\$VENUE\$/g, gigList[i].Venue)
                            .replace(/\$INFO\$/g, gigList[i].Info)
                            .replace(/\$CITY\$/g, gigList[i].City)
                            .replace(/\$COUNTRY\$/g, gigList[i].Country)

                            .replace(/\$GIGPICTURE\$/g, gigList[i].GigPicture)

                            .replace("$UPCOMING$", upcoming)

                    ;
    }

    $("#TabContent_5").html(html);


    // and set the height and widths of outer image things...
    $(".gigitemleft").width(pictureWidth).height(pictureHeight);
    $(".gigitemright").width(pictureWidth).height(pictureHeight);


}

