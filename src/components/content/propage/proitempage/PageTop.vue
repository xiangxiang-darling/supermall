<template>
  <div> 
    <div class="pro_top_container" v-if="pro_inf.pro_name">
       <p><i class="fa fa-laptop"></i>{{pro_inf.pro_name[0]}}</p>
        <div >
         <p>◍{{pro_inf.pro_name[1]}}</p>
        <div class="pro_base_inf">
          <div class="pro_video">
            <video  poster="../../../../assets/img/temfile/pro1.png" src="" controls="controls"></video>
          </div>
          <div >
            <p>{{pro_inf.pro_code[0]}}:{{pro_inf.pro_code[1]}}</p>
            <p>{{pro_inf.pro_hot[0]}}:{{pro_inf.pro_hot[1]}}</p>
            <p>{{pro_inf.xuewei[0]}}:{{pro_inf.xuewei[1]}}</p>
          </div>
          <div  >
            <p>{{pro_inf.date[0]}}:{{pro_inf.date[1]}}</p>
            <p>{{pro_inf.pro_class[0]}}:{{pro_inf.pro_class[1]}}</p>
            <p>{{pro_inf.pro_type[0]}}:{{pro_inf.pro_type[1]}}</p>
          </div>
        </div>
      </div>
      <div class="pro_page_top_center">
        <p>▤专业男女比例</p>
        <div class="sex_per" >
          <div :style="getsexper1()"><p>男{{pro_inf.sex_man}}%</p></div>
          <div :style="getsexper2()"><p>女{{pro_inf.sex_woman}}%</p></div>
        </div>
        <p>◘近三年就业率</p>
        <div class="pro_work_per">
          <div v-for="items in pro_inf.work">
            <div>{{items. wor_per}}</div>
            <p>{{items.date}}</p>
          </div>
        </div>
        <div class="pro_type_image"> 
          <p>◉First Image:</p>
          <div>
            <img src="https://static-data.eol.cn/upload/special_images/1552708157_5804_thumb.jpg" alt="">
            <p>computer</p>
          </div>
          <div>
            <img src="https://static-data.eol.cn/upload/special_images/1552708157_1369_thumb.jpg" alt="">
            <p>Windows</p>
          </div>
          <div>
            <img src="https://static-data.eol.cn/upload/special_images/1552708157_5939_thumb.jpg" alt="">
            <p>software</p>
          </div>
          <div>
            <img src="https://static-data.eol.cn/upload/special_images/1552708157_1371_thumb.jpg" alt="">
            <p>host</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'pagetop',
  data(){
    return{}
  },
  methods:{
    getprosrc(){
      return this.pro_inf.back_img
    },
    getsexper1(){
      let wit=(this.pro_inf.sex_man-0)*4
      return{width:wit+'px'}
    },
    getsexper2(){
      let wit=(this.pro_inf.sex_woman-0)*4
      return{width:wit+'px'}
    },
    getvideoimg(){
      return this.pro_inf.pro_video.img
    }
  },
  props:{
    pro_inf:{
      type:Object,
      default(){
        return{}
      }
    }
  },

}
</script>

<style scoped>
  .pro_top_container{
    width: 1200px;
    position: relative;
   
  }
  .pro_video{
    flex: 1;
    margin: 20px;
    margin-top: 30px;
  }
  .pro_video>video{
    height: 270px;
    width: 450px;
  }
  .pro_top_container>p,.pro_top_container >div>p{
    font-size: 20px;
    color: brown;
    margin: 10px;
    font-weight: 600;
  }
  .pro_base_inf{
    margin: 0 auto;
    width: 80%;
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.109);
    height: 350px;
    background-color: rgba(255, 235, 205, 0.363);
  }
  .pro_top_container >div>p{
    color: darkcyan;
    margin-left: 50px;
  }
  .pro_base_inf>div:nth-of-type(2){
    flex: 1;
   margin-left: 25px;
   margin-top: 30px;
   
  }
  .pro_base_inf>div:nth-of-type(3){
      flex:1;
      margin-top: 30px;
  }
  .pro_base_inf p{
    font-size: 17px;
    font-weight: 500;
    color: rgb(0, 1, 15);
    margin-top: 50px;
    color: rgb(156, 15, 15);
  }
  .sex_per{
    display: flex;
    margin-left: 40px;
    margin-bottom: 30px;
  }
  .sex_per>div{
    margin-top: 20px;
    height: 50px;
    width: 200px;
    border-radius: 15px;
    text-align: center;
    line-height: 50px;
    
  }
  .sex_per>div>p{
    color: rgba(133, 4, 133, 0.575);
    font-size: 20px;
    font-weight: 600;
  }
  .sex_per>div:nth-of-type(1){
    border-top-right-radius:unset ;
    border-bottom-right-radius:unset ;
    background-color: rgba(3, 128, 3, 0.603);
  }
  .sex_per>div:nth-of-type(2){
    border-top-left-radius:unset ;
    border-bottom-left-radius:unset ;
    background-color: pink;
  }
  .pro_work_per{
    display: flex;
    margin-top: 20px;
  }
  .pro_work_per>div{
    text-align: center;
    line-height: 100px;
    width: 100px;
    margin-left: 70px;
  }
  .pro_work_per p{
    line-height: 25px;
    color: brown;
  }
  .pro_work_per>div>div {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 1px solid coral;
  }
  .pro_page_top_center{
    cursor: pointer;
    position: relative;
  }
  .pro_type_image{
    position: absolute;
    display: flex;
     top: 50px;
    right: 120px;
    width: 500px;
    border: 1px solid rgba(188, 143, 143, 0.212);
    height: 250px;
    background-color: rgba(216, 191, 216, 0.52);
  }
  .pro_type_image>p{
    margin: 20px;
    font-size: 35px;
    color: rgb(95, 6, 95);
    position: absolute;
    font-family: 'xin';
  }
  .pro_type_image div{
    text-align: center;
    flex: 1;
  }
  .pro_type_image img{
    height: 50px;
    width: 50px;
    margin-top: 100px;
  }
</style>