import Vue from 'vue'
import VueRouter from 'vue-router'
//懒加载
const Home= () =>import('../views/home/Home.vue')
const ProfessionalQuery= () =>import('../views/professionalquery/ProfessionalQuery')
const SchoolQuery= () =>import('../views/schoolquery/SchoolQuery')
const Profile= () =>import('../views/profile/Profile')
const SchoolScore= () =>import('../views/schoolscore/SchoolScore')

const ZheXue= () =>import('../components/content/scheduleitems/ZheXue')
const JinJi= () =>import('../components/content/scheduleitems/JinJi')
const FaXue= () =>import('../components/content/scheduleitems/FaXue')
const JiaoYu= () =>import('../components/content/scheduleitems/JiaoYu')
const WenXue= () =>import('../components/content/scheduleitems/WenXue')
const LiShi= () =>import('../components/content/scheduleitems/LiShi')
const GongXue= () =>import('../components/content/scheduleitems/GongXue')
const NongXue= () =>import('../components/content/scheduleitems/NongXue')
const YiXue= () =>import('../components/content/scheduleitems/YiXue')
const GuanLi= () =>import('../components/content/scheduleitems/GuanLi')
const YiShu= () =>import('../components/content/scheduleitems/YiShu')
const LiXue= () =>import('../components/content/scheduleitems/LiXue')
//学校路由段
const SchoolQueryItem= () =>import('../components/content/schoolpage/schqueryitem/SchQueryItem')
const SchHome= () =>import('../components/content/schoolpage/schoolinf/schhome/SchHome')
const SchProfession= () =>import('../components/content/schoolpage/schoolinf/schprofession/SchProfession')
const SchNews= () =>import('../components/content/schoolpage/schoolinf/schnews/SchNews')
const SchScore= () =>import('../components/content/schoolpage/schoolinf/schscore/SchScore')
const SchWorking= () =>import('../components/content/schoolpage/schoolinf/schwork/SchWorking')
const SchRecommond= () =>import('../components/content/schoolpage/schoolinf/SchRecommond')
//专业路由段
const ProQueryitem =()=> import('../components/content/propage/ProQueryitem')





Vue.use(VueRouter)

  const routes = [
  {
    path:'',
    redirect:'/home'
  },
 {
   path:'/home',
   component:Home,
   meta:{
    tx:1
   }
 },
 {
   path:'/professionalquery',
   component:ProfessionalQuery,
   children:[
     {
      path:'',
      redirect:'zhexue'
     },
     {
       path:'zhexue',
       component:ZheXue
     },
     {
       path:'jinji',
       component:JinJi
     },
     {
       path:'faxue',
       component:FaXue
     },
     {
       path:'jiaoyu',
       component:JiaoYu
     },
     {
       path:'wenxue',
       component:WenXue
     },
     {
       path:'lishi',
       component:LiShi
     },
     {
       path:'lixue',
       component:LiXue
     },
     {
       path:'gongxue',
       component:GongXue
     },
     {
       path:'nongxue',
       component:NongXue
     },
     {
       path:'yixue',
       component:YiXue
     },
     {
       path:'guanli',
       component:GuanLi
     },
     {
       path:'yishu',
       component:YiShu
     },
    ],
    meta:{
      tx:2
     }
 },
 {
   path:'/schoolquery',
   component:SchoolQuery,
   meta:{
    tx:3
   }  
 },
 {
   path:'/schoolscore',
   component:SchoolScore,
   meta:{
    tx:4
   }
 },
 {
   path:'/profile',
   component:Profile,
   meta:{
    tx:5
   }
 },

//  学校路由段
 {
  path:'/sch',
  component:SchoolQueryItem,
  children:[
    {
      path:'',
      redirect:'home'
    },
    {
      path:'home',
      component:SchHome
    },
    {
      path:'profession',
      component:SchProfession  
    },
    {
      path:'score',
      component:SchScore
    },
    {
      path:'news',
      component:SchNews
    },
    {
      path:'working',
      component:SchWorking
    },
    {
      path:'recommond',
      component:SchRecommond
    }
  ]
 },
 //专业路由段
 {
  path:'/pro',
  component:ProQueryitem
 }
]
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  routes,
  base: process.env.BASE_URL,
  mode:'history'
})

export default router
