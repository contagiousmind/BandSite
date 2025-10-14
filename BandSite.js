// JavaScript source code
$(function () {
    LoadMenu();

    
});


function LoadMenu() {
    $( "#Menu" ).load( "Menu.html", function() {
        alert( "Load was performed." );
    });
}
