// Initialize Firebase
var config = {
  apiKey: "AIzaSyAKJlo_j-vzp3V41tJo79yafU1xxSIo2Qk",
  authDomain: "me-mood.firebaseapp.com",
  databaseURL: "https://me-mood.firebaseio.com",
  projectId: "me-mood",
  storageBucket: "me-mood.appspot.com",
  messagingSenderId: "678977102390"
//end of firebase function
};
firebase.initializeApp(config);
  var database = firebase.database();
            //var horoscopeURL = "http://horoscope-api.herokuapp.com/horoscope/today/" + horoscopeSign;
            //var horoscopeSign = "";
$(document).ready(function () {
  //hide hider and popup_box
  $("#modal1").show();
  $('#calendar').hide();
  $('#quote').hide();
  $("#todo").hide();
  $("#gifs-appear-here").hide();
  //on click hide the message and the
  $("#modalsubmit").click(function () {
      $("#modal1").hide();
      $('#calendar').show();
      $('#quote').show();
      $("#todo").show();
    $("#gifs-appear-here").show();

      //set variables for user input
      var date = moment().format('L');
      var emotion = $("#emotion-input").val().trim();
      var stat = $("#stat").val();
      var journal = $("#journal-input").val().trim();
      //create temporary object to stor input of user data
      var newMood ={ 
        date: date,
        emotion: emotion,
        journal: journal,
        rating: stat,
        //end of new object entry
      }
      
      //push to firebase database
      
      database.ref().push(newMood);

      //clear out the form text boxes after submit is pressed
      //$("#emotion-input").val("");
      //$("#journal-input").val("");

      //end of modal fadout function
  //});

  //Form submit funtion for first modal

//$("form").submit(function (event) {
     // event.preventDefault();
      
      var moodInput = $("#emotion-input").val().trim();
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

// To-do List Main Page //
 
$(function() {
  $('#calendar').fullCalendar({ 
    defaultView: 'listWeek',

    // customize the button names,
    // otherwise they'd all just say "list"
    views: {

      listDay: { buttonText: 'list day' },
      listWeek: { buttonText: 'list week' },
      listMonth: { buttonText: 'list month' }
    },

    header: {
      left: 'title',
      center: '',
      right: 'listDay,listWeek,listMonth'
    },
    events: 'https://fullcalendar.io/demo-events.json'
  })
});

