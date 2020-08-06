const ntype=[
    'food',
    'digital',
]
const foodurl=[
    'https://img.alicdn.com/bao/uploaded/i4/725677994/O1CN01BLCF9W28vIixHag3z_!!0-item_pic.jpg_160x160.jpg',
    'https://img.alicdn.com/bao/uploaded/i1/725677994/O1CN01dTYl7f28vIizIZLj6_!!0-item_pic.jpg_160x160.jpg',
    'https://img.alicdn.com/bao/uploaded/i2/725677994/O1CN019fti2U28vIiwd5aZC_!!725677994-0-sm.jpg_160x160.jpg',
  'https://img.alicdn.com/bao/uploaded/i2/725677994/O1CN015rK7nO28vIiuf2BH1_!!0-item_pic.jpg_160x160.jpg',
  'https://img.alicdn.com/bao/uploaded/i1/725677994/O1CN01Coxgeu28vIiuX2jGH_!!0-item_pic.jpg_160x160.jpg',
  'https://img.alicdn.com/bao/uploaded/i4/725677994/O1CN0165OwD728vIiueB0ey_!!0-item_pic.jpg_160x160.jpg',
  'https://img.alicdn.com/bao/uploaded/i2/725677994/O1CN01Hmxxn328vIizPOh7i_!!0-item_pic.jpg_160x160.jpg',
  'https://img.alicdn.com/bao/uploaded/i2/725677994/O1CN015V0eEm28vIiy4bBag_!!0-item_pic.jpg_160x160.jpg',
  'https://img.alicdn.com/bao/uploaded/i4/725677994/O1CN01Ow02hm28vIimgpHyQ_!!725677994-0-sm.jpg_160x160.jpg',
  'https://img.alicdn.com/bao/uploaded/i2/725677994/O1CN01sA4El528vIj0MOvMR_!!0-item_pic.jpg_160x160.jpg',
  'https://img.alicdn.com/bao/uploaded/i2/725677994/O1CN01bZutz628vIixkqrCG_!!0-item_pic.jpg_160x160.jpg'
]
const foodsurl=[
  'https://img.alicdn.com/imgextra/i4/725677994/O1CN01BLCF9W28vIixHag3z_!!0-item_pic.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i3/725677994/O1CN01F1h5BS28vIiCn7g0u_!!725677994.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i2/725677994/TB23wIpEKuSBuNjy1XcXXcYjFXa_!!725677994.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i3/725677994/TB2H14LtaSWBuNjSsrbXXa0mVXa_!!725677994.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i2/725677994/TB26I8ptgaTBuNjSszfXXXgfpXa_!!725677994.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i1/725677994/O1CN01tUGgYd28vIiyqICEK_!!0-item_pic.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i1/725677994/O1CN01BdehwC28vIiBvyncW_!!725677994.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i2/725677994/O1CN01Sm3LnM28vIhOU33Yw_!!725677994.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i3/725677994/O1CN01NG62SQ28vIhYDFBAN_!!725677994.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i1/725677994/O1CN01CcgsN428vIhUFixkV_!!725677994.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i3/725677994/O1CN01Y8LXBt28vIilqRWKs_!!725677994-0-sm.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i3/725677994/O1CN01sELlSD28vIfs5lUH8_!!725677994.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i2/725677994/TB2C8fNEQOWBuNjSsppXXXPgpXa_!!725677994.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i4/725677994/TB2uv2tEHuWBuNjSszgXXb8jVXa_!!725677994.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i4/725677994/TB20AzHEKuSBuNjSsziXXbq8pXa_!!725677994.jpg_60x60q90.jpg',
]
const fr1=[
  'https://img.alicdn.com/imgextra/i1/2200627596160/O1CN01m3Dfz41vNKKtYZQcH_!!2200627596160-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i4/2200627596160/O1CN01mtcsik1vNKKqTfkHY_!!2200627596160-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i3/2200627596160/O1CN01eM5K3w1vNKKr0MKKQ_!!2200627596160-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i2/2200627596160/O1CN01hXtK891vNKKp7vy7W_!!2200627596160-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i3/2200627596160/O1CN01pRtr7b1vNKKr0KaBK_!!2200627596160-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i4/2200627596160/O1CN017Lm2761vNKKorHN2h_!!2200627596160-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i1/2200627596160/O1CN013W2OgD1vNKKqTh1Hx_!!2200627596160-0-scmitem6000.jpg',
  'https://img.alicdn.com/tfs/TB1.CUdsY9YBuNjy0FgXXcxcXXa-1572-394.png',
  'https://img.alicdn.com/imgextra/i4/725677994/TB2W5vLt9FmpuFjSZFrXXayOXXa_!!725677994.jpg',
  'https://img.alicdn.com/imgextra/i1/725677994/TB2cO2DXlU4h1JjSZFLXXaFMpXa_!!725677994.jpg',
  'https://img.alicdn.com/imgextra/i4/725677994/TB2.tl_asPRfKJjSZFOXXbKEVXa_!!725677994.jpg',
  'https://img.alicdn.com/imgextra/i4/725677994/TB2xRnvt4xmpuFjSZFNXXXrRXXa_!!725677994.jpg',
  'https://img.alicdn.com/imgextra/i2/725677994/TB2tKp_n0hvOuFjSZFBXXcZgFXa_!!725677994.jpg',
  'https://img.alicdn.com/imgextra/i3/725677994/TB22BHWtYBmpuFjSZFAXXaQ0pXa_!!725677994.jpg',
  'https://img.alicdn.com/imgextra/i1/725677994/TB2Vw46XdXXWeJjSZFvXXa6lpXa_!!725677994.jpg',
  'https://img.alicdn.com/imgextra/i2/725677994/TB2LQEoiY_0UKFjy1XaXXbKfXXa_!!725677994.jpg',
  'https://img.alicdn.com/imgextra/i3/725677994/TB2mbHIxEhnpuFjSZFEXXX0PFXa_!!725677994.jpg',
  'https://img.alicdn.com/imgextra/i2/725677994/TB2vZTst5pnpuFjSZFIXXXh2VXa_!!725677994.jpg',
  'https://img.alicdn.com/imgextra/i2/725677994/TB2fF98qMRkpuFjy1zeXXc.6FXa_!!725677994.jpg',
  'https://img.alicdn.com/imgextra/i3/725677994/TB2AOePqR0kpuFjy1zdXXXuUVXa_!!725677994.jpg',
  'https://img.alicdn.com/imgextra/i2/3596644727/O1CN01QJy3ak1kn0jPFwvSc_!!3596644727-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i1/725677994/TB2y8vghxtmpuFjSZFqXXbHFpXa_!!725677994.jpg',
  'https://img.alicdn.com/tfs/TB1.CUdsY9YBuNjy0FgXXcxcXXa-1572-394.png',
]
const fname=[
  '无敌牌 中毒牌 魔法牌 三鹿牌 死神牌 圣诞牌',
  '进口 本地 土特产',
  '美味 难吃 有毒 送礼首选',
  '巧克力 牛奶 黑巧克力 白巧克力',
]
const fde=[
  '非凡口感 入口即化 优质奶源 细腻幼滑 浓郁甜蜜 约含16粒',
  '浓郁焦糖 嚼劲十足 独立包装 方便携带 三种口味共享',
  '官方正品直销 费列罗爆款 特惠甜蜜共享 婚庆喜糖礼盒',
  '新鲜到货 乐享随心 精心研磨 口味更佳 欢聚必备 婚庆喜糖礼盒'
]

