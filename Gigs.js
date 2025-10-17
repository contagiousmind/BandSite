// gigs info and functions...

 var gigList = new Array();
 gigList.push(new Gig(
      new Date('2025-03-15')
    , 'Cambridge Band Comp 2025'
    , ''
    , 'The Portland Arms'
    , 'Cambridge'
    , 'UK'
    , new Array(['', '', '', 'Bin Weasel'])
    , ''
    , '19:00'
    , '20:30'
    , ''
    , ''
 ));

 gigList.push(new Gig(
      new Date('2025-03-21')
    , ''
    , ''
    , 'Hanks'
    , 'Cambridge'
    , 'UK'
    , new Array(['Eels Eels Eels', '', '', ''])
    , ''
    , '19:00'
    , '20:30'
    , ''
    , ''
 ));

gigList.push(new Gig(
      new Date('2025-04-26')
    , 'St. Neots Battle of the Bands 2025'
    , 'Part of the summer fate'
    , 'St. Neots Rugby Club'
    , 'St. Neots'
    , 'UK'
    , new Array(['', '', '', ''])
    , ''
    , '19:00'
    , '20:30'
    , ''
    , ''
 ));

gigList.push(new Gig(
      new Date('2025-06-08')
    , 'Cambridge Buskers Festival'
    , 'Raising money for the Strawberry fair'
    , 'Six Six Bar'
    , 'Cambridge'
    , 'UK'
    , new Array(['', '', '', ''])
    , ''
    , 'All day'
    , '15:30'
    , ''
    , ''
 ));

gigList.push(new Gig(
      new Date('2025-06-08')
    , 'Cambridge Buskers Festival'
    , 'Raising money for the Strawberry fair'
    , 'The Tram Depot'
    , 'Cambridge'
    , 'UK'
    , new Array(['', '', '', ''])
    , ''
    , 'All day'
    , '18:00'
    , ''
    , ''
 ));

gigList.push(new Gig(
      new Date('2025-06-27')
    , ''
    , 'Presented by The Penny Aspen Project'
    , 'The Voodoo Lounge @ Mama Liz\'s'
    , 'Stamford'
    , 'UK'
    , new Array(['', '', '', ''])
    , ''
    , '19:30'
    , '20:30'
    , ''
    , ''
 ));

gigList.push(new Gig(
      new Date('2025-07-03')
    , 'Norwich Battle of the Bands 2025'
    , 'Heat 1'
    , 'B2 @ The Brickmakers'
    , 'Norwich'
    , 'UK'
    , new Array(['', '', '', ''])
    , ''
    , '19:30'
    , '20:30'
    , ''
    , ''
 ));

 gigList.push(new Gig(
      new Date('2025-08-07')
    , 'Norwich Battle of the Bands 2025'
    , 'Semi Final'
    , 'B2 @ The Brickmakers'
    , 'Norwich'
    , 'UK'
    , new Array(['', '', '', ''])
    , ''
    , '19:30'
    , '20:30'
    , ''
    , ''
 ));

gigList.push(new Gig(
      new Date('2025-08-23')
    , 'Hunstanton Battle of the Bands 2025'
    , 'Grand final'
    , 'The Green'
    , 'Hunstanton'
    , 'UK'
    , new Array(['', '', '', ''])
    , ''
    , '12:00'
    , '14:00'
    , 'Images/20250823_PromoPoster.jpeg'
    , 'Images/20250823_GigPicture.jpeg'
 ));

gigList.push(new Gig(
      new Date('2025-08-29')
    , 'Weasels Nest'
    , 'First one in a while!'
    , 'The Tram Depot'
    , 'Cambridge'
    , 'UK'
    , new Array(['Mutiny', 'Bin Weasel', '', ''])
    , ''
    , '19:00'
    , '19:30'
    , 'Images/20250829_PromoPoster.jpeg'
    , 'Images/20250829_GigPicture.jpeg'
 ));

gigList.push(new Gig(
      new Date('2025-09-06')
    , 'Summer at the Beach'
    , ''
    , 'SOUNDLAB @ Waterbeach Barracks'
    , 'Cambridge'
    , 'UK'
    , new Array(['', 'Bin Weasel', '', ''])
    , ''
    , '19:00'
    , '19:30'
    , 'Images/20250906_SummerAtTheBeach.jpg'
    , 'Images/20250906_GigPicture.jpeg'
 ));

gigList.push(new Gig(
      new Date('2025-12-06')
    , 'Bin Weasel XMAS XTRAVAGANZA!'
    , 'Punk rock Christmas all-dayer with so many awesome bands!'
    , 'The Tram Depot'
    , 'Cambridge'
    , 'UK'
    , new Array(['', 'Bin Weasel', '', ''])
    , ''
    , '19:00'
    , '19:30'
    , 'Images/20251206_Promo.jpg'
    , ''
 ));


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


function BuildGigsDisplay() {

    // sort by latest first...
    gigList.sort((a, b) => b.Date - a.Date);

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

    var itemTemplate = $("#GigItem_Template").html();
    var html = '';
    for (i = 0; i < gigList.length; i++) {
        
        html += itemTemplate.replace(/\$PROMOPOSTER\$/g, gigList[i].PromoPoster)
                            .replace(/\$DATE\$/g, gigList[i].Date.toLocaleDateString('en-GB', dateOptions))
                            .replace(/\$EVENT\$/g, gigList[i].Event)
                            .replace(/\$VENUE\$/g, gigList[i].Venue)
                            .replace(/\$CITY\$/g, gigList[i].City)
                            .replace(/\$COUNTRY\$/g, gigList[i].Country)

                            .replace(/\$GIGPICTURE\$/g, gigList[i].GigPicture)

                    ;

    }

    $("#TabContent_5").html(html);

}
