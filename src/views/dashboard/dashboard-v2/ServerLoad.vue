<template>
  <IEcharts :option="pie" style="width:100%; height:300px"></IEcharts>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full.vue'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'

export default {
  components: {
    IEcharts
  },
  data () {
    return {
      pie: {
        backgroundColor: '#FFFFF',
        color: [
          '#17C7DF', '#F64A32', '#4EE2C6'
        ],
        series: [
          {
            name: 'Server Load',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            data: [
              {
                value: 1548,
                name: 'Product A'
              },
              {
                value: 310,
                name: 'Product B'
              },
              {
                value: 234,
                name: 'Product C'
              }
            ],
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            }
          }
        ]
      }
    }
  }
}
</script>
