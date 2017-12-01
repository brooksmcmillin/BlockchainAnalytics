<template>
  <IEcharts :option="map" style="width:100%; height:300px"></IEcharts>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full.vue'
import 'echarts/lib/chart/map'
import 'echarts/map/js/world'

export default {
  name: 'buyers-stats',
  components: {
    IEcharts
  },
  data () {
    return {
      map: {
        tooltip: {
          trigger: 'item',
          formatter: '{b}'
        },
        visualMap: {
          min: 0,
          max: 10000,
          text: ['High', 'Low'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['#787878', '#505050', '#383838']
          }
        },
        series: [
          {
            name: 'Global Sales',
            type: 'map',
            mapType: 'world',
            roam: true,
            itemStyle: {
              emphasis: {
                label: {
                  show: false
                }
              }
            },
            data: [
              {name: 'United States', value: 8000},
              {name: 'Russia', value: 900},
              {name: 'Argentina', value: 200},
              {name: 'Armenia', value: 100},
              {name: 'India', value: 6000},
              {name: 'Brazil', value: 2000},
              {name: 'Greenland', value: 4000}
            ]
          }
        ]
      }
    }
  }
}
</script>
