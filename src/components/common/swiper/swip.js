window.onload=function(){
  let ul = document.getElementById('swiper')
  let btnleft=document.getElementById('left')
  let btnright=document.getElementById('right')
  let index=0
  btnleft.onclick=function(){
    clearInterval(timer)
    if(index>ul.children.length-2){
      index=ul.children.length-5
    }
    index++
    ul.style.top=-405*index +'px'
   
  }
  btnright.onclick=function(){
    clearInterval(timer)
    if(index<ul.children.length-3){
      index=ul.children.length
    }
    index--
    ul.style.top=-405*index +'px'
    console.log();
  }
  let timer= setInterval(function(){
    if(index>ul.children.length-2){
      index=ul.children.length-5
    }
    index++
    ul.style.top=-405*index +'px'
  },5000)
}