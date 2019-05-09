const COOKIE_NAME="__MOCKDB__"
const MOCKDB_TYPE=["db","session"]
// date: str or new data
// time: "days" "h:min:s" "days h:min:s"
//       "-days" "-h:min:s" "-days h:min:s"
function dateMethod(date,time){
  let date_=date===""?new Date():new Date(date)
  let stime=[],dayStr="",timeStr=""
  let day_ms=0,time_ms=0,sign=1
  if(date_.toString()==="Invalid Date" ||
    typeof(time)!="string")
    return
  if(time[0]==="-"){
    sign=-1
    time=time.slice(1)
  }

  stime=time.split(" ")
  if(stime.length>2)
    return
  if(stime.length==2){
    dayStr=stime[0]
    timeStr=stime[1]
  }else{
    if(stime[0].includes(":"))
      timeStr=stime[0]
    else
      dayStr=stime[0]
  }
  if(dayStr)
    day_ms=parseInt(dayStr)*86400000
  if(timeStr)
    time_ms=(new Date("1970/1/1 "+timeStr)).getTime()+8*3600000
  return new Date(date_.getTime()+day_ms*sign+time_ms*sign)
}

// path: "/path/""
function setCookie(c_name,value,time,path){
  document.cookie=c_name+ "=" +escape(value)+
    ((time==null) ? "" : ";expires="+dateMethod("",time).toGMTString())+
    (path ? "": ";path="+path)
}
function getCookie(c_name){
  if (document.cookie.length>0){
    c_start=document.cookie.indexOf(c_name + "=")
    if (c_start!=-1){ 
      c_start=c_start + c_name.length+1 
      c_end=document.cookie.indexOf(";",c_start)
      if (c_end==-1) c_end=document.cookie.length
        return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
  return ""
}

function objectGetProp(obj,name){
  let names=[],point=obj,i=0
  if(typeof name === "string")
    names=name.split('.')
  else if(typeof name === "array")
    names=name
  for(i=0;i< names.length;i++){
    point=point[names[i]]
    if(point===undefined)
      break
  }
  return [point,parseInt(i)]
}
function objectSetProp(obj,name,value){
  let names=[],point=obj,i=0
  if(typeof name === "string")
    names=name.split('.')
  else if(typeof name === "array")
    names=name
  for(i=0;i< names.length-1;i++){
    if(point[names[i]]===undefined)
      point[names[i]]={}
    point=point[names[i]]
  }
  point[names[i]]=value
  return obj
}

function mockDBGetCookie(name){
  let temp=getCookie(COOKIE_NAME)
  temp=JSON.parse(temp?temp:"{}")
  if(name)
    return objectGetProp(temp,name)
  else
    return temp
}
function mockDBSetCookie(name,value,time){
  let temp=mockDBGetCookie()
  objectSetProp(temp,name,value)
  setCookie(COOKIE_NAME,JSON.stringify(temp),time,"/")
}

function mockDBGet(name,type="session"){
  if(!MOCKDB_TYPE.includes(type))
    return
  return mockDBGetCookie(type+"."+name)
}
function mockDBSet(name,value,type="session",time){
  if(!MOCKDB_TYPE.includes(type))
    return
  mockDBSetCookie(type+"."+name,value,time)
}

export default{
  save(data,type="data"){

    const TYPES=["data","session"]
    if(TYPES.indexOf(type)!=true)
      return
    

  },

}