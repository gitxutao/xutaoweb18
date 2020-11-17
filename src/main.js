import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.axios=axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
