function chart(data){
  //面向对象的的编程思想
  let lineChart = function(data){
    //获取绘图工具
    this.ctx=document.getElementById('ca1').getContext('2d')
    
    //获取画布宽度
    this.h=this.ctx.canvas.height
    this.w=this.ctx.canvas.width
    //网格大小
    this.grid=10
    // 坐标间距两个网格
    this.space=20
    //坐标原点
    this.x0=0
    this.y0=0

    //定义原型方法data传递要打的点(数组的形式)构造函数
    lineChart.prototype.init = function(data) {
      //画网格
      this.drawGrid()
      // 画坐标系
      this.drawCoordinate()
      //基本文字
      this.chartData()
      //画柱状图
      this.drawColumer(data)
    }

    //画网格
    lineChart.prototype.drawGrid = function() {
      //开启一个新的轨迹
      this.ctx.beginPath();
      this.ctx.strokeStyle = '#eee';
      //x方向上的网格总数
      let totalGrid_x=this.w / this.grid
      for(let i=0; i< totalGrid_x; i++) {
        this.ctx.moveTo(this.grid*i+0.5,this.y0)
        this.ctx.lineTo(this.grid*i+0.5,this.h)
        this.ctx.stroke()    
      }
      //y方向的网格总数
      let totalGrid_y=this.h / this.grid
      for(let i=0; i< totalGrid_y; i++) {
        this.ctx.moveTo(this.x0,this.grid*i+0.5)
        this.ctx.lineTo(this.w,this.grid*i+0.5)
        this.ctx.stroke()    
      }
    }
    lineChart.prototype.drawCoordinate = function() {
      //画x
      this.ctx.beginPath();
      this.ctx.strokeStyle = 'black';
      //x轴
      this.ctx.moveTo(this.grid*6,this.h-this.grid*6)
      this.ctx.lineTo(this.w-this.grid,this.h-this.grid*6)
      this.ctx.moveTo(this.w,this.h-this.grid*6)
      this.ctx.lineTo(this.w-this.grid,this.h-this.grid*7)
      this.ctx.lineTo(this.w-this.grid,this.h-this.grid*5)
      this.ctx.fill()
      this.ctx.stroke()
      //坐标箭头

      //y轴
      this.ctx.moveTo(this.grid*6,this.h-this.grid*6)
      this.ctx.lineTo(this.grid*6,this.grid*6)
      this.ctx.moveTo(this.grid*6,this.grid*5)
      this.ctx.lineTo(this.grid*7,this.grid*6)
      this.ctx.lineTo(this.grid*5,this.grid*6)
      this.ctx.fill()
      this.ctx.stroke()
    }
    //绘制文本
    lineChart.prototype.chartData = function(data) {
    let ctx=document.getElementById('ca').getContext('2d')
    //x轴绘制文本
    this.ctx.font="30px Arial"
    this.ctx.fillStyle="red"
    this.ctx.fillText("地区",this.w-this.grid*7,this.h-this.grid)
    this.ctx.fillText("百分比(%)",20,40)
    }

    // 柱状图
    lineChart.prototype.drawColumer = function(data) {
      
      
      let colum_height=[]
      //求出每个柱形胡高度
      for(let i=0;i<data.length;i++){
        colum_height[i] = Number(data[i].stu_perc)/100*this.h
        this.ctx.beginPath()
        //第一个点
        this.ctx.moveTo(this.w*(i+1)/5,this.h-this.grid*6)
        this.ctx.lineTo(this.w*(i+1)/5,this.h-colum_height[i]-this.grid*6)
        //第二个点
        this.ctx.moveTo(this.w*(i+1)/5,this.h-colum_height[i]-this.grid*6)
        this.ctx.lineTo(this.w*(i+1)/5+15,this.h-colum_height[i]-this.grid*6)
        //第三个点
        this.ctx.moveTo(this.w*(i+1)/5+15,this.h-colum_height[i]-this.grid*6)
        this.ctx.lineTo(this.w*(i+1)/5+15,this.h-this.grid*6)
        switch(i){
          case 0:{
            this.ctx.fillStyle="darksalmon"
            break
          }
          case 1:{
            this.ctx.fillStyle="lightgreen"
            break
          }
          case 2:{
            this.ctx.fillStyle="lightgrey"
            break
          }
          case 3:{
            this.ctx.fillStyle="lightskyblue"
            break
          }
        }
        this.ctx.fillRect(this.w*(i+1)/5,this.h-colum_height[i]-this.grid*6,15,colum_height[i]);
        this.ctx.stroke()
        //城市名称和百分比
        this.ctx.font="30px Arial"
        this.ctx.fillStyle="rgb(19, 121, 180)"
        this.ctx.fillText(data[i].city_name,this.w*(i+1)/5-60,this.h-this.grid*2) 
        //y轴
        this.ctx.fillText(data[i].stu_perc+'%',this.w*(i+1)/5-30,this.h-colum_height[i]-this.grid*7)
      }
      
      
    }
  }
  let linechart = new lineChart(data)
  linechart.init(data)
}
export  {chart}