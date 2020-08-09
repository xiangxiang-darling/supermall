<template>
  <div>
    <div class="sch_work_center">
      <p><i class="fa fa-industry "></i> 就业企业分布</p>
      <canvas  width="1600" height="800" id="ca1">
        
      </canvas>       
    </div>
   
  </div>
</template>

<script>
import {chart} from './chart1.js'
 
export default {
  name:'workfirm',
  data(){
    return{
      work:{},
    
    }
  },
  methods:{ 

  },
  watch:{
    sch_work_inf:function() {
     
      chart(this.sch_work_inf.firm)
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

</style>