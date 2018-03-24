
$(document).ready(function(){
    function getNewQuote(){
        $.ajax({
            url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en",
            jsonp: "jsonp",
            dataType : "jsonp",
          
            success: function(response) {
                $("#quote").html(response.quoteText);
                
      
            }
        })

    };

    getNewQuote();

});
        









    
   
