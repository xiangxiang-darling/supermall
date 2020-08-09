<template>
  <div class="score_page" >
     <div  v-if="sch_score_inf">
      <p><i class="fa fa-bar-chart-o"></i>{{sch_score_inf.title}}</p>
      <select name="" id="">
        <option value="getscoreprovince(index)" v-for="(m,index) in sch_score_inf.province">{{m}}</option>
      </select>
      <select name="" id="">
        <option value="getscoreprotype(index1)" v-for="(items,index1) in sch_score_inf.pro_type">{{items}}</option>
      </select>
      <slot name="select1"></slot>
      <slot name="select2"></slot>
    </div > 
     <div >
        <table v-if="sch_score_inf.table_data">
          <tr>
            <th v-for="m in sch_score_inf.table_data.title">{{m}}</th>
          </tr>
        </table>
        <div class="table_content" >
          <table class="tabletext">
            <div v-if="sch_score_inf.table_data">
              <tr v-for="(m,index3) in sch_score_inf.table_data.content" :key="index3">
                <td v-for="(items,index2) in m " :key="index2">{{items}}</td>
              </tr>
            </div>
          </table>
        </div>
        <div class="jump" id="btn_container">
          <a href="javascript:;" class="btnfirst">首页</a>
          <a href="javascript:;" class="btnbefor">上一页</a>
          <div class="page"></div>
          <a href="javascript:;" class="btnnext">下一页</a>
          <a href="javascript:;" class="btnlast">尾页</a>
        </div>
    </div>
  </div>
</template>
<script>
import {tablepages} from './Page'
export default {
  name:'tablepage',
  data(){
    return{
      Num:Number,
      id:'',
    }
  },
  props:{
    sch_score_inf:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  watch:{
    sch_score_inf:function() {
       this.Num=this.sch_score_inf.table_data.content.length
      this.id=this.sch_score_inf.id
      tablepages(this.Num,this.id) 
    }
  }
}
</script>

<style>
  .score_page{
    margin: 20px;
  }
  .score_page p{
    font-size: 20px;
    color: teal;
    margin: 10px;
    font-weight:600;
  }
  .score_page select{
    height: 30px;
    width: 100px;
    color: rgba(209, 108, 13, 0.897);
    border: 1px solid rgba(223, 173, 12, 0.26);
    margin: 10px;
    background-color: rgba(255, 255, 255, 0.322);
  }
  .score_page table{
      text-align: center;
      transition: all 1s ease-in-out;
      
    }
   .score_page  tr{
      border-top: 1px solid rgba(0, 0, 0, 0.233);
      border-bottom: 1px solid rgba(0, 0, 0, 0.233);
    }
   .score_page  td,.score_page th{
      height: 50px;
      width: 150px;
    }
    .jump{
      
      width: 100%;
      text-align: center;
      margin-top: 0px;
    }
    .jump a{
      display: inline-block;
      width: 100px;
      height: 30px;
      border: 1px solid;
      text-align: center;
      line-height: 30px;
      background-color: rgba(95, 158, 160, 0.349);
    }
    .jump a:hover{
      color: violet;
    }
    .jump a:active{
      background-color: rgba(210, 180, 140, 0.342);
    }
    .table_content{
      height: 365px;
      overflow: hidden;
    }
    .page{
      display: inline-block;
    }
</style>