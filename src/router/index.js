import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index'
import Test from 'components/test'
import Wk from 'components/wk'

Vue.use(Router)

export default new Router({
	mode: 'history',
	linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
    	path: '/index',
    	component: Index
    },
    {
    	path: '/test',
    	component: Test
    },
    {
    	path: '/wk',
    	component: Wk
    }
  ]
})
