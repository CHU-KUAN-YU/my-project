<template>
  <div class="about">
    <section class="underMv ">
      <h1 class="title leadEng_parent inview2" :class="{animStart: this.$store.state.pageDefault.webStart}">
        <span class="leadEng_anim">
          <span class="leadEng__top">A</span><span class="leadEng__bottom">A</span>
        </span>
        <span class="leadEng_anim">
          <span class="leadEng__top">B</span><span class="leadEng__bottom">B</span>
        </span>
        <span class="leadEng_anim">
          <span class="leadEng__top">O</span><span class="leadEng__bottom">O</span>
        </span>
        <span class="leadEng_anim">
          <span class="leadEng__top">U</span><span class="leadEng__bottom">U</span>
        </span>
        <span class="leadEng_anim">
          <span class="leadEng__top">T</span><span class="leadEng__bottom">T</span>
        </span>        
      </h1>
    </section>
  </div>
</template>

<script>
import '../assets/css/layout.scss';
import {mapGetters, mapActions} from 'vuex';

export default({
  data(){
    return{
      pageBlock:true
    }
  },
  methods:{
    ...mapActions([
      // 'resetState'
      'loadIng',
      'loadIngNext',
      'loaded',
      'addAnim',
      'loadIngOk'
    ])
  },
  mounted(){
    // this.setScrollAction();
    this.loadIng();
    this.loadIngNext();
    this.loaded();
    this.addAnim();
    this.loadIngOk();

    // this.$store.dispatch('pageBlock', this.pageBlock)
    console.log(this.$store.state.pageBlock)
  },
  created(){
    this.$store.commit('setPageBlock', this.pageBlock)
  }
})
</script>
