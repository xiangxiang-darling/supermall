<template>
  <div class="sch_container">
    <span class="sch_title">▋专业解读</span>
    <ul class="sch_ul">
      <li  v-for="(items,index) in schedule_intro"v>
        <img :src="getscimg1(index)" alt="">
        <div class="art_container">
          <article>
            <h1>{{schedule_intro[index].title}}</h1>
            <p>{{schedule_intro[index].article}}</p>
          </article>
        </div> 
      </li>
    </ul>
  </div>
</template>

<script>
import {request} from '../../../network/axios'
export default {
  name:'scheduleinterpretaion',
  data(){
    return{
      schedule_intro:[]
    }
  },
  methods:{
    getscimg1(index){
      return this.schedule_intro[index].img
    },
  },
  created(){
    request({
      url:'/home/schedule_img'
    }).then(res=>{
      this.schedule_intro=res.data.data
    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>

<style>
.sch_container{
    height: 850px;
    width: 1200px;
    text-align: center;
    margin: 60px auto;
    position: relative;

}
.sch_container span.sch_title{
    position: relative;
    top: -20px;
    left: -513px;
    background-color: unset;
    font-family: 'xin';
    font-size: 24px;
    color: rgba(226, 112, 226, 0.972);
}
.sch_container ul{
  width: 1200px;
  height: 250px;
  position: relative;
}
.sch_container li{
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 580px;
  display: inline-block;
  margin: 5px 5px;
  background-color: bisque;

}
.sch_container ul{
  text-align: start;
  position: relative;
}
.sch_container img{
  position: relative;
  display: inline-block;
  top: 15px;
}
.sch_container div.art_container{
  position: absolute;
  right: 0;
  top: 0;
  width: 250px;
  height: 250px;
 
}
.art_container h1{
  margin-top: 15px;
   text-align: center;
   font-size: 20px;
   font-weight: 600;
   letter-spacing:2px
}
.art_container p{
  font-size: 15px;
  letter-spacing: 1px;
  text-indent:20px;
}
</style>