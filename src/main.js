import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import DaySpanVuetify from 'dayspan-vuetify'


import * as VueGoogleMaps from 'vue2-google-maps'


import moment from 'moment'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify);

Vue.use(DaySpanVuetify, {
  methods: {
    getDefaultEventColor: () => '#1976d2'
  }
});




Vue.prototype.moment = moment

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCAG009TKY8e6iPppfH_RclXvjX8uLaebE',
    // libraries: 'places',
  },
 
  
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
