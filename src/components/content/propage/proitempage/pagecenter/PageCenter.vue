<template>
  <div>
    <div class="pro_center_detail" v-if="pro_inf.title">
      <p>▶{{pro_inf.title}}</p>
      <div v-for="m in pro_inf.content" :key="m.content">
        <p>{{m.title}}</p>
        <p>{{m.content}}</p>
      </div>
    </div>
    <div class="pro_chart_container">
      <p>◪就业行业分布</p>
      <div id="chart"></div>
    </div>
    <div class="pro_chart_container">
      <p>◪就业岗位分布</p>
      <div id="chart1"></div>
    </div>
    <div class="pro_chart_container">
      <p>◪就业城市分布</p>
      <div id="chart2"></div>
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
    //就业行业
    drawChart(data) {
      let data1=data.work_hangye
      let mychart = document.getElementById('chart')
      let myecharts = this.$echarts.init(mychart)
      let option = {
        tooltip: {
          trigger: 'axis'
        },
        dataset: {
            source: [
                ['sort', 'amount', 'class'],
                ['15',data1[0].per,data1[0].name],
                ['20',data1[1].per,data1[1].name],
                ['25',data1[2].per,data1[2].name],
                ['30',data1[2].per,data1[3].name],
                ['35',data1[4].per,data1[4].name],
                ['40',data1[5].per,data1[5].name],
                ['45',data1[6].per,data1[6].name],
                ['50',data1[7].per,data1[7].name],
                ['55',data1[8].per,data1[8].name],
                ['65',data1[9].per,data1[9].name],
                ['85',data1[10].per,data1[10].name],
            ]
        },
        grid: {
          left: '3%',
          right: '7%',
          bottom: '7%',
          containLabel: true
        },
        xAxis: {name: '百分比%'},
        yAxis: {type: 'category'},
        visualMap: {
          orient: 'horizontal',
          left: 'center',
          min: 10,
          max: 100,
          text: ['IT硬件', '软件行业'],
          // Map the score column to color
          dimension: 0,
          inRange: {
              color: ['#D7DA8B', '#E15457']
          }
        },
        series: [
            {
                type: 'bar',
                encode: {
                    // Map the "amount" column to X axis.
                    x:'amount',
                    // Map the "product" column to Y axis
                    y: 'class'
                }
            }
        ]
      };
      myecharts.setOption(option)
    },
    //就业技术分类
    drawChart1(data) {
      let data1 = data.work_position
      let myecharts = this.$echarts.init(document.getElementById('chart1'))
      let option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 50,
            top:50,
            itemHeight:30,
            itemWidth:80,
            textStyle:{
              fontSize:17
            },
            data: [data1[0].name, data1[1].name, data1[2].name, data1[3].name, data1[4].name,data1[5].name]
        },
        series: [
          {
            name: '职位详情',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
                show: false
            },
            data: [
              {value: data1[0].per, name: data1[0].name},
              {value: data1[1].per, name: data1[1].name},
              {value: data1[2].per, name: data1[2].name},
              {value: data1[3].per, name: data1[3].name},
              {value: data1[4].per, name: data1[4].name},
              {value: data1[5].per, name: data1[5].name},
            ]
          }
        ]
      };
      myecharts.setOption(option)
    },
    drawChart2(data) {
      let data1 = data.work_city
      let myecharts = this.$echarts.init(document.getElementById('chart2'))
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '7%',
          right: '10%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            name:'地区分布',
            nameTextStyle:{
              fontSize:17,
              color:'blue'
            },
            type: 'category',
            data: [data1[0].name, data1[1].name, data1[2].name,data1[3].name, data1[4].name, data1[5].name, data1[6].name,data1[7].name,data1[8].name],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            name:'百分比%',
            nameTextStyle:{
              fontSize:17,
              color:'blue'
            },
            type: 'value'
          }
        ],
        series: [
          {
            name: '地区占比(%)',
            type: 'bar',
            barWidth: '60%',
            data: [data1[0].per,data1[1].per, data1[2].per,data1[3].per,data1[4].per, data1[5].per, data1[6].per,data1[7].per,data1[8].per]
          }
        ]
      };
      myecharts.setOption(option)
    }
    
  },
  watch:{
    pro_inf:function () {
      this.drawChart(this.pro_inf)
      this.drawChart1(this.pro_inf)
      this.drawChart2(this.pro_inf)
    }
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
#chart,#chart1,#chart2{
  height: 400px;
  width: 1040px;
  border: 1px solid;
  margin-left: 50px;
}
.pro_chart_container{
  width: 100%;
}
.pro_chart_container>p{
  font-size: 20px;
  font-weight: 600;
  color: cadetblue;
  margin-top: 20px;
  margin-left: 50px;
  margin-bottom: 20px;
}

</style>