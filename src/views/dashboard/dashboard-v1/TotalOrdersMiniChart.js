import Chart from 'vue-chartjs'

export default Chart.Pie.extend({
  data () {
    return {
      gradient: null,
      options: {
        legend: {
          display: false
        }
      }
    }
  },
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 180)

    this.gradient.addColorStop(0.2, 'rgba(253,125,64,1)')
    this.gradient.addColorStop(0.4, 'rgba(254,162,0,0.8)')
    this.renderChart({
      labels: ['Men', 'Women'],
      datasets: [{
        data: [250, 100],
        backgroundColor: [
          this.gradient,
          '#EAEAEA'
        ],
        borderWidth: [0, 0, 0],
        hoverBackgroundColor: [
          this.gradient,
          '#EAEAEA'
        ]
      }]
    }, this.options)
  }
})
