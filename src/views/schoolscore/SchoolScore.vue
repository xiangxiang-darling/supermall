<template>
<div>
  <h1>学校推荐</h1>
  <button @click="getschid()">安徽建筑大学</button>
  <button @click="getschid1()">计算机科学与技术</button>
</div>
  
</template>

<script>
import {request} from '../../network/axios'
export default {
  name:'schoolscore',
  methods:{
    getschid(){
      this.$router.push({path: '/sch',query:{ id:'1'}});
    },
    getschid1(){
      this.$router.push({path: '/pro',query:{ id:'1'}});
    },
  }
}
</script>

<style>

</style>