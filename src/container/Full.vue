<template>
  <div class="app-container" :class="{ 'collapsed-sidebar': sidebarCollapse, 'customizer-hide': !customizerIn, 'box-layout': boxLayoutEvent, 'dark-mode': darkModeEvent, 'red': getThemeColor==='red', 'green': getThemeColor==='green', 'orange': getThemeColor==='orange', '': getThemeColor==='default' }">
    <div class="sidebar-wrapper">
      <app-sidebar-nav></app-sidebar-nav>
    </div><!-- Sidebar panel closed -->
    <div class="main-content">
        <app-header></app-header>
        <!-- header closed -->
        <div class="base-container">
          <div class="inner-container">
            <div class="page-title">
              <h2 class="text-capitalize"><i class="ti-angle-left"></i>{{ pageBreadcrumbs }}</h2>
            </div>
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </div><!-- inner container closed -->
          <app-customizer></app-customizer>
        </div><!-- base container closed -->
    </div><!-- Main Content closed -->
  </div><!-- app container closed -->
</template>

<script>
import Header from '@/components/Header/Header'
import SideNav from '@/components/Sidebar/SideNav'
import Customizer from '@/components/Customizer/Customizer'
import EventBus from '../lib/eventBus'

export default {
  name: 'Full',
  data: function () {
    return {
      collapsed: false,
      customizer: false,
      boxLayout: false,
      darkMode: false,
      themeColor: ''
    }
  },
  components: {
    appHeader: Header,
    appSidebarNav: SideNav,
    appCustomizer: Customizer
  },
  computed: {
    // computed property to get page breadcrumbs
    pageBreadcrumbs () {
      return this.$breadcrumbs[0].meta.breadcrumb
    },
    // computed property to get the state of collapsed sidebar
    sidebarCollapse () {
      EventBus.$on('collapsedSidebar', payload => {
        this.collapsed = payload
      })
      return this.collapsed
    },
    // computed property to get the state of customizer
    customizerIn () {
      EventBus.$on('toggleCustomizer', payload => {
        this.customizer = payload
      })
      return this.customizer
    },
    // computed property to get the state of box layout
    boxLayoutEvent () {
      EventBus.$on('boxLayout', payload => {
        this.boxLayout = payload
      })
      return this.boxLayout
    },
    // computed property to get the state of dark mode
    darkModeEvent () {
      EventBus.$on('darkMode', payload => {
        this.darkMode = payload
      })
      return this.darkMode
    },
    // computed property to get theme color
    getThemeColor () {
      EventBus.$on('themeColor', payload => {
        this.themeColor = payload
      })
      return this.themeColor
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
