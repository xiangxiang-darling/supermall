<template>
  <div>
    <table-page :sch_score_inf="sch_score_inf"></table-page>
  </div>
</template>

<script>
import {request} from '../../network/axios'
import TablePage from '../../components/common/tablepage/TablePage'
export default {
  name:'profile',
  data(){
    return{
      sch_score_inf:{}
    }
  },
  components:{
    TablePage
  },
  mounted(){
   
    request({
      url:'/sch/1/score',
    }).then(res=>{
      // console.log(res.data.sch_work);
      this.sch_score_inf=res.data.sch_score
    }).catch(err=>{
      console.log(err);
    })
  },
}
</script>

<style>

</style>