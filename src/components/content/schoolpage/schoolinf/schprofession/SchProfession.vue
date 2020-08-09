<template>
  <div>
    <div>
      <sch-pro-head :sch_pro_inf="sch_pro_inf"></sch-pro-head>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SchProHead from './schproitem/SchProHead.vue'
import {request} from '../../../../../network/axios'
export default {
  name:'schprofession',
  data(){
    return{
      sch_pro_inf:{}
    }
  },
  methods:{

  },
  components:{
    SchProHead,
  },
  created(){
    request({
      url:'/sch/'+this.school_id1+'/profession',
    }).then(res=>{
      // console.log(res);
      this.sch_pro_inf=res.data.sch_pro
    }).catch(err=>{
      console.log(err);
    })
  },
  props:{
    school_id1:{
      type:String,
      default:''
    }
  }
}
</script>

<style>

</style>