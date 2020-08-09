<template>
  <div class="home_main1_container">
    <p>▋开设专业</p>
    <div class="main1_messege">
      <table >
        <tr>
          <th>类别</th>
          <th>专业</th>
        </tr>
        <tr v-for="items in sch_home_inf.sch_pro">
          <td>{{items.class_name}}</td>
          <td>{{items.sche_name[0]}}</td>
        </tr>
      </table>
      <div>
        <p>◒男女比例</p>
        <div class="sex_bili" v-if="sch_home_inf.sex_proc">
          <div :style="getwidth1()">{{man}}</div>
          <div :style="getwidth2()">{{girl}}</div>
        </div>
        <div class="daily_time">
          <p>▶校历表</p>
          <img src="../../../../../../assets/img/temfile/anhuijianzhudaxue_xiaoli.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'homemain1',
  props:{
    sch_home_inf:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    getwidth1(){
      let wit=(this.sch_home_inf.sex_proc.man-0)*4
      return{width:wit+'px'}
    },
    getwidth2(){
      let wit=(this.sch_home_inf.sex_proc.girl-0)*4
      return{width:wit+'px'}
    }
  },
  computed:{
    man(){
      let bili=this.sch_home_inf.sex_proc.man +'%'
      return '男:'+ bili
    },
    girl(){
      let bili=this.sch_home_inf.sex_proc.girl +'%'
      return '女:'+bili
    }
  }
}
</script>

<style>
.home_main1_container{
  margin: 50px 10px;
  font-size: 20px;
}
.home_main1_container>p{
  color: cadetblue;
  margin-bottom: 20px;
}
.home_main1_container table{
  border: 1px solid rgba(0, 0, 0, 0.308);
  width: 67%;
  margin-left: 10px;
}
.home_main1_container table th:nth-of-type(1){
  border: groove 1px;
  width: 30%;
}
.home_main1_container table th{
   font-weight: 600;
   color: rgba(55, 43, 226, 0.582);
}
.home_main1_container table>tr{
  height: 50px;
  border: solid 1px rgba(247, 0, 255, 0.226);
  
}
.home_main1_container table td{
  border: groove 1px;
  font-size: 17px;
  text-indent: 6px;
}
.main1_messege{
  display: flex;
}
.main1_messege>div>p{
  text-indent: 25px;
  margin-bottom: 20px;
}
.sex_bili{
  width: 400px;
  height: 50px;
  background-color: cornflowerblue;
  text-align: center;
  line-height: 50px;
  display: flex;
  margin-left: 5px;
}
.sex_bili>div{
  height: 100%;
  width: 280px;
  background-color: rgba(11, 37, 184, 0.253);
}
.sex_bili>div:nth-of-type(2){
  height: 100%;
  width: 120px;
  background-color: rgba(248, 11, 169, 0.774);
}
.daily_time{
  margin-top: 90px;
}
.daily_time>img{
  width: 400px;
  margin-top: 10px;
}
.daily_time>p{
  text-indent: 25px;
}
</style>