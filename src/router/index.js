import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index'
import Res from 'components/res'
import Wk from 'components/wk'
import ResDetail from 'components/res-detail'

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
    	path: '/res',
    	component: Res,
      children: [
        {
          path: ':id',
          component: ResDetail
        }
      ]
    },
    {
    	path: '/wk',
    	component: Wk
    }
  ]
})
