<template>
  <div class="sch_enviro_container">
    <p>▋学校及周边环境</p>
    <p>⇩学校环境</p>
    <div class="main3_con">
      <div class="main3_left">
        <div class="sch_environment" >
          <div id="direc_container">
            <a href="javascript:;" id="main3top">︽</a>
            <a href="javascript:;" id="main3bottom">︾</a>
          </div>
          <div id="main3_1">
            <div v-for="(items,index) in sch_home_inf.sch_img" v-if="sch_home_inf.sch_img" >
              <img :src="getimg(index)" alt="">
              <p>{{items.name}}</p>
            </div>
          </div>
        </div>
        <p class="near_p">⇩学校周边环境</p>
        <div class="nearby_environment">
          <div id="direc_container1">
            <a href="javascript:;" id="main3top1">︽</a>
            <a href="javascript:;" id="main3bottom1">︾</a>
          </div>
          <div id="main3_2">
            <div v-for="(items,index1) in sch_home_inf.sch_near_img" v-if="sch_home_inf.sch_near_img">
              <img :src="getimg1(index1)" alt="">
              <p>{{items.name}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="main3_right">
         <p>✄分数相近院校推荐</p>
         <div v-for="(items,index2) in sch_home_inf.sch_near_rec" class="sch_near_rec">
           <img :src="getico(index2)" alt="">
          <div>
            <p>{{items.sch_name}}</p>
            <p>{{items.sch_type}}|{{items.sch_class}}|{{items.sch_state}}|{{items.sch_score}}</p>
          </div>
         </div>
          <div class="sch_others" v-if="sch_home_inf.sch_newstudent">
            <p>▓学校动态资讯</p>
            <div >
              <p>{{sch_home_inf.sch_newstudent.dating}}{{sch_home_inf.sch_newstudent.sch_name}}新生qq群:</p>
              <span v-for="items in sch_home_inf.sch_newstudent.qqnum">{{items}}</span>
            </div>
            <div>
              <p>{{sch_home_inf.sch_newstudent.dating}}{{sch_home_inf.sch_newstudent.sch_name}}招生官方微信:</p>
              <div class="sch_weixin">
                <div v-for="(m,index3) in sch_home_inf.sch_newstudent.weixin ">
                  <img :src="getweixin(index3)" alt="">
                  <p>{{m.name}}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import  {swiperr} from './HomeMain3.js'
export default {
  name:'homemain3',
  props:{
    sch_home_inf:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    getimg(index){
      return this.sch_home_inf.sch_img[index].img
    },
    getimg1(index1){
      return this.sch_home_inf.sch_near_img[index1].img
    },
    getico(index2){
      return this.sch_home_inf.sch_near_rec[index2].sch_ico
    },
    getweixin(index3){
      return this.sch_home_inf.sch_newstudent.weixin[index3].img
    }
 },
 mounted(){
   swiperr()
 }
}
</script>

<style>

.sch_enviro_container>p:nth-of-type(1){
  font-size: 20px;
  margin: 20px 10px;
  color: cadetblue;
}
.sch_enviro_container>p:nth-of-type(2){
  font-size: 18px;
  margin: 0 20px;
  color: violet;
  margin-bottom: 20px;
}
.near_p{
  font-size: 18px;
  margin: 0 20px;
  color: violet;
  margin-bottom: 20px;
}
.sch_environment,.nearby_environment{
  height: 430px;
  width: 800px;
  overflow: hidden;
}
.sch_environment p,.nearby_environment p{
  text-align: center;
  color: rgb(155, 11, 11);
  font-weight: 600;
  font-size: 20px;
  margin-left: 20px;
}
.sch_environment>div,.nearby_environment>div{
  position: relative;
  margin-left: 20px;
  /* margin-top: -31px; */
}
#direc_container a,#direc_container1 a{
  z-index: 99;
  position: absolute ;
  height: 50px;
  width: 100px;
  color: blueviolet;
  font-size: 30px;
  text-align: center;
  transition: all ease-in .1s;
}
#direc_container a:hover,#direc_container1 a:hover{
  background-color: rgba(0, 139, 139, 0.281);
}
#direc_container a:nth-of-type(1),#direc_container1 a:nth-of-type(1){
  top: 0;
  left: 350px;
  line-height: 40px; 
}
#direc_container a:nth-of-type(2),#direc_container1 a:nth-of-type(2){
  top: 350px;
  left: 350px;
  line-height: 60px;
}
.main3_con{
  display: flex;
}
.main3_right{
  flex: 1;
}
.main3_right>p,.sch_others>p{
  font-size: 20px;
  text-indent: 25px;
}
.sch_near_rec{
  display: flex;
  justify-items: center;
  cursor: pointer;
}
.sch_near_rec>img{
  border-radius: 50%;
  margin: 10px 5px 10px 40px;
  
}
.sch_near_rec>div{
 flex: 1;
 margin-top: 5px; 
}
.sch_near_rec>div p{
  line-height: 30px;
}
.sch_near_rec>div p:nth-of-type(1){
  font-weight: 600;
  font-size: 18px;
  color: rgb(155, 33, 33);
}
.sch_others{
  margin-top: 20px;
}
.sch_others>div{
  border: 1px solid rgba(214, 3, 3, 0.123);
  margin: 20px;
  padding-bottom: 10px;
}
.sch_others>div p{
  margin-bottom: 10px;
  margin: 10px;
  font-weight: 600;
  color: chocolate;
}
.sch_others>div span{
  margin-left: 70px;
  
}
.sch_weixin{
  display: flex;
  margin-top: 20px;
}
.sch_weixin>div{
  margin-left: 15px;
  
}
.sch_weixin>div p{
  color: turquoise;
  text-align: center;
  margin-left: 5px;
  margin-top: 5px;
}
</style>