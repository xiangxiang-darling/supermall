<template>
  <div class="home">
    <Swiper/>
    <Recommond/>
    <schedule-interpretation/>
    <News/>
    <tab-bar/>
  </div>
</template>

<script>
import Swiper from '../../components/common/swiper/Swiper'
import Recommond from '../../components/content/recommond/Recommond'
import ScheduleInterpretation from '../../components/content/scheduleinterptetation/ScheduleInterpretation'
import News from '../../components/content/news/News'
import TabBar from '../../components/common/tabbar/TabBar'
export default {
  name:'home',
  components:{
    Swiper,
    Recommond,
    ScheduleInterpretation,
    News,
    TabBar
  }
}
</script>

<style>

</style>