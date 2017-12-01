<template>
  <div class="row">
    <div class="col-sm-12 col-md-6 col-lg-6">
      <div class="idb-block">
        <div class="idb-block-title">
          <h2>Line Chart</h2>
        </div>
        <div class="idb-block-content">
          <line-chart></line-chart>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-6">
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
          <h2>Doughnut Chart</h2>
        </div>
        <div class="idb-block-content">
          <doughnut-chart></doughnut-chart>
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
          <h2>Radar Chart</h2>
        </div>
        <div class="idb-block-content">
          <radar-chart></radar-chart>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-6">
      <div class="idb-block">
        <div class="idb-block-title">
          <h2>Polar Area Chart</h2>
        </div>
        <div class="idb-block-content">
          <polar-area-chart></polar-area-chart>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-6">
      <div class="idb-block">
        <div class="idb-block-title">
          <h2>Bubble Chart</h2>
        </div>
        <div class="idb-block-content">
          <bubble-chart></bubble-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from './vue-chartjs/LineChart'
import BarChart from './vue-chartjs/BarChart'
import DoughnutChart from './vue-chartjs/DoughnutChart'
import PieChart from './vue-chartjs/PieChart'
import RadarChart from './vue-chartjs/RadarChart'
import PolarAreaChart from './vue-chartjs/PolarAreaChart'
import BubbleChart from './vue-chartjs/BubbleChart'

export default {
  components: {
    LineChart,
    BarChart,
    DoughnutChart,
    PieChart,
    RadarChart,
    PolarAreaChart,
    BubbleChart
  }
}
</script>
