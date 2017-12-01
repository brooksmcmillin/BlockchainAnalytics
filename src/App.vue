<template>
  <div id="app">
    <template v-if="pageLoading">
      <router-view></router-view>
    </template>
    <template v-else>
      <div class="loader-overlay">
        <div class="loader">
          <div class="largeBox"></div>
          <div class="smallBox"></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      pageLoaded: false // page loaded default false
    }
  },
  computed: {
    pageLoading () {
      var self = this
      setTimeout(function () {
        self.pageLoaded = true
      }, 1000)
      return self.pageLoaded
    }
  }
}
</script>
