<template>
  <div class="zhexue">
    <p>文学</p>
    <schedule-temp :schedule="schedule"/>
  </div>
</template>

<script>
import {request} from '../../../network/axios'
import ScheduleTemp from '../../../common/scheduletemp/ScheduleTemp'
export default {
  name:'wenxue',
  data(){
    return{
      schedule:[]
    }
  },
  components:{
    ScheduleTemp
  },
  created(){
    request({
      url:'/professionalquery/search/wenxue'
    }).then(res=>{
      this.schedule=res.data.data_schedule
    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>

<style>
.zhexue>p{
  font-size: 18px;
  font-weight: 600;
  margin: 10px 0;
}
.zhexue{
  padding-top: 3px;
}
</style>