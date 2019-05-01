$(document).ready(function () {
    var destination = $('a').attr('href', 'http://www.yahoo.com');
    if($('div').length) {
        console.log("Yes, that does exist.");
        $('div').css({'width': '300px', 'height': '300px', 'background': 'blue'})
    } else {
        console.log("Nope!")
    }
});