//引入mock
import Mock, { Random, mock } from 'mockjs'
//轮播图数据
Mock.mock('/home/swiper_img','get',{
  status:0,
  messege:'',
  'data|4':[
    {
      id:'@increment(1)',
      // Random.image( size(大小）, background（背景颜色）, foreground（指示图片的前景色）
      //, format（图片格式）, text(图片上的文字) )
      img:'@dataImage(800x400)'   
    }
  ]
})
//推荐学校的数据
Mock.mock('/home/school_recommond_img','get',{
  status:0,
  messege:'',
  'data|8':[
    {
      id:'@increment(1)',
      img:'@dataImage(285x179)',
      name:'@cword(4,8)'   
    }
  ]
})
//专业解读数据
Mock.mock('/home/schedule_img','get',{
  status:0,
  messege:'',
  'data|6':[
    {
      id:'@increment(1)',
      img:'@dataImage(300x220)',
      article:'@cparagraph(6)' ,
      title:  '@cword(4,8)'
    }
  ]
})
//news数据(新闻资讯)
Mock.mock('/home/news','get',{
  status:0,
  messege:'',
  data:{
    'data_exam|6':[
      {
        id:'@increment(1)',
        article:'@cparagraph(5)' ,
        title:  '@cword(4,8)',
        province:'@cword(2)'+'省',
        date:'@datetime(yyyy年MM月dd日 HH时)'
      }
    ],
    'data_school|6':[
      {
        id:'@increment(1)',
        school_name:'@cword(4,8)',
        article:'@cparagraph(4)' ,
        title:  '@cword(4,8)' ,
        date:'@datetime(yyyy年MM月dd日 HH时)',
        date_y:'@datetime(yyyy年)'
      }
    ]
  }
})
Mock.mock('/home/tabbar/weixin','get',{
  status:0,
  messege:'',
  data:[
    {
      id:'@increment(1)',
      img:'@dataImage(150x150)'   
    }
  ]
})
Mock.mock('/schoolquery/schcondition','get',{
  status:0,
  messege:'',
  'schprovince|23':[
    {
      id:'@increment(1)',
      province:'@province()'  
    }
  ],
  'schstate|10':[
    {
      id:'@increment(1)',
      schstate:'@cword(3)' 
    }
  ],
  'schstyle|10':[
    {
      id:'@increment(1)',
      schstyle:'@cword(2)' 
    }
  ],
  'schattr|4':[
    {
      id:'@increment(1)',
      schattr:'@cword(2,4)' 
    }
  ]
})
Mock.mock('/professionalquery/search','get',{
  status:0,
  messege:'',
  data_ben:[
    {
      schedule_class:'哲学',
      router:'zhexue',
    },
    {
      schedule_class:'经济学',
      router:'jinji',
    },
    {
      schedule_class:'法学',
      router:'faxue',
    },
    {
      schedule_class:'教育学',
      router:'jiaoyu',
    },
    {
      schedule_class:'文学',
      router:'wenxue',
    },
    {
      schedule_class:'历史学',
      router:'lishi',
    },
    {
      schedule_class:'理学',
      router:'lixue',
    },
    {
      schedule_class:'工学',
      router:'gongxue',
    },
    {
      schedule_class:'农学',
      router:'nongxue',
    },
    {
      schedule_class:'医学',
      router:'yixue',
    },
    {
      schedule_class:'管理学',
      router:'guanli',
    },
    {
      schedule_class:'艺术学',
      router:'yishu',
    },
  ],
  data_zhuan:[
    {
      schedule_class:'农林牧渔大类',
      router:'nonglin'
    },
    {
      schedule_class:'资源环境与安全大类',
      router:'ziyuananquan'
    },
    {
      schedule_class:'能源动力与材料大类',
      router:'nengyuancailiao'
    },
    {
      schedule_class:'水利大类',
      router:'shuili'
    },
    {
      schedule_class:'生物与化工大类',
      router:'shenwuhuagong'
    },
    {
      schedule_class:'轻工脂纸坊大类',
      router:'qinzhifang'
    },
    {
      schedule_class:'食品药品与粮食大类',
      router:'shipingliangshi'
    },
    {
      schedule_class:'电子信息大类',
      router:'dianzixinxi'
    },
    {
      schedule_class:'医药卫生大类',
      router:'yiyaoweisheng'
    },
    {
      schedule_class:'财经商贸大类',
      router:'caijinshangmao'
    },
    {
      schedule_class:'旅游大类',
      router:'lvyou'
    },
    {
      schedule_class:'文化艺术大类',
      router:'wehuayishu'
    },
  ]
})

