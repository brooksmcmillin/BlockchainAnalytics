<template>
  <IEcharts :option="line" style="width:100%; height:300px"></IEcharts>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full.vue'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/title'

export default {
  name: 'buyers-stats',
  components: {
    IEcharts
  },
  data () {
    return {
      line: {
        tooltip: {
          trigger: 'axis'
        },
        color: [
          '#17C7DF', '#F64A32'
        ],
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} K'
          }
        },
        legend: {
          data: ['Series A', 'Series B']
        },
        series: [
          {
            name: 'Series A',
            type: 'line',
            data: [11, 11, 15, 13, 12, 13, 10],
            markPoint: {
              data: [
                {type: 'max', name: 'max'},
                {type: 'min', name: 'min'}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: 'average'}
              ]
            }
          },
          {
            name: 'Series B',
            type: 'line',
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
              data: [
                {name: 'abc', value: -2, xAxis: 1, yAxis: -1.5}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: 'average'}
              ]
            }
          }
        ]
      }
    }
  }
}
</script>
