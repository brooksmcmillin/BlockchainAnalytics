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
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        avoidLabelOverlap: false,
        color: [
          '#17C7DF', '#F64A32', '#FEA200'
        ],
        series: [
          {
            name: 'Product Sales',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              {
                value: 700,
                name: 'Product A'
              },
              {
                value: 300,
                name: 'Product B'
              },
              {
                value: 247,
                name: 'Product C'
              }
            ],
            label: {
              normal: {
                textStyle: {
                  color: 'rgba(0, 0, 0, 1)'
                }
              }
            },
            itemStyle: {
              normal: {
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 20
            }
          }
        ]
      }
    }
  }
}
</script>
