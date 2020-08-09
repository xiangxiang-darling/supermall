<template>
  <div id="app">
    <nav-show></nav-show>
    <ul class="title">
      <li>
         <router-link to="/home"><i class=" fa fa-graduation-cap"></i> 官方首页</router-link>
      </li>
      <li>
        <router-link to="/schoolquery"><i class="fa fa-institution"></i> 学校查询</router-link>
      </li>
      <li>
        <router-link to="/professionalquery"><i class="fa fa-ravelry"></i> 专业查询</router-link>
      </li>
      <li>
        <router-link to="/schoolscore"><i class="fa fa-columns"></i> 院校分数线</router-link>
      </li>
      <li>
        <router-link to="/profile"><i class="fa fa-user-circle"></i> 个人中心</router-link>
      </li>
    </ul>
    <div class="view_router">
      <transition :name="router_tran">
        <keep-alive>
          <router-view></router-view>
        </keep-alive> 
      </transition>
    </div>
  </div>
</template>
<script>
import NavShow from './components/common/navshow/NavShow'
export default {
  name:'app',
  components:{
    NavShow
  },
  data(){
    return{
      router_tran:''
    }
  },
  watch:{
      $route(to, from) {
      if (to.meta.tx < from.meta.tx) {
        this.router_tran= "toright";
      } else {
        this.router_tran= "toleft";
      }
    }
  }
}
</script>
<style>
  @import "./assets/css/base.css";
  @font-face{
    font-family: 'xin';
    src: url('./assets/font/HYShangWeiShouShuW.ttf');     
}
body{
   background-image: url(./assets/img/temfile/web10.jpg);
}
.title{
  height: 150px;
  font-size: 20px;
  text-align: center;
  background-color: rgba(5, 89, 100, 0.445);
  position: relative;
  overflow: hidden;
  /* background-image: url(./assets/img/temfile/web5.jpg); */
}
.title a{
  margin: 0 5px;
  font-weight: 600;
  line-height: 50px;
  transition: all ease-in-out .1s;
  position: relative;
  top:100px;
  display: block;
  background-color: beige;
  border-top-left-radius:15px ;
  border-top-right-radius:15px ;
  width: 150px;
  margin: 0 5px;
  height: 60px;
  background-color: rgba(245, 245, 245, 0.493);
  transition: all ease-in-out .4s;
}
.title li{
 display: inline-block;
}
.title a:hover{
  color:unset;
  background-color: rgba(219, 11, 174, 0.397);
  top:95px;
}
.toright-enter-active,
.toright-leave-active,
.toleft-enter-active,
.toleft-leave-active {
  transition: all 1s;
}
.toright-enter {
  transform: translate3d(-100%, 0, 0);
}
.toright-leave-to {
  transform: translate3d(100%, 0, 0);
}
.toleft-enter {
  transform: translate3d(100%, 0, 0);
}
.toleft-leave-to {
  transform: translate3d(-100%, 0, 0);
}
</style>
