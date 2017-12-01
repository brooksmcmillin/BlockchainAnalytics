// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import wysiwyg from 'vue-wysiwyg'
import VueBreadcrumbs from 'vue2-breadcrumbs'
import VueQuillEditor from 'vue-quill-editor'
import { Vue2Dragula } from 'vue2-dragula'
import * as VueGoogleMaps from 'vue2-google-maps'

// adminify scripts
import './lib/adminifyScripts'

// include all css files
import './lib/adminifycss'

Vue.use(BootstrapVue)
Vue.use(wysiwyg, {})
Vue.use(VueBreadcrumbs)
Vue.use(VueQuillEditor)
Vue.use(Vue2Dragula)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
