<template>
  <div>
    <div class="schhome_home_container">
      <div class="home_head_left">
        <img :src="getvedio()" alt="">
      </div>
      <ul class="home_head_right">
        <li>
          <p>综合指数:★★★★☆</p>
          <progress value="90" max="100"></progress> 
          <span>0</span>
          <span>10</span>
        </li>
        <li class="sch_introduce"><p>{{sch_home_inf.sch_introduce}}</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'homehead',
   data(){
    return{
      
    }
  },
  methods:{
    getvedio(){
      return this.sch_home_inf.sch_vedio
    }
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
.schhome_home_container{
  display: flex;
  width: 100%;
  margin: 10px auto;
}
.home_head_left{
  margin: 40px 10px;
}
.home_head_right{
  margin-top: 40px;
}
.home_head_right progress{
  display:block;
  margin: 5px 0;
}
.home_head_right span{
  display: inline-block;
  color: blueviolet;
}
.home_head_right span:first-of-type{
  margin-right: 135px;
}
.sch_introduce p{
  text-indent: 25px;
}
</style>