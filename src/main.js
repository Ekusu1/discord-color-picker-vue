import Vue from 'vue'

import './plugins/fontawesome'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

import '@/styles/bootstrap/bootstrap.scss'
import '@/styles/bootstrap_extend.scss'
import '@/styles/main.scss'

new Vue({
	store,
	render: h => h(App)
}).$mount('#app')
