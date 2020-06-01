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
	/*页面跳转*/
	$(".nav li").click(function(){
		$(".page").hide();
		var index = $(this).index();
		$(".page").eq(index).show();
	})
	$(window).on("mousewheel",function(event){
		var e = event || window.event;
		var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
		
		          (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
		
		if (delta > 0) {
			console.log("wheelup");
		} else if (delta < 0) {
			if($(".page").show()){
				console.log($(this).index())
			}
		}
	})
	function jump(){
		// 给页面添加类：添加页面消失动画 
		var $this = $(this);
		var index = $this.index();
	}
})