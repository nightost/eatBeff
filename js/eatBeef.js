$(function(){
	//点击我吃
	$(".start-eat").bind("touchstart mousedown",function(){
		$(this).addClass("start-eat-hover");
	});
	$(".start-eat").bind("touchend mouseup",function(){
		$(this).removeClass("start-eat-hover");
	});
	//吃牛肉的循环逻辑
	
});