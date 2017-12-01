<template>
  <div class="idb-customizer">
    <a class="customizer-toggle bg-primary faa-parent animated-hover" href="javascript:;" @click="toggleCustomizer">
      <i aria-hidden="true" class="fa fa-wrench faa-slow faa-wrench"></i>
    </a>
    <div class="settings-panel">
      <div class="theme-options">
        <div class="theme-head">
          <h4 class="m-0">Theme Settings</h4>
        </div>
        <div class="theme-body">
          <div class="layout-item form-check more-theme-style mb-3">
            <label class="mb-3">Choose Theme Color</label>
            <a href="javascript:;" class="theme default d-block mb-2" @click="emitChangeThemeColor('default')"><i class="fa fa-circle fa-lg text-primary" aria-hidden="true"></i> Default</a>
            <a href="javascript:;" class="theme orange d-block mb-2" @click="emitChangeThemeColor('orange')"><i class="fa fa-circle fa-lg text-warning" aria-hidden="true"></i> Orange</a>
            <a href="javascript:;" class="theme green d-block mb-2" @click="emitChangeThemeColor('green')"><i class="fa fa-circle fa-lg text-success" aria-hidden="true"></i> Green</a>
            <a href="javascript:;" class="theme red d-block mb-2" @click="emitChangeThemeColor('red')"><i class="fa fa-circle fa-lg text-danger" aria-hidden="true"></i> Red</a>
         </div>
          <div class="layout-item boxed-layout-md form-check">
          <label class="custom-control custom-checkbox d-block" for="boxLayout">
            <input type="checkbox" id="boxLayout" class="custom-control-input" value="on" v-model="boxLayout" @change="emitBoxLayout(boxLayout)">
            <span class="custom-control-indicator"></span>
            <span class="d-block mb-15 ml-10">Box Layout</span>
            <img src="/static/img/boxed-layout.png" alt="layout">
          </label>
        </div>
        <div class="layout-item form-check">
          <label class="custom-control custom-checkbox d-block" for="darkMode">
            <input class="custom-control-input" type="checkbox" id="darkMode" v-model="darkMode" @change="emitDarkMode(darkMode)">
            <span class="custom-control-indicator"></span>
            <span class="d-block mb-15 ml-10">Dark Mode</span>
            <img src="/static/img/nightmode.png" alt="layout">
          </label>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import EventBus from '../../lib/eventBus'
export default {
  data: function () {
    return {
      boxLayout: false,
      darkMode: false,
      customizerIn: false
    }
  },
  methods: {
    toggleCustomizer: function () {
      this.customizerIn = !this.customizerIn
      EventBus.$emit('toggleCustomizer', this.customizerIn)
    },
    emitBoxLayout: function (isBoxLayout) {
      EventBus.$emit('boxLayout', isBoxLayout)
    },
    emitDarkMode: function (isDarkMode) {
      EventBus.$emit('darkMode', isDarkMode)
    },
    emitChangeThemeColor: function (color) {
      EventBus.$emit('themeColor', color)
    }
  }
}
</script>
