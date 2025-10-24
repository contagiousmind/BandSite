// gigs info and functions...

 var gigList = new Array();
 

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

