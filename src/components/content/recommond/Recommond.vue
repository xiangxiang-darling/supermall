<template>
  <div class="school_img_container">
    <span class="title">▋院校推荐</span>
    <ul>
      <li v-for="(items,index) in school_img">
        <a href="javascript:;">
          <img :src="gettimg(index)" alt="">
          <div>
            <span class="school_name">{{school_img[index].name}}</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {request} from "../../../network/axios";
export default {
  
  name:'recomond', 
  data(){
    return{
      school_img:[],
    }
  },
  methods:{
    gettimg(index){
      return this.school_img[index].img
    }
  },
  created(){
    request({
      url:'/home/school_recommond_img',
    }).then(res=>{
      this.school_img=res.data.data
    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>

<style>
  .school_img_container{
    height: 450px;
    width: 1200px;
    text-align: center;
    margin: 60px auto;
    position: relative;
  }
  .school_img_container li{
    display: inline-block;
    margin: 0px 5px;
  }
  .school_img_container img{
    transition: all .5s;
  }
  .school_img_container span.title{
    position: relative;
    top: -20px;
    left: -513px;
    background-color: unset;
    font-family: 'xin';
    font-size: 24px;
    color: rgba(226, 112, 226, 0.972);
  }
  .school_img_container a:hover img{
    box-shadow: 5px 5px 15px  rgb(129, 108, 108);
    transform: scale(1.05);
    color: unset;
  }
  .school_img_container span.school_name{
    color:teal;
    font-weight: 600;
  }
</style>