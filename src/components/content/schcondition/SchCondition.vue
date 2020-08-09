<template>
  <div class="sch_con_container">
    <p>高校查询⇩</p>
    <div class="condition_container">
      <p>请选择搜索条件:</p>
      <span>选择省份:</span>
      <select name="" id="">
        <option :value="getprovince(index)" v-for="(items,index) in schprovince ">{{items.province}}</option>
      </select>
      <span>按学校录取层次查看:</span>
      <select name="" id="">
        <option :value="getschstate(index1)" v-for="(items,index1) in schstate ">{{items.schstate}}</option>
      </select>
      <br>
      <span>按学校办学类型查看:</span>
      <select name="" id="">
        <option :value="getschstyle(index2)" v-for="(items,index2) in schstyle ">{{items.schstyle}}</option>
      </select>
      <span>按学校办学属性查看:</span>
      <select name="" id="">
        <option :value="getschattr(index3)" v-for="(items,index3) in schattr ">{{items.schattr}}</option>
      </select>
      <div class="sch_search">
        <span>请输入学校关键字:</span>
        <label for="请输入学校关键字">
          <input type="text" name="" id="" placeholder="请输入学校关键字">
        </label>
      </div>
      <input type="button" value="查询" id="sch_commit">
    </div>
  </div>
</template>

<script>
import {request} from '../../../network/axios'
export default {
  name:'schcondition',
  data(){
    return{
      schprovince:[],
      schstate:[],
      schstyle:[],
      schattr:[]
    }
  },
  methods:{
    getprovince(index){
      return this.schprovince[index].province
    },
    getschstate(index1){
      return this.schstate[index1].schstate
    },
    getschstyle(index2){
      return this.schstyle[index2].schstyle
    },
    getschattr(index3){
      return this.schattr[index3].schattr
    }
  },
  created(){
    request({
      url:'/schoolquery/schcondition'
    }).then(res=>{
      this.schstate=res.data.schstate
      this.schattr=res.data.schattr
      this.schstyle=res.data.schstyle
      this.schprovince=res.data.schprovince
      console.log();
    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>

<style>
.sch_con_container{
  height: 350px;
  width: 1200px;
  border: 1px solid;
  margin: 40px auto;
  background-color: rgba(15, 223, 223, 0.103);
}
.sch_con_container>p{
  margin: 20px 60px;
  font-family: 'xin';
  font-size: 22px;
  color: rgba(16, 110, 79, 0.945);
}
.condition_container{
  height: 80%;
  width: 90%;
  
  margin: 5px auto;
  padding-top: 1px;
}
.condition_container>p{
  font-weight: 600;
  margin: 15px ;
  font-size: 19px;
  color: rgba(210, 105, 30, 0.712);
  
}
.condition_container select{
  background-color: rgba(170, 163, 163, 0.287);
  font-size: 15px;
  margin-left: 10px;
  margin-top: 30px;
}
.condition_container>span{
  margin-left: 35px;
  font-size: 18px;
  font-weight: 600;
}
.sch_search{
  margin:15px;
  margin-left: 35px;
  font-size: 18px;
  padding-top: 10px;
  
}
.sch_search span{
  font-weight: 600;
  margin-top: 40px;
}
.sch_search input{
  font-size: 15px;
  height: 20px;
  width: 300px;
}
#sch_commit{
  position: relative;
  width: 100px;
  height: 50px;
  left: 740px;
  top: -100px;
  font-size: 24px;
  font-family: 'xin';
  color: brown;
  background-color: rgba(34, 153, 200, 0.746);
  border-radius: 5px;
}
#sch_commit:hover{
  background-color: rgba(151, 98, 60, 0.767);
}
</style>