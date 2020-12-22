import { turn } from 'core-js/fn/array'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageBlock: true,
    token:null,
    loading:false,
    loaded: false,
    addAnim:false,
    scroll:0,
    changePageBlack: false,
    pageDefault:{
      webStart:false,
      slideIn:false,
    }
  },
  mutations: {
    /* 確認是否不是登入頁面 */
    setPageBlock(state,data){
      state.pageBlock = data
    },
    login: (state,data)=> {
      localStorage.token=data
      state.token=data
    },
    /* 換頁過度 */
    setLoading(state){      
      setTimeout(() => {
        state.loading = true
      },300)
    },
    setLoadIngNext(state){
      setTimeout(() => {
        state.loading = false
      },1500)
    },
    setLoaded(state){
      setTimeout(() => {
        state.loaded = true
        state.changePageBlack = false
      },1000)
    },
    setAddAnim(state){
      setTimeout(() => {
        state.addAnim = true
      },1000)
    },
    setScrollAction(state){
      window.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop ||
                      document.body.scrollTop ||
                      document.querySelector('.element').scrollTop;
        state.scroll = scrollTop
        // console.log(state.scroll);
      }, true);
    },
    /* 切換router 重置換頁過度 */    
    gatResetState(state){
      state.loading = false
      state.loaded =  false
      state.addAnim = false
      state.changePageBlack = true
      // web初始狀態
      state.pageDefault.webStart = false
      state.pageDefault.slideIn = false
    },
    /* 網站動畫載入 */
    setloadIngOk(state){
      setTimeout(() => {
        state.pageDefault.webStart = true
        state.pageDefault.slideIn = true
      },2300)
    }
  },
  actions: {
    /* 確認是否不是登入頁面 */
    pageBlock({commit}){
      commit('setPageBlock');
    },
    resetState({commit}){
      commit('gatResetState');
    },
    loadIng({commit}){
      commit('setLoading');
    },
    loadIngNext({commit}){
      commit('setLoadIngNext');
    },
    loaded({commit}){
      commit('setLoaded');
    },
    addAnim({commit}){
      commit('setAddAnim')
    },
    scrollAction({commit}){
      commit('setScrollAction');
    },
    loadIngOk({commit}){
      commit('setloadIngOk');
    },
  },
  modules: {
  }
})
