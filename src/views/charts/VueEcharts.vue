<template>
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-12">
      <div class="idb-block">
        <div class="idb-block-title">
          <h2>Line Chart</h2>
        </div>
        <div class="idb-block-content">
          <line-chart></line-chart>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-12">
      <div class="idb-block">
        <div class="idb-block-title">
          <h2>Bar Chart</h2>
        </div>
        <div class="idb-block-content">
          <bar-chart></bar-chart>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-6">
      <div class="idb-block">
        <div class="idb-block-title">
          <h2>Pie Chart</h2>
        </div>
        <div class="idb-block-content">
          <pie-chart></pie-chart>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-6">
      <div class="idb-block">
        <div class="idb-block-title">
          <h2>Doughnut Chart</h2>
        </div>
        <div class="idb-block-content">
          <doughnut-chart></doughnut-chart>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-12">
      <div class="idb-block">
        <div class="idb-block-title">
          <h2>Funnel Chart</h2>
        </div>
        <div class="idb-block-content">
          <funnel-chart></funnel-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from './vue-echarts/LineChart.vue'
import BarChart from './vue-echarts/BarChart.vue'
import PieChart from './vue-echarts/PieChart.vue'
import DoughnutChart from './vue-echarts/DoughnutChart.vue'
import FunnelChart from './vue-echarts/FunnelChart.vue'

export default {
  name: 'buyers-stats',
  components: {
    LineChart,
    BarChart,
    PieChart,
    DoughnutChart,
    FunnelChart
  }
}
</script>
