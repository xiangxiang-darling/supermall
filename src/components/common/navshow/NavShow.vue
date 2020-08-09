<template>
  <div class="navshow">
    <div >
      <div class="yanyu1">
      <p >择校宝</p>
      </div>
      <div class="yanyu3">
        <p>您的专属择校管家</p>
      </div>
      <div class="yanyu2">
        <p>因为梦想，所以奋斗</p>
        <p>因为热爱，所以坚持</p>
      </div>
    </div>
    <div class="main_search">
      <input type="text" name="" id="" placeholder="请输入你想要查找的专业以及学校信息">
      <button id=""><i class="fa fa-search fa-2x"></i></button>
    </div>
    <div>

    </div>
      
  </div>
</template>

<script>
export default {
  name:'navshow'
}
</script>

<style>
.navshow{
  height: 500px;
  /* background-color: rgba(241, 228, 202, 0.76); */
  background-image: url(../../../assets/img/temfile/web9.jpg);
  overflow: hidden;
}
.navshow p{
  font-size: 35px;
  font-family: 'xin';
  color: rgb(5, 38, 117);text-align: center;
}
.main_search input{
  height: 50px;
  width: 800px;
  min-width: 400px;
  width: 40%;
  border:unset;
  border-radius:15px;
  background-color: rgba(246, 246, 246, 0.438);
  border-top-right-radius: unset;
  border-bottom-right-radius: unset;
  font-size: 20px;
  font-weight:500;
  font-family: 'xin';
  color: sienna;
}
.main_search button{
  height: 52px;
  width: 50px;
  border: unset;
  outline: none;
  position: absolute;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: rgba(246, 246, 246, 0.438);
}
.main_search button:hover i{
  color: rgba(14, 126, 126, 0.527);
}
.main_search {
  text-align: center;
  position: relative;
  margin-top: 160px;
}
.yanyu2{
  margin-top: 20px;
}
.yanyu2 p:nth-of-type(2){
  margin: 10px;
  margin-left: 100px;
}
.yanyu1{
  position: absolute;
  top: 20px;
  left: 120px;
  width: 20px;
}
.yanyu3{
  position: absolute;
  top: 60px;
  left: 190px;
  width: 20px;
}
</style>