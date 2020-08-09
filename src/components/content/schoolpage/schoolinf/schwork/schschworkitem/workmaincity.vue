<template>
  <div class="main_firm">
    <p><i class="fa fa-building"></i> 主要签约单位</p>
    <div class="table_firm">
      <table v-if="sch_work_inf.main_firm">
        <tr>
          <th>序号</th>
          <th>主要签约单位</th>
        </tr>
        <tr v-for="(m,index) in sch_work_inf.main_firm">
          <td>{{index+1}}</td>
          <td><p>{{m}}</p></td>
        </tr>
      </table>
      <p v-else>暂无数据!</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'workmaincity',
  data(){
    return{

    }
  },
  props:{
    sch_work_inf:{
      type:Object,
      default(){
        return {}
      }
    }
  },
}
</script>

<style>
.main_firm{
  margin: 10px;
  width: 100%;
}
.main_firm>p{
  font-size: 20px;
  color: cadetblue;
}
.table_firm{
  width: 50%;
  border: 1px solid rgba(0, 0, 0, 0.116);
  margin: 20px;
}
.table_firm>p{
  font-size: 25px;
  margin: 20px 40%;
}
.table_firm>table{
  width: 100%;
  text-align: center;
  font-size: 20px;
}
.table_firm tr{
  border: 1px solid;
  height: 50px;
}
.table_firm td,.table_firm th{
  border: 1px solid rgba(0, 0, 0, 0.185);
}
.table_firm p{
  font-weight: 600;
  color: chocolate;
}
</style>