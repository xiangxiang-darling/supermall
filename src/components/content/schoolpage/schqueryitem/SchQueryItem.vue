<template>
  <div class="shqueryitem_container">
    <school-temp :school_inf="school_inf" :school_id="school_id"></school-temp>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import {request} from '../../../../network/axios'
import SchoolTemp from '../../../../common/schooltemp/SchoolTemp'
import TabBar from '../../../common/tabbar/TabBar.vue'
export default {
  name:'shqueryitem',
  data(){
    return{
      school_id:'',
      school_inf:{}
    }
  },
  methods:{
    
  },
  components:{
    SchoolTemp,
    TabBar
  },
  created(){
    
    this.school_id=this.$route.query.id
    request({
      url:'/sch/'+this.school_id
    }).then(res=>{
      this.school_inf=res.data.sch_inf
    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>

<style>

</style>