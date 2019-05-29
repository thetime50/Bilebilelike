export default{
  getStyle: function(node, styleType){
    return node.currentStyle? node.currentStyle[styleType]: getComputedStyle(node)[styleType];//浏览器中有node.currentStyle方法就用，没有就用另一个
  },
  length2px: function(ilength,isHeight){
    let isPx= (s)=>{return /^\d+\.?\d*px$/.test(s)}
    let isRem= (s)=>{return /^\d+\.?\d*rem$/.test(s)}
    let isPer= (s)=>{return /^\d+\.?\d*%$/.test(s)}
    if(typeof(ilength)!="string")
      return NaN
    ilength=ilength.toLowerCase()
    if(isPx(ilength)){
      return parseFloat(ilength.slice(0,-2))
    }else if(isRem(ilength)){
      let ivalue=parseFloat(ilength.slice(0,-3))
      let rem=this.getStyle(document.documentElement,'font-size')
      if(isPx(rem)){//root 的 font-size不能的rem 如果是百分比无法计算
        rem=this.length2px(rem)
        return rem*ivalue
      }
    }else if(isPer(ilength)){
      let ivalue=parseFloat(ilength.slice(0,-1))
      let per100=isHeight?document.body.offsetHeight:document.body.offsetWidth
      return per100*ivalue/100
    }
    return NaN
  },
  timeStr2s: function(tim){
    let isMs= (s)=>{return /^\d+\.?\d*ms$/.test(s)}
    let isM= (s)=>{return /^\d+\.?\d*s$/.test(s)}
    if(typeof(tim)!="string")
      return NaN
    tim=tim.toLowerCase()
    if(isMs(tim)){
      return parseFloat(tim.slice(0,-2))/1000
    }else if(isM(tim)){
      return parseFloat(tim.slice(0,-1))
    }
    return NaN
  },
  isNumber: function(obj) {
    return obj === +obj
  },
  setAttr2Def: function (arrts, def) {
    let obj = { ...def }
    for (let index in arrts) {
      obj[index] = arrts[index]
    }
    return { ...obj }
  },
  autoChNum(num,chCnt=4,type=0){
    // 一是上法,为自乘系统: 万万为亿,亿亿为兆,兆兆为京.
    // 10^4=万, 10^8=亿,10^16=兆,10^32=京 
    // 二是中法,为万进系统,皆以万递进：万 亿 兆 京 垓 秭 穰 沟(土旁) 涧 正 载┅┅(万万为亿 万亿为兆 万兆为京┅┅)
    // 10^4=万, 10^8=亿,10^12=兆,10^16=京 
    // 三是下法,为十进系统,皆以十递进： 万 亿 兆 京 垓 秭┅┅到了近代,
    // 即个 十 百 千 万 亿 兆 京 垓 秭 穰 沟(土旁) 涧 正 载 报,
    // 皆以十进,10万为亿,10亿为兆,10兆为京.；10^4=万, 10^5=亿,10^6=兆,10^7=京 

    //数值位数 小数点位置？
    let cnNumStr=num+""
    let decCnt=cnNumStr.length
    let chStr=""
    let chArr=[ "","十","百","千"]
    // modern
    let chArrM_0=[ "","千","兆","千兆","太","拍","艾","泽","尧","B","N","D"]
    let chArrM_1=[ "","k","M","G","T","P","E","Z","Y","B","N","D"]
    // ancient
    let chArrnA=[ "","万","亿","兆","京","垓","秭","穰","㘬","涧","正","载","报"]
    if(type==0){//M_0
    }else if(type==1){//M_1

    }else if(type==2){
      if(decCnt>8){
        chStr=chArrnA[2]
        cnNumStr=(decCnt%8<chCnt ? (num/10**8+""):cnNumStr).slice(0,chCnt)+chStr
      }else if(decCnt>4){
        chStr=chArrnA[1]
        cnNumStr=(decCnt%4<chCnt ? (num/10**4+""):cnNumStr).slice(0,chCnt)+chStr
      }//后面要用递归了

    }else if(type==3){

    }else if(type==4){

    }
    return cnNumStr
  },
}