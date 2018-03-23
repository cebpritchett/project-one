//var quoteURL = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en793"

//var quoteJSON = "assets/data.json"
//console.log(this.quoteJSON);

//var mydata = JSON.parse(data);
//console.log(this.mydata);

$(document).ready(function(){
     // This is our API key
     var APIKey = "166a433c57516f51dfab1f7edaed8413";
     // Here we are building the URL we need to query the database
     var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
       "q=Bujumbura,Burundi&units=imperial&appid=" + APIKey;
     // Here we run our AJAX call to the OpenWeatherMap API
     $.ajax({
         url: queryURL,
         method: "GET"
       })
       // We store all of the retrieved data inside of an object called "response"
       .then(function(response) {
         // Log the queryURL
         console.log("query url", queryURL);
         // Log the resulting object
         console.log("response", response);
         // Transfer content to HTML
         $(".city").html("<h1>" + response.name + " Weather Details</h1>");
         $(".wind").text("Wind Speed: " + response.wind.speed);
         $(".humidity").text("Humidity: " + response.main.humidity);
         $(".temp").text("Temperature (F) " + response.main.temp);
         // Log the data in the console as well
         console.log("Wind Speed: " + response.wind.speed);
         console.log("Humidity: " + response.main.humidity);
         console.log("Temperature (F): " + response.main.temp);
       });
 
   /* $.getJSON( "data.json", function( data ) {
        var items = [];
        console.log(this.items);
        $.each( data, function( key, val ) {
          items.push( "<li id='" + key + "'>" + val + "</li>" );
          console.log("hello?", this.items);

        });
       
        $( "<ul/>", {
          "class": "my-new-list",
          html: items.join( "" )
        }).appendTo( "body" );
       });
       */

});


   