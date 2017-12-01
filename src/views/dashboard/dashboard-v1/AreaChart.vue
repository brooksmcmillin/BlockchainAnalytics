<script>
// function to convert hex into rgba
function hexToRgbA (hex, alpha) {
  var c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = '0x' + c.join('')
    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')'
  }
  throw new Error('Bad Hex')
}

import Chart from 'vue-chartjs'

export default Chart.Line.extend({
  props: {
    data: {
      type: Array,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
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
            display: false
          }],
          xAxes: [{
            display: false
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

    this.gradient.addColorStop(0, hexToRgbA(this.color, 0))
    this.gradient.addColorStop(0.1, hexToRgbA(this.color, 0.1))
    this.gradient.addColorStop(0, hexToRgbA(this.color, 0))

    this.renderChart({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Total Users',
          borderColor: this.color,
          pointBackgroundColor: '#FFF',
          backgroundColor: this.gradient,
          borderWidth: 1,
          lineTension: 0,
          data: this.data
        }
      ]
    }, this.options)
  }
})
</script>
