import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from './utils/axios.js'
import XLSX from 'xlsx'
import excelTable from './data/modelData.js'

Vue.use(XLSX)
Vue.prototype.excelTable = excelTable

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
