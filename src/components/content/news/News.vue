<template>
  <div class="news_container">
    <span class="news_title">▋新闻资讯</span>
    <ul class="news_ul">
      <li>
        <span class="exam_news_title">高考讯息◑</span>
        <ul class="exam_news_container">
          <li v-for="(items,index1) in examNews">
            <h1>{{examNews[index1].province}}:{{examNews[index1].title}}</h1>
            <p>{{examNews[index1].article}}</p>
            <span>{{examNews[index1].date}}</span>
          </li>
        </ul>
      </li>
      <li>
        <span class="school_news_title">院校讯息◑</span>
        <ul class="school_news_container">
          <li v-for="(m,index2) in schoolNews">
            <h1>{{gettitle(index2)}}</h1>
            <p>{{schoolNews[index2].article}}</p>
            <span>{{schoolNews[index2].date}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import {request} from '../../../network/axios'
export default {
  name:'news',
  data(){
    return{
      examNews:[],
      schoolNews:[]
    }
  },
  methods:{
    gettitle(index2){
      return this.schoolNews[index2].date_y+this.schoolNews[index2].school_name
      +':'+this.schoolNews[index2].title
    }
  },
  created(){
    request({
      url:'/home/news'
    }).then(res=>{
      this.examNews=res.data.data.data_exam
      this.schoolNews=res.data.data.data_school
    }).catch(err=>{
      console.log(err);
    })
  },
}
</script>

<style>
.news_container{
    height: 850px;
    width: 1200px;
    text-align: center;
    margin: 60px auto;
    position: relative;
}
.news_container span.news_title{
    position: relative;
    top: -20px;
    left: -513px;
    background-color: unset;
    font-family: 'xin';
    font-size: 24px;
    color: rgba(226, 112, 226, 0.972);
}
.news_ul{
  position: relative;
}
.news_ul>li{
  position: absolute;
  top: 0;
  right: -300px;
  display: inline-block;
  height: 800px;
  width: 580px;
  background-color: rgba(12, 143, 155, 0.13);
  margin: 0 5px;
  position: relative;
}
.news_ul>li:nth-of-type(1){
  position: absolute;
  left: 0px;
  top: 0;
}
.exam_news_container{
  position: relative;
  top: 0;
  left: 0;
  text-align: center;
  height: 100%;
  width: 100%;
}
.exam_news_title,.school_news_title{
  font-size: 22px;
  font-family: 'xin';
  color: rgb(192, 143, 7);
}

.exam_news_container li,.school_news_container li{

  width: 100%;
  height: 100px;
  background-color: rgba(78, 18, 38, 0.15);
  margin: 15px 0;
  text-align: start;
  cursor: pointer;
}
.exam_news_container h1,.school_news_container h1{
  font-weight: 600;
}
.exam_news_container p,.school_news_container p{
  font-size: 15px;
  text-indent: 20px;
}
.exam_news_container span,.school_news_container span{
  display: block;
  text-align: end;
}

</style>