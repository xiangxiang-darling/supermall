<template>
  <div class="tabbar_container">
    <ul class="tab_ul_top">
      <li>
        <p>择校宝</p>
        <p>您的专属择校管家</p>
      </li>
      <li class="web_recommond">
        <h1>友情链接:</h1>
        <span v-for="items in web_rec"><a href="javascript:;">{{items}}|</a></span>
      </li>
      <li class="weixin">
        <img :src="getimg()" alt="">
        <p>扫码关注择校宝微信公众号</p>
      </li>
    </ul>
    <ul class="tab_ul_bottom">
      <li>
        <span>{{law_messege}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {request} from '../../../network/axios'
export default {
  name:'tabbar',
  data(){
    return{
      law_messege:'Copyright © Since 2020 by www.sc51678.com all '+
       'rights reserved. 安徽建筑大学大学生创新实验室 版权所有 联系电话'+
      ':400-0183-985 蜀ICP备15015880号'+
       ' 实验室法律顾问:安徽建筑大学律师事务所 张鑫律师 18328673486',
       web_rec:['中华人民共和国教育部','阳光高考','安徽省教育厅', 
       '安徽省教育考试院', '合肥市市招生考试网', '六安市招考网',
        '芜湖市招生考试信息网', '黄山市招生考试网', '蚌埠市招生考试网'
        ,'淮南市招生考试网', '淮北贴市招生考试网', '巢湖市招生考试网',
       '阜阳市招生考试网'],
       weixin:''
    }
  },
  created(){
    request({
      url:'/home/tabbar/weixin'
    }).then(res=>{
      this.weixin=res.data.data[0].img
    }).catch(err=>{
      console.log(err);
    })
  },
  methods:{
    getimg(){
      return this.weixin
    }
  }
  
}
</script>

<style>
.tabbar_container{
  height: 300px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.856);
  text-align: center;
  position: relative;
}
.tab_ul_top{
  height: 80%;
  display: flex;
  text-align: center;
}
.tab_ul_bottom{
  height: 20%;
  
}
.tab_ul_top li{
  height: 100%;
  flex: 1;
  background-color: rgba(212, 211, 206, 0.205);
}
.web_recommond h1{
  margin: 20px 0;
  font-size: 20px;
  color: rgba(127, 255, 212, 0.335);
}
.web_recommond a{
   color: rgba(245, 245, 245, 0.568);
   margin: 5px 3px;
}
.tab_ul_top p{
  font-family: 'xin';
  font-size: 28px;
  margin: 30px;
  color: rgba(245, 245, 245, 0.568);
}
.tab_ul_top p:nth-of-type(2){
  margin-left: 200px;
}
.tab_ul_bottom li{
  display: inline-block;
  height: 100%;
  width: 1200px;
 
}
.weixin p{
  font-size: 20px;
  margin: 5px;
  color: rgba(127, 255, 212, 0.459);
}
.weixin img{
  margin-top: 30px;
}
.tab_ul_bottom span{
  color: aliceblue;
  font-size: 14px;
}
</style>