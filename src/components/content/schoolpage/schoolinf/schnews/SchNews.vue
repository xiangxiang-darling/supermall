<template>
  <div class="sch_news"> 
    <p>▤招生计划</p>
    <div class="sch_plan_container">
      <div v-for="(m,index) in sch_news_inf.newStuPlan">
        <a :href="gethref(index)" >{{m.title}}</a>
        <span>{{m.time}}</span>
      </div>
    </div>
    <p>▤招生简章</p>
    <div class="sch_article_container">
      <div v-for="(m,index1) in sch_news_inf.newStuArticle">
        <a :href="gethref1(index1)" >{{m.title}}</a>
        <span>{{m.time}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import SchNewsHead from './schnewsitem/SchNewsHead'
import {request} from '../../../../../network/axios'
export default {
  name:'schnews',
  data(){
    return{
      sch_news_inf:{},
      
    }
  },
  components:{
    
  },
  methods:{
    gethref(index){
      return this.sch_news_inf.newStuPlan[index].href
    },
    gethref1(index1){
      return this.sch_news_inf.newStuArticle[index1].href
    },
  },
  created(){
    this.school_id=this.$route.query.id
    request({
      url:'/sch/'+this.school_id1+'/news',
    }).then(res=>{
      this.sch_news_inf=res.data.sch_news
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
.sch_news{
  width: 1200px;
  border: 1px solid black;
  margin: 10px auto;
}
.sch_news>p{
  font-size: 20px;
  color: rgb(9, 117, 167);
  margin: 10px;
}
.sch_plan_container,.sch_article_container{
  width: 60%;
  margin: 20px;
}
.sch_plan_container>div,.sch_article_container>div{
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  cursor: pointer;
}
.sch_news a:hover{
color: chocolate;
}
</style>