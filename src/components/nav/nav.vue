<template>
    <div>
        <!-- <div class="view-border"></div>         -->
        <div class="nav-btn" @click="onChange" :class='{active: navtrun}'>
            <div class="inner">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="nav-box" :class='{active: navtrun}'>
            <div class="humbCont" :class='{active: navtrun}'>
                <nav class="humbNav">
                    <ul class="one main">
                        <li class="homeBtn">
                            <a @click="linkRouter('/Home')">
                            Home
                            </a>
                        </li>
                        <!-- <li class="servBtn">
                            <a @click="linkRouter('/about')">About</a>
                        </li> -->
                        <li class="servBtn">
                            <a @click="linkRouter('/project')">Project</a>
                        </li>
                        <!-- <li class="servBtn">
                            <a @click="linkRouter('/service')">UI Design</a>
                        </li> -->
                        <li class="servBtn">
                            <a @click.prevent="logout" >LogOut</a>
                        </li>
      
                    </ul>
                   
                </nav>
            </div>
            
        </div>
        
        
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

    export default {
        name:'navbar',
        data(){
            return{
                navtrun:false
            }
        },
        components:{
            
        },
        methods:{
            ...mapActions([
                'resetState',
            ]),
            onChange(){
                this.navtrun = !this.navtrun
            },
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
                        // this.routerRefresh();
                    },1700)    
                }
            },
            logout(){
                this.resetState();
                this.navtrun = false
                // this.$cookieStore.delCookie('login')
                // localStorage.removeItem('token');
                this.$router.push('/');
            }
        }
    }
</script>


<style lang='scss'>
  
    .pace-done .nav-btn{
        top: 0;
    }

    .nav-btn{
        position: fixed;
        top: -97px;
        right: 0;
        width: 6.0625rem;
        height: 6.0625rem;
        background-color: black;
        cursor: pointer;        
        z-index: 48;
        transition: all 1.0s cubic-bezier(.9,0,.1,1);
        transition-delay: 1.45s;
        .inner{
            position: absolute;
            width: 23%;
            height: 32%;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            span{
                position: absolute;
                width: 3px;
                height: 100%;
                background-color: #fff;
                transition: all ease .35s;
                opacity: 1;                
                &:nth-child(1){
                    left: 0;
                    top: 2px;
                }
                &:nth-child(2){
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: 4px;
                }
                &:nth-child(3){
                    left: calc(100% - 3px);
                    top: 2px;
                }
            }
        }
        &:hover{
            top: 0px;
            .inner{
                span{
                    &:nth-child(1){
                        top: -1px;
                    }
                    &:nth-child(2){
                        bottom: -3px;
                    }
                    &:nth-child(3){
                        top: -1px;
                    }
                }
            }
        }
        &.active{
            .inner{
                span{
                    &:nth-child(1){
                            top: 0px;
                            left: 50%;
                            transform: translateX(-50%) rotate(225deg);
                            transition-delay: 0.0s;
                    }
                    &:nth-child(2){
                            opacity: 0;
                            transition-delay: 0.0s;
                    }
                    &:nth-child(3){
                            top: 0px;
                            left: 50%;
                            transform: translateX(-50%) rotate(-225deg);
                            transition-delay: 0.0s;
                    }
                }
            }
        }
        @media screen and (max-width: 991px){
            width: 4.8125rem;
            height: 4.8125rem;
        }
    }

    .nav-box{
        position: fixed;
        width: 100%;
        height: 0%;
        background-color: #000;
        z-index: 3;
        -webkit-transition: 0.7s cubic-bezier(.6,0,.25,1);
        transition: 0.7s cubic-bezier(.6,0,.25,1);
        bottom: 0;
        z-index: 47;
        &.active{
            height: 100%;
        }
    }
</style>