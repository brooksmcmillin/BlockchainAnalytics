import Chart from 'vue-chartjs'

export default Chart.Line.extend({
  data: function () {
    return {
      gradient: null,
      gradient2: null,
      options: {
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
              display: true,
              drawBorder: false
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
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(246, 74, 50, 0.5)')
    this.gradient.addColorStop(0.5, 'rgba(246, 74, 50, 0.25)')
    this.gradient.addColorStop(1, 'rgba(246, 74, 50, 0)')

    this.gradient2.addColorStop(0, 'rgba(23, 199, 223, 0.9)')
    this.gradient2.addColorStop(0.5, 'rgba(23, 199, 223, 0.25)')
    this.gradient2.addColorStop(1, 'rgba(23, 199, 223, 0)')

    this.renderChart({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Total Users',
          borderColor: '#F64A32',
          pointBackgroundColor: '#FFF',
          backgroundColor: this.gradient,
          borderWidth: 2,
          lineTension: 0,
          data: [440, 300, 200, 360, 380, 220, 440, 500, 410, 420, 380, 440]
        },
        {
          label: 'Active Users',
          borderColor: '#17C7DF',
          pointBackgroundColor: '#FFF',
          borderWidth: 2,
          backgroundColor: this.gradient2,
          lineTension: 0,
          data: [220, 150, 100, 180, 190, 110, 220, 350, 205, 210, 190, 220]
        }
      ]
    }, this.options)
  }
})
