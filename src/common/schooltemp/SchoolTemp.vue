<template>
  <div >
    <div class="sch_head_container">
      <div class="sch_ico_container"> 
        <img :src="geticon()" alt="">
      </div>
      <ul class="sch_inf_container">
        <li><i class=" fa  fa-bank"></i> {{school_inf.school_name}}</li>
        <li>{{school_inf.school_type}}</li>
        <li>
          <i class="fa fa-th-large"></i>
          学校官网：
          <a :href="getweb1()"> {{school_inf.school_web1}}</a>
          <a :href="getweb2()">{{school_inf.school_web2}}</a>
        </li>
        <li><i class="fa fa-hospital-o"></i> 学校地址：{{school_inf.school_area}}</li>
        <li><i class="fa fa-tty"></i> 联系电话：{{school_inf.school_phone}}</li>
      </ul>
    </div>
    <!-- 解决点击两下才能触发的情况 -->
    <div class="sch_router_container" @click="geturl()" @mouseleave="geturl()">
      <router-link to="/sch/home" ><i class="fa fa-navicon" ></i> 学校概况</router-link>
      <router-link to="/sch/profession" ><i class="fa fa-tablet"></i> 开设专业</router-link>
      <router-link to="/sch/score" ><i class="fa fa-sticky-note-o"></i> 历年分数</router-link>
      <router-link to="/sch/news" ><i class="fa fa-male"></i> 招生信息</router-link>
      <router-link to="/sch/working" ><i class="fa fa-line-chart"></i> 学校就业</router-link>
      <router-link to="/sch/recommond" ><i class="fa fa-thumbs-up"></i> 院校口碑</router-link>
    </div>
    <transition name="bounce" mode="out-in">
      <keep-alive>
        <router-view :school_id1="school_id1" />
      </keep-alive>
    </transition>
    
  </div>
</template>

<script>

export default {
  name:'schooltemp',
  data(){
    return{
      school_id1:''
    }
  },
  methods:{
    geticon(){
      return this.school_inf.school_icon
    },
    getweb1(){
      return this.school_inf.school_web1
    },
    getweb2(){
      return this.school_inf.school_web2
    },
    geturl(){
      this.$router.push({path:'',query:{ id:this.school_id1}});
    }
  },
  mounted(){
   
  },
  props:{
    school_inf:{
      type:Object,
      default(){
        return{}
      }
    },
    school_id:{
      type:String,
      default:''
    }
  },
  created(){
    this.school_id1=this.school_id
    
  }
}
</script>

<style>

.sch_head_container{
  height: 350px;
  background-color: rgba(83, 238, 12, 0.178);
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  overflow: hidden;
}
.sch_ico_container{
  margin: 50px 30px  0px 100px ;
}
.sch_inf_container{
  margin: 30px 0px 0px 0px;
}
.sch_inf_container li:first-of-type{
  font-size: 26px;
  font-family: 'xin';
  color: brown;
}
.sch_inf_container li{
  margin-top: 10px;
}
.sch_inf_container li:nth-of-type(3) a:nth-of-type(2){
  margin-left: 15px;
  
}

.sch_inf_container li:nth-of-type(3) a:hover{
  color:violet;
}
.sch_router_container{
 position: relative;
 top: -50px;
 display: flex;
 text-align: center;
 justify-content: center;
}
.sch_router_container>a{
  display: block;
  height: 50px;
  width: 150px;
  line-height: 50px;
  background-color: rgba(165, 42, 42, 0.075);
  font-weight: 600;
  color: rgb(133, 89, 9);
  transition: all ease-out .2s;
  font-size: 18px;
  
}

.sch_router_container>a:hover{
  background-color: rgba(0, 0, 255, 0.26);
  color: brown;
  font-size: 20px;
  box-shadow: 2px  2px 2px 1px   rgba(27, 26, 26, 0.472);
}
.fade1-enter {
  opacity:0;
}
.fade1-leave{
  opacity: 1;
}
.fade1-enter-active{
  transition:opacity .6s;
}
.fade1-leave-active{
  opacity:0;
  transition:opacity .6s;
}
.bounce-enter-active {
  animation: bounce-in .6s;
}
.bounce-leave-active {
  animation: bounce-in .6s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
#active{
  background-color: rgba(165, 42, 42, 0.397);
}
</style>