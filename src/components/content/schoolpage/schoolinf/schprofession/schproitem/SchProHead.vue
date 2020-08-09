<template>
  <div class="sch_pro_head_container">
    <div class="sch_pro_left_container">
      <p>开设专业</p>
      <div class="table1_container">
        <table>
          <tr v-if="sch_pro_inf.country_char_pro">
            <td >{{sch_pro_inf.country_char_pro.title}}</td>
            <td>
              <span v-for="items in sch_pro_inf.country_char_pro.sche">
                {{items}}
              </span>
            </td>
          </tr>
        </table>
      </div>
      <div class="table1_container">
        <table>
          <tr>
            <th>类别</th>
            <th>专业</th>
          </tr>
          <tr v-for="items in sch_pro_inf.sch_proitem">
            <td>{{items.class_name}}</td>
            <td>
              <span v-for="m in items.sche_name">{{m}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="sch_new_head_right">
      <div >
        <sch-tips :sch_tips="sch_pro_inf.sch_tips"></sch-tips>
      </div>
    </div>
  </div>
  
</template>

<script>
import SchTips from './SchTips.vue'
export default {
  name:'schprohead',
  data(){
    return{
      
    }
  },
  components:{
    SchTips
  },
  props:{
    sch_pro_inf:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  created(){
   
  }
}
</script>

<style>
.sch_pro_head_container{
  display: flex;
  width: 1200px;
  border: 1px solid rgba(0, 0, 0, 0.075);
  margin: 10px auto;
  cursor: pointer;
}
.sch_pro_left_container{
  width: 700px;
}
.sch_pro_left_container>p{
  font-size: 20px;
  font-weight: 600;
  color: cadetblue;
  margin: 15px;
}
.table1_container{
  margin: 10px;
}
.table1_container table th{
   font-weight: 600;
   font-size: 24px;
   color: rgba(55, 43, 226, 0.582);
   border: solid 1px rgba(247, 0, 255, 0.226);
}
.table1_container table>tr{
  
  height: 100px;
  border: solid 1px rgba(247, 0, 255, 0.226);
}
.table1_container span{
  margin: 5px;
  display: inline-block;
}
.table1_container table td:nth-of-type(2){
  border: groove 1px;
  font-size: 17px;
  width: 500px;
}
.table1_container table td:nth-of-type(1){
  color: rgb(139, 84, 11);
  width: 200px;
  font-weight: 600;
  padding-left: 5px;
}
.sch_new_head_right{
  flex: 1;
}
</style>