export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }

  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function removeClass(el, className) {
  if (!hasClass(el, className)) {
    return
  }

  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
  el.className = el.className.replace(reg, ' ')
}

export function getData(el, name, val) {
  let prefix = 'data-'
  if (val) {
    return el.setAttribute(prefix + name, val)
  }
  return el.getAttribute(prefix + name)
}

export function getRect(el) {
  if (el instanceof window.SVGElement) {
    let rect = el.getBoundingClientRect()
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    }
  } else {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    }
  }
}

//获取元素绝对位置  
export function getAbsPosition(element){
  var abs={x:0,y:0}  
  //如果浏览器兼容此方法  
  if (document.documentElement.getBoundingClientRect){
    //注意，getBoundingClientRect()是jQuery对象的方法
    //如果不用jQuery对象，可以使用else分支。
    abs.x = element.getBoundingClientRect().left;
    abs.y = element.getBoundingClientRect().top;
      
    abs.x += window.screenLeft +
                document.documentElement.scrollLeft -
                document.documentElement.clientLeft;
    abs.y += window.screenTop +
                document.documentElement.scrollTop -
                document.documentElement.clientTop;
  }else{//如果浏览器不兼容此方法
      while(element!=document.body){
          abs.x+=element.offsetLeft;
          abs.y+=element.offsetTop;
          element=element.offsetParent;
      }
   //计算想对位置
   abs.x += window.screenLeft +
          document.body.clientLeft - document.body.scrollLeft;
   abs.y += window.screenTop +
          document.body.clientTop - document.body.scrollTop;
  }
  return abs;  
} 