
    
    var config = {
    apiKey: "AIzaSyAKJlo_j-vzp3V41tJo79yafU1xxSIo2Qk",
    authDomain: "me-mood.firebaseapp.com",
    databaseURL: "https://me-mood.firebaseio.com",
    projectId: "me-mood",
    storageBucket: "me-mood.appspot.com",
    messagingSenderId: "678977102390"
  //end of firebase init
  };
  
$(document).ready(function(){
  
      //firebase.initializeApp(config);
      var database = firebase.database();
       database.ref().limitToLast(1).on("child_added", function(childSnapshot, prevChildKey){
  
        //store snapshot data into variable
        var temotion = childSnapshot.val().emotion;
        var moodInput = temotion;
   
      var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + moodInput + "&api_key=H8YEjrprBP114UoKPFK4mv1xKW8sKR6o";

      // AJAX call to giphy API
      $.ajax({
          url: giphyURL,
          method: "GET"
      }).then(function (response) {
          var results = response.data;
          for (var i = 0; i < 1; i++) {
              var obj = results[i];
              var gifDiv = $("<div class='gif-results'>");
              var gifImage = $("<img>");
              gifImage.attr("src", obj.images.fixed_height.url);
              gifDiv.append(gifImage);
              $("#gifs-appear-here").prepend(gifDiv);
          }
        });
      });
      
       
    
        
//end of document.ready function
})