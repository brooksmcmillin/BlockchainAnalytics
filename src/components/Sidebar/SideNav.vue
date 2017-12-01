<template>
   <div class="sidebar-panel">
      <div class="toolbar">
         <div class="sidebar-logo-wrap">
            <div class="d-flex justify-content-between mb-20">
              <div class="align-item-center">
               <a href="index.html" class="site-logo"><img src="/static/img/logo.png" class="img-fluid" alt="site logo" width="110" height="60"></a>
              </div>
               <div class="ham-icon align-item-center">
                 <button type="button" class="c-hamburger c-hamburger--rot" name="button" @click="emitCollapsedSidebar">
                   <span class="ham-line"></span>
                 </button>
               </div>
            </div>
         </div>
         <div class="user-section d-flex justify-content-center">
            <div class="text-center">
              <div class="pos-relative d-block">
               <img src="/static/img/user-1.jpg" width="88" height="88" alt="user" class="img-fluid rounded-circle mb-10" />
               <span class="badge badge-success badge-label-sm badge-thumb-top-right badge-pill fa-notify">&nbsp;</span>
              </div>
               <b-dropdown variant="link" size="sm" text="Jan Doe" class="admin-section">
                 <b-dropdown-item href="#">My Profile</b-dropdown-item>
                 <b-dropdown-item href="#">Calendar</b-dropdown-item>
                 <b-dropdown-item href="#">My Inbox</b-dropdown-item>
                 <b-dropdown-item href="#">My Tasks</b-dropdown-item>
                 <b-dropdown-item href="#">Log Out</b-dropdown-item>
               </b-dropdown>
            </div>
         </div>
      </div>
      <vue-perfect-scrollbar :settings="settings">
        <div class="idb-sidebar-nav">
            <div class="ps-container ps-theme-default">
              <nav class="navigation scroll-area">
                 <ul class="idb-nav list-unstyled list-hover-slide">
                   <template v-for="(menu, index) in sideBarLinks.routes">
                     <li class="nav-item" v-if="menu.child_routes!=null" :key="index">
                        <a href="#" class="nav-link"><i :class="menu.menu_icon"></i><span class="menu-title">{{ menu.menu_title }}</span><span class="pull-right"><i class="ti-angle-down"></i></span></a>
                        <ul class="list-unstyled sub-menu">
                           <router-link :to="subMenu.path" tag="li" v-for="(subMenu, key) in menu.child_routes" :key="key"><a><span class="dot"></span><span>{{ subMenu.menu_title }}</span></a></router-link>
                        </ul>
                     </li>
                      <router-link :key="index" :to="menu.path" tag="li" class="nav-item" v-else><a class="nav-link"><i :class="menu.menu_icon"></i><span class="menu-title">{{ menu.menu_title }}</span></a></router-link>
                   </template>
                 </ul>
              </nav>
            </div>
        </div>
        <div class="idb-server-progress p-30">
          <div class="progress-wrap mb-30">
            <h5>Today Sales</h5>
            <b-progress :value="30" :max="50" class="mb-15" height="5px"></b-progress>
            <p class="fs-12">15200 Items sold</p>
          </div>
          <div class="progress-wrap mb-30">
            <h5>Customer Target</h5>
            <b-progress :value="70" :max="100" class="mb-15" height="5px" variant="danger"></b-progress>
            <p class="fs-12">78% of the month</p>
          </div>
        </div>
      </vue-perfect-scrollbar>
   </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import $ from 'jquery'
import sideBarLinks from './menu.json'
import EventBus from '../../lib/eventBus'

export default {
  name: 'sidenav',
  data: function () {
    return {
      sideBarLinks: sideBarLinks,
      menuToggleClass: '',
      activeIndex: 0,
      collapsedSidebar: false,
      settings: {
        maxScrollbarLength: 100
      }
    }
  },
  components: {
    VuePerfectScrollbar
  },
  mounted () {
    $('.navigation .nav-item .nav-link').click(function (event) {
      event.preventDefault()
      $(this).parent().toggleClass('active open')
      if ($('.navigation .nav-item').hasClass('active open')) {
        $('.navigation .nav-item').removeClass('active open')
        $(this).parent().toggleClass('active open')
      }
    })
  },
  methods: {
    // method to emit collapsedSidebar event
    emitCollapsedSidebar () {
      this.collapsedSidebar = !this.collapsedSidebar
      EventBus.$emit('collapsedSidebar', this.collapsedSidebar)
    }
  }
}
</script>

<style lang="scss">
.scroll-area {
  margin: auto;
  width: 100%;
  min-height: 100%;
}
</style>
