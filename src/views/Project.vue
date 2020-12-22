<template>
  <div class="about">
    <section class="underMv ">
      <h1 class="title leadEng_parent inview2" :class="{animStart: this.$store.state.pageDefault.webStart}">
        <span class="leadEng_anim">
          <span class="leadEng__top">P</span><span class="leadEng__bottom">P</span>
        </span>
        <span class="leadEng_anim">
          <span class="leadEng__top">R</span><span class="leadEng__bottom">R</span>
        </span>
        <span class="leadEng_anim">
          <span class="leadEng__top">O</span><span class="leadEng__bottom">O</span>
        </span>
        <span class="leadEng_anim">
          <span class="leadEng__top">J</span><span class="leadEng__bottom">J</span>
        </span>
        <span class="leadEng_anim">
          <span class="leadEng__top">E</span><span class="leadEng__bottom">E</span>
        </span>        
        <span class="leadEng_anim">
          <span class="leadEng__top">C</span><span class="leadEng__bottom">C</span>
        </span>        
        <span class="leadEng_anim">
          <span class="leadEng__top">T</span><span class="leadEng__bottom">T</span>
        </span>        
      </h1>
    </section>
    <section>
      <div class="project_group">
        <div class="project-data">
          <ul>
            <li class="aboutSlide rental inview2 animStart" 
              v-for="(item,index) in projectItem" :key="index"
              >
              <div class="image slideImage">
                <a :href="item.webLink" class="imgInner" target="_blank">
                  <figure :style="'backgroundImage:url(' + item.img + ');'"></figure>
                </a>
              </div>
              <div class="cont">
                <h3 class="title fadeInUp active">
                  <a :href="item.link">
                    {{ item.title }}
                  </a>
                </h3>
                <div class="subTitle fadeInUp active">擔任角色：{{ item.user }}</div>
                <p class="desc fadeInUp active">{{ item.content }}</p>
                <div class="learnMore inview2 inview3 animStart lineStart" >
                  <a class="fadeInUp2 active" target="_blank" :href="item.link">
                    Web Link
                  </a>
                </div>
              </div>
            </li>
            <!--
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
            -->
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import '../assets/css/layout.scss';
import {mapGetters, mapActions} from 'vuex';

export default({
  data(){
    return{
      pageBlock:true,
      projectItem:[],
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

  },
  created(){
    this.$store.commit('setPageBlock', this.pageBlock)

    let vm = this
    // let api = `${process.env.VUE_APP_SERVER_URL}`;
    let api = 'https://raw.githubusercontent.com/CHU-KUAN-YU/my-project/master/data.json';

    // console.log(api);
    this.axios.get(api).then((res) => {
      // console.log(res.data.data.project)
      vm.projectItem = res.data.projectPageInfo

      // console.log(this.projectItem)
    })
  }
})
</script>


<style lang="scss" scoped>
  .underMv{
    margin-top: 0;
    @media screen and (max-width: 991px){
        margin-top: 2rem;
        padding-top: 0;
    }
  }
</style>