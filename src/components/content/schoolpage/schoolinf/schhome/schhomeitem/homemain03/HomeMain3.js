function swiperr(){
      let div=document.getElementById('main3_1')
      let top=document.getElementById('main3top')
      let bottom=document.getElementById('main3bottom')
      let index=0
    
      let div1=document.getElementById('main3_2')
      let top1=document.getElementById('main3top1')
      let bottom1=document.getElementById('main3bottom1')
      let index1=0
      let index2=0
      let timer
      let timer1
      top.onclick=function(){
        clearInterval(timer)
        clearTimeout(timer1)
        timer1=window.setTimeout(function(){
          timer=window.setInterval(function(){
            if(index>=div.childNodes.length-1){
              index=-1
            }
            index++
            div.style.top=-430*index+'px'
      
            if(index1>=div1.childNodes.length-1){
              index1=-1
            }
            index1++
            div1.style.top=-430*index1+'px'
      
          },3000)
        },2000)
        if(index>=div.childNodes.length-1){
          index=-1
        }
        index++
        div.style.top=-430*index+'px'
      }
      bottom.onclick=function(){
        clearInterval(timer)
        clearTimeout(timer1)
        // 点击后五秒后又开始自动轮播
        timer1=window.setTimeout(function(){
          timer=window.setInterval(function(){
            if(index>=div.childNodes.length-1){
              index=-1
            }
            index++
            div.style.top=-430*index+'px'
      
            if(index1>=div1.childNodes.length-1){
              index1=-1
            }
            index1++
            div1.style.top=-430*index1+'px'
      
          },3000)
        },2000)
        if(index<=0){
          index=div.childNodes.length
        }
        index--
        div.style.top=-430*index+'px'
        
      }
    
      top1.onclick=function(){
        clearInterval(timer)
        clearTimeout(timer1)
        timer1=window.setTimeout(function(){
          timer=window.setInterval(function(){
            if(index>=div.childNodes.length-1){
              index=-1
            }
            index++
            div.style.top=-430*index+'px'
      
            if(index1>=div1.childNodes.length-1){
              index1=-1
            }
            index1++
            div1.style.top=-430*index1+'px'
      
          },3000)
        },2000)
        if(index1>=div1.childNodes.length-1){
          index1=-1
        }
        index1++
        div1.style.top=-430*index1+'px'
        
      }
      bottom1.onclick=function(){
        clearInterval(timer)
        clearTimeout(timer1)
        timer1=window.setTimeout(function(){
          timer=window.setInterval(function(){
            if(index>=div.childNodes.length-1){
              index=-1
            }
            index++
            div.style.top=-430*index+'px'
      
            if(index1>=div1.childNodes.length-1){
              index1=-1
            }
            index1++
            div1.style.top=-430*index1+'px'
      
          },3000)
        },2000)
        if(index1<=0){
          index1=div1.childNodes.length
        }
        index1--
        div1.style.top=-430*index1+'px'
       
      }
      timer=window.setInterval(function(){
        if(index>=div.childNodes.length-1){
          index=-1
        }
        index++
        div.style.top=-430*index+'px'
  
        if(index1>=div1.childNodes.length-1){
          index1=-1
        }
        index1++
        div1.style.top=-430*index1+'px'
  
      },3000)
  
}
export {swiperr}