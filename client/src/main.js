import Vue from 'vue'
import App from './App.vue'
//import Router from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
//Vue.use(VueRouter);

/*
export default new Router({
  mode: 'history',
  routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', name: 'home', component: Home },
      { path: '/lists', name: 'lists', component: Lists }
  ]
})
*/

new Vue({
  //router,
  render: h => h(App),
}).$mount('#app')
