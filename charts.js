
drawChart()
function getSeconds(){
  var now = new Date();
  return now.getSeconds();
}
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function drawChart() {
  var now = new Date();
  var hour = now.getHours();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var seconds = now.getSeconds();
  var minutes = now.getMinutes();
  console.log("minites: " + minutes*100/60);
  var dayPercentage = Math.round(hour*100/24);
  var weekPercentage = Math.round(now.getDay()*100/7);
  var yearPercentage = (month*100/12)
  var monthPercentage = Math.round(now.getDate()*100/daysInMonth(month, year));
  var hourPercentage = Math.round(minutes*100/60)
  var minutePerentage = Math.round(seconds*100/60);
  $('#container').highcharts({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Time Consumption'
    },
    subtitle: {
      text: 'How productive are you being?'
    },
    xAxis: {
      categories: ['Minute', 'Hour', 'Today', 'Week', 'Month', 'Year'],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: 'Percentage',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: ' '
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },

    series: [{
      name: "Percentage completed",
      data: [minutePerentage, hourPercentage, dayPercentage, weekPercentage, monthPercentage, yearPercentage]
    }]
  });
};
function start(){
  console.log("stuff: " + $('#container').highcharts().series[0]);
}
start()

// setTimeout(drawChart, 1000);
// setInterval(drawChart, 1000)
