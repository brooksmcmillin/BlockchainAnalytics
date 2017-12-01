import Chart from 'vue-chartjs'

export default Chart.Doughnut.extend({
  data () {
    return {
      options: {
        legend: {
          display: false
        },
        cutoutPercentage: 60
      }
    }
  },
  mounted () {
    this.renderChart({
      labels: ['Google Ads', 'Facebook Ads', 'Print Media'],
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
