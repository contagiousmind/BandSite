var newsList = new Array();
var pageSize = 5;
var pageNumber = 0;


function BuildNews(data) {

    for (i=1; i < data.values.length; i++) {
        newsList.push(new News(
            new Date(data.values[i][0])
          , data.values[i][1]
          , data.values[i][2]
          , data.values[i][3]
          , data.values[i][4]
        ));
    }

    // order
    newsList.sort((a, b) => b.Date - a.Date);

    BuildNewsPage();


}

function BuildNewsPage(e) {

    $(e).remove();

    pageNumber++;
    var from = 0;
    var to = pageSize-1;;

    if (pageNumber > 1) {
        from = (pageNumber * pageSize) - 1;
        to = (from + pageSize) - 1;
    }


    var template = $("#NewsItem_Template").html();
    var loadMoreTemplate = $("#News_LoadMore_Template").html();
    var html = "";

    // do the sizes for the images...
    // it's either left or right, we'll do 25%
    // then if it's top, it's 100%
    var panelWidth = $("#TabContent_2").width();

    
    // left picture is 25% width... which is then 75% of the height...
    var pictureWidthSide = (panelWidth / 100.00) * 25.00;
    var pictureHeightSide= pictureWidthSide / 0.75;

    var pictureWidthTop = panelWidth;
    var pictureHeightTop = (pictureWidthTop / 100.00) * 25.00;      // make it a quarter height



    // just show in 'pages' of latest 5 at a time?
    for (i = 0; i < newsList.length; i++) {

        if (i >= from && i <= to) {

            html += template.replace(/\$TITLE\$/g, newsList[i].Title)
                            .replace(/\$NEWSPICTURE\$/g, newsList[i].Picture)
                            .replace(/\$WORDS\$/g, newsList[i].Words.replace(/\n/g,'</br>'))
                            .replace(/\$STYLE\$/g, newsList[i].Style)
                        ;
        }
    }

    if (to < newsList.length) {
        html += loadMoreTemplate;
    }

    $("#TabContent_2").append(html);


    // then set the sizes...
    $(".newsiteminner.pictureleft .newsitempicture").width(pictureWidthSide).height(pictureHeightSide);
    $(".newsiteminner.pictureright .newsitempicture").width(pictureWidthSide).height(pictureHeightSide);

    $(".newsiteminner.picturetop .newsitempicture").width(pictureWidthTop).height(pictureHeightTop);

}




function News(date, picture, title, words, style) {
    this.Date = date;
    this.Picture = picture;
    this.Title = title;
    this.Words = words;
    this.Style = style;
}



