<template>
  <div class="sch_tips_container">
    <p>☛{{sch_tips.title}}</p>
    <div>
      <p v-for="items in sch_tips.content ">{{items}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'schtips',
  props:{
    sch_tips:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  computed:{

  }
}
</script>

<style>
.sch_tips_container{
  margin-top: 50px;
}
.sch_tips_container>p{
  font-size: 20px;
  color: rgb(184, 111, 3);
  font-weight: 600;
}
.sch_tips_container>div{
  margin: 25px;
  width: 400px;
}
.sch_tips_container>div>p{
  text-indent: 25px;
  font-size: 17px;
  margin: 4px;
}
</style>