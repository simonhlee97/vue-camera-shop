import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'



Vue.config.productionTip = false


// Custom Directive
Vue.directive('rainbow', {
	// bind lifecycle hook
	bind(el, binding, vnode) {
		el.style.color = "#" + Math.random().toString().slice(2,8);
	}
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
