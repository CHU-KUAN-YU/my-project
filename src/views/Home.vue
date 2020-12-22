<template>
  <div class="home-view">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->   
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <section class="mv">
      <div class="mvTxt abcde">
        <div class="left title_parent">
          <span class="title_anim"><span class="title__top">D</span><span class="title__bottom abcde">D</span></span>          
          <span class="title_anim"><span class="title__top">E</span><span class="title__bottom abcde">E</span></span>          
          <span class="title_anim"><span class="title__top">S</span><span class="title__bottom abcde">S</span></span>
          <span class="title_anim"><span class="title__top">I</span><span class="title__bottom abcde">I</span></span>
          <span class="title_anim"><span class="title__top">G</span><span class="title__bottom abcde">G</span></span>
          <span class="title_anim"><span class="title__top">N</span><span class="title__bottom abcde">N</span></span>
        </div>

        <div class="right title_parent">
          <span class="title_anim"><span class="title__top">P</span><span class="title__bottom abcde">P</span></span>
          <span class="title_anim"><span class="title__top">A</span><span class="title__bottom abcde">A</span></span>
          <span class="title_anim"><span class="title__top">G</span><span class="title__bottom abcde">G</span></span>
          <span class="title_anim"><span class="title__top">E</span><span class="title__bottom abcde">E</span></span>
          <!-- <span class="title_anim"><span class="title__top">e</span><span class="title__bottom abcde">e</span></span> -->
        </div>
      </div>

      <div class="mvVisual">
        <div class="slide one remDelay zIndex1">
          <div class="slideInner" :style="{backgroundImage: 'url('+ homeImg +')'}"></div>
        </div>

        <!-- <div class="slide two remDelay scale zIndex0">
          <div class="slideInner"></div>
        </div>

        <div class="slide three remDelay zIndex2 rect scale">
          <div class="slideInner"></div>
        </div> -->
      </div>
    </section>
    <section class="band inview slideIn" ref='band' :class="{triger: amimClass.triger}">
      <div class="banding"></div>
    </section>

    <!-- 技術專長 -->
    <section class="about sect" id="about">
      <div class="inner flex row-reverse">
        <div class="left">
          <div class="copy">
            <div class="top leadEng_parent inview2" style="justify-content: flex-start;" ref='briefA' :class="{animStart: amimClass.briefA}" >
              <div class="leadEng_anim"><span class="leadEng__top">M</span><span class="leadEng__bottom">M</span></div>
              <div class="leadEng_anim"><span class="leadEng__top">Y</span><span class="leadEng__bottom">Y</span></div>
            </div>

            <div class="under leadEng_parent inview2" ref='briefB' :class="{animStart: amimClass.briefB}">
              <div class="leadEng_anim"><span class="leadEng__top">B</span><span class="leadEng__bottom">B</span></div>
              <div class="leadEng_anim"><span class="leadEng__top">r</span><span class="leadEng__bottom">r</span></div>
              <div class="leadEng_anim"><span class="leadEng__top">i</span><span class="leadEng__bottom">i</span></div>
              <div class="leadEng_anim"><span class="leadEng__top">e</span><span class="leadEng__bottom">e</span></div>
              <div class="leadEng_anim"><span class="leadEng__top">f</span><span class="leadEng__bottom">f</span></div>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="sectCont" ref='briefConent' :class="{active: amimClass.briefConent}">
            <h3 class="title fadeInUp" >
              簡述
            </h3>
            <p class="desc fadeInUp" style="margin-bottom:1rem;">
              <i class="el-icon-circle-check" style="margin-right:1rem;"></i>約2年半網頁開發實務經驗。<br>
              <i class="el-icon-circle-check" style="margin-right:1rem;"></i>約1年半UI/UX規劃設計經驗。<br>
              <i class="el-icon-circle-check" style="margin-right:1rem;"></i>熟悉SASS、SCSS、GULP 相關技術開發專案。<br>
              <i class="el-icon-circle-check" style="margin-right:1rem;"></i>熟悉Bootstrap 函式庫，且可不依賴前端框架開發。<br>
              <i class="el-icon-circle-check" style="margin-right:1rem;"></i>熟悉VUE.JS，使用VUE CLI與PHP LARAVEL串接API經驗。<br>
              <i class="el-icon-circle-check" style="margin-right:1rem;"></i>熟悉UX，且獨立設計響應式網站UI介面。<br>
              <i class="el-icon-circle-check" style="margin-right:1rem;"></i>可獨立或與團隊成員合作開發專案。<br>
              <i class="el-icon-circle-check" style="margin-right:1rem;"></i>與客戶或團隊良好的溝通互動。<br>
              <i class="el-icon-circle-check" style="margin-right:1rem;"></i>無障礙網站開發經驗。
            </p>
            <p class="fadeInUp" style="color: #92ab3a;">
              <i class="el-icon-chat-dot-square" style="margin-right:1rem;"></i>本站使用VUE CLI 製作，目前暫無RWD，會持續更新調整，作品集為Demo網站或正式上線環境，全部為自己設計UI畫面及開發。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 技術專長 -->
    <section class="about sect" id="about">
      <div class="inner flex">
        <div class="left">
          <div class="copy">
            <div class="top leadEng_parent inview2" style="justify-content: flex-start;" ref='aboutAnmiA' :class="{animStart: amimClass.aboutAnmiA}" >
              <div class="leadEng_anim"><span class="leadEng__top">A</span><span class="leadEng__bottom">A</span></div>
              <div class="leadEng_anim"><span class="leadEng__top">B</span><span class="leadEng__bottom">B</span></div>
              <div class="leadEng_anim"><span class="leadEng__top">O</span><span class="leadEng__bottom">O</span></div>
              <div class="leadEng_anim"><span class="leadEng__top">U</span><span class="leadEng__bottom">U</span></div>
              <div class="leadEng_anim"><span class="leadEng__top">T</span><span class="leadEng__bottom">T</span></div>
            </div>

            <div class="under leadEng_parent inview2" ref='aboutAnmiB' :class="{animStart: amimClass.aboutAnmiA}">
              <div class="leadEng_anim"><span class="leadEng__top">D</span><span class="leadEng__bottom">D</span></div>
              <div class="leadEng_anim"><span class="leadEng__top">E</span><span class="leadEng__bottom">E</span></div>
              <div class="leadEng_anim"><span class="leadEng__top">S</span><span class="leadEng__bottom">S</span></div>
              <div class="leadEng_anim"><span class="leadEng__top">I</span><span class="leadEng__bottom">I</span></div>
              <div class="leadEng_anim"><span class="leadEng__top">G</span><span class="leadEng__bottom">G</span></div>
              <div class="leadEng_anim"><span class="leadEng__top">N</span><span class="leadEng__bottom">N</span></div>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="sectCont" ref='aboutConent' :class="{active: amimClass.aboutConent}">
            <h3 class="title fadeInUp" >
              技術專長
            </h3>
            <p class="desc fadeInUp">
              擅長網站架構規劃、網站視覺設計UI、客製化網站前端切版、前端框架Vue開發應用。
              <br>
              <i class="el-icon-circle-check" style="margin-right:1rem;"></i>使用技術：Html、Scss、jQuery、javescript、RWD、Vue<br>
              <i class="el-icon-circle-check" style="margin-right:1rem;"></i>程式工具：VSCode、wamp、Windows<br>
              <i class="el-icon-circle-check" style="margin-right:1rem;"></i>前端框架：Vue Cli<br>
              <i class="el-icon-circle-check" style="margin-right:1rem;"></i>設計工具：Adobe XD<br>
              <!-- Bootstrap library 、emement UI等網站樣式應用 -->
            </p>
            <!-- <div class="learnMore inview2 inview3 animStart lineStart">
              <a class="fadeInUp2 active" href="https://www.hxxxp.com/about">
                Learn More
              </a>
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <!-- <img src="@static/img/ai.png" alt=""> -->

    <section class="service sect">
      <div class="inner">
        <div class="top sectCont">
          <h2 class="title leadEng_parent inview2" 
          ref='projectText'
          :class="{animStart: amimClass.projectText}">
            <div class="leadEng_anim"><span class="leadEng__top">P</span><span class="leadEng__bottom">P</span></div>
            <div class="leadEng_anim"><span class="leadEng__top">R</span><span class="leadEng__bottom">R</span></div>
            <div class="leadEng_anim"><span class="leadEng__top">O</span><span class="leadEng__bottom">O</span></div>
            <div class="leadEng_anim"><span class="leadEng__top">J</span><span class="leadEng__bottom">J</span></div>
            <div class="leadEng_anim"><span class="leadEng__top">E</span><span class="leadEng__bottom">E</span></div>
            <div class="leadEng_anim"><span class="leadEng__top">C</span><span class="leadEng__bottom">C</span></div>
            <div class="leadEng_anim"><span class="leadEng__top">T</span><span class="leadEng__bottom">T</span></div>
          </h2>
        </div>
      </div>
    <!-- <img class="thumb" width="200px" height="150px" src="/static/img/ai.png" /> -->

    <!-- under -->
    <div class="project_group">
      <div class="project-data">
        <ul>
          <li class="aboutSlide rental inview2 animStart" 
            v-for="(item,index) in projects" :key="index" :ref="projectItem"
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
    <section class=" brand sect">
      <div class="inner">
        <div class="top more-btn">
          <h2 class="title leadEng_parent inview2"
            ref='projectMoreText' 
            :class="{animStart: amimClass.projectMoreText}">
            <div class="leadEng_anim"><span class="leadEng__top">M</span><span class="leadEng__bottom">M</span></div>
            <div class="leadEng_anim"><span class="leadEng__top">o</span><span class="leadEng__bottom">o</span></div>
            <div class="leadEng_anim"><span class="leadEng__top">r</span><span class="leadEng__bottom">r</span></div>
            <div class="leadEng_anim"><span class="leadEng__top">e</span><span class="leadEng__bottom">e</span></div>
            <!-- <div class="leadEng_anim"><span class="leadEng__top">d</span><span class="leadEng__bottom">d</span></div> -->
          </h2>

          <div class="learnMore viewAll inview2 inview3 lineStart" :class="{animStart: amimClass.projectMoreText}">
            <a class="fadeInUp2" :class="{active: amimClass.projectMoreText}" @click.prevent="linkRouter('/project')" href="#">
            Link All
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

