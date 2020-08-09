<template>
  <div>
    <schedule-query-search/>
    <tab-bar/>
  </div>
</template>

<script>
import ScheduleQuerySearch from '../../components/content/schedulequerysearch/ScheduleQuerySearch'
import TabBar from '../../components/common/tabbar/TabBar'
export default {
  name:'professionalquery',
  components:{
    ScheduleQuerySearch,
    TabBar
  }
}
</script>

<style>

</style>