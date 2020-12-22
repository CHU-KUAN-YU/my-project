<template>
  <div class="home-view">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->   
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <section class="underMv ">
      <h1 class="title leadEng_parent inview2" :class="{animStart: this.$store.state.pageDefault.webStart}">
        <span class="leadEng_anim">
          <span class="leadEng__top">S</span><span class="leadEng__bottom">S</span>
        </span>
        <span class="leadEng_anim">
          <span class="leadEng__top">e</span><span class="leadEng__bottom">e</span>
        </span>
        <span class="leadEng_anim">
          <span class="leadEng__top">r</span><span class="leadEng__bottom">r</span>
        </span>
        <span class="leadEng_anim">
          <span class="leadEng__top">v</span><span class="leadEng__bottom">v</span>
        </span>
        <span class="leadEng_anim">
          <span class="leadEng__top">i</span><span class="leadEng__bottom">i</span>
        </span>
        <span class="leadEng_anim">
          <span class="leadEng__top">c</span><span class="leadEng__bottom">c</span>
        </span>
        <span class="leadEng_anim">
          <span class="leadEng__top">e</span><span class="leadEng__bottom">e</span>
        </span>
      </h1>
    </section>
    <section class="home-block aboutSelect " :class="[{slideIn: this.$store.state.pageDefault.slideIn},{addAnim: this.$store.state.pageDefault.webStart}]">
      <div class="inner-block forAbout">
        <ul>
          <li class="aboutSlide rental inview2 " ref="scrollView" :class="{animStart:this.$store.state.pageDefault.webStart}" id="shop">
            <div class="image slideImage">
              <a href="https://www.hxxxp.com/service/shop" class="imgInner">
                <figure></figure>
              </a>
            </div>

            <div class="cont">
              <h3 class="title fadeInUp active">
                <a href="https://www.hxxxp.com/service/shop">
                Cycle Shop
                </a>
              </h3>

              <div class="subTitle fadeInUp active">サイクルショップ</div>

              <p class="desc fadeInUp active">
              サイクルショップでは、商品の販売や紹介を通して様々な遊びの体験を提案しています。				</p>

              <div class="learnMore inview2 inview3 animStart lineStart" :class="{active:learnHover}" @mouseover="learnHover = true" @mouseleave="learnHover = false">
                <a class="fadeInUp2 active" href="https://www.hxxxp.com/service/shop">
                Learn More
                </a>
              </div>
            </div>
          </li>

          <li class="aboutSlide stay inview2 " :class="{animStart:this.$store.state.pageDefault.webStart}" id="stay">
            <div class="image slideImage" :class="{active: this.$store.state.pageDefault.webStart}">
              <a href="https://www.hxxxp.com/service/stay" class="imgInner">
                <figure></figure>
              </a>
            </div>

            <div class="cont">
              <h3 class="title fadeInUp prepare active">
                <a href="https://www.hxxxp.com/service/stay">
                Stay Village
                </a>
              </h3>

              <div class="subTitle fadeInUp active">宿泊について</div>

              <p class="desc fadeInUp active">
              釣り、山登り、史跡巡りなど千早赤阪村を自転車で遊び尽くしてもらうための遊びの拠点となる宿泊場所を現在準備中です！				</p>

              <div class="learnMore inview2 inview3 animStart lineStart" :class="{active:learnHover}" @mouseover="learnHover = true" @mouseleave="learnHover = false">
                <a class="fadeInUp2 active" href="https://www.hxxxp.com/service/stay">
                Learn More
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="home-block aboutSelect " :class="[{slideIn: this.$store.state.pageDefault.slideIn},{addAnim: this.$store.state.pageDefault.webStart}]">
      <div class="inner-block forAbout white">
        <ul>
          <li class="aboutSlide rental inview2 " ref="scrollView" :class="{animStart:this.$store.state.pageDefault.webStart}" id="shop">
            <div class="image slideImage">
              <a href="https://www.hxxxp.com/service/shop" class="imgInner">
                <figure></figure>
              </a>
            </div>

            <div class="cont">
              <h3 class="title fadeInUp active">
                <a href="https://www.hxxxp.com/service/shop">
                Cycle Shop
                </a>
              </h3>

              <div class="subTitle fadeInUp active">サイクルショップ</div>

              <p class="desc fadeInUp active">
              サイクルショップでは、商品の販売や紹介を通して様々な遊びの体験を提案しています。				</p>

              <div class="learnMore inview2 inview3 animStart lineStart" :class="{active:learnHover}" @mouseover="learnHover = true" @mouseleave="learnHover = false">
                <a class="fadeInUp2 active" href="https://www.hxxxp.com/service/shop">
                Learn More
                </a>
              </div>
            </div>
          </li>

          <li class="aboutSlide stay inview2 " :class="{animStart:this.$store.state.pageDefault.webStart}" id="stay">
            <div class="image slideImage" :class="{active: this.$store.state.pageDefault.webStart}">
              <a href="https://www.hxxxp.com/service/stay" class="imgInner">
                <figure></figure>
              </a>
            </div>

            <div class="cont">
              <h3 class="title fadeInUp prepare active">
                <a href="https://www.hxxxp.com/service/stay">
                Stay Village
                </a>
              </h3>

              <div class="subTitle fadeInUp active">宿泊について</div>

              <p class="desc fadeInUp active">
              釣り、山登り、史跡巡りなど千早赤阪村を自転車で遊び尽くしてもらうための遊びの拠点となる宿泊場所を現在準備中です！				</p>

              <div class="learnMore inview2 inview3 animStart lineStart" :class="{active:learnHover}" @mouseover="learnHover = true" @mouseleave="learnHover = false">
                <a class="fadeInUp2 active" href="https://www.hxxxp.com/service/stay">
                Learn More
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

import { WOW } from 'wowjs';

export default {
    name: 'Service',
    components: {
    },
    data(){
    return{
      pageBlock:true,
      learnHover:false,
    }
    },
    methods:{
    objectOffset(){      
        console.log(this.$refs.scrollView)
        console.log(this.$refs.scrollView.getBoundingClientRect().top)
        console.dir(this.$refs.scrollView)
        console.log('height:' + window.innerHeight)
    },
    watchScroll(){
      // console.log('目前位置:'+ this.$store.state.scroll)
    },   

    ...mapActions([      
        'resetState',
        'loadIng',
        'loadIngNext',
        'loaded',
        'addAnim',
        'loadIngOk',
    ]),


    },  
    mounted(){
    // this.resetState();
    this.loadIng();
    this.loadIngNext();
    this.loaded();
    this.addAnim();
    this.loadIngOk();

    console.log(this.$store.state.pageBlock)
    },
    created(){
      this.$store.commit('setPageBlock', this.pageBlock)
    }
}
</script>


<style lang='scss'>


</style>