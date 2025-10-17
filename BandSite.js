// JavaScript source code
$(function () {
    MenuItem_Click(1);
    
});



function MenuItem_Click(tab) {
    $(".menuitemouter").removeClass("selected");
    $("#MenuItemOuter_" + tab).addClass("selected");

    $(".maincontent").hide();
    $("#MainContent_" + tab).show();


    switch (tab) {

        case 1:
            BuildAboutUs();
            BuildFAQs();
            BuildMembers();

            break;
        case 5:
            BuildGigsDisplay();
            break;

    }
}





