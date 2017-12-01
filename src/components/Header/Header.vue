<template>
  <header class="app-header">
    <b-navbar toggleable="md" type="light" variant="">
      <b-nav-toggle target="nav_collapse" @click="emitCollapseSidebar"></b-nav-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item href="#"><i class="ti-home"></i></b-nav-item>
          <b-nav-item href="#" v-b-modal.searchFormModal><i class="ti-search"></i></b-nav-item>
          <b-modal id="searchFormModal" hide-footer class="idb-search-modal" size="lg">
            <search-form></search-form>
          </b-modal>
        </b-nav>
        <!-- Right aligned nav items -->
        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item class="zoom-out" href="#" @click="toggleScreenFull"><i :class="{'ti-desktop': !fullScreenView, 'ti-fullscreen': fullScreenView}"></i></b-nav-item>
          <b-nav-item-dropdown right no-caret class="custom-dropdown">
            <template slot="button-content">
              <i class="ti-layout-grid3"></i>
            </template>
            <b-dropdown-header class="bg-success text-white">Quick Links</b-dropdown-header>
            <b-dropdown-item to="/dashboard/dashboard-v2">
              <div class="icon-area">
                <i class="ti-layout-grid2-alt"></i>
              </div>
              <small>Dashborad 2</small>
            </b-dropdown-item>
            <b-dropdown-item to="/inbox">
              <div class="icon-area">
                <i class="ti-email"></i>
              </div>
              <small>Inbox</small>
            </b-dropdown-item>
            <b-dropdown-item to="/session/login">
              <div class="icon-area">
                <i class="ti-lock"></i>
              </div>
              <small>Lock Screen</small>
            </b-dropdown-item>
            <b-dropdown-item to="/pages/gallery">
              <div class="icon-area">
                <i class="ti-gallery"></i>
              </div>
              <small>Gallery</small>
            </b-dropdown-item>
            <b-dropdown-item to="/editor/quill-editor">
              <div class="icon-area">
                <i class="ti-pencil-alt"></i>
              </div>
              <small>Editor</small>
            </b-dropdown-item>
            <b-dropdown-item to="/icons/themify">
              <div class="icon-area">
                <i class="ti-flag-alt"></i>
              </div>
              <small>Themify Icon</small>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right no-caret>
            <template slot="button-content">
              <i class="fa fa-bell-o faa-ring animated-hover faa-slow"></i>
              <b-badge pill variant="success" class="badge-sm badge-top-right fa-notify">4</b-badge>
            </template>
            <b-dropdown-header class="bg-warning text-white">Notifications</b-dropdown-header>
            <b-dropdown-item href="#" class="mb-10">
              <div class="media">
                <div class="d-flex pos-relative mr-20">
                  <img src="/static/img/user-1.jpg" class="rounded-circle" width="60" height="60">
                  <span class="badge badge-danger badge-label-sm badge-thumb-top-right badge-pill fa-notify">&nbsp;</span>
                </div>
                <div class="media-body pt-10">
                  <h6 class="fw-bold">John Doe</h6>
                  <p class="m-0 small">Hey, We have a meeting planned at the end of the day.</p>
                </div>
              </div>
            </b-dropdown-item>
            <b-dropdown-item href="#" class="mb-10">
              <div class="media">
                <div class="d-flex pos-relative mr-20">
                  <img src="/static/img/user-2.jpg" class="rounded-circle" width="60" height="60">
                  <span class="badge badge-success badge-label-sm badge-thumb-top-right badge-pill fa-notify">&nbsp;</span>
                </div>
                <div class="media-body pt-10">
                  <h6 class="fw-bold">John Doe</h6>
                  <p class="m-0 small">Can we schedule a call this afternoon?</p>
                </div>
              </div>
            </b-dropdown-item>
            <b-dropdown-item href="#" class="mb-10">
              <div class="media">
                <div class="d-flex pos-relative mr-20">
                  <img src="/static/img/user-3.jpg" class="rounded-circle" width="60" height="60">
                  <span class="badge badge-warning badge-label-sm badge-thumb-top-right badge-pill fa-notify">&nbsp;</span>
                </div>
                <div class="media-body pt-10">
                  <h6 class="fw-bold">John Doe</h6>
                  <p class="m-0 small">Great presentation the other day. Keep up the good work!</p>
                </div>
              </div>
            </b-dropdown-item>
            <b-dropdown-item href="#" class="mb-10">
              <div class="media">
                <div class="d-flex pos-relative mr-20">
                  <img src="/static/img/user-4.jpg" class="rounded-circle" width="60" height="60">
                  <span class="badge badge-success badge-label-sm badge-thumb-top-right badge-pill fa-notify">&nbsp;</span>
                </div>
                <div class="media-body pt-10">
                  <h6 class="fw-bold">John Doe</h6>
                  <p class="m-0 small">Need the updates of the project at the end of the week.</p>
                </div>
              </div>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item @click="toggleRightSidebar">
            <i class="ti-view-list-alt"></i>
          </b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
    <tour :data="tourData"></tour>
    <right-sidebar :sidebarOpen="rightSidebar"></right-sidebar>
  </header>
</template>

<script>
import SearchForm from './SearchForm.vue'
import RightSidebar from './RightSidebar.vue'
import screenfull from 'screenfull'
import EventBus from '../../lib/eventBus'
import 'tour-component/vue'
import 'vue-class-component'
import 'tour-component/tour.min.css'

export default {
  data: function () {
    return {
      rightSidebar: false,
      tourData: {
        steps: [
          { left: '115px', top: '50px', direction: 'bottom', content: 'Use this to collapse sidebar', next: 'Next', targetElementId: 'step_1' },
          { left: '250px', top: '60px', direction: 'bottom', content: 'Enjoying Search box with sugestion and many more things', next: 'Next', targetElementId: 'step_2' },
          { right: '30px', top: '82px', direction: 'bottom', content: 'Toggle Full Screen Mode', next: 'End', targetElementId: 'step_3' }
        ],
        localStorageKey: 'adminify-tour',
        index: 0
      },
      fullScreen: false
    }
  },
  computed: {
    fullScreenView: function () {
      return this.fullScreen
    }
  },
  components: {
    SearchForm,
    RightSidebar
  },
  methods: {
    toggleRightSidebar () {
      this.rightSidebar = !this.rightSidebar
    },
    toggleScreenFull () {
      this.fullScreen = !screenfull.isFullscreen
      screenfull.toggle()
    },
    emitCollapseSidebar () {
      EventBus.$emit('collapsedSidebar', this.collapsedSidebar)
    }
  }
}
</script>
