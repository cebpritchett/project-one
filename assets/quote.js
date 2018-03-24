
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
<<<<<<< HEAD
        









    
   
=======
>>>>>>> 1d638d8d184b57dc22255d5674564fa4d443140e
