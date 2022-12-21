import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router.js'
import 'bootstrap/dist/css/bootstrap.css'
import Vuex from 'vuex';
import { store } from './store/store'

Vue.use(Vuex);

Vue.config.productionTip = false
Vue.use(VueRouter)

router.beforeEach((to, from, next) => {

 if(to.fullPath == '/'){
  next({
    name: 'animals',
  })
 }
 else{
   next();
 }

})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
