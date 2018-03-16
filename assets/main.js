//Stats Page
    //Plotly Pie Chart
    var data = [
    {
        values: [19, 26, 55],
        labels: ["Residential", "Non-Residential", "Utility"],
        type: "pie"
    }
    ];

    Plotly.newPlot("myDivPie", data);

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

    Plotly.newPlot("myDiv", data, layout);