import Chart from 'vue-chartjs'

export default Chart.Bar.extend({
  data: function () {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            display: false
          }],
          xAxes: [{
            barPercentage: 0.6,
            display: false
          }]
        }
      }
    }
  },
  mounted () {
    this.renderChart({
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [
        {
          type: 'bar',
          label: 'Sales',
          backgroundColor: '#17C7DF',
          data: [300, 500, 700, 600, 420, 750, 600]
        }
      ]
    }, this.options)
  }
})
