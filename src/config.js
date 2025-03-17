const config = {
  //网页元数据
  metaData:{
    title: '流殇晓萤_',
    description: '人民万岁',
    keywords: '晓萤,小萤,个人主页,个人网站"'
  },

  avatar: "/img/ying1.jpg", // 头像
  welcometitle: "Hi, I'm Ying", // 标题

  // 颜色配置
  color: {
    themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
    welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
  },
  
  brightness: 50, // 背景亮度 --%
  blur: 20, // 毛玻璃模糊效果

  // 我的标签
  tags : ['MMD', 'MIKU', 'Vocaloid', '二次元', '特摄', '芒果布丁', '熊子厨', '深海'],

  // 默认背景壁纸
  background: {
    "pc":{   //pc端
      "type":"video",   //"pic":静态壁纸;"video":动态壁纸
      "datainfo":{
        "title":"鸦江初音", 
        "preview":"/img/wallpaper/dynamic/鸦江老师miku01/miku_preview.webp",
        "url":"/img/wallpaper/dynamic/鸦江老师miku01/miku01.webm",     //当然，也可填写网络地址或壁纸api，如随机PC壁纸api："url":"https://t.mwm.moe/pc"
      },
    },
    "mobile":{   //移动端
      "type":"pic",
      "datainfo":{
        "title":"0001", 
        "preview":"/img/wallpaper/static-mobile/0001/image-pre.webp",
        "url":"/img/wallpaper/static-mobile/0001/image.png"  //同理，随机移动端壁纸："url":"https://t.mwm.moe/mp"
      }
    }
      
  },

  //极坐标图数据
  polarChart:{
    skills: ['MikuMikuDance','Python','Excel','Capcut','SPSS','MySQL'],
    skillPoints: [85, 78, 88, 90, 80, 78],
  },

  //社交按钮，图标使用mdi图标（https://pictogrammers.com/library/mdi/），复制图标名称即可
  socialPlatformIcons: [
    {icon:"mdi-video-high-definition",link:"https://space.bilibili.com/432231153"},
    {icon:"mdi-youtube",link:"https://www.youtube.com/playlist?list=PLsBPKVLwNM-7ju9UI8BpAL41VJ_rC8fF_"},
    {icon:"mdi-steam",link:"https://steamcommunity.com/id/namless1314520/"},
    {icon:"mdi-github",link:"https://github.com/Namelessying"},
    {icon:"mdi-alpha-x-box",link:"https://x.com/liuxiao70492529"},
    {icon:"mdi-sina-weibo",link:"https://weibo.com/7405073174"}
  ],

  //打字机
  typeWriterStrings: [
    "根本赢不了？我听不懂！",
    "其实每一个人，都能靠自己的力量变成光的！你也变成了不是吗？",
    "我会死吗？我怎么可能不怕死呢！",
    "当你放弃仰望天空的时候，你所失去的东西，就是梦想未来的力量。",
    "马上，春天就要来了，与你相遇的春天，一个没有你的春天。",
    "你给我一个绚烂的秘密，沉睡在仲夏夜里的美丽梦境中。",
    "时光流转，愿你与你所珍爱之人，能够再次相会。"
  ],

  //音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
  musicPlayer:{
    server: 'netease',  //服务提供商 --网易云音乐
    type: 'playlist',   //歌单类型
    id: '8807017065'  //歌单id ---> music.163.com/#/playlist?id=8807017065
  },

  //壁纸数据 -----可以将壁纸文件上传到uhsea.com获取网络直链。若想调用api，请前往脚本自行修改逻辑
  wallpaper:{
    pic:[
      {"title":"海洋女孩","preview":"/img/wallpaper/static/海洋女孩/image-pre.webp","url":"/img/wallpaper/static/海洋女孩/image.png"},
      {"title":"书房夜晚","preview":"/img/wallpaper/static/书房夜晚/image-pre.webp","url":"/img/wallpaper/static/书房夜晚/image.png"},
      {"title":"安逸舒适","preview":"/img/wallpaper/static/安逸舒适/image-pre.webp","url":"/img/wallpaper/static/安逸舒适/image.png"},
      {"title":"jswcMaMj","preview":"https://file.uhsea.com/2503/76a4f03e8654d6e66bbbc7e8149c2fe33M.png","url":"https://file.uhsea.com/2503/5b8a20a5f2b269659911c9485d0d0c3f0F.png"},
      {"title":"pgtTqoqq","preview":"https://file.uhsea.com/2503/caeae6b4fc1aba41bff4ad4ec59d6d8aA5.png","url":"https://file.uhsea.com/2503/45aa0a5a31a0ae95f7cc660e3ab4148eUT.png"},
      {"title":"cvKMKhue","preview":"https://file.uhsea.com/2503/7a693bf725b501e0907ce40f18d2edc49P.png","url":"https://file.uhsea.com/2503/55e7191130d160a8e4421497308ffb67DT.png"},
      {"title":"XpxvQVoP","preview":"https://file.uhsea.com/2503/f4b6804c7189357d3252aa0f981b59c4EF.png","url":"https://file.uhsea.com/2503/66359907715d46e0a4523da0142a6f63EU.png"},
    ],
    picMobile:[
      {"title":"0001","preview":"/img/wallpaper/static-mobile/0001/image-pre.webp","url":"/img/wallpaper/static-mobile/0001/image.png"},
      {"title":"0002","preview":"/img/wallpaper/static-mobile/0002/image-pre.webp","url":"/img/wallpaper/static-mobile/0002/image.png"},
      {"title":"0003","preview":"/img/wallpaper/static-mobile/0003/image-pre.webp","url":"/img/wallpaper/static-mobile/0003/image.png"},
      {"title":"0004","preview":"/img/wallpaper/static-mobile/0004/image-pre.webp","url":"/img/wallpaper/static-mobile/0004/image.png"},
      {"title":"DfNHPPcc","preview":"https://file.uhsea.com/2503/e3510f4d0286e37b828f74494230f0efM2.png","url":"https://file.uhsea.com/2503/97b50adb3d4cd6f1a4132f6d3e8c98483T.png"},
      {"title":"WIOlrGSy","preview":"https://file.uhsea.com/2503/99162abfe07e18cfe6182ca3458561ef3A.png","url":"https://file.uhsea.com/2503/609532b992163117db9b341dde87b78f3C.png"},
      {"title":"cZZwzhis","preview":"https://file.uhsea.com/2503/cf558fa1989c07726778c60be47b9928K8.png","url":"https://file.uhsea.com/2503/e27b91f1604f73d0444c807024ef7c9fI3.png"},
      {"title":"aANKZHPX","preview":"https://file.uhsea.com/2503/0aa1cb875c8c7c20afd1aa72530294350K.png","url":"https://file.uhsea.com/2503/b09b65e20e176cb0d22dbc319981b5b45L.png"},
    ],
    video:[
      {
        "title":"尼尔：机械纪元 团队",
        "preview":"/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
        "url":"/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm"
      },
      {
        "title":"向往航天的女孩",
        "preview":"/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
        "url":"/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
      },
      {
        "title":"鸦江初音",
        "preview":"/img/wallpaper/dynamic/鸦江老师miku01/miku_preview.webp",
        "url":"/img/wallpaper/dynamic/鸦江老师miku01/miku01.webm"
      },
    ],
    videoMobile:[
      {
        "title":"幻觉镇-gaako_illust",
        "preview":"/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
      },
      {
        "title":"chuva",
        "preview":"/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
      },
      {
        "title":"Doodle-小猫女仆降临",
        "preview":"/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
      },
    ],
  },

  //项目卡片 其中 字段"show"控制初始卡片的text是否展开
  projectcards:[ 
    {go:"🍉 前往",img:"/img/mmd1.jpg",title:"MMD作品展示 1",subtitle:"Ika式MIKU", text:"妈妈，这个米库真的超级米呜呜呜~感谢饺子老师的配布！！！！！一个略有梦幻的作品~",url:"https://www.bilibili.com/video/BV1Y2QDYNEEi/",show:false},
    {go:"🍈 前往",img:"/img/mmd2.jpg",title:"MMD作品展示 2",subtitle:"げのげ式MIKU", text:"是你的话会祈愿什么呢？初音未来17th生贺MMD单品",url:"https://www.bilibili.com/video/BV1ZznoeNEaN/",show:false},
    {go:"🍍 前往",img:"/img/mmd3.jpg",title:"MMD作品展示 3",subtitle:"🎵累了的话就来让我歌唱给你听吧~🎵", text:"这个作品是个希望给你带来温暖的，不要忘记自己初心的作品。希望你在遇到挫折时不要忘记那个活在二次元的女孩子一直在等着你，陪你歌唱。",url:"https://www.bilibili.com/video/BV13FNQeYETh/",show:false},
    {go:"🍑 前往",img:"/img/mmd4.jpg",title:"MMD作品展示 4",subtitle:"SOUR式/YYB式MIKU", text:"只剩我和你的Miku之夜-Cynical Night Plan-一个差点咕咕咕但是还算满意的作品！",url:"https://www.bilibili.com/video/BV1oC411x7dH/",show:false},
    {go:"🍊 前往",img:"/img/mmd5.jpg",title:"MMD作品展示 5",subtitle:"SOUR式RIN", text:"一个咕了1年的作品？rin酱我对不起你呜呜呜呜呜呜呜哇哇哇哇",url:"https://www.bilibili.com/video/BV1ZjySYnEcp/",show:false},
    {go:"🍓 前往",img:"/img/mmd6.jpg",title:"MMD作品展示 6",subtitle:"「死別」", text:"一个只做了两天的小作品~",url:"https://www.bilibili.com/video/BV13b421n7MC",show:false},
    {go:"🍒 前往",img:"/img/sunshine.jpg",title:"暂无",subtitle:"暂无", text:"暂无",url:"https://ying.leleosd.top",show:false},
    {go:"🍌 前往",img:"/img/sunshine.jpg",title:"暂无",subtitle:"暂无", text:"暂无",url:"https://ying.leleosd.top",show:false},
  ],

  // 新增的散写资源卡片
  resourcecards:[ 
    {go:"📝 查看",img:"/img/sunshine.jpg",title:"MMD教程",subtitle:"暂无", text:"整理了一系列MMD制作的基础教程，适合MMD新手学习。",url:"https://ying.leleosd.top",show:false},
    {go:"📚 下载",img:"/img/sunshine.jpg",title:"同人小说",subtitle:"暂无", text:"闲暇之余写的小说集",url:"https://ying.leleosd.top",show:false},
    {go:"🎵 获取",img:"/img/sunshine.jpg",title:"暂无",subtitle:"暂无", text:"暂无",url:"https://ying.leleosd.top",show:false},
    {go:"🎞️ 浏览",img:"/img/sunshine.jpg",title:"暂无",subtitle:"暂无", text:"暂无",url:"https://ying.leleosd.top",show:false},
    {go:"🎨 欣赏",img:"/img/sunshine.jpg",title:"暂无",subtitle:"暂无", text:"暂无",url:"https://ying.leleosd.top",show:false},
    {go:"📖 阅读",img:"/img/sunshine.jpg",title:"暂无",subtitle:"暂无", text:"暂无",url:"https://ying.leleosd.top",show:false},
    {go:"🎬 观看",img:"/img/sunshine.jpg",title:"暂无",subtitle:"暂无", text:"暂无",url:"https://ying.leleosd.top",show:false},
    {go:"🔧 工具",img:"/img/sunshine.jpg",title:"暂无",subtitle:"暂无", text:"暂无",url:"https://ying.leleosd.top",show:false},
  ],
  
  statement: ["备案号：XXICP备123456789号","Copyright © 2025 Leleo"],
}

export default config
