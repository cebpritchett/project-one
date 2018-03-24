$(document).ready(function(){
    $.ajax({
        url: 'http://api.adviceslip.com/advice',
        dataType: 'json',
        success: function (response) {
            console.log('success', response);
            advice = response.slip.advice;
            $('#quote').text('"'+advice+'"');
        }
    });
});
    
   
