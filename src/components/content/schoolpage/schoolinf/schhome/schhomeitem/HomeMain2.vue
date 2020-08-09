<template>
  <div class="home_main2_container">
    <p>▋招生信息</p>
    <div class="main2_messege">
      <ul>
        <li v-for="items in sch_home_inf.sch_new">
          <a href="javascript">{{items.title}}</a>
          <span>{{items.time}}</span>
          </li>
      </ul>
      <div class="main2_working">
        <ul>
          <li v-for="(items,index) in sch_home_inf.sch_work">
            <p>{{items.name}}:</p>
            <div class="work_outline">
              <span>{{items.num}}%</span>
            </div>  
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'homename2',
  methods:{
    
  },
  computed:{

    
  },
  props:{
    sch_home_inf:{
      type:Object,
      default(){
        return{}
      }
    }
  }
}
</script>

<style>
.home_main2_container{
  width: 1200px;
}
.home_main2_container>p{
  font-size: 20px;
  color: cadetblue;
  margin-left: 10px;
}
.main2_messege{
  margin-top: 20px;
  display: flex;
}
.main2_messege>ul{
  border: 1px solid rgba(0, 0, 0, 0.123);
  flex: 2;
  margin-left: 20px;
}
.main2_working{
  flex: 1;
  margin-left: 30px;
}
.main2_messege>ul li{
  margin: 15px 15px;
  display: flex;
  justify-content: space-between;
}
.main2_messege a:hover{
  color: brown;
}
.work_outline{
  height: 90px;
  width: 90px;
  border-radius: 50%;
  text-align: center;
  border: 1px solid rgb(240, 131, 7);
  margin-left: 80px;
}.work_outline>span{
  line-height: 90px;
  color: brown;
  font-weight: 600;
}
.main2_working li:nth-of-type(2) div{
  border: 1px solid rgb(7, 209, 34);
}
.main2_working li:nth-of-type(3) div{
  border: 1px solid rgba(23, 36, 223, 0.842);
}
.main2_working p{
  font-weight: 600;
  color: rgba(238, 130, 238, 0.801);
}
</style>