//import $ from 'jquery';
//import 'fullcalendar';

<<<<<<< HEAD
console.log("bob");

=======
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
  
>>>>>>> f9539d37d3dc6ce5c76eb7d515604b724b184b35
//var horoscopeURL = "http://horoscope-api.herokuapp.com/horoscope/today/" + horoscopeSign;
//var horoscopeSign = "";

$(document).ready(function () {

    //hide hider and popup_box
    $("#modal1").show();
    //on click hide the message and the
    $("#modalsubmit").click(function () {

        $("#modal1").hide();

    //Form submit funtion for first modal

$("form").submit(function (event) {
        event.preventDefault();
        var moodInput = $("#emotion-input").val().trim();
        var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + moodInput + "&api_key=H8YEjrprBP114UoKPFK4mv1xKW8sKR6o";

        // AJAX call to giphy API
        $.ajax({
            url: giphyURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {

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


});

//Stats Page

//*********************Begin Chart Input**********************

    // //Plotly Pie Chart Start
    //     var data = [
    //     {
    //         values: [19, 26, 55],
    //         labels: ["Residential", "Non-Residential", "Utility"],
    //         type: "pie"
    //     }
    //     ];

    //     Plotly.newPlot("myDivPie", data);
    // //Plotly Pie Chart End

    // //Plotly Line Chart Start
    //     Plotly.d3.csv(
    //       "https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv",
    //       function(err, rows) {
    //         function unpack(rows, key) {
    //           return rows.map(function(row) {
    //             return row[key];
    //           });
    //         }

    //         var trace1 = {
    //           type: "scatter",
    //           mode: "lines",
    //           name: "AAPL High",
    //           x: unpack(rows, "Date"),
    //           y: unpack(rows, "AAPL.High"),
    //           line: { color: "#17BECF" }
    //         };

    //         var trace2 = {
    //           type: "scatter",
    //           mode: "lines",
    //           name: "AAPL Low",
    //           x: unpack(rows, "Date"),
    //           y: unpack(rows, "AAPL.Low"),
    //           line: { color: "#7F7F7F" }
    //         };

    //         var data = [trace1, trace2];

    //         var layout = {
    //           title: "Basic Time Series"
    //         };

    //         Plotly.newPlot("myDiv", data, layout);
    //       }
    //     );
     //Plotly Line Chart Start
     
//Plotly Bubble Chart
var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 11, 12, 13],
    mode: "markers",
    marker: {
        size: [40, 60, 80, 100]
    }
};

var data = [trace1];

var layout = {
    title: "Marker Size",
    showlegend: false,
    height: 400,
    width: 480
};

//Plotly.newPlot("myDiv", data, layout);
  
//*********************End Chart Input*************************** 


//*************** To-do List Home Page ************************



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
