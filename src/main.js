// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'lib-flexible'
import lazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

fastclick.attach(document.body)

import 'common/css/index.scss'

Vue.use(lazyLoad,{
	loading: require('common/images/loading.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
