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