const digitalurl=[
  'https://img.alicdn.com/bao/uploaded/i3/725677994/O1CN01QqEB1X28vIiuKjHAU_!!0-item_pic.jpg_160x160.jpg',
  'https://img.alicdn.com/bao/uploaded/i4/725677994/O1CN01kQTVSc28vIivYjB2X_!!0-item_pic.jpg_160x160.jpg',
  'https://img.alicdn.com/bao/uploaded/i3/725677994/O1CN01Rzl2J028vIj1dVyV9_!!0-item_pic.jpg_160x160.jpg',
  'https://img.alicdn.com/bao/uploaded/i1/725677994/O1CN01PVqwyq28vIivX5nvV_!!0-item_pic.jpg_160x160.jpg',
  'https://img.alicdn.com/bao/uploaded/i2/725677994/O1CN01d1q4UE28vIivTlA3N_!!0-item_pic.jpg_160x160.jpg',
  'https://img.alicdn.com/bao/uploaded/i3/725677994/O1CN01gZHT1P28vIipgLe0k_!!0-item_pic.jpg_160x160.jpg',
  'https://img.alicdn.com/bao/uploaded/i4/725677994/O1CN01XD62B828vIixUjl20_!!0-item_pic.jpg_160x160.jpg',
  'https://img.alicdn.com/bao/uploaded/i2/725677994/O1CN01wtCzUv28vIixkPXVu_!!0-item_pic.jpg_160x160.jpg',
  'https://img.alicdn.com/bao/uploaded/i2/725677994/O1CN01I0ztdK28vIizJWdH7_!!0-item_pic.jpg_160x160.jpg',
  'https://img.alicdn.com/bao/uploaded/i2/3596654856/O1CN017NuP7o1lk5rysE38t_!!3596654856-0-scmitem6000.jpg_160x160.jpg',
  'https://img.alicdn.com/bao/uploaded/i3/725677994/O1CN012ENJH628vIj1q81Up_!!0-item_pic.jpg_160x160.jpg',
]
const digitalsurl=[
  'https://img.alicdn.com/imgextra/i3/725677994/O1CN01QqEB1X28vIiuKjHAU_!!0-item_pic.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i2/725677994/O1CN01myCgcv28vIiDKiEBE_!!725677994.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i3/725677994/O1CN01nEBdkh28vIihsuuHV_!!725677994.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i2/725677994/O1CN01ynibpm28vIgAxzKS0_!!725677994.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i2/725677994/O1CN01OlmZht28vIgBKDjRB_!!725677994.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i4/725677994/O1CN01kQTVSc28vIivYjB2X_!!0-item_pic.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i1/725677994/O1CN01NYKXaw28vIihJLoPI_!!725677994.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i2/725677994/TB2bQ_htXGWBuNjy0FbXXb4sXXa_!!725677994.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i3/725677994/TB2pKxMtDJYBeNjy1zeXXahzVXa_!!725677994.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i1/725677994/TB2w7LtteuSBuNjSsplXXbe8pXa_!!725677994.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i3/725677994/O1CN01Rzl2J028vIj1dVyV9_!!0-item_pic.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i1/725677994/O1CN01u6Kcf328vIdEsItnS_!!725677994.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i3/725677994/TB2D61.mCBYBeNjy0FeXXbnmFXa_!!725677994.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i2/725677994/TB26pF0mr5YBuNjSspoXXbeNFXa_!!725677994.jpg_60x60q90.jpg',
  'https://img.alicdn.com/imgextra/i4/725677994/TB2ZJcpdZuYBuNkSmRyXXcA3pXa_!!725677994.jpg_60x60q90.jpg'
]
const drl=[
  'https://img.alicdn.com/imgextra/i3/2200645302196/O1CN01pcVU131S5oK5VHG1H_!!2200645302196-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i1/2200645302196/O1CN011mnW4h1S5oK6DziPD_!!2200645302196-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i4/2200645302196/O1CN01I1NBOa1S5oK7iHetI_!!2200645302196-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i2/2200645302196/O1CN010p0UsQ1S5oK9V2J6A_!!2200645302196-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i2/2200645302196/O1CN01VK7EYN1S5oK63LdKo_!!2200645302196-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i3/2200645302196/O1CN01YZJkRP1S5oK7iJs5u_!!2200645302196-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i2/2200645302196/O1CN01ZP8Aul1S5oK8zcnsq_!!2200645302196-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i2/2200645302196/O1CN01vu4gxe1S5oJyKyjCa_!!2200645302196-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i2/2200645302196/O1CN01U3H2aj1S5oJyKzfNU_!!2200645302196-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i1/2200645302196/O1CN01QPuHCh1S5oK6FjOYf_!!2200645302196-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i4/2200645302196/O1CN01wgRe611S5oK3wBAaL_!!2200645302196-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i4/2200645302196/O1CN01vssy1f1S5oK9V370t_!!2200645302196-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i1/2200645302196/O1CN015AY14C1S5oK9wnhnN_!!2200645302196-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i2/2200645302196/O1CN0163kiqQ1S5oK6FiOEr_!!2200645302196-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i2/3664004236/O1CN01adUItq1hA8GXlHZRs_!!3664004236-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i1/3655056020/TB2CCt0aamWBuNjy1XaXXXCbXXa_!!3655056020-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i2/3655056020/TB2mXaoXv6TBKNjSZJiXXbKVFXa_!!3655056020-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i4/3655056020/TB2k0GjXtknBKNjSZKPXXX6OFXa_!!3655056020-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i3/3655056020/TB22EGuXrZnBKNjSZFGXXbt3FXa_!!3655056020-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i1/3655056020/TB2fkB0aeySBuNjy1zdXXXPxFXa_!!3655056020-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i1/3655056020/TB2P8xVaeSSBuNjy0FlXXbBpVXa_!!3655056020-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i1/3655056020/TB2Fg4Sab1YBuNjSszeXXablFXa_!!3655056020-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i2/3655056020/TB2sbrJantYBeNjy1XdXXXXyVXa_!!3655056020-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i2/3655056020/TB2NaekXpooBKNjSZPhXXc2CXXa_!!3655056020-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i3/3655056020/TB2IB8Rak9WBuNjSspeXXaz5VXa_!!3655056020-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i2/3655056020/TB2V9B0ah9YBuNjy0FfXXXIsVXa_!!3655056020-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i4/3655056020/TB2TBivXrsrBKNjSZFpXXcXhFXa_!!3655056020-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i3/3655056020/TB2Y0OrXBnTBKNjSZPfXXbf1XXa_!!3655056020-0-scmitem6000.jpg',
  'https://img.alicdn.com/imgextra/i2/3655056020/TB2g0KjXtknBKNjSZKPXXX6OFXa_!!3655056020-0-scmitem6000.jpg',
]
const dname=[
  '苏泊尔牌 美的牌 泰山牌 玫瑰牌 阿萨牌 东方牌',
  '大容量 安全 耐用 实用 送礼首选',
  '多功能 现代 未来 破旧 远古',
  '开水壶 电饭煲 平底锅 剃须刀'
]
const dde=[
  '304不锈钢无缝内胆 进口温控 防烫防尘 多功能 触摸屏 大火力',
  '爆款直降 速捷烧水 1.7L 售后无忧 全身水洗，干湿两用 旋钮控制',
  '双面加热180°开合 智能提醒 8大菜单 一键排气 七段压力随心调',
  '爆款直降 精品水壶 官方正品 全国联保 20大功能 微电脑预约 内置隔渣滤网 '
]

