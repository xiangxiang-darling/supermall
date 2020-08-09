<template>
  <div class="score_container">
    <table-page :sch_score_inf="sch_score_inf"></table-page>
    <table-center :sch_score_inf="sch_score_inf1"></table-center>
    <table-foot :sch_score_inf="sch_score_inf2"></table-foot>
  </div>
</template>
<script>
import {request} from '../../../../../network/axios'
import TablePage from '../../../../common/tablepage/TablePage.vue'
import TableCenter from './schscoreitem/tablecenter/TableCenter.vue'
import TableFoot from './schscoreitem/tablefoot/TableFoot.vue'
export default {
  name:'schscore',
  data(){
    return{
      sch_score_inf:{},
      sch_score_inf1:{},
      sch_score_inf2:{},
    }
  },
  components:{
    TablePage,
    TableCenter,
    TableFoot
  },
  methods:{

  },
  mounted(){
    this.school_id=this.$route.query.id
    request({
      url:'/sch/'+this.school_id1+'/score',
    }).then(res=>{
      // console.log(res.data.sch_work);
      this.sch_score_inf=res.data.sch_score.province_score
      this.sch_score_inf1=res.data.sch_score.stu_plan
      this.sch_score_inf2=res.data.sch_score.pro_score
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
.score_container{
  width: 1200px;
  border: 1px solid rgba(0, 0, 0, 0.212);
  margin: 20px auto;
}
</style>