//哲学
Mock.mock('/professionalquery/search/zhexue','get',{
  status:0,
  messege:'',
  data_schedule:[
    {
      schedule_class_name:'哲学类',
      schedule_name:[' 哲学','逻辑学','宗教学','伦理学 ']  
    }
  ]
})
//经济学
Mock.mock('/professionalquery/search/jinji','get',{
  status:0,
  messege:'',
  data_schedule:[
    {
      schedule_class_name:'经济与贸易类',
      schedule_name:[' 国际经济与贸易','贸易经济']  
    },
    
    {
      schedule_class_name:'金融学类',
      schedule_name:['金融学类','金融学','金融工程','保险学投资学','金融数学','信用管理经济与金融','金融科技互联网','金融精算学' ]  
    },
    {
      schedule_class_name:'经济学类',
      schedule_name:[ '经济学','经济统计学','国民经济管理','资源与环境经济学','商务经济学','能源经济','经济工程','劳动经济学','数字经济'  ]  
    },
    {
      schedule_class_name:'财政学类',
      schedule_name:[ '财政学','税收学'  ]  
    },

  ]
})
//法学
Mock.mock('/professionalquery/search/faxue','get',{
  status:0,
  messege:'',
  data_schedule:[
    {
      schedule_class_name:'法学类',
      schedule_name:['法学','知识产权','监狱学','国际经贸规则','社区矫正','司法警察学','信用风险管理与法律防控 ']  
    },
    {
      schedule_class_name:'政治学类',
      schedule_name:[ '政治学与行政学','国际政治','外交学','国际事务与国际关系','政治学、经济学与哲学','国际组织与全球治理' ]  
    },
    {
      schedule_class_name:'社会学类',
      schedule_name:[ '社会学','社会工作','人类学','女性学','家政学','老年学' ]  
    },
    {
      schedule_class_name:'民族学类',
      schedule_name:['名族学']  
    },
    {
      schedule_class_name:'马克思主义理论类',
      schedule_name:['科学社会主义','中国共产党历史','思想政治教育','马克思主义理论' ]  
    },
    {
      schedule_class_name:'公安学类',
      schedule_name:[ '治安学','侦查学','边防管理禁毒学','警犬技术',
      '经济犯罪侦查','边防指挥','消防指挥','警卫学',
      '公安情报学','犯罪学','公安管理学','涉外警务',
      '国内安全保卫','警务指挥与战术','移民管理',
      '公安政治工作','海警执法','技术侦查学','出入境管理' ]  
    }
  ]
})

//教育
Mock.mock('/professionalquery/search/jiaoyu','get',{
  status:0,
  messege:'',
  data_schedule:[
    {
      schedule_class_name:'教育学类',
      schedule_name:[ '教育学','科学教育','人文教育','教育技术学',
      '艺术教育','学前教育','小学教育','特殊教育',
      '华文教育','教育康复学','认知科学与技术','卫生教育' ]  
    },
    {
      schedule_class_name:'体育学类',
      schedule_name:[ '体育教育','运动训练','社会体育指导与管理','武术与民族传统体育',
      '运动人体科学','运动康复','休闲体育',
      '体能训练','体育旅游','智能体育工程',
      '电子竞技运动与管理','冰雪运动']  
    },
  ]
})
//文学
Mock.mock('/professionalquery/search/wenxue','get',{
  status:0,
  messege:'',
  data_schedule:[
    {
      schedule_class_name:'中国语言文学类',
      schedule_name:[  '汉语言文学','汉语言','汉语国际教育','中国少数民族语言文学','古典文献学','应用语言学','秘书学','手语翻译','中国语言与文化 ' ]  
    },
    {
      schedule_class_name:'外国语言文学类',
      schedule_name:[  '英语','俄语','德语','法语','西班牙语','阿拉伯语','日语','波斯语','朝鲜语','菲律宾语','梵语巴利语','印度尼西亚语','印地语','柬埔寨语',
      '老挝语','缅甸语','马来语蒙古语','僧加罗语','泰语','乌尔都语','希伯莱语','越南语','豪萨语','斯瓦希里语',
      '阿尔巴尼亚语','保加利亚语','波兰语','捷克语','斯洛伐克语','罗马尼亚语','葡萄牙语','瑞典语','塞尔维亚语',
      '土耳其语','希腊语','匈牙利语','意大利语','泰米尔语','普什图语','世界语','孟加拉语','尼泊尔语','克罗地亚语',
      '荷兰语','芬兰语','乌克兰语','挪威语','丹麦语','冰岛语','爱尔兰语','拉脱维亚语','立陶宛语','斯洛文尼亚语',
      '爱沙尼亚语','马耳他语','哈萨克语','乌兹别克语','祖鲁语','拉丁语','翻译商务英语','索马里语','塔吉克语',
      '塔玛齐格特语','汤加语旁遮普语','皮金语切瓦语萨摩亚语','塞苏陀语桑戈语','僧伽罗语','绍纳语','科摩罗语',
      '克里奥尔语','库尔德语','库克群岛毛利语','马其顿语','纽埃语毛利语','马达加斯加语','隆迪语','卢森堡语',
      '卢旺达语','吉尔吉斯语','加泰罗尼亚语','茨瓦纳语','达里语比斯拉马语','阿非利卡语','阿姆哈拉语','阿塞拜疆语',
      '白俄罗斯语','斐济语','格鲁吉亚语','恩德贝莱语','德顿语','迪维希语','提格雷尼亚语','土库曼语','希伯来语',
      '亚美尼亚语','语言学','约鲁巴语爪哇语']  
    },
    {
      schedule_class_name:'新闻传播学类',
      schedule_name:[  '新闻学','广播电视学','广告学','传播学','编辑出版学','网络与新媒体','数字出版','国际新闻与传播','时尚传播 ' ]  
    }
  ]
})

