<template>
  <div >
    <sch-condition/>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import SchCondition from '../../components/content/schcondition/SchCondition'
import TabBar from '../../components/common/tabbar/TabBar'
export default {
  name:'schoolquery',
  components:{
    SchCondition,
    TabBar
  }
}
</script>

<style>

</style>