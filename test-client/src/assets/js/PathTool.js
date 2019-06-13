export default{
    //跳转方法 mode="push" "replace"
    gotoPath(path,mode="push"){
      const modes=["push","replace"]
      if(modes.includes(mode) && path)
        this.$router[mode](path)
      else
        console.log("mode:",mode,"not is:",modes)
    },
    //e是默认的
    //item,mode,path通过createItemMeth绑定
    defItemMeth(e,item,path,mode){
      path=path?path:{path:'/defpage',query:{text:item.text}}
      this.gotoPath(path,mode)
    },
    //放在item初始化里绑定方法和参数
    createItemMeth(fun,...rest){
      let params=[].slice.call(rest)
      return function(e,item){
        if(fun)//这里做判断和数据绑定
          fun(e,item,...params)
      }
    },
    createDefItemMeth(path,mode){
      return this.createItemMeth(this.defItemMeth,path,mode)
    },
    //在dom里绑定的item处理事件
    itemEvent(event,item){
      if(item.meth)
        item.meth(event,item)
	 },
	}