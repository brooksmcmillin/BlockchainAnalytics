import Chart from 'vue-chartjs'

export default Chart.Bar.extend({
  data: function () {
    return {
      gradient: null,
      gradient2: null,
      options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
          position: 'top',
          labels: {
            fontSize: 12,
            usePointStyle: true
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              padding: 20,
              max: 500
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
            barPercentage: 1.1,
            gridLines: {
              display: false,
              drawBorder: false
            }
          }]
        }
      }
    }
  },
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0.2, 'rgba(251, 129, 97, 1)')
    this.gradient.addColorStop(1, 'rgba(246, 74, 50, 0.8)')
    this.gradient.addColorStop(0.9, 'rgba(246, 74, 50, 1)')

    this.gradient2.addColorStop(0.2, 'rgba(23, 199, 223, 1)')
    this.gradient2.addColorStop(1, 'rgba(23, 199, 223, 0.8)')
    this.gradient2.addColorStop(0.9, 'rgba(23, 199, 223, 1)')

    this.renderChart({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      datasets: [
        {
          type: 'bar',
          label: 'Sales',
          backgroundColor: this.gradient,
          hoverBackgroundColor: this.gradient,
          borderColor: '#F64A32',
          data: [120, 350, 450, 320, 240, 140, 380, 385, 385, 160]
        },
        {
          type: 'bar',
          label: 'Sales',
          backgroundColor: this.gradient2,
          hoverBackgroundColor: this.gradient2,
          borderColor: '#17C7DF',
          data: [180, 410, 250, 280, 260, 160, 320, 315, 315, 180]
        }
      ]
    }, this.options)
  }
})
