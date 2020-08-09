<template>
  <div>
    <div class="pro_center_detail" v-if="pro_inf.title">
      <p>▶{{pro_inf.title}}</p>
      <div v-for="m in pro_inf.content">
        <p>{{m.title}}</p>
        <p>{{m.content}}</p>
      </div>
      <div class="work_type">
        <div class="work_class">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'pagecenter',
  props:{
    pro_inf:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{ 
  },
  mounted() {
  }

}
</script>

<style>
.pro_center_detail{
  width: 1100px;
  margin: 10px auto;
}
.pro_center_detail>p{
  font-size: 20px;
  font-weight: 600;
  color: darkcyan;
}
.pro_center_detail>div{
  width: 95%;
  border: 1px solid rgba(255, 0, 0, 0.274);
  box-sizing: border-box;
  margin-top: 20px;
}
.pro_center_detail>div>p:nth-of-type(1){
  margin: 10px;
  font-size: 18px;
  color: brown;
}
.pro_center_detail>div>p:nth-of-type(2){
  text-indent: 20px;
}
</style>