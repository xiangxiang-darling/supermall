<template>
  <div>
    <div class="sch_work_center">
      <p><i class="fa fa-area-chart "></i> 就业地区分布</p>
      <canvas  width="1600" height="800" id="ca">
        
      </canvas>       
    </div>
   
  </div>
</template>

<script>
import {chart} from './chart.js'
 
export default {
  name:'workarea',
  data(){
    return{
      work:{},
    
    }
  },
  methods:{ 

  },
  watch:{
    sch_work_inf:function() {
     
      chart(this.sch_work_inf.area)
    }
  },
  mounted(){
   
  },
  creaed(){
    
  },
  props:{
    sch_work_inf:{
      type:Object,
      default(){
      return{}
      }
     }
  }
}
</script>

<style>
.sch_work_center{
  width: 100%;
  margin: 20px auto;
}
.sch_work_center>p{
  margin: 10px;
  font-size: 20px;
  color: cadetblue;
}
.sch_work_center canvas{
      height: 400px;
      width: 800px;
      border: 1px solid rgba(0, 0, 0, 0.096);
      margin-left: 10px;
      background-color: bisque;
 }
</style>