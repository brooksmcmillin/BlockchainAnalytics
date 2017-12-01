<template>
  <div id="buyers-stats">
    <IEcharts :option="pie" style="width:100%; height:325px"></IEcharts>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <h3>2,50,000</h3>
        <h4 class="text-muted">Male Buyers</h4>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <h3>1,10,000</h3>
        <h4 class="text-muted">Female Buyers</h4>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <h3>56,000</h3>
        <h4 class="text-muted">Kids Buyers</h4>
      </div>
    </div>
  </div>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full.vue'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'

export default {
  name: 'buyers-stats',
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
            name: 'Buyers Stats',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              {
                value: 700,
                name: 'Male'
              },
              {
                value: 300,
                name: 'Female'
              },
              {
                value: 247,
                name: 'Kids'
              }
            ],
            roseType: 'radius',
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
