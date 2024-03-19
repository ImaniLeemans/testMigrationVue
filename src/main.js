import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);


import Books from './components/Books.vue'
import Home from './components/Home.vue'
import Education from './components/Education.vue'
import Club from './components/Club.vue'


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/books',
      component: Books
    },
    {
      path: '/education',
      component: Education
    },
    {
      path: '/club',
      component: Club
    }
  ]
})


const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
