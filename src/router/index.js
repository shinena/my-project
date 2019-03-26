import Vue from 'vue'
import Router from 'vue-router'
import List from '../components/Detail/List.vue'
import Travel from '../components/Detail/Travel.vue'
import Read from '../components/Detail/Read.vue'
import Photo from '../components/Detail/Photo.vue'
import About from '../components/About.vue'
import Home from '../components/Banner/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      component: Home,
      name: 'Home'
    },
    {
      path: '/List',
      component: List,
      name: 'List',
      redirect: '/List/Travel',
      children: [{
        name: 'Travel',
        path: 'Travel',
        component: Travel
      }, {
        name: 'Read',
        path: 'Read',
        component: Read
      }, {
        name: 'Photo',
        path: 'Photo',
        component: Photo
      }]
    }, {
      path: '/About',
      component: About,
      name: 'About'
    }
  ]
})
