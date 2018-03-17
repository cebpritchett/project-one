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



    //Form submit funtion for first modal

    $(".gifSubmit").submit(function (event) {
        event.preventDefault();
        var moodInput = $("#emotion-input").val().trim();
        console.log(moodInput);

        var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + moodInput + "&api_key=H8YEjrprBP114UoKPFK4mv1xKW8sKR6o";

        // AJAX call to giphy API
        $.ajax({
            url: giphyURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
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
//Plotly Pie Chart
var data = [{
    values: [19, 26, 55],
    labels: ["Residential", "Non-Residential", "Utility"],
    type: "pie"
}];

//Plotly.newPlot("myDivPie", data);

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