const query = require('./db')

let id=0,k=0
for(let i =0;i<50;i++){
  k = id+Math.floor(Math.random()*3 + 1)
  for(;id<k;id++){
    buildSql(fname, fde, foodurl,id,'food',foodsurl,fr1)
  }
  k = id+Math.floor(Math.random()*3 + 1)
  for(;id<k;id++){
    buildSql(dname, dde, digitalurl,id,'digital',digitalsurl,drl)
  }
}
function buildSql (name,description,url,id,type,img1,img2) {
  let sql='INSERT INTO product(`price`, `name`, `description`, `url`, `id`, `saleCount`, ' +
    '`leftCount`, `package`, `type`, `rank`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);'
  let price = Math.floor(Math.random()*(10000-10+1)+10);
  let productName=''
  for(let j=0;j<name.length;j++){
    let tname=name[j].split(' ');
    productName+=tname[Math.floor(Math.random()*tname.length)]
  }
  let productDescription=''
  for(let j=0;j<description.length;j++){
    let tDescription = description[j].split(' ');
    productDescription+=tDescription[Math.floor(Math.random()*tDescription.length)]+' '
  }
  let productUrl=url[Math.floor(Math.random()*url.length)]
  productUrl=productUrl.substring(0,productUrl.length-12)
  let saleCount=Math.floor(Math.random()*(100000-10+1)+10);
  let leftCount=Math.floor(Math.random()*(10000-10+1)+10);
  let package='标准套餐:0'
  for(let j=0;j<Math.floor(Math.random()*10);j++){
    package+=' 套餐'+String(j+1)+':'+String(Math.floor(Math.random()*((j+1)*100-j*100+1)+j*100));
  }
  let rank=(Math.random()*(-3)+5).toFixed(1)
  let sqlParams=[price,productName,productDescription,productUrl,id,saleCount,leftCount,package,type,rank]
  query(sql,sqlParams,function (err, result){
    console.log(err)
  })

  sql = 'INSERT INTO img1(`url`, `productID`, `order`) VALUES (?, ?, ?);'
  query(sql,[productUrl,id,1],function (err, result){console.log(err)})
  for(let j = 1;j<5;j++){
    let url=img1[Math.floor(Math.random()*(img1.length))]
    url = url.substring(0,url.length-13)
    sqlParams=[url,id,j+1]
    query(sql,sqlParams,function (err, result){
      console.log(err)
    })
  }
  sql = 'INSERT INTO img2(`url`, `productID`, `order`) VALUES (?, ?, ?);'
  for(let j = 0;j<Math.random()*(10-4+1)+4;j++){
    let url=img2[Math.floor(Math.random()*(img2.length))]
    url.substring(0,url.length-13)
    sqlParams=[url,id,j+1]
    query(sql,sqlParams,function (err, result){
      console.log(err)
    })
  }
}