//历史学
Mock.mock('/professionalquery/search/lishi','get',{
  status:0,
  messege:'',
  data_schedule:[
    {
      schedule_class_name:'历史学类',
      schedule_name:[ '历史学','世界史','考古学','文物与博物馆学','文物保护技术','外国语言与外国历史','文化遗产 ']  
    }
  ]
})
//理学
Mock.mock('/professionalquery/search/lixue','get',{
  status:0,
  messege:'',
  data_schedule:[
    {
      schedule_class_name:'数学类',
      schedule_name:[ '数学与应用数学','信息与计算科学','数理基础科学','数据计算及应用 ']  
    },
    {
      schedule_class_name:'物理学类',
      schedule_name:[ '物理学','应用物理学','核物理声学','系统科学与工程 ']  
    },
    {
      schedule_class_name:'化学类',
      schedule_name:[  '化学','应用化学','化学生物学','分子科学与工程','能源化学 ']  
    },
    {
      schedule_class_name:'天文学类',
      schedule_name:[ '天文学' ]  
    },
    {
      schedule_class_name:'地理科学类',
      schedule_name:[  '地理科学','自然地理与资源环境','人文地理与城乡规划','地理信息科学'  ]  
    },
    {
      schedule_class_name:'大气科学类',
      schedule_name:[ '大气科学','应用气象学' ]  
    },
    {
      schedule_class_name:'海洋科学类',
      schedule_name:[  '海洋科学','海洋技术','海洋资源与环境','军事海洋学'  ]  
    },
    {
      schedule_class_name:'地球物理学类',
      schedule_name:[ '地球物理学','空间科学与技术','防灾减灾科学与工程 ' ]  
    },
    {
      schedule_class_name:'地质学类',
      schedule_name:[ '地质学','地球化学','地球信息科学与技术','古生物学  ']  
    },
    {
      schedule_class_name:'生物科学类',
      schedule_name:[  '生物科学','生物技术生','物信息学','生态学','神经科学','整合科学' ]  
    },
    {
      schedule_class_name:'心理学类',
      schedule_name:[ '心理学','应用心理学' ]  
    },
    {
      schedule_class_name:'统计学类',
      schedule_name:[ '统计学','应用统计学']  
    },
  ]
})
//工学
Mock.mock('/professionalquery/search/gongxue','get',{
  status:0,
  messege:'',
  data_schedule:[
    {
      schedule_class_name:'力学类',
      schedule_name:[  '理论与应用力学','工程力学' ]  
    },
    {
      schedule_class_name:'机械类',
      schedule_name:[ '机械类','机械工程','机械设计制造及其自动化',
      '材料成型及控制工程','机械电子工程','工业设计',
      '过程装备与控制工程','车辆工程','汽车服务工程',
      '机械工艺技术','微机电系统工程','机电技术教育',
      '汽车维修工程教育','精密仪器及机械','仿生科学与工程',
      '新能源汽车工程','智能车辆工程','智能制造工程 ' ]  
    },
    {
      schedule_class_name:'仪器类',
      schedule_name:[ '测控技术与仪器','精密仪器 ' ]  
    },
    {
      schedule_class_name:'材料类',
      schedule_name:[  '材料科学与工程','材料物理','材料化学','冶金工程金',
      '属材料工程','无机非金属材料工程','高分子材料与工程',
      '复合材料与工程','粉体材料科学与工程','宝石及材料工艺学',
      '焊接技术与工程','功能材料','纳米材料与技术',
      '新能源材料与器件','能源与动力工程','能源与环境系统工程',
      '新能源科学与工程','智能材料与结构','材料设计科学与工程',
      '复合材料成型工程'  ]  
    },
    {
      schedule_class_name:'电气类',
      schedule_name:['电气工程及其自动化','智能电网信息工程','光源与照明','电气工程与智能控制','电机电器智能化','电缆工程 ' ]  
    },
    {
      schedule_class_name:'电子信息类',
      schedule_name:[ '电子信息工程','电子科学与技术','通信工程','微电子科学与工程',
      '光电信息科学与工程','信息工程广播电视工程','水声工程',
      '电子封装技术','集成电路设计与集成系统','医学信息工程',
      '电磁场与无线技术','电波传播与天线','电子信息科学与技术',
      '电信工程及管理','应用电子技术教育','海洋信息工程',
      '应用电子技术教育'  ]  
    },
    {
      schedule_class_name:'自动化类',
      schedule_name:[  '自动化','轨道交通信号与控制','核电技术与控制工程','机器人工程','邮政工程  ' ]  
    },
    {
      schedule_class_name:'计算机类',
      schedule_name:[  '计算机科学与技术','软件工程','网络工程',
      '信息安全','物联网工程','数字媒体技术','智能科学与技术',
      '空间信息与数字技术','电子与计算机工程',
      '数据科学与大数据技术','人工智能','虚拟现实',
      '新媒体技术','虚拟现实技术','网络空间安全',
      '服务科学与工程','电影制作','保密技术 ' ]  
    },
    {
      schedule_class_name:'土木类',
      schedule_name:[  '土木工程','建筑环境与能源应用工程','给排水科学与工程','建筑电气与智能化',
      '城市地下空间工程','道路桥梁与渡河工程',
      '土木、水利与海洋工程','铁道工程','智能建造 ' ]  
    },
    {
      schedule_class_name:'水利类',
      schedule_name:[  '水利水电工程','水文与水资源工程','港口航道与海岸工程','水务工程','水利科学与工程 ' ]  
    },
    {
      schedule_class_name:'测绘类',
      schedule_name:['测绘工程','遥感科学与技术','导航工程','地理国情监测','地理空间信息工程 ' ]  
    },
    {
      schedule_class_name:'测绘类',
      schedule_name:['测绘工程','遥感科学与技术','导航工程','地理国情监测','地理空间信息工程 ' ]  
    },
    {
      schedule_class_name:'化工与制药类',
      schedule_name:[ '化学工程与工艺','制药工程','资源循环科学与工程','能源化学工程','化学工程与工业生物工程','涂料工程','化工安全工程','精细化工 ' ]  
    },
    {
      schedule_class_name:'地质类',
      schedule_name:['地质工程','勘查技术与工程','资源勘查工程','地下水科学与工程','旅游地学与规划工程'  ]  
    },
    {
      schedule_class_name:'矿业类',
      schedule_name:[ '采矿工程','石油工程','矿物加工工程','油气储运工程','矿物资源工程','海洋油气工程 ' ]  
    },
    {
      schedule_class_name:'纺织类',
      schedule_name:[ '纺织工程','服装设计与工程','非织造材料与工程','服装设计与工艺教育','丝绸设计与工程 ' ]  
    },
    {
      schedule_class_name:'轻工类',
      schedule_name:[ '轻化工程','包装工程','印刷工程','香料香精技术与工程','化妆品技术与工程'  ]  
    },
    {
      schedule_class_name:'交通运输类',
      schedule_name:['交通运输','交通工程','航海技术','轮机工程','交通设备与控制工程','救助与打捞工程','船舶电子电气工程','邮轮工程与管理','轨道交通电气与控制']  
    },
    {
      schedule_class_name:'海洋工程类',
      schedule_name:['船舶与海洋工程','海洋工程与技术','海洋资源开发技术','海洋机器人 ' ]  
    },
    {
      schedule_class_name:'航空航天类',
      schedule_name:[  '飞行技术','航空航天工程','飞行器设计与工程','飞行器制造工程',
      '飞行器动力工程','飞行器环境与生命保障工程',
      '飞行器质量与可靠性','飞行器适航技术',
      '飞行器控制与信息工程','无人驾驶航空器系统工程  ' ]  
    },
    {
      schedule_class_name:'兵器类',
      schedule_name:['武器系统与工程','武器发射工程','探测制导与控制技术','弹药工程与爆炸技术','特种能源技术与工程','装甲车辆工程','信息对抗技术','智能无人系统技术'   ]  
    },
    {
      schedule_class_name:'核工程类',
      schedule_name:[  '核工程与核技术','辐射防护与核安全','工程物理','核化工与核燃料工程 ']  
    },
    {
      schedule_class_name:'农业工程类',
      schedule_name:['农业工程','农业机械化及其自动化','农业电气化','农业建筑环境与能源工程','农业水利工程','土地整治工程' ]  
    },
    {
      schedule_class_name:'林业工程类',
      schedule_name:['森林工程','木材科学与工程','林产化工','家具设计与工程' ]  
    },
    {
      schedule_class_name:'环境科学与工程类',
      schedule_name:['环境科学与工程','环境工程','环境科学','环境生态工程','环保设备工程','资源环境科学','水质科学与技术 ']  
    },
    {
      schedule_class_name:'生物医学工程类',
      schedule_name:[ '生物医学工程','假肢矫形工程','临床工程技术' ]  
    },
    {
      schedule_class_name:'食品科学与工程类',
      schedule_name:[ '食品科学与工程','食品质量与安全','粮食工程','乳品工程','酿酒工程',
      '葡萄与葡萄酒工程','食品营养与检验教育','烹饪与营养教育',
      '食品安全与检测 ']  
    },
    {
      schedule_class_name:'建筑类',
      schedule_name:[ '建筑学','城乡规划','风景园林','历史建筑保护工程','人居环境科学与枝术' ]  
    },
    {
      schedule_class_name:'安全科学与工程类',
      schedule_name:[ '安全工程','职业卫生工程','应急技术与管理' ]  
    },
    {
      schedule_class_name:'生物工程类',
      schedule_name:[ '生物工程','生物制药' ]  
    },
    {
      schedule_class_name:'公安技术类',
      schedule_name:[ '刑事科学技术','消防工程','交通管理工程',
      '安全防范工程','公安视听技术','抢险救援指挥与技术',
      '火灾勘查','网络安全与执法','核生化消','防海警舰艇指挥与技术',
      '数据警务技术' ]  
    },
  ]
})

