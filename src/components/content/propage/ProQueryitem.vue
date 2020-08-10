<template>
  <div>
    <div class="pro_container">
      <page-top :pro_inf="pro_inf_top"></page-top>
      <page-center :pro_inf="pro_inf_center"></page-center>
    </div>
    <tab-bar></tab-bar>
  </div>  
  
</template>

<script>
import {request} from '../../../network/axios'
import PageTop from './proitempage/PageTop.vue'
import PageCenter from './proitempage/pagecenter/PageCenter.vue'
import TabBar from '../../common/tabbar/TabBar.vue'
export default {
  name:'proqueryitem',
    data(){
    return{
      pro_id:'',
      pro_inf_top:{},
      pro_inf_center:{}
    }
  },
  created(){
    this.pro_id=this.$route.query.id
    request({
      url:'/pro/'+this.pro_id
    }).then(res=>{
      this.pro_inf_top=res.data.pro_inf.base_inf
      this.pro_inf_center=res.data.pro_inf.pro_detail
    }).catch(err=>{
      console.log(err);
    })
  },
  components:{
    PageTop,
    PageCenter,
    TabBar
  }
}
</script>

<style>
.pro_container{
  width: 1200px;
  margin: 10px auto;
  border: 1px solid rgba(137, 43, 226, 0.171);
}
</style>