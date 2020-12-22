<template>
    <div class="footer-view">
        <div class="inner">
            <div class="footTop">
                <el-row>
                    <el-col :xs="24" :md="12">
                        <div class="grid-content bg-purple">
                            <div class="footLogo">
                                <img src="../assets/logo-w.svg" alt="HODGE PODGE">
                            </div>
                            <div class="footMail">
                                <el-button onclick="self.location.href='mailto:il98637@gmail.com'">Contact<i class="el-icon-message"></i></el-button>
                            </div>
                        </div>
                    </el-col>
                    <el-col :xs="24" :md="12">
                        <div class="grid-content bg-purple-light">
                            <div class="footData">
                                <ul class="list">
                                    <li class="list-item">
                                        <!-- <router-link to="/" class="list-link">Home</router-link> -->
                                        <button class="list-link" @click="linkRouter('/')">Home</button>
                                    </li>
                                    <!-- <li class="list-item">
                                        <button class="list-link" @click="linkRouter('/about')">About</button>
                                    </li> -->
                                    <li class="list-item">
                                        <button class="list-link" @click="linkRouter('/project')">Project</button>
                                    </li>
                                    <!-- <li class="list-item">
                                        <button class="list-link" @click="linkRouter('/service')">UI Design</button>
                                    </li> -->
                                </ul>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="footBottom">
                <div class="copy">
                    <span class="mark">©</span>
                    <span class="year">2020  </span>
                    <span>DESIGN PAGE</span>
                </div>
            </div>
        </div>
        <div class="toTop" @click="backTop()"></div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default ({
    name:'footerView',
    data(){
        return{

        }
    },
    methods:{
        ...mapActions([
            'resetState',
            'loadIng',
            'loadIngNext',
            'loaded',
            'addAnim',
        ]),

        backTop () {
            var timer = setInterval(
                () => document.documentElement.scrollTop 
            <= 0 ? clearInterval(timer)
            : window.scrollTo(0, 
            document.documentElement.scrollTop - 40), 
            7);
        },
        linkRouter(val){
            let nowPath = this.$route.path

            if(nowPath == val){
                return false
            }else{
                this.resetState();
            // console.log(val);
                setTimeout(() => {
                    this.$router.push(val);
                    this.routerRefresh();
                },1700)    
            }
        },
    },
    mounted(){
        
    }
    
})
</script>


<style lang='scss'>
    .footer-view{
            background-color: #000;
            margin-top: 115px;
            position: relative;
        .inner{
            width: 78.6%;
            margin: 0 auto;
            padding-top: 126px;
        }
        @media screen and (max-width: 991px){
            .inner{
                padding-top: 60px;
                
            }
        } 
    }
    .toTop{
        position: absolute;
        height: 75px;
        width: 75px;
        border-radius: 1px;
        margin-left: auto;
        border: 1px solid rgba(255,255,255,0.4);
        bottom: 35px;
        right: 36px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all ease .35s;
        &::before{
            content: "";
            display: inline-block;
            border-top: solid 3px rgba(255,255,255,0.8);
            border-right: solid 3px rgba(255,255,255,0.8);
            width: 10px;
            height: 10px;
            transition: all ease .35s;
            transform: rotate(-45deg);
            z-index: 1;
            margin-top: 9px;
        }
    }
    .footBottom{
        margin-top: 190px;
        padding-bottom: 34px;
        color: #fff;
        position: relative;
        .copy{
            font-size: 1rem;
            opacity: 0.5;
        }
    }
    .footMail{
        height: 3.5rem;
        width: 15.5625rem;
        margin-top: 2.6875rem;
        button{
            width: 100%;
            font-size: 1.125rem;
            font-weight: bold;
            padding: 18px;
            color: white;      
            background: transparent;
            i{
                margin-left: 1rem;
            }
            &:active{
                background: rgba(255, 255, 255, 0.3) !important;
            }
        }
        @media screen and (max-width: 991px){
            width: 100%;
        }
    }
    .footData{        
        .list{
            display:flex;
            flex-flow: row wrap;
            .list-item{
                margin: 0.25rem  .5rem;
            }
            .list-link{
                color: white;
                font-weight: bold;
                font-size: 2rem;
                border: none;
                cursor: pointer;
                outline: 0;
                background: transparent;
                transition: all ease .35s;
                &:hover{
                    color: rgba(255,255,255,0.4);
                    
                }
            }
        }
        @media screen and (max-width: 991px){
            margin-top: 2rem;
            .list{
                .list-item{
                    width: 50%;
                    margin: .25rem 0    ;
                }
            }
        }
    }
</style>