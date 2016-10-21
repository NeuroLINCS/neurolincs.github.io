


// new Vivus('svg1', {type: 'scenario', start: 'autostart'}, null);



$.getJSON("/data/metadata.json", function(json) {

  // obj["Name"]
  // obj["LINCS-ID"]
  var celltypes = _(json).countBy(function(obj) {return obj["Cell-type"]});
  var diseases = _(json).countBy(function(obj) {return obj["Disease"]});
  var assays = _(json).countBy(function(obj) {return obj["Assays"]});
  var filetypes = _(json).countBy(function(obj) {return obj["Filetype"]});
  var perturbations = _(json).countBy(function(obj) {return obj["Perturbation"]});

  var chart = function(thing) {

    var ctx = $(thing[0]);
    var myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: _.keys(thing[1]),
        datasets: [{
          data: _.values(thing[1])
        }]
      },
      options: {
        title: {
          display: true,
          text: thing[2],
          fontSize: 24
        }
      }
    });

  }

  chart(["#diseases", diseases, "Diseases"])
  chart(["#celltypes", celltypes, "Cell Types"])
  chart(["#assays", assays, "Assays"])
  chart(["#filetypes", filetypes, "File Types"])
  chart(["#perturbations", perturbations, "Perturbations"])


});







//   var ctx = $("#myChart");
//   var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//       datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)'
//         ],
//         borderColor: [
//           'rgba(255,99,132,1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)'
//         ],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         yAxes: [{
//           ticks: {
//             beginAtZero:true
//           }
//         }]
//       }
//     }
//   });


// (function() {
//   // 9
//   // 9,999
//   // 99 999
//   // 99.9
//   var MATCH_NUMBER = /[0-9, ]+(\.\d*)?/;
//   var CHART_HEIGHT = 400;
//   var unique_id = 0;

//   function color(n) {
//     return ([
//       {
//         fillColor:   "rgba(174, 199, 232, 0.5)",
//         strokeColor: "rgba( 31, 119, 180, 1)",
//         pointColor:  "rgba( 31, 119, 180, 1)",
//         pointStrokeColor: "#fff",
//       },
//       {
//         fillColor:   "rgba(255, 187, 120, 0.5)",
//         strokeColor: "rgba(255, 127,  14, 1)",
//         pointColor:  "rgba(255, 127,  14, 1)",
//         pointStrokeColor: "#fff",
//       },
//       {
//         fillColor:   "rgba(152, 223, 138, 0.5)",
//         strokeColor: "rgba( 44, 160,  44, 1)",
//         pointColor:  "rgba( 44, 160,  44, 1)",
//         pointStrokeColor: "#fff",
//       },
//       {
//         fillColor:   "rgba(255,  39,  40, 0.5)",
//         strokeColor: "rgba(214,  39,  40, 1)",
//         pointColor:  "rgba(214,  39,  40, 1)",
//         pointStrokeColor: "#fff",
//       },
//       {
//         fillColor:   "rgba(197, 176, 213, 0.5)",
//         strokeColor: "rgba(148, 103, 189, 1)",
//         pointColor:  "rgba(148, 103, 189, 1)",
//         pointStrokeColor: "#fff",
//       },
//     ])[n] || {};
//   }

//   function get_data(container) {
//     // Fail unless the next element in the DOM is the data table.
//     var table = container.nextElementSibling;
//     var series_shift = 2;
//     var axis_selector = 'td:nth-child(1)';
//     var label_selector = 'th:nth-child(N)';
//     var series_selector = 'td:nth-child(N)';
//     if (container.dataset.series == "rows") {
//       series_shift = 1;
//       axis_selector = 'th:not(:nth-child(1))';
//       label_selector = 'tbody tr:nth-child(N) :first-child';
//       series_selector = 'tbody tr:nth-child(N) :not(:first-child)';
//     }

//     // Assume the columns form series.
//     var labels =
//       Array.prototype.slice.call(table.querySelectorAll(axis_selector), 0)
//       .map(function(e) { return e.textContent; });
//     var datasets = [];
//     for (var N = 0; N < 5; N++) {
//       var series_title =
//         table.querySelector(label_selector.replace('N', N + series_shift));
//       if (!series_title) {
//         break;
//       }
//       var series_data =
//         Array.prototype.slice.call(table.querySelectorAll(series_selector.replace('N', N + series_shift)), 0)
//         .map(function(e) {
//           var match = MATCH_NUMBER.exec(e.textContent) || [ '' ];
//           return parseFloat(match[0].replace(/[^0-9.]/g, ''));
//         });
//       var series = color(N);
//       series.data = series_data;
//       series.title = series_title.textContent;
//       datasets.push(series);
//     }
//     return {
//       labels: labels,
//       datasets: datasets,
//       table: table,
//     };
//   }

//   function make_chart(container) {
//     var id = "chart_" + ++unique_id;
//     container.id = id;
//     container.className = "figure";

//     var focus_table = container.dataset.focus != "chart";
//     var data = get_data(container);
//     var options = {
//       scaleFontFamily: 'Roboto',
//       scaleFontSize: 14,
//       showLegend: true,
//     };
//     for (var k in container.dataset) {
//       options[k] = container.dataset[k];
//     }
//     var renderer = 'Bar';
//     if (container.dataset.type == "line") {
//       renderer = 'Line';
//     }

//     var tabs = document.createElement('div');
//     tabs.className = "tabs";

//     var view_table = document.createElement('input');
//     var view_table_label = document.createElement('label');
//     view_table.type = 'radio';
//     view_table.name = 'view_' + id;
//     view_table.className = view_table_label.className = "view_table";
//     view_table.id = view_table_label.htmlFor = 'view_' + id + '_table';
//     view_table.checked = focus_table;
//     view_table_label.textContent = "Table";
//     container.appendChild(view_table);
//     tabs.appendChild(view_table_label);

//     var view_chart = document.createElement('input');
//     var view_chart_label = document.createElement('label');
//     view_chart.type = 'radio';
//     view_chart.name = 'view_' + id;
//     view_chart.className = view_chart_label.className = "view_chart";
//     view_chart.id = view_chart_label.htmlFor = 'view_' + id + '_chart';
//     view_chart.checked = !focus_table;
//     view_chart_label.textContent = "Chart";
//     container.appendChild(view_chart);
//     tabs.appendChild(view_chart_label);

//     container.appendChild(tabs);
//     container.appendChild(data.table);

//     var canvas = document.createElement("canvas");
//     canvas.width = container.clientWidth;
//     canvas.height = Math.min(CHART_HEIGHT, document.body.clientHeight - 20);
//     container.appendChild(canvas);

//     var rendered = false;
//     function render() {
//       var new_width = container.clientWidth;
//       var new_height = Math.min(CHART_HEIGHT, document.body.clientHeight - 20);

//       if (rendered && canvas.width == new_width && canvas.height == new_height) {
//         return;
//       }
//       rendered = true;

//       canvas.width = new_width;
//       canvas.height = new_height;
//       var ctx = canvas.getContext('2d');
//       var myChart = new Chart(ctx)[renderer](data, options);
//     }

//     if (!focus_table) {
//       render();
//     }
//     view_chart.addEventListener('change', render, false);
//     window.addEventListener('resize', function() {
//       if (view_chart.checked) {
//         render();
//       }
//     }, false);
//   }

//   window.addEventListener('load', function() {
//     Array.prototype.slice.call(document.getElementsByTagName("div"), 0)
//       .filter(function(e) { return e.dataset.figure === 'chart'; })
//       .map(make_chart);
//   }, false);
// }());
