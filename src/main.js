import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element.js'
import vWow from 'v-wow'
// import ScrollReveal from 'ScrollReveal'
import 'wowjs/css/libs/animate.css'
// import 'animate.css';
// Vue.use(vWow);
import axios from 'axios'
import VueAxios from 'vue-axios'
import { setCookie ,getCookie ,delCookie } from '@/assets/cookie.js'

// let siteAnimate = ScrollReveal({
//   reset: false,   //設定特效是否為單次出現，預設為單次
//   origin: 'top',  //預設效果起始位置從右方出現
//   distance: '300px',  //控制元素在顯示時移動多遠
//   easing: 'ease-in-out'  //轉場速率 CSS transition
// });

// ScrollReveal().reveal('.headline');
// Vue.use(siteAnimate);

//修改 VUE 原型屬性
// app.config.globalProperties.$ajax = axios
Vue.use(VueAxios, axios);

Vue.prototype.$cookieStore = {
  setCookie,
  getCookie,
  delCookie
}


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


/*
router.beforeEach(async(to, from, next) => {
  // 看看 to 和 from 兩個 arguments 會吐回什麼訊息
  console.log('to: ', to)
  console.log('from: ', from)

  // 目的路由在meta上是否有設置requireAuth: true
  if (to.meta.requireAuth) {
    // 獲取Cookies當中的login資訊並取得token
    const info = this.$cookieStore.getCookie('login')
    // const token = JSON.parse(info).token
    console.log(info)
    if (info) {
      // 如果token不為空，且確實有這個欄位則讓路由變更
      if (token.length > 0 || token === undefined) {
        next()
      } else {
        // 未通過則導回login頁面
        next({ name: 'Welcome' })
      }
    } else {
      next({ name: 'Welcome' })
    }
  } else {
    console.log('沒有requireAuth')
    next()
  }
})

*/