Mock.mock('/sch/1','get',{
  status:0,
  messege:'',
  sch_inf:
    {
      school_name:'安徽建筑大学',
      school_icon:'@dataImage(183x183)',
      school_type:'普通本科，理工类，公办',
      school_web1:'http://www.ahjzu.edu.cn/zsw/main.htm',
      school_web2:'http://www.ahjzu.edu.cn',
      school_phone:'0551-63828083',
      school_area:'安合肥市经济技术开发区紫云路292号（南校区）合肥市包河区金寨路856号（北校区）',
    }
})

Mock.mock('/sch/1/home','get',{
  status:0,
  messege:'',
  sch_home:
  {
    sch_vedio:'@dataImage(425x255)',
    sch_introduce:'@cparagraph(20)',
    base_inf:{
      boshidian:'无',
      shuoshidian:'57',
      zhongdianxueke:'无',
      zhongdianshiyanshi:'1',
      chuangjianshijian:'1958年',
      lishuyu:'安徽合肥',
      zhandimianji:'1531亩',
      xuexiaodizhi:'南校区：合肥市经济技术开发区紫云路292号,北校区：合肥市包河区金寨路856号'
    },
    sch_pro:[
      {
        class_name:'经济学类',
        sche_name:['经济学']
      },
      {
        class_name:'金融学类',
        sche_name:['金融工程']
      },
      {
        class_name:'法学类',
        sche_name:['法学']
      },
      {
        class_name:'外国语言文学类',
        sche_name:['英语']
      },
      {
        class_name:'物理学类',
        sche_name:['应用物理学','声学']
      },
      {
        class_name:'化学类',
        sche_name:['应用化学']
      },
      {
        class_name:'地理科学类',
        sche_name:['地理信息科学']
      },
      {
        class_name:'统计学类',
        sche_name:['统计学']
      },
    ],
    sex_proc:{
      man:'71',
      girl:'29'
    },
    sch_work:[
      {
        name:'就业率',
        num:'93.73'
      },
      {
        name:'国内升学率',
        num:'12.95'
      },
      {
        name:'出国率',
        num:'0.94'
      },
    ],
    sch_rec:[
      {
        img:'',
        time:'',
        content:"@cparagraph(4)",
      },
      {
        img:'',
        time:'',
        content:"@cparagraph(4)",
      },
      {
        img:'',
        time:'',
        content:"@cparagraph(4)",
      },
     
    ],
    sch_new:[
      {
        title:'安徽建筑大学2020年招生章程',
        time:'2020-06-12'
      },
      {
        title:'安徽建筑大学合作办学环境设计专业2020年招生简章',
        time:'2020-05-27'
      },
      {
        title:'安徽建筑大学2020年艺术类专业招生简章',
        time:'2020-04-15'
      },
      {
        title:'安徽建筑大学2020年高水平运动队招生简章',
        time:'2020-03-27'
      },
      {
        title:'安徽建筑大学2019年招生章程',
        time:'2019-06-11'
      },
      {
        title:'中国安徽建筑大学与美国中密歇根大学合作办学环境设计专业2019年招生简章',
        time:'2019-06-11'
      },
      {
        title:'中国安徽建筑大学与美国中密歇根大学合作办学2018年招生简章',
        time:'2018-06-23'
      }
    ],
    sch_near_rec:[
      {
        sch_ico:'@dataImage(50x50)',
        sch_name:' 武汉纺织大学',
        sch_type:'理科',
        sch_class:'普通类',
        sch_state:'本科一批',
        sch_score:' 528分'
      },
      {
        sch_ico:'@dataImage(50x50)',
        sch_name:' 广州医科大学',
        sch_type:'文科',
        sch_class:'普通类',
        sch_state:'本科一批',
        sch_score:'567分'
      },
      {
        sch_ico:'@dataImage(50x50)',
        sch_name:' 广州医科大学',
        sch_type:'文科',
        sch_class:'普通类',
        sch_state:'本科一批',
        sch_score:'567分'
      },
      {
        sch_ico:'@dataImage(50x50)',
        sch_name:' 广州医科大学',
        sch_type:'文科',
        sch_class:'普通类',
        sch_state:'本科一批',
        sch_score:'567分'
      },
      {
        sch_ico:'@dataImage(50x50)',
        sch_name:' 广州医科大学',
        sch_type:'文科',
        sch_class:'普通类',
        sch_state:'本科一批',
        sch_score:'567分'
      },
      {
        sch_ico:'@dataImage(50x50)',
        sch_name:' 广州医科大学',
        sch_type:'文科',
        sch_class:'普通类',
        sch_state:'本科一批',
        sch_score:'567分'
      }
    ],
    sch_img:[
      {
        name:'南大门',
        img:'@dataImage(800x400)'
      },
      {
        name:'主教楼',
        img:'@dataImage(800x400)'
      },
      {
        name:'操场',
        img:'@dataImage(800x400)'
      },
      {
        name:'易海',
        img:'@dataImage(800x400)'
      }
    ],
    sch_near_img:[
      {
        name:'1',
        img:'@dataImage(800x400)'
      },
      {
        name:'2',
        img:'@dataImage(800x400)'
      },
      {
        name:'3',
        img:'@dataImage(800x400)'
      },
      {
        name:'4',
        img:'@dataImage(800x400)'
      },
    ],
    sch_xuanchuanpian:'',
    sch_newstudent:{
      sch_name:'安徽建筑大学',
      dating:'2020年',
      qqnum:[
        '927516462',
        '119408121'
      ],
      weixin:[
        {
          name:'招生官网',
          img:'@dataImage(100x100)'
        },
        {
          name:'招生官微',
          img:'@dataImage(100x100)'
        },
        {
          name:'招生小程序',
          img:'@dataImage(100x100)'
        },
      ]
    }
  },
})

