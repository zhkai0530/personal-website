$(window).ready(function(){
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
})