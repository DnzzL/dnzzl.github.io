var color = Chart.helpers.color;
var config = {
  type: 'polarArea',
  data: {
    labels: ["R", "Python", "Java", "Hadoop & Spark", "HTML & CSS & JS"],
    datasets: [{
      label: "2017",
      backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
      data: [55, 75, 65, 30, 50]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontColor: "white",
        fontSize: 18
      }
    }
  }
};


window.onload = function () {
  window.myRadar = new Chart(document.getElementById("myChart"), config);
};