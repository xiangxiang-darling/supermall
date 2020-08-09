<template>
  <div class="sch_home_container">
    <HomeHead :sch_home_inf="sch_home_inf" />
    <home-main :sch_home_inf="sch_home_inf" />
    <home-main1 :sch_home_inf="sch_home_inf" />
    <home-main2 :sch_home_inf="sch_home_inf" />
    <home-main3 :sch_home_inf="sch_home_inf" />  
  </div>
</template>

<script>
import HomeMain from './schhomeitem/HomeMain.vue'
import HomeMain1 from './schhomeitem/HomeMain1.vue'
import HomeMain2 from './schhomeitem/HomeMain2.vue'
import HomeMain3 from './schhomeitem/homemain03/HomeMain3.vue'
import HomeHead from './schhomeitem/HomeHead.vue'
import {request} from '../../../../../network/axios'
export default {
  name:'schhome',
  data(){
    return{
      sch_home_inf:{},
    }
  },
  created(){
    request({
      url:'/sch/'+this.school_id1+'/home',
      
    }).then(res=>{
      this.sch_home_inf=res.data.sch_home
    }).catch(err=>{
      console.log(err);
    })
  },
  components:{
    HomeHead,
    HomeMain,
    HomeMain1,
    HomeMain2,
    HomeMain3,
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
.sch_home_container{
  width: 1200px;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.185);
}
</style>