Mock.mock('/sch/1/profession','get',{
  state:0,
  messege:'',
  sch_pro:{
    sch_proitem:[
      {
        class_name:'经济学类',
        sche_name:['经济学']
      },
      {
        class_name:'金融学类',
        sche_name:['金融工程']
      },
      {
        class_name:'法学类',
        sche_name:['法学']
      },
      {
        class_name:'外国语言文学类',
        sche_name:['英语']
      },
      {
        class_name:'物理学类',
        sche_name:['应用物理学','声学']
      },
      {
        class_name:'化学类',
        sche_name:['应用化学']
      },
      {
        class_name:'地理科学类',
        sche_name:['地理信息科学']
      },
      {
        class_name:'统计学类',
        sche_name:['统计学']
      },
      {
        class_name:'机械类',
        sche_name:['机械设计制造及其自动化',

        '机械电子工程',
        
        '工业设计',
        
        '过程装备与控制工程']
      },
      {
        class_name:'仪器类',
        sche_name:['测控技术与仪器']
      },
      {
        class_name:'材料类',
        sche_name:['无机非金属材料工程',

        '高分子材料与工程',
        
        '金属材料工程']
      },
      {
        class_name:'能源动力类',
        sche_name:['能源与动力工程']
      },
      {
        class_name:'电气类',
        sche_name:['电气工程及其自动化']
      },
      {
        class_name:'电子信息类',
        sche_name:['电子信息工程',

        '通信工程']
      },
      {
        class_name:'自动化类',
        sche_name:['自动化']
      },
      {
        class_name:'计算机类',
        sche_name:['计算机科学与技术',

        '网络工程',
        
        '物联网工程']
      },
      {
        class_name:'测绘类',
        sche_name:['测绘工程']
      },
      {
        class_name:'化工与制药类',
        sche_name:['化学工程与工艺']
      },
      {
        class_name:'地质类',
        sche_name:['地质工程',

        '勘查技术与工程']
      },
      {
        class_name:'交通运输类',
        sche_name:['交通工程']
      },
      {
        class_name:'环境科学与工程类',
        sche_name:['环境工程',

        '环境生态工程']
      },
      {
        class_name:'土木类',
        sche_name:[

        '土木工程',
        
        '城市地下空间工程',
        
        '道路桥梁与渡河工程',
        
        '建筑环境与能源应用工程',
        
        '给排水科学与工程',
        
        '建筑电气与智能化']
      },
      {
        class_name:'建筑类',
        sche_name:['建筑学',

        '城乡规划',
        
        '风景园林']
      },
      {
        class_name:'安全科学与工程类',
        sche_name:['安全工程']
      },
      {
        class_name:'管理科学与工程类',
        sche_name:['工程管理',

        '房地产开发与管理',
        
        '工程造价']
      },
      {
        class_name:'工商管理类',
        sche_name:['会计学',

       '财务管理',
        
        '资产评估',
        
        '人力资源管理']
      },
      {
        class_name:'公共管理类',
        sche_name:['工程管理劳动与社会保障',

        '土地资源管理',
        
        '城市管理']
      },
      {
        class_name:'戏剧与影视学类',
        sche_name:['动画']
      },
      {
        class_name:'设计学类',
        sche_name:['公共艺术',

        '视觉传达设计',
        
        '环境设计',
        
        '环境设计（中外合作）']
      },
      {
        class_name:'其他',
        sche_name:['城市规划']
      },
    ],   
    country_char_pro:{
      title:'国家特色专业',
      sche:[
        '土木工程',
  
        '城市规划',
        
        '工程管理',
        
        '无机非金属材料工程'
      ]
    },
    sch_tips:{
      title:'选专业小贴士',
      content:[
        '好的专业包括四个原则：',
        '第一是兴趣原则，选感兴趣的专业；',
        '第二是优势原则，选最能体现自己的优势的专业；',
        '第三是创造原则，这个专业毕业以后从事的工作应该是具有创造性的，而不是做简单重复的劳动；',
        '第四是利益原则，这个专业最好还是能挣钱的；',
        '“因兴趣而有动力，因优势而有能力，因创造而有潜力，因利益创造收益”。 如何认识大学本科专业？'+
        '《普通高等学校本科专业目录（2012年）》是高等教育工作的基本指导性文件之一。它规定专业划分、名称及所属门类，是设置和调整专业、实施人才培养、安排招生、授予学位、指导就业，进行教育统计和人才需求预测等工作的重要依据。'+
        '2020年3月，教育部公布了《普通高等学校本科专业目录（2020年）》，在《普通高等学校本科专业目录（2012年）》的基础上增加了新的专业。认识一个大学本科专业，可以从以下几个方面入手：',
        '一、 本专业基本情况列表：专业分类，专业名称、学位情况、专业代码',
        '二、 专业概况：本专业（学科）的基本概念、含义等 ',
        '三、 培养目标：本专业想要培养什么样的人才 ',
        '四、 培养要求本专业对所培养的人才有哪些要求 ',
        '五、 知识技能学生从本专业毕业后应当具备的知识和基本能力 ',
        '六、 主干课程本专业学生在学校期间需要学习的主要专业课程 ',
        '七、 就业前景'+
        '本专业学生本科毕业后的就业情况，大体有以下几方面内容：就业方向：本科毕业后主要的就业方向就业前景：本专业所面对的社会行业的发展前景等方面的介绍专家解析：本专业的招生、学生学习及就业方面的专家分析和建议小贴士：关于本专业比较典型的评价、需要特别提醒的事项及毕业生感受等。'
      ]
    },
   
  }
})

