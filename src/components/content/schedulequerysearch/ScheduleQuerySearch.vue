<template>
  <div class="sch_query_container">
   <div class="sch_query_search_container">
     <label for="">
       <input type="text" value="" placeholder="请输入专业关键字" class="input_search">
     </label>
     <input type="button" value="⇱" class="search_button">
   </div>
   <div class="schedule_category">
     <input @click="showschedule1()" type="button" value="本科">
     <input @click="showschedule2()" type="button" value="专科">
      <ul>
        <li  v-for="m in schedule"><router-link :to="getrouter(m)" :class="{active:isactive(m)}">{{m.schedule_class}} </router-link></li>
      </ul>
   </div>
   <div class="schedule_items_container">
     <keep-alive>
      <router-view/>
     </keep-alive>
   </div>
  </div>
</template>

<script>
import {request} from '../../../network/axios'
export default {
  name:'schedulequerysearch',
  data(){
    return{
      schedule_class_ben:[],
      schedule_class_zhuan:[],
      schedule:[],
    }
    
  },
  created(){
    request({
      url:'/professionalquery/search'
    }).then(res=>{
      this.schedule_class_ben=res.data.data_ben
      this.schedule_class_zhuan=res.data.data_zhuan
      this.schedule=this.schedule_class_ben
    }).catch(err=>{
      console.log(err);
    })
  },
  methods:{
    showschedule1(){
       this.schedule=this.schedule_class_ben
       
    },
    showschedule2(){
       this.schedule=this.schedule_class_zhuan
    },
    getrouter(m){
      return m.router
    },
    // 选择对应路由高亮显示
    isactive(m){
      //当前活跃路由是不是包含对应路由
      
      return this.$route.path.indexOf(m.router)!=-1
    }
  }
}
</script>

<style >
.sch_query_container{
  width: 1200px;
  margin: 20px auto;
  border: 1px dashed;
}
.sch_query_search_container{
  height: 200px;
  text-align: center;
  background-color: bisque;
  width: 90%;
  margin: 10px auto;
}
.sch_query_search_container .input_search{
  height: 50px;
  width: 300px;
  margin-top: 70px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: unset;

}
.sch_query_search_container .search_button{
  height:  52px;
  width: 80px;
  font-weight: 600;
  border:unset;
  background-color: white;
  transition: all ease-in-out .2s;
}
.sch_query_search_container .search_button:hover{
  color: rgb(255, 142, 5);
  background-color: brown;
}
.sch_query_search_container .search_button:active{
  background-color: rgb(97, 57, 6);
}
.schedule_category{
  width: 15%;
  display: inline-block;
}
.schedule_category input{
  width: 48%;
  border: unset;
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  margin-left: 3px;
  transition: all ease-in-out .2s;
}
.schedule_category input:hover{
  background-color: teal;
}
.schedule_category ul{
  width: 100%;
   background-color: rgba(197, 195, 195, 0.267);
  text-align:center;
}
.schedule_category li{
  height: 40px;
  border-bottom: 1px solid;
  transition: all ease-in-out .2s;
}
.schedule_category li:nth-of-type(1){
  border-top:1px solid;
  
}
.schedule_category a{
  display: block;
  line-height: 40px;
  width: 100%;
  height: 100%;
  
}
.schedule_category li:hover{
  background-color: rgba(18, 155, 141, 0.733);
  color: unset;
}
.schedule_category a:hover{
  color: unset;
}
.schedule_items_container{
  width: 80%;
  position: relative;
  top:-540px;
  left: 200px;
}
.active{
   background-color: rgba(18, 155, 141, 0.733);
}
</style>