import Vue from 'vue'
import Router from 'vue-router'

import DetailList from '../components/DetailList'
import company from '../pages/company'
import post from '../pages/post'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'top',
      component: DetailList
    },
    {
      path: '/company',
      name: 'company',
      component: company
    },
    {
      path: '/post/:id',
      name: 'post',
      component: post
    }
  ]
})
