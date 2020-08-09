 function tablepages(dataNum) {
        let table = document.querySelector('.tabletext1')
        let pagefather = document.querySelector('.page1')
        let pageNum
        let tr=dataNum
        tr%7==0? pageNum=tr/7:pageNum=parseInt(tr/7)+1
        //动态获取按钮个数    
        for(let i=0;i<pageNum;i++) {
            let num=i+1
            let newbtn=document.createElement('span')
                newbtn.innerHTML = " <a href='javascript:;' class='btnn1"+num+"'>"+num+"</a>"
                    pagefather.appendChild(newbtn)    
            }
        //页面跳转(上一页)
        let index=0
        let nextpage = document.querySelector('.btnnext1')
        nextpage.onclick = function() {
            index<=pageNum-2? index++:index
            let Y=index*-360
            table.style.transform="translate(0px,"+Y+"px)"
        }
        //页面跳转(下一页)
        let beforpage = document.querySelector('.btnbefor1')
        beforpage.onclick = function() {
            index==0? index:index--
            let Y=index*-360
            table.style.transform="translate(0px,"+Y+"px)"
        }
        //页码按钮点击跳转
        for(let i=0;i<pageNum;i++) {
            let num=i+1
            let btn = ".btnn1"+num
            btn = document.querySelector(btn)
            btn.onclick = function() {
                index=i
                table.style.transform="translate(0px,"+i*-360+"px)"
        }
        }
        //首页
        let firstpage = document.querySelector('.btnfirst1')
        firstpage.onclick = function() {
            index=0
            table.style.transform="translate(0px,"+index+"px)"
        }
        //末页
        let lastpage = document.querySelector('.btnlast1')
        lastpage.onclick = function() {
            index=pageNum-1
            table.style.transform="translate(0px,"+index*-360+"px)" 
        }
     
   
 }
 export {tablepages}