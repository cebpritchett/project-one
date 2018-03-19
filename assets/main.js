//Stats Page

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
     
//*********************End Chart Input***************************