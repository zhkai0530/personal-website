$(window).ready(function(){
	
	/*封装函数--获取可视页面宽高*/
	function getSize(){
		var whValue = new Object;
		whValue.$width = $(window).outerWidth();
		whValue.$height = $(window).height();
		return whValue;
	}
	
	/*初始化页面*/
	$(".page").siblings(".pageOne").show();
	
	/*设置页面宽高*/
	function setBgimgWH(){
		var widHei = getSize();
		$("body").width(widHei.$width);
		$("body").height(widHei.$height);		
		$(".page").width(widHei.$width);
		$(".page").height(widHei.$height);
	}
	setBgimgWH();
	$(window).resize(function(){
		setBgimgWH();
	})
	
	/*封装函数-页面跳转*/
	function mouseJump(className,className2,obj,onOff,event){
		var e = window.event || event;
		var $this = $(obj);
		var $index;
		if(e.type == "mousewheel"){
			$(className).each(function(){
				var $this = $(this);
				if($this.css("display")=="block"){
					if(onOff){
						console.log("xiangshang")
						$index = $this.index(className) + 1;
						if($index >= $(className).length) $index = $(className).length - 1;
					}else{
						console.log("xiangxia")
						$index = $this.index(className) - 1;
						if($index < 0) $index = 0;
					}
				}
			})
			$(className).css("display","none");
			$(className2).removeClass("active");
			$(className).eq($index).css("display","block");
			$(className2).eq($index).addClass("active");
		}else if(e.type == "click"){
			$(className2).hide();
			var index = $this.index();
			$(className2).eq(index).show();
			$(className).removeClass("active");
			$this.addClass("active");
		}
	}
	
	// 点击跳转
	$(".nav li").on("click",function(){
		mouseJump(".nav li",".page",this);
	})
	
	// 鼠标滚动跳转
	$(window).on("mousewheel",function(event){
		var e = event || window.event;
		var onOff = false;
		var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
		
		          (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
		
		if (delta > 0) {
			onOff = false;
			mouseJump(".page",".nav li",this,onOff);
		} else if (delta < 0) {
			onOff = true;
			mouseJump(".page",".nav li",this,onOff);
		}
	})
	
/*作品展示页*/
/*-*/
	$("img").on("click",function(){
		var widHei = getSize();
		$(this).css({position:"relative",margin:"0 auto"}).animate({
			// top:widHei.$height * -0.25 + "px",
			// left:widHei.$width * -0.2 + "px",
			// // height:widHei.$height * 0.5 + "px",
			width:widHei.$width * 0.7 + "px"
		},1000,function(){})
	})
	
	/*
	* 宽1600px
	* 字体大小：4*4=16px
	* 一行字的数量：100个
	* rem单位：1rem
	* html字号：16px

	* 设计宽度980px->1200px
	* 字体大小24px
	* 一行字的数量40
	* rem单位1.5rem
	* html字号16px -> 30px

	* 1200/40/1.5

	1、获取页面宽度
	2、计算一行字的数量
	3、默认字体大小16px
	
	function getSize(){
	    var obj = new Object;
	    obj.$width = document.body.clientWidth;
	    obj.$height = document.body.clientHeight;
	    return obj;
	}
	function setFontSize(){
	    var obj = getSize();
	    var fontShuliang = 40;
	    var fontSizeRem = obj.$width / fontShuliang / 16;
	    var fontSize = obj.$width / fontShuliang / fontSizeRem;
	    var htmlFS = document.getElementsByTagName("html")[0];
	    htmlFS.style.fontSize = fontSize;
	}
	window.onresize = function(){
	    setFontSize();
	}
	
	*/
   function getSize(){
       var obj = new Object;
       obj.$width = window.screen.availWidth;
       obj.$height = window.screen.availHeight;
       return obj;
   }
   function setFontSize(){
       var obj = getSize();
       var fontShuliang = 40;
       var fontSizeRem = obj.$width / fontShuliang / 16;
       var fontSize = obj.$width / fontShuliang / fontSizeRem;
       var htmlFS = document.getElementsByTagName("html")[0];
       htmlFS.style.fontSize = fontSize + "px";
	   console.log("width:"+obj.$width)
	   console.log("height:"+obj.$height)
	   console.log("htmlFS.style.fontSize:"+htmlFS.style.fontSize)
   }
   window.onresize = function(){
       setFontSize();
   }
})