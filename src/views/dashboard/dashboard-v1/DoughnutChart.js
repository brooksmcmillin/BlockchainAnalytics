import Chart from 'vue-chartjs'

export default Chart.Doughnut.extend({
  data () {
    return {
      options: {
        legend: {
          position: 'bottom',
          labels: {
            fontSize: 12,
            usePointStyle: true
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart({
      labels: ['Men', 'Women', 'Kids'],
      datasets: [{
        data: [250, 100, 70],
        backgroundColor: [
          '#17C7DF',
          '#F64A32',
          '#FEA200'
        ],
        borderWidth: [0, 0, 0],
        hoverBackgroundColor: [
          '#17C7DF',
          '#F64A32',
          '#FEA200'
        ]
      }]
    }, this.options)
  }
})
