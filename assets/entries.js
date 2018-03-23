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
       database.ref().on("child_added", function(childSnapshot, prevChildKey){
  
        //store snapshot data into variable
          var tdate = childSnapshot.val().date;
          var temotion = childSnapshot.val().emotion;
          var tstat = childSnapshot.val().rating;
          var tjournal = childSnapshot.val().journal;
           //add data from firebase to the table
      
        $("#table > tbody").prepend("<tr><td>" + tdate + "</td><td>" + temotion + "</td><td>" + tstat + "</td><td>" + tjournal + "</td></tr>");
       });
        
//end of document.ready function
})