$(document).ready(function () {
    $('h1#firstH1').insertAfter($('h1').eq(1));

    $('.container div#second').css({'background-color': 'blue', 'color': 'white'}).html('<h1>This is my div</h1>').width('300px').height('300px');
});