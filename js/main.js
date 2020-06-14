$(window).ready(function(){
	/*初始化页面*/
	$(".page").siblings(".pageOne").show();
	/*设置页面宽高*/
	function setBgimgWH(){
		var $width = $(window).outerWidth();
		var $height = $(window).height();
		$("body").width($width);
		$("body").height($height);		
		$(".page").width($width);
		$(".page").height($height);
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
						var $index = $this.index(className) + 1;
						if($index >= $(className).length) $index = $(className).length - 1;
					}else{
						console.log("xiangxia")
						$index = $this.index(className) - 1;
						if($index < 0) $index = 0;
					}
				}
			})
			$(className).css("display","none");
			$(className).eq($index).css("display","block");
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
		mouseJump(".nav li",".page",this)
		
	})
	// 鼠标滚动跳转

	$(window).on("mousewheel",function(event){
		var e = event || window.event;
		var onOff = false;
		var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
		
		          (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
		
		if (delta > 0) {
			onOff = false;
			mouseJump(".page",".nav",this,onOff);
		} else if (delta < 0) {
			onOff = true;
			mouseJump(".page",".nav",this,onOff);
		}
	})
	function jump(){
		// 给页面添加类：添加页面消失动画 
		var $this = $(this);
		var index = $this.index();
	}
})