Mock.mock('/sch/1/news','get',{
  state:0,
  messege:'',
  sch_news:{
    newStuPlan:[
      {
        href:'http://www.ahjzu.edu.cn/zsw/2020/0712/c2397a147609/page.htm ',
        title:'安徽建筑大学2020年秋季分省分专业招生计划',
        time:'2020-07-12'
      },
      {
        href:'http://www.ahjzu.edu.cn/zsw/2019/0611/c2397a129190/page.htm',
        title:'安徽建筑大学2019年秋季分省（市）分专业招生计划',
        time:'2019-06-11'
      },
      {
        href:'http://www.ahjzu.edu.cn/zsw/2017/0615/c2397a774/page.htm',
        title:'安徽建筑大学2018年秋季分省（市）分专业招生计划',
        time:'2018-06-23'
      },
      {
        href:'http://www.ahjzu.edu.cn/zsw/2018/0623/c2397a113318/page.htm',
        title:'安徽建筑大学2017年秋季分省（市）分专业招生计划',
        time:'2017-06-15'
      },
      {
        href:'http://www.ahjzu.edu.cn/zsw/2015/0622/c2397a770/page.htm',
        title:'安徽建筑大学2016年秋季分省（市）分专业招生计划',
        time:'2015-06-22'
      },
      {
        href:'http://www.ahjzu.edu.cn/zsw/2016/0615/c2397a772/page.htm',
        title:'安徽建筑大学2015年秋季分省（市）分专业招生计划',
        time:'2016-06-15'
      }
    ],
    newStuArticle:[
      {
        href:'http://www.ahjzu.edu.cn/zsw/2020/0612/c2390a146368/page.htm',
        title:' 安徽建筑大学2020年招生章程',
        time:' 2020-06-12'
      },
      {
        href:'http://www.ahjzu.edu.cn/zsw/2020/0527/c2390a145202/page.htm',
        title:'安徽建筑大学合作办学环境设计专业2020年招生简章 ',
        time:'2020-05-27'
      },
      {
        href:'http://www.ahjzu.edu.cn/zsw/2020/0415/c2390a142791/page.htm',
        title:'安徽建筑大学2020年艺术类专业招生简章',
        time:'2020-03-27'
      },
      {
        href:'http://www.ahjzu.edu.cn/zsw/2020/0327/c2390a142205/page.htm',
        title:'安徽建筑大学2020年高水平运动队招生简章',
        time:'2019-06-11'
      },
      {
        href:'http://www.ahjzu.edu.cn/zsw/2019/0611/c2390a129189/page.htm',
        title:'安徽建筑大学2019年招生章程',
        time:'2019-06-11'
      },
      {
        href:'http://www.ahjzu.edu.cn/zsw/2019/0613/c2390a129315/page.htm',
        title:'中国安徽建筑大学与美国中密歇根大学合作办学环境设计专业2019年招生简章',
        time:' 2018-06-23'
      },
      {
        href:'http://www.ahjzu.edu.cn/zsw/2018/0623/c2390a113316/page.htm',
        title:'中国安徽建筑大学与美国中密歇根大学合作办学2018年招生简章',
        time:'2018-06-23'
      },
    ]
  }
})
Mock.mock('/sch/1/work', 'get',{
  state:0,
  messege:'',
  sch_work:{
    area:[
      {
        city_name:'安徽地区',
        stu_perc:'51.42'
      },
      {
        city_name:'上海,浙江,江苏,天津',
        stu_perc:'27.82'
      },
      {
        city_name:'广东地区',
        stu_perc:'5.64'
      },
      {
        city_name:'其他地区',
        stu_perc:'15.12'
      }
    ],
    firm:[
      {
        city_name:'国有企业',
        stu_perc:'21.92'
      },
      {
        city_name:'中小企业',
        stu_perc:'54.57'
      },
      {
        city_name:'事业,科研,教育',
        stu_perc:'1.23'
      },
      {
        city_name:'其他企业',
        stu_perc:'21.92'
      }
    ],
    main_firm:[
    
    ]
  }
})