import { WOW } from 'wowjs';

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { WOW } from 'wowjs'
// import 'animate.css'

export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      homeImg: require('@/assets/homeImg.jpg'),
      pageBlock: true,
      learnHover:false, 
      learnHover:false,
      amimClass:{
        triger: false,
        briefA: false,
        briefB: false,
        briefConent: false,
        aboutAnmiA: false,
        aboutAnmiB: false,
        aboutConent: false,
        projectText:false,
        projectMoreText:false
      },
      // projects:[
      //   {
      //     title:'Cycle Shop',
      //     subTitle:'サイクルショップ',
      //     content:'サイクルショップでは、商品の販売や紹介を通して様々な遊びの体験を提案しています。',
      //     webLink:'https://www.hxxxp.com/service/shop',
      //     img:'https://www.hxxxp.com/wp-content/themes/HodgePodge_2020-1027/assets/img/service/service_rental.jpg'
      //   },
      //   {
      //     title:'Stay Village',
      //     subTitle:'宿泊について',
      //     content:'釣り、山登り、史跡巡りなど千早赤阪村を自転車で遊び尽くしてもらうための遊びの拠点となる宿泊場所を現在準備中です！',
      //     webLink:'https://www.hxxxp.com/service/stay',
      //     img:'https://www.hxxxp.com/wp-content/themes/HodgePodge_2020-1027/assets/img/service/service_stay.jpg'
      //   },
      //   {
      //     title:'Rental Cycle',
      //     subTitle:'レンタサイクル',
      //     content:'釣り、山登り、史跡巡りなど千早赤阪村を自転車で遊び尽くしてもらうための遊びの拠点となる宿泊場所を現在準備中です！',
      //     webLink:'https://www.hxxxp.com/service/rental',
      //     img:'https://www.hxxxp.com/wp-content/themes/HodgePodge_2020-1027/assets/img/service/service_rental.jpg'
      //   },
      //   {
      //     title:'MTB Trail',
      //     subTitle:'MTBトレイル',
      //     content:'自然溢れる千早赤阪村で、思う存分自然の中を駆け抜けることが出来るMTBコースを現在準備中です！',
      //     webLink:'https://www.hxxxp.com/service/mtb',
      //     img:'https://www.hxxxp.com/wp-content/themes/HodgePodge_2020-1027/assets/img/service/service_mtb.jpg'
      //   },
      // ],
      projects:[],
      projectItem:[],
      imgUrl : '../../static/img/ai.png',
        
      
    }
  },  
  methods:{
    linkRouter(val){
        let nowPath = this.$route.path

        if(nowPath == val){
            return false
        }else{
            this.resetState();
            this.navtrun = false
        // console.log(val);
            setTimeout(() => {
                this.$router.push(val);
            },1700)    
        }
    },
    // objectOffset(){      
    //   console.log(this.$refs.band) //937
    //   console.log(this.$refs.band.getBoundingClientRect().top)
    //   console.dir(this.$refs.band)
    //   console.log('height:' + window.innerHeight)
      
    // },
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

    // 滾動效果
    scrillAnim(){
      let scrollMove = 200; //滑動
      let screenHeight = window.innerHeight;// 螢幕高度

      /* 物件 */
      let objectBand = this.$refs.band;
      let objectBriefAText = this.$refs.briefA;
      let objectBriefBText = this.$refs.briefB;
      let objectBriefConent = this.$refs.briefConent;
      let objectAboutAnmiA = this.$refs.aboutAnmiA;
      let objectAboutAnmiB = this.$refs.aboutAnmiB;
      let objectAboutConent = this.$refs.aboutConent;
      let objectProjectText = this.$refs.projectText;
      let objectProjectMoreText = this.$refs.projectMoreText;
      
      /* 物件Y位置 */
      let objectBandOffsetTop = objectBand.getBoundingClientRect().top; 
      let objectBriefAOffsetTop = objectBriefAText.getBoundingClientRect().top;
      let objectBriefBOffsetTop = objectBriefBText.getBoundingClientRect().top;
      let objectBriefConentOffsetTop = objectBriefConent.getBoundingClientRect().top;

      let objectAboutAnmiAOffsetTop = objectAboutAnmiA.getBoundingClientRect().top;
      let objectAboutAnmiBOffsetTop = objectAboutAnmiB.getBoundingClientRect().top;
      let objectAboutConentOffsetTop = objectAboutConent.getBoundingClientRect().top;
      let objectProjectTextOffsetTop = objectProjectText.getBoundingClientRect().top;
      let objectProjectMoreTextOffsetTop = objectProjectMoreText.getBoundingClientRect().top;


      /* 物件滾動距離 */
      let objectBandScroll = objectBandOffsetTop + scrollMove ; 
      let objectBriefAScroll = objectBriefAOffsetTop + scrollMove ; 
      let objectBriefBScroll = objectBriefBOffsetTop + scrollMove ; 
      let objectBriefConentScroll = objectBriefConentOffsetTop + scrollMove ;

      let objectAboutAnmiAScroll = objectAboutAnmiAOffsetTop + scrollMove ; 
      let objectAboutAnmiBScroll = objectAboutAnmiBOffsetTop + scrollMove ;
      let objectAboutConentScroll = objectAboutConentOffsetTop + scrollMove ;
      let objectProjectTextScroll = objectProjectTextOffsetTop + scrollMove ;
      let objectProjectMoreTextScroll = objectProjectMoreTextOffsetTop + scrollMove ;

      
      /* 物件觸發滾動距離 */
      let moveBandScroll = objectBandScroll - screenHeight;
      let moveBriefAScroll = objectBriefAScroll - screenHeight;
      let moveBriefBScroll = objectBriefBScroll - screenHeight;
      let moveBriefConentScroll = objectBriefConentScroll - screenHeight;

      let moveAboutAnmiAScroll = objectAboutAnmiAScroll - screenHeight;
      let moveAboutAnmiBScroll = objectAboutAnmiBScroll - screenHeight;
      let moveAboutConentScroll = objectAboutConentScroll - screenHeight;
      let moveProjectTextScroll = objectProjectTextScroll - screenHeight;
      let moveProjectMoreTextScroll = objectProjectMoreTextScroll - screenHeight;


      /* 計算 */
      window.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop ||
                      document.body.scrollTop;
                      //  || document.querySelector('.element').scrollTop ;
                      
        
        if(scrollTop > moveBandScroll){ this.amimClass.triger = true }
        if(scrollTop > moveBriefAScroll){ this.amimClass.briefA = true }
        if(scrollTop > moveBriefBScroll){ this.amimClass.briefB = true }
        if(scrollTop > moveBriefConentScroll){ this.amimClass.briefConent = true }

        if(scrollTop > moveAboutAnmiAScroll){ this.amimClass.aboutAnmiA = true }
        if(scrollTop > moveAboutAnmiBScroll){ this.amimClass.aboutAnmiB = true }
        if(scrollTop > moveAboutConentScroll){ this.amimClass.aboutConent = true }
        if(scrollTop > moveProjectTextScroll){ this.amimClass.projectText = true }
        if(scrollTop > moveProjectMoreTextScroll){ this.amimClass.projectMoreText = true }
      }, true);
    }

  },  
  mounted(){
    // this.objectOffset();
    // this.resetState();
    this.loadIng();
    this.loadIngNext();
    this.loaded();
    this.addAnim();
    this.loadIngOk();

    
    this.scrillAnim();

    // console.log(this.$store.state.pageBlock)
  },
  created(){
    this.$store.commit('setPageBlock', this.pageBlock)


    let vm = this
    // let api = `${process.env.VUE_APP_SERVER_URL}`;
    let api = 'https://raw.githubusercontent.com/CHU-KUAN-YU/my-project/master/data.json';

    this.axios.get(api).then((res) => {
      // console.log(res.data.data.project)
      vm.projects = res.data.project

      // console.log(this.projects)
    })
    
  },
  beforeUpdate(){
  }
}
</script>


<style lang='scss'>


</style>