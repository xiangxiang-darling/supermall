<template>
  <div class="swiper_container">
    <ul id="swiper">
      <li v-for="(items,index) in imgs">
        <a href="javascript:;">
          <img :src="getimg(index)" alt="">
        </a>
      </li>
    </ul>
    <a href="javascript:;" class="left" id="left">▲</a>
    <a href="javascript:;" class="right" id="right">▼</a>
  </div>
</template>
<script>
import {request} from '../../../network/axios'
import * as swip from './swip'
export default {
  name:'swiper',
  data(){
    return{
      imgs:[] 
    }
  },
  methods:{
    getimg(index){
      return this.imgs[index].img
    }
  },
  // 模板被创建的时候就开始请求数据
  created(){
      request({
        url:'/home/swiper_img'
      }).then(res=>{
        this.imgs=res.data.data;
      }).catch(err=>{
        console.log(err);
      })
    }
}
</script>

<style>
.swiper_container{
  text-align: center;
  position: relative;
  margin-top: 40px;
  height: 400px;
  overflow: hidden;
}
.swiper_container ul{
  position: relative;
  text-align: center;
  transition: ease-in 1s;
}
.swiper_container li{
  position: relative;
}
.swiper_container a.left{
  position: absolute;
  top: 0px;
  left: 48%;
  height: 30px;
  width: 70px;
  font-size: 28px;
  line-height:30px;
}
.swiper_container a.right{
  font-size: 28px;
  position: absolute;
  bottom: 0;
  left: 48%;
  height: 30px;
  width: 70px;
  line-height:30px;
}
.swiper_container a.right:hover,a.left:hover{
  color: rgb(216, 97, 0);
  background-color: rgba(255, 228, 196, 0.171);
}
</style>