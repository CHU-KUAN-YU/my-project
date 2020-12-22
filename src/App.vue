<template>
  <div id="app" ref="viewBox" :class="[{'pace-running': this.$store.state.loading}, {'pace-done' : this.$store.state.loaded},{'addAnim': this.$store.state.addAnim}]">
    <!-- load -->
    <div id="transition"></div>
    <div id="fade" class="fade">
      <div class="loadTitle">
        <img src="./assets/logo.svg" alt="HODGE PODGE">
      </div>
    </div>
    <div id='changePageBlack' :class="{changeIng: this.$store.state.changePageBlack}"></div>
    <!-- content -->
    <div class="nav-top">
      <div class="logo">
        <img src="./assets/logo.svg" alt="">
      </div>
    </div>
     
    <Nav v-if='this.$store.state.pageBlock'></Nav>
    <!-- <img src="./assets/logo.png"> -->

    <router-view></router-view>
    <!-- <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div> -->


    <Footer v-if='this.$store.state.pageBlock'></Footer>
  </div>
</template>

<script>
import './assets/css/layout.scss';
import {mapGetters, mapActions} from 'vuex';
import Nav from './components/nav/nav.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  data(){
    return{
      
    }
  },
  components: {
    Nav,
    Footer
  },
  methods:{
    // ...mapActions([
    //   'resetState',
    //   'loadIng',
    //   'loadIngNext',
    //   'loaded',
    //   'addAnim',
    // ])
   
  },
  mounted(){
    // this.resetState();
    // this.loadIng();
    // this.loadIngNext();
    // this.loaded();
    // this.addAnim();

    // this.$store.dispatch('loadIng');
    // this.$store.dispatch('loadIngNext');
    // this.$store.dispatch('loaded');
    // this.$store.dispatch('addAnim');

    // this.scroll();

    // this.$store.dispatch('scrollAction');
    
    // window.addEventListener('scroll', () => {
    //   let scrollTop = document.documentElement.scrollTop ||
    //                   document.body.scrollTop ||
    //                   document.querySelector('.element').scrollTop;
                      
    //   console.log(scrollTop);
    // }, true);
  },
}
</script>

<style lang='scss'>
.el-dialog{
    min-width: 300px;
  }
</style>
