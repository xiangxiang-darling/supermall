<template>
  <div class="schedule_temp_container">
    <div v-for="(items,index) in schedule">
      <p>▶{{items.schedule_class_name}}</p>
      <ul>
        <li v-for="(items,index1) in schedule[index].schedule_name"><a href="javascript:;">{{items}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'scheduletemp',
  data(){
    return{
      
    }
  },
  props:{
    schedule:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  methods:{
    
  },

}
</script>

<style>
.schedule_temp_container{
  border-top:1px solid ;
}
.schedule_temp_container li{
  display: inline-block;
  width: 30%;
  margin: 5px 0;
}
.schedule_temp_container ul{
  border-top:1px solid;
}
.schedule_temp_container p{
  height: 30px;
  line-height: 30px;
  color: rgb(6, 88, 61);
  font-weight: 600;
}
.schedule_temp_container a{
  color: rgb(92, 68, 3);
}
.schedule_temp_container a:hover{
  color: rgb(121, 7, 7);
  font-weight: 550;
}

</style>