import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

import VueCodemirror from 'vue-codemirror'

// require styles
import './assets/css/base.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/vue/vue'
import 'codemirror/mode/css/css'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/theme/darcula.css'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueCodemirror)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
