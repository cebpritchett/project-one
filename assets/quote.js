$(document).ready(function(){
    $.ajax({
        url: 'https://talaikis.com/api/quotes/random/',
        dataType: 'json',
        success: function (response) {
            console.log('success', response);
            quote = response.quote;
            $('#quote').text('"'+quote+'"');
            if (response.author) {
                $('#author').text('- ' + response.author);
            } else {
                $('#author').text('- unkown');
            }
        }
    });
});
    
   
