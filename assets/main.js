//import $ from 'jquery';
//import 'fullcalendar';

<script src="https://www.gstatic.com/firebasejs/4.12.0/firebase.js"></script>
<script>
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
  
</script>
//var horoscopeURL = "http://horoscope-api.herokuapp.com/horoscope/today/" + horoscopeSign;
//var horoscopeSign = "";
$(document).ready(function () {

  //hide hider and popup_box
    $("#modal1").show();
    $('#calendar').hide();
    $('#quote').hide();
    //on click hide the message and the
    $("#modalsubmit").click(function () {

        $("#modal1").hide();
        $('#calendar').show();
        $('#quote').show();
        
    //add the following to the intitialize firebase

        //set variables for user input
        var date = moment().format('L');
        var emotion = $("#emotion-input").val().trim();
        var journal = $("#journal-input").val().trim();
        

        //create temporary object to stor input of user data
        var newMood ={ 
          date: date,
          emotion: emotion,
          journal: journal,
          //end of new object entry
        }
        //push to firebase database
        firebase.initializeApp(config);
        database.ref().push(newMood);

        //clear out the form text boxes after submit is pressed
        $("#emotion-input").val("");
        $("#journal-input").val("");
      //end of modal fadout function
       });

       //firebase event to add mood data to database
        database.ref().on("child_added", function(childSnapshot, prevChildKey){
        
        //store snapshot data into variable
          var tdate = childSnapshot.val().date;
          var temotion = childSnapshot.val().emotion;
          var tjournal = childSnapshot.val().journal;

          
        
        
    //Form submit funtion for first modal

    $(".giphSubmit").submit(function (event) {
        event.preventDefault();
        var moodInput = $("#giphSubmit").val().trim();
        console.log(moodInput);

        var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + moodInput + "&api_key=H8YEjrprBP114UoKPFK4mv1xKW8sKR6o";

        // working on ajax call for giphy api
        $.ajax({
            url: giphyURL,
            method: "GET"
        }).then(function (response) {

            console.log(response);
            var results = response.data;
            console.log(results);

            $("#giph-results").html(response);

            //add data from firebase to the table
        $("#table > tbody").prepend("<tr><td>" + tdate + "</td><td>" + temotion + "</td><td>" + results + "</td><td>" + tjournal + "</td></tr>");

        });
    });


});

// To-do List on Home Page //{

    $(document).ready(function(){

     var todoList = document.createElement("fullcalendar");
     list.addEventListener('click', function() { 
         console.log(todoList)
            $("#calendar").fullCalendar({
              defaultView: "listWeek",
          
              // customize the button names,
              // otherwise they'd all just say "list"
              views: {
                listDay: { buttonText: "list day" },
                listWeek: { buttonText: "list week" },
                listMonth: { buttonText: "list month" }
                     },
          
              header: {
                left: "title",
                center: "",
                right: "listDay,listWeek,listMonth"
                      },
              events: "https://fullcalendar.io/demo-events.json"
                                         });
          });
        });
         

        // trigger events on calendar
        $('#calendar').fullCalendar({
            eventClick: function(calEvent, jsEvent, view) {
                console.log(calendar)
          
              alert('Event: ' + calEvent.title);
              alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
              alert('View: ' + view.name);
          
              // change the border color just for fun
              $(this).css('border-color', 'red');
          
            }
          });

          $('#calendar').fullCalendar({
            events: [
              {
                title: 'My Event',
                start: '2010-01-01',
                url: 'http://google.com/'
              }
              // other events here
            ],
            eventClick: function(event) {
              if (event.url) {
                window.open(event.url);
                return false;
              }
            }
          });

// Full Calendar on Calendar Page//
        $(function() {
          $("#calendar").fullCalendar({ eventClick: function(eventObj) {
              if (eventObj.url) {
                alert("Clicked " + eventObj.title + ".\n" + "Will open " + eventObj.url + " in a new tab");

            $('#calendar').fullCalendar({
              eventClick: function(eventObj) {
                if (eventObj.url) {
                  alert(
                    'Clicked ' + eventObj.title + '.\n' +
                    'Will open ' + eventObj.url + ' in a new tab'
                  );
          
                  window.open(eventObj.url);
          
                  return false; // prevents browser from following link in current tab.
                } else {
                  alert('Clicked ' + eventObj.title);
                }
              },
              defaultDate: '2018-03-15',
              events: [
                {
                  title: 'simple event',
                  start: '2018-03-02'
                },
                {
                  title: 'event with URL',
                  url: 'https://www.google.com/',
                  start: '2018-03-03'
                }
              ]
            });
          
          });
        });
        //end of firebase function
  };