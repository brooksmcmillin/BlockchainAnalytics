import {mixins, Bar} from 'vue-chartjs'

export default Bar.extend({
  mixins: [mixins.reactiveProp, mixins.reactiveData],
  props: ['chartData'],
  data: function () {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
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
            barPercentage: 1,
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
      /* this.renderChart({
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [
        {
          type: 'bar',
          label: 'Number of Transactions',
          backgroundColor: '#17C7DF',
          data: [300, 500, 700, 600, 420, 750, 600]
        }
      ]
    }, this.options) */
    this.renderChart(this.chartData, this.options)
  }
})
