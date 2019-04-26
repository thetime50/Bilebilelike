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
}