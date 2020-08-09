<template>
  <div class="work_container">
    <work-area :sch_work_inf="sch_work_inf"></work-area>
    <work-firm :sch_work_inf="sch_work_inf"></work-firm>
    <work-main-city :sch_work_inf="sch_work_inf"></work-main-city>
  </div>
</template>

<script>
import WorkFirm from './schschworkitem/workarea/workarea.vue'
import WorkArea from './schschworkitem/workfirm/workfirm.vue'
import WorkMainCity from './schschworkitem/workmaincity.vue'
import {request} from '../../../.././../network/axios'
export default {
  name:'schworking',
  data(){
    return{
      sch_work_inf:{},
    }
  },
  components:{
    WorkArea,
    WorkFirm,
    WorkMainCity
  },
  methods:{

  },
  created(){
     this.school_id=this.$route.query.id
    request({
      url:'/sch/'+this.school_id1+'/work',
    }).then(res=>{
      // console.log(res.data.sch_work);
      this.sch_work_inf=res.data.sch_work
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
.work_container{
  width: 1200px;
  margin: 10px auto;
  border: 1px solid rgba(0, 0, 0, 0.082);
}
</style>