<<<<<<< HEAD
=======
import $ from 'jquery';
import 'fullcalendar';

>>>>>>> d1d1406a6ddba5f94125ce98dbe1f1d011ec2927
//var horoscopeURL = "http://horoscope-api.herokuapp.com/horoscope/today/" + horoscopeSign;
//var horoscopeSign = "";
$(document).ready(function () {

    //hide hider and popup_box
    $("#modal1").show();
    //on click hide the message and the
    $("#modalsubmit").click(function () {

        $("#modal1").hide();

        //end of modal fadout function
    });

<<<<<<< HEAD


    //Form submit funtion for first modal

+    $(".gifSubmit").submit(function (event) {
        event.preventDefault();
+       var moodInput = $("#emotion-input").val().trim();
        var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + moodInput + "&api_key=H8YEjrprBP114UoKPFK4mv1xKW8sKR6o";

+        // AJAX call to giphy API
=======
    //Form submit funtion for first modal

    $(".giphSubmit").submit(function (event) {
        event.preventDefault();
        var moodInput = $("#giphSubmit").val().trim();
        console.log(moodInput);

        var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + moodInput + "&api_key=H8YEjrprBP114UoKPFK4mv1xKW8sKR6o";

        // working on ajax call for giphy api
>>>>>>> d1d1406a6ddba5f94125ce98dbe1f1d011ec2927
        $.ajax({
            url: giphyURL,
            method: "GET"
        }).then(function (response) {
<<<<<<< HEAD
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var obj = results[i];
                var gifDiv = $("<div class='gif-results'>");
                var gifImage = $("<img>");
                gifImage.attr("src", obj.images.fixed_height.url);
                gifDiv.append(gifImage);
                $("#gifs-appear-here").prepend(gifDiv);
            }
=======

            console.log(response);
            var results = response.data;
            console.log(results);

            $("#giph-results").html(response);
>>>>>>> d1d1406a6ddba5f94125ce98dbe1f1d011ec2927
        });
    });


});

//Stats Page
<<<<<<< HEAD
//Plotly Pie Chart
var data = [{
    values: [19, 26, 55],
    labels: ["Residential", "Non-Residential", "Utility"],
    type: "pie"
}];

//Plotly.newPlot("myDivPie", data);

=======

//*********************Begin Chart Input**********************

    //Plotly Pie Chart Start
        var data = [
        {
            values: [19, 26, 55],
            labels: ["Residential", "Non-Residential", "Utility"],
            type: "pie"
        }
        ];

        Plotly.newPlot("myDivPie", data);
    //Plotly Pie Chart End

    //Plotly Line Chart Start
        Plotly.d3.csv(
          "https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv",
          function(err, rows) {
            function unpack(rows, key) {
              return rows.map(function(row) {
                return row[key];
              });
            }

            var trace1 = {
              type: "scatter",
              mode: "lines",
              name: "AAPL High",
              x: unpack(rows, "Date"),
              y: unpack(rows, "AAPL.High"),
              line: { color: "#17BECF" }
            };

            var trace2 = {
              type: "scatter",
              mode: "lines",
              name: "AAPL Low",
              x: unpack(rows, "Date"),
              y: unpack(rows, "AAPL.Low"),
              line: { color: "#7F7F7F" }
            };

            var data = [trace1, trace2];

            var layout = {
              title: "Basic Time Series"
            };

            Plotly.newPlot("myDiv", data, layout);
          }
        );
     //Plotly Line Chart Start
     
>>>>>>> d1d1406a6ddba5f94125ce98dbe1f1d011ec2927
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
<<<<<<< HEAD



/* $(function () {
    $('#calendar').fullCalendar({
        defaultView: 'listWeek',

        // customize the button names,
        // otherwise they'd all just say "list"
        views: {
            listDay: {
                buttonText: 'list day'
            },
            listWeek: {
                buttonText: 'list week'
            },
            listMonth: {
                buttonText: 'list month'
            }
        },

        header: {
            left: 'title',
            center: '',
            right: 'listDay,listWeek,listMonth'
        },
        events: 'https://fullcalendar.io/demo-events.json'
    })
});

*/
=======
  
//*********************End Chart Input*************************** 

// To-do List Main Page //
    $(document).ready(function(){

        $(function() {
            $("calendar").fullCalendar({
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
>>>>>>> d1d1406a6ddba5f94125ce98dbe1f1d011ec2927
