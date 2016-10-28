


// new Vivus('svg1', {type: 'scenario', start: 'autostart'}, null);



// $.getJSON("/data/metadata.json", function(json) {

//   // obj["Name"]
//   // obj["LINCS-ID"]
//   var celltypes = _(json).countBy(function(obj) {return obj["Cell-type"]});
//   var diseases = _(json).countBy(function(obj) {return obj["Disease"]});
//   var assays = _(json).countBy(function(obj) {return obj["Assays"]});
//   var filetypes = _(json).countBy(function(obj) {return obj["Filetype"]});
//   var perturbations = _(json).countBy(function(obj) {return obj["Perturbation"]});

//   var chart = function(thing) {

//     var ctx = $(thing[0]);
//     var myChart = new Chart(ctx, {
//       type: "doughnut",
//       data: {
//         labels: _.keys(thing[1]),
//         datasets: [{
//           data: _.values(thing[1])
//         }]
//       },
//       options: {
//         title: {
//           display: true,
//           text: thing[2],
//           fontSize: 24
//         }
//       }
//     });

//   }

  // chart(["#diseases", diseases, "Diseases"])
  // chart(["#celltypes", celltypes, "Cell Types"])
  // chart(["#assays", assays, "Assays"])
  // chart(["#filetypes", filetypes, "File Types"])
  // chart(["#perturbations", perturbations, "Perturbations"])


// });

// <section class="custom__pane-three">

//   <h1 class="custom__title">Our Data</h1>

//   <p style="margin-left: 20px;">Waiting on a data manifest from Terri. The infrastructure to plot the data across cell types, diseases, assays, filetypes, and perturbations is set up, and I've built a plot with dummy data: </p>

//   <div class="custom__pie-chart"><canvas id="celltypes" width="100" height="100"></canvas></div>
//   <div class="custom__pie-chart"><canvas id="diseases" width="100" height="100"></canvas></div>
//   <div class="custom__pie-chart"><canvas id="assays" width="100" height="100"></canvas></div>
//   <div class="custom__pie-chart"><canvas id="filetypes" width="100" height="100"></canvas></div>
//   <div class="custom__pie-chart"><canvas id="perturbations" width="100" height="100"></canvas></div>

// </section>

$(document).ready(function() {
  $(".descriptions").hide();

  $(".custom__assay-image, .custom__cell-image, .custom__approach-image").hover(function(e) {
    $(".descriptions").hide();
    console.log(e.target);
    console.log("#desc_"+e.target.id);
    $("#desc_"+e.target.id).show();
  }, function(e) {return false;});

  // charts for data page

  // var Celltypes = new Chart($("#celltypes"), {
  //   type: "doughnut",
  //   data: {
  //     labels: ["iPSC", "iMN"],
  //     datasets: [{
  //       data: [309, 19],
  //       backgroundColor: ['rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)'],
  //       borderColor: ['rgba(255,99,132,1)','rgba(54, 162, 235, 1)']
  //     }]
  //   },
  //   options: {
  //     title: { display: true, text: "Cell Types", fontSize: 24 }
  //   }
  // });

  var Diseases = new Chart($("#diseases"), {
    type: "doughnut",
    data: {
      labels: ["ALS", "SMA", "Control"],
      datasets: [{
        data: [4, 3, 3],
        backgroundColor: ['rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)'],
        borderColor: ['rgba(255, 206, 86, 1)','rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)']
      }]
    },
    options: {
      title: { display: true, text: "Diseases", fontSize: 24 },
      tooltips: {enabled: false },
      legend: { labels: { fontSize: 16 } }
    }
  });

  var DataReleases = new Chart($("#releases"), {
    type: "bar",
    data: {
      labels: ["9/16/2016", "Spring 2017", "Fall 2017"],
      datasets: [
        {data: [10, 20, 38], label: "Transcriptomic",
        backgroundColor: ['rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)','rgba(54, 162, 235, 1)','rgba(54, 162, 235, 1)','rgba(54, 162, 235, 1)'], borderWidth: 1},
        {data: [9, 19, 37], label: "Epigenomic",
        backgroundColor: ['rgba(255, 159, 64, 0.2)','rgba(255, 159, 64, 0.2)','rgba(255, 159, 64, 0.2)','rgba(255, 159, 64, 0.2)'],
        borderColor: ['rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)'], borderWidth: 1},
        {data: [10, 20, 38], label: "Proteomic",
        backgroundColor: ['rgba(153, 102, 255, 0.2)','rgba(153, 102, 255, 0.2)','rgba(153, 102, 255, 0.2)','rgba(153, 102, 255, 0.2)'],
        borderColor: ['rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)'], borderWidth: 1},
        {data: [0, 19, 28], label: "Imaging",
        backgroundColor: ['rgba(255, 99, 132, 0.2)','rgba(255, 99, 132, 0.2)','rgba(255, 99, 132, 0.2)','rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255,99,132,1)','rgba(255,99,132,1)','rgba(255,99,132,1)','rgba(255,99,132,1)'], borderWidth: 1 }
      ]
    },
    options: {
      title: { display: true, text: "Data Releases", fontSize: 24 },
      scales: {xAxes: [{ stacked: true }], yAxes: [{ stacked: true }] },  // Convoluted way of saying "stacked bar chart please"
      tooltips: {enabled: false},
      legend: { labels: { fontSize: 16 } }
    }
  });



  // var Assays = new Chart($("#assays"), {
  //   type: "doughnut",
  //   data: {
  //     labels: ["Transcriptomic", "Epigenomic", "Proteomic", "Imaging"],
  //     datasets: [{
  //       data: [207, 18, 84, 19],
  //       backgroundColor: ['rgba(54, 162, 235, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)'],
  //       borderColor: ['rgba(54, 162, 235, 1)','rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)']
  //     }]
  //   },
  //   options: {
  //     title: { display: true, text: "Assays", fontSize: 24 }
  //   }
  // });


});




