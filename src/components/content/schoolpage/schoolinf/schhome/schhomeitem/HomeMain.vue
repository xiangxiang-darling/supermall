<template>
  <div class="home_main_container">
    <p>▋基本信息</p>
    <!-- v-if解决的是异步数据读取错误的情况 -->
    <div class="home_main_container">
      <div class="home_main_messege" v-if="sch_home_inf.base_inf">
        <div>
          <div>{{sch_home_inf.base_inf.boshidian}}</div>
          <p>博士点</p>
        </div>
        <div>
          <div>{{sch_home_inf.base_inf.shuoshidian}}</div>
          <p>硕士点</p>
        </div>
        <div>
          <div>{{sch_home_inf.base_inf.zhongdianxueke}}</div>
          <p>国家重点学科</p>
        </div>
        <div>
          <div>{{sch_home_inf.base_inf.zhongdianshiyanshi}}</div>
          <p>国家重点实验室</p>
        </div>
        <div>
           <ul>
          <li><span>建校时间：{{sch_home_inf.base_inf.chuangjianshijian}}</span></li>
          <li><span>占地面积：{{sch_home_inf.base_inf.zhandimianji}}</span></li>
          </ul>
          <ul>
            <li><span>隶属于：{{sch_home_inf.base_inf.lishuyu}}</span></li>
            <li><span>学校地址：{{sch_home_inf.base_inf.xuexiaodizhi}}</span></li>
          </ul>
        </div>
       
      </div>
      <div class="home_main_reommond">
        <p>◈院校口碑</p>
        <ul>
          <li v-for="(items) in sch_home_inf.sch_rec"><p>{{items.content}}</p></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'homemain',
  data(){
    return{
     
    }
  },
  props:{
    sch_home_inf:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{

  }
}
</script>

<style>
.home_main_container{
 margin-left: 10px;
 position: relative;
 top: 10px;
}
.home_main_container>p{
  font-size: 20px;
  position: absolute;
  top: -30px;
  color: cadetblue;  
}
.home_main_messege{
  height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.089);
  flex: 2;
}
.home_main_messege>div{
  display: inline-block;
  height: 120px;
  width: 120px;
  margin-left: 50px;
  margin-top: 20px;
}
.home_main_messege>div>div{
    border-radius: 50%;
    height: 90px;
    width: 90px;
    background-color: rgba(27, 183, 211, 0.733);
    text-align: center;
    line-height: 90px;
    margin: 0 auto;
    font-weight: 600;
    font-size: 20px;
}
.home_main_messege>div:nth-of-type(5){
  display: flex;
  width: 90%;
}
.home_main_messege>div>ul{
  flex: 1; 
}
.home_main_messege>div>ul>li{
  margin-top: 20px;
}
.home_main_messege>div>ul>li:nth-of-type(2){
 margin-top:50px;
}

.home_main_messege>div>ul>li>span{
  color:rgb(9, 70, 182) ;
}

.home_main_messege p{
  text-align: center;
  color:rgba(197, 13, 214, 0.527)
}
.home_main_reommond{
  width: 380px;
  height: 300px;
  margin: 0 10px;  
}
.home_main_reommond>p{
  font-size: 20px;
  text-indent: 15px;
}
.home_main_reommond>ul p{
  text-indent: 25px;
  margin-top: 10px;
}
.home_main_container{
  display: flex;
  width: 1200px;
  
}
</style>