Mock.mock('/sch/1/score','get',{
  status:0,
  messege:'',
  sch_score:{
    province_score:{
      title:'各省分数线',
      province:[
        '安徽',
        '浙江',
        '江苏',
        '上海',
        '广东',
        '河南',
        '湖南',
        '河北',
        '北京',
        '天津',
        '黑龙江',
        '吉林',
        '东北',
      ],
      pro_type:[
        '理科',
        '文科'
      ],
      table_data:{
        title:[
          '年份',	'最高分',	'平均分',	'最低分',	'最低位次',	'省控线',	'招生类型',	'录取批次'
        ],
        content:[
          ['2019','-','-','527','49348','496','普通类','本科一批'],
          ['2018','-','-','532','51610','505','普通类','本科一批'],
          ['2017','-','-','507','49819','487','普通类','本科一批'],
          ['2016','-','541','-','-','518','普通类','本科一批'], 
          ['2015','-','-','568','46705','511','普通类','本科二批'],  
          ['2015','-','-','568','46705','511','普通类','本科二批'],  
          ['2015','-','-','568','46705','511','普通类','本科二批'],  
          ['2015','-','-','568','46705','511','普通类','本科二批'],  
          ['2015','-','-','568','46705','511','普通类','本科二批'],  
        ]
      }
    },
    stu_plan:{
      title:'招生计划',
      province:[
        '安徽',
        '浙江',
        '江苏',
        '上海',
        '广东',
        '河南',
        '湖南',
        '河北',
        '北京',
        '天津',
        '黑龙江',
        '吉林',
        '东北',
      ],
      pro_type:[
        '理科',
        '文科'
      ],
      year:[
        '2020',
        '2019',
        '2018',
        '2017',
      ],
      state:[
        '本科一批'
      ],
      table_data:{
        title:[
          '专业名称,',	'学科门类',	'专业类',	'计划招生',	'学制'
        ],
        content:[
          ['土木工程',	'工学',	'土木类',	'126',	'-'],
          ['道路桥梁与渡河工程',	'工学',	'土木类',	'53',	'-'],
          ['测绘工程'	,'工学'	,'测绘类',	'45','-'],
          ['城市地下空间工程',	'工学',	'土木类',	'57',	'-'], 
          ['交通工程',	'工学',	'交通运输类',	'47',	'-'],  
          ['交通工程',	'工学',	'交通运输类',	'47',	'-'],  
          ['交通工程',	'工学',	'交通运输类',	'47',	'-'],  
          ['交通工程',	'工学',	'交通运输类',	'47',	'-'],  
          ['交通工程',	'工学',	'交通运输类',	'47',	'-'],  
          ['交通工程',	'工学',	'交通运输类',	'47',	'-'],  
          ['交通工程',	'工学',	'交通运输类',	'47',	'-'],  
          ['交通工程',	'工学',	'交通运输类',	'47',	'-'],  
          ['交通工程',	'工学',	'交通运输类',	'47',	'-'],  
          ['交通工程',	'工学',	'交通运输类',	'47',	'-'],  
          ['交通工程',	'工学',	'交通运输类',	'47',	'-'],  
          ['交通工程',	'工学',	'交通运输类',	'47',	'-'],  
          ['交通工程',	'工学',	'交通运输类',	'47',	'-'],  
          ['交通工程',	'工学',	'交通运输类',	'47',	'-'],  
          ['交通工程',	'工学',	'交通运输类',	'47',	'-'],  
          ['交通工程',	'工学',	'交通运输类',	'47',	'-'],  
          ['交通工程',	'工学',	'交通运输类',	'47',	'-'],  
          ['交通工程',	'工学',	'交通运输类',	'47',	'-'],        
        ]
      }
    },
    pro_score:{
      title:'专业分数线',
      province:[
        '安徽',
        '浙江',
        '江苏',
        '上海',
        '广东',
        '河南',
        '湖南',
        '河北',
        '北京',
        '天津',
        '黑龙江',
        '吉林',
        '东北',
      ],
      pro_type:[
        '理科',
        '文科'
      ],
      year:[
        '2020',
        '2019',
        '2018',
        '2017',
      ],
      table_data:{
        title:[
          '专业名称',	'最高分',	'平均分',	'最低分',	'最低位次',	'录取批次'
        ],
        content:[
          ['安全工程'	,'-	','-',	'527',	'49772',	'本科一批'],
          ['安全工程'	,'-	','-',	'527',	'49772',	'本科一批'],
          ['安全工程'	,'-	','-',	'527',	'49772',	'本科一批'],
          ['安全工程'	,'-	','-',	'527',	'49772',	'本科一批'],
          ['安全工程'	,'-	','-',	'527',	'49772',	'本科一批'],
          ['安全工程'	,'-	','-',	'527',	'49772',	'本科一批'],
          ['安全工程'	,'-	','-',	'527',	'49772',	'本科一批'],
          ['安全工程'	,'-	','-',	'527',	'49772',	'本科一批'],
          ['安全工程'	,'-	','-',	'527',	'49772',	'本科一批'],
          ['安全工程'	,'-	','-',	'527',	'49772',	'本科一批'],
          ['安全工程'	,'-	','-',	'527',	'49772',	'本科一批'],
          ['安全工程'	,'-	','-',	'527',	'49772',	'本科一批'],
          ['安全工程'	,'-	','-',	'527',	'49772',	'本科一批'],
          ['安全工程'	,'-	','-',	'527',	'49772',	'本科一批'],
          ['安全工程'	,'-	','-',	'527',	'49772',	'本科一批'],
          ['安全工程'	,'-	','-',	'527',	'49772',	'本科一批'],
          ['安全工程'	,'-	','-',	'527',	'49772',	'本科一批'],
          ['安全工程'	,'-	','-',	'527',	'49772',	'本科一批'],
          ['安全工程'	,'-	','-',	'527',	'49772',	'本科一批'],
          ['安全工程'	,'-	','-',	'527',	'49772',	'本科一批'],
                
        ]
      }
    }
  }
  
})
Mock.mock('/pro/1','get',{
  status:0,
  messege:'',
  pro_inf:{
    base_inf:{
      back_img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596693911906&di=c46c950e49cbbbaf885cb6b836867de4&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fd31b0ef41bd5ad6e0de9aac78acb39dbb6fd3c8f.jpg',
      pro_name:[
        '专计算机科学与技术',
        '基本信息'
      ],
      pro_code:[
        '专业代码',
        '080901'
      ],
      pro_hot:[
        '专业热度',
        '54453'
      ],
      xuewei:[
        '授予学位',
        '工学学士'
      ],
      date:[
        '修学年限',
        '四年'
      ],
      pro_class:[
        '学科门类',
        '工学'
      ],
      pro_type:[
        '专业类',
        '计算机类'
      ],
      sex_man:'66.00',
      sex_woman:'34.00',
      work:[
        {
          date:'2018年',
          wor_per:'88%~90%'
        },
        {
          date:'2019年',
          wor_per:'88%~90%'
        },
        {
          date:'2020年',
          wor_per:'88%~90%'
        },
      ],
      pro_video:{
        img:'',
        src:''
      }
    },
    pro_detail:{
      title:'专业深研',
      content:[
        {
          title:'专业简介',
          content:'计算机科学与技术主要研究计算机的设计与制造，包含计算机软件、硬件的基本理论、技能与方法，进行计算机系统和软件的开发与维护、硬件的组装等。例如：Windows系统的维护，手机APP的开发，台式电脑的整机装配等。相较于网络工程、软件工程，计算机科学与技术专业所学范围更广。 关键词：计算机 Windows 软件 电脑主机'
        },
        {
          title:'专业主修课程',
          content:'《C++程序设计》、《Java语言程序设计》、《数据库系统原理》、《计算机网络原理》、《计算机系统结构》、《数据结构》、《操作系统》、《软件工程》、《离散数学》 部分高校按以下专业方向培养：NET、JAVA、大数据、云计算、软件工程、金融信息化、嵌入式软件、传媒设计与制作、计算机网络技术、移动互联网信息与技术。'
        },
        {
          title:'就业形势',
          content:'T类企业：技术开发、程序设计、软件工程、硬件工程、产品经理、产品运营、产品设计； 政府、科研单位：网络安全、网络开发、系统维护、配置管理。'
        },
      ],
      work_position:[
        {
          name:'后端开发',
          per:14.20,
        },
        {
          name:'技术支持',
          per:10.20,
        },
        {
          name:'移动开发',
          per:6.70,
        },
        {
          name:'销售业务',
          per:5.80,
        },
        {
          name:'测试',
          per:5.30,
        },
        {
          name:'其他',
          per:57.80,
        },
      ],
      work_hangye:[
        {
          name:'IT软件',
          per:27.86
        },
        {
          name:'其他行业',
          per:26.99
        },
        {
          name:'互联网',
          per:10.43
        },
        {
          name:'系统集成',
          per:6.83
        },
        {
          name:'电信设备',
          per:6.39
        },
        {
          name:'教育培训',
          per:4.96
        },
        {
          name:'金融投资',
          per:4.53
        },
        {
          name:'房地产',
          per:3.6
        },
        {
          name:'电信运营',
          per:3.32
        },
        {
          name:'电子技术',
          per:3.31
        },
        {
          name:'IT硬件',
          per:1.78
        },
      ],
      work_city:[
        {
          name:'北京',
          per:21.5
        },
        {
          name:'上海',
          per:14.3
        },
        {
          name:'深圳',
          per:8.7
        },
        {
          name:'广州',
          per:4.2
        },
        {
          name:'华中地区',
          per:2.2
        },
        {
          name:'西南地区',
          per:3.8
        },
        {
          name:'西北地区',
          per:2.8
        },
        {
          name:'华东地区',
          per:6.5
        },
        {
          name:'其他地区',
          per:36.0
        },
      ]
    }

  }
})
