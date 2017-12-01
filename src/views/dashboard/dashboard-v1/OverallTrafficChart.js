import Chart from 'vue-chartjs'

export default Chart.Line.extend({
  data: function () {
    return {
      gradient: null,
      gradient2: null,
      options: {
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              max: 600,
              padding: 20
            },
            gridLines: {
              display: false
            }
          }],
          xAxes: [{
            ticks: {
              padding: 10
            },
            barPercentage: 0.8,
            gridLines: {
              display: false
            }
          }]
        },
        elements: {
          point: {
            radius: 0
          }
        }
      }
    }
  },
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 350)

    this.gradient.addColorStop(0.2, 'rgba(251,129,97,1)')
    this.gradient.addColorStop(0.4, 'rgba(246,75,51,1)')

    this.renderChart({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Total Users',
          borderColor: '#F64A32',
          pointBackgroundColor: '#FFF',
          backgroundColor: this.gradient,
          borderWidth: 1,
          lineTension: 0,
          data: [440, 300, 200, 360, 380, 220, 440, 500, 410, 420, 380, 440]
        }
      ]
    }, this.options)
  }
})
