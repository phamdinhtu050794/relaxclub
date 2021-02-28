import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import moment from 'moment'

// import 'vuetify/dist/vuetify.min.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'

// Vue.config.productionTip = false

// Vue.use(Vuetify);

// Vue.use(DaySpanVuetify, {
//   methods: {
//     getDefaultEventColor: () => '#1976d2'
//   }
// });




// Vue.prototype.moment = moment

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
