import Vue from 'vue'
import Router from 'vue-router'

// components
import Full from '@/container/Full'

// dashboard views
import DashboardOne from '@/views/DashboardOne'
import DashboardTwo from '@/views/DashboardTwo'

// ui elements views
import Buttons from '@/views/ui-elements/Buttons'
import ProgressBar from '@/views/ui-elements/ProgressBar'
import Tabs from '@/views/ui-elements/Tabs'
import Accordions from '@/views/ui-elements/Accordions'
import Pagination from '@/views/ui-elements/Pagination'
import Tooltip from '@/views/ui-elements/Tooltip'
import Badges from '@/views/ui-elements/Badges'
import Cards from '@/views/ui-elements/Cards'
import Alerts from '@/views/ui-elements/Alerts'
import Carousel from '@/views/ui-elements/Carousel'

// inbox view
import Inbox from '@/views/inbox/Inbox'

// form elements view
import FormElements from '@/views/forms/FormElements'

// editors views
import QuillEditor from '@/views/editor/QuillEditor'
import WYSIWYG from '@/views/editor/WYSIWYG'

// drag and drop views
import Vuedraggable from '@/views/drag-drop/Vuedraggable'
import Vue2Dragula from '@/views/drag-drop/Vue2Dragula'
import VueDraggableResizable from '@/views/drag-drop/VueDraggableResizable'

// icons views
import Themify from '@/views/icons/Themify'
import Material from '@/views/icons/Material'
import FontAwesome from '@/views/icons/FontAwesome'

// charts views
import VueChartjs from '@/views/charts/VueChartjs'
import VueEcharts from '@/views/charts/VueEcharts'

// maps views
import GoogleMaps from '@/views/maps/GoogleMaps'
import LeafletMaps from '@/views/maps/LeafletMaps'

// tables views
import BasicTable from '@/views/tables/Basic'
import ResponsiveTable from '@/views/tables/Responsive'

// pages views
import Gallery from '@/views/pages/Gallery'
import Pricing from '@/views/pages/Pricing'
import Blank from '@/views/pages/Blank'

// users views
import UserProfile from '@/views/users/UserProfile'
import UsersList from '@/views/users/UsersList'

// session views
import Login from '@/views/session/Login'
import SignUp from '@/views/session/SignUp'
import LockScreen from '@/views/session/LockScreen'

Vue.use(Router)

// define your routes here
export default new Router({
  routes: [
    {
      path: '/',
      component: Full,
      children: [
        {
          path: '',
          component: DashboardOne,
          meta: {
            breadcrumb: 'Home Page'
          }
        },
        {
          path: '/dashboard/dashboard-v2',
          component: DashboardTwo,
          meta: {
            breadcrumb: 'Dashboard V2'
          }
        },
        {
          path: '/ui-elements/buttons',
          component: Buttons,
          meta: {
            breadcrumb: 'Buttons'
          }
        },
        {
          path: '/ui-elements/progress-bar',
          component: ProgressBar,
          meta: {
            breadcrumb: 'Progress Bar'
          }
        },
        {
          path: '/ui-elements/tabs',
          component: Tabs,
          meta: {
            breadcrumb: 'Tabs'
          }
        },
        {
          path: '/ui-elements/accordions',
          component: Accordions,
          meta: {
            breadcrumb: 'Accordions'
          }
        },
        {
          path: '/ui-elements/pagination',
          component: Pagination,
          meta: {
            breadcrumb: 'Pagination'
          }
        },
        {
          path: '/ui-elements/tooltip',
          component: Tooltip,
          meta: {
            breadcrumb: 'Tooltip'
          }
        },
        {
          path: '/ui-elements/badges',
          component: Badges,
          meta: {
            breadcrumb: 'Badges'
          }
        },
        {
          path: '/ui-elements/cards',
          component: Cards,
          meta: {
            breadcrumb: 'Cards'
          }
        },
        {
          path: '/ui-elements/alerts',
          component: Alerts,
          meta: {
            breadcrumb: 'Alerts'
          }
        },
        {
          path: '/ui-elements/carousel',
          component: Carousel,
          meta: {
            breadcrumb: 'Carousel'
          }
        },
        {
          path: '/inbox',
          component: Inbox,
          meta: {
            breadcrumb: 'Inbox'
          }
        },
        {
          path: '/forms/form-elements',
          component: FormElements,
          meta: {
            breadcrumb: 'Form Elements'
          }
        },
        {
          path: '/editor/quill-editor',
          component: QuillEditor,
          meta: {
            breadcrumb: 'Quill Editor'
          }
        },
        {
          path: '/editor/wysiwyg',
          component: WYSIWYG,
          meta: {
            breadcrumb: 'WYSIWYG Editor'
          }
        },
        {
          path: '/drag-drop/vuedraggable',
          component: Vuedraggable,
          meta: {
            breadcrumb: 'Vuedraggable'
          }
        },
        {
          path: '/drag-drop/vue2-dragula',
          component: Vue2Dragula,
          meta: {
            breadcrumb: 'Vue2 dragula'
          }
        },
        {
          path: '/drag-drop/draggable-resizable',
          component: VueDraggableResizable,
          meta: {
            breadcrumb: 'Draggable Resizable'
          }
        },
        {
          path: '/icons/themify',
          component: Themify,
          meta: {
            breadcrumb: 'Themify'
          }
        },
        {
          path: '/icons/material',
          component: Material,
          meta: {
            breadcrumb: 'Material'
          }
        },
        {
          path: '/icons/font-awesome',
          component: FontAwesome,
          meta: {
            breadcrumb: 'Font Awesome'
          }
        },
        {
          path: '/charts/vue-chartjs',
          component: VueChartjs,
          meta: {
            breadcrumb: 'Vue Chartjs'
          }
        },
        {
          path: '/charts/vue-echarts',
          component: VueEcharts,
          meta: {
            breadcrumb: 'Vue Echarts'
          }
        },
        {
          path: '/maps/google-maps',
          component: GoogleMaps,
          meta: {
            breadcrumb: 'Google Maps'
          }
        },
        {
          path: '/maps/leaflet-maps',
          component: LeafletMaps,
          meta: {
            breadcrumb: 'Leaflet Maps'
          }
        },
        {
          path: '/tables/basic',
          component: BasicTable,
          meta: {
            breadcrumb: 'Basic Table'
          }
        },
        {
          path: '/tables/responsive',
          component: ResponsiveTable,
          meta: {
            breadcrumb: 'Responsive Table'
          }
        },
        {
          path: '/pages/gallery',
          component: Gallery,
          meta: {
            breadcrumb: 'Gallery'
          }
        },
        {
          path: '/pages/pricing',
          component: Pricing,
          meta: {
            breadcrumb: 'Pricing'
          }
        },
        {
          path: '/pages/blank',
          component: Blank,
          meta: {
            breadcrumb: 'Blank'
          }
        },
        {
          path: '/users/user-profile',
          component: UserProfile,
          meta: {
            breadcrumb: 'User Profile'
          }
        },
        {
          path: '/users/users-list',
          component: UsersList,
          meta: {
            breadcrumb: 'Users List'
          }
        }
      ]
    },
    {
      path: '/session/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/session/sign-up',
      name: 'Sign Up',
      component: SignUp
    },
    {
      path: '/session/lock-screen',
      name: 'Lock Screen',
      component: LockScreen
    }
  ]
})
