<template>
  <div class="welcome-view">
    <section class="underMv">
      <h1 class="title leadEng_parent inview2" :class="{animStart: this.$store.state.pageDefault.webStart}">
        <span class="leadEng_anim">
          <span class="leadEng__top">W</span><span class="leadEng__bottom">W</span>
        </span>
        <span class="leadEng_anim">
          <span class="leadEng__top">E</span><span class="leadEng__bottom">E</span>
        </span>
        <span class="leadEng_anim">
          <span class="leadEng__top">L</span><span class="leadEng__bottom">L</span>
        </span>
        <span class="leadEng_anim">
          <span class="leadEng__top">C</span><span class="leadEng__bottom">C</span>
        </span>
        <span class="leadEng_anim">
          <span class="leadEng__top">O</span><span class="leadEng__bottom">O</span>
        </span>        
        <span class="leadEng_anim">
          <span class="leadEng__top">M</span><span class="leadEng__bottom">M</span>
        </span>        
        <span class="leadEng_anim">
          <span class="leadEng__top">E</span><span class="leadEng__bottom">E</span>
        </span>        
      </h1>
    </section>
    
    <div class="loadin-content">
      <div class="from-box">        
        <div class="from-body mb-4">
          <label for="text-inputId">ID</label>
          <el-input id="text-inputId" placeholder="Please enter ID" v-model="loginForm.inputId"></el-input>
          <label for="text-password">Password</label>
          <el-input id="text-password" placeholder="Please enter password" v-model="loginForm.password" show-password class="mb-4"></el-input>          
        </div>
        <el-row>
            <el-button type="primary w-100" plain @click="singIn">登入</el-button>
        </el-row>
        <!-- <b-button type="button" pill size="lg" variant="primary" class="from-btn w-100 mb-4" @click="singIn"
        >Log In</b-button>         -->
        
      </div>
    </div>

    <el-dialog
      title=""
      top="30vh"
      :visible.sync="dialogVisible"
      width="30%">
      <span>ID或密碼錯誤!</span>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import '../assets/css/layout.scss';
import {mapGetters, mapActions} from 'vuex';

export default({
    data(){
        return{
            pageBlock:false,
            loginForm:{
                token:'',
                // inputId: 's123456@gmail.com',
                // password: 's123456',
                inputId: '',
                password: ''
            },
            dialogVisible:false
        }
    },
    methods:{
        ...mapActions([
        'resetState',
        'loadIng',
        'loadIngNext',
        'loaded',
        'addAnim',
        'loadIngOk'
        ]),        
        // conn(){
        //     console.log('abb');
        // },
        singIn(){
            let vm = this
            // let api = '/api/show';
            // let api = `${process.env.VUE_APP_SERVER_URL}`;
            let api = 'https://raw.githubusercontent.com/CHU-KUAN-YU/my-project/master/data.json';
            let userName = vm.loginForm.inputId;
            let password = vm.loginForm.password;
            
            this.axios.get(api).then((res) => {
                const token = 'asds32adsavrAS3Fadf5567';
                let apiNumber = res.data.account[0].number;
                let apiPassword = res.data.account[0].password;
                if(userName == apiNumber && apiPassword == password){
                    vm.loginForm.token = token;
                    
                    
                    // this.$store.commit('login');
                    // console.log(this.resetState('token'))
                    // console.log('正確');
                    this.$cookieStore.setCookie('login', JSON.stringify(this.loginForm), { expires: 60 })
                    
                    // cookie當中有token被設置才能改變路由
                    if (this.$cookieStore.getCookie('login') && vm.loginForm.token) {
                        // this.$router.push({name: 'Dashboard'})
                        // console.log('token一樣')
                        this.resetState();
                        setTimeout(() => {
                            this.$router.push("/Home");
                        },1700)
                    }else{
                        // console.log('token不一樣')
                    }


                    


                }else{
                    // alert('!');
                    this.dialogVisible = true;
                }
            });
        }
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
    }
})
</script>


<style lang="scss" scoped>
body{
  &::before, &::after{
    background:transparent;
  }
}
.welcome-view{
  @media screen and (max-width: 991px){
    padding: 0 2rem;
    box-sizing: border-box;
  }
}

.loadin-content{
    max-width:500px;
    width: 100%;
    margin:0 auto;
    border:1px solid #dddddd;
    border-radius: 10px;
    padding: 2rem;
    box-sizing: border-box;
    .el-input{
        margin-bottom: 1.5rem;
        margin-top: .5rem;
    }
}
.underMv{
    margin-bottom: 7vw;
    margin-top: 0;
    @media screen and (max-width: 991px){
      margin-top: 2rem; 
      padding-top: 0;
    }
    @media screen and (max-width: 414px){
      margin-top: 0; 
    }
}
.el-button{
    width: 100%;
    border: 0;
    @media screen and (max-width: 991px){
      background-color:black;
      color: white;
    }
}

.el-dialog__wrapper{
  
}

.el-dialog__body{
  text-align: center;
}
</style>