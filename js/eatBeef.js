$(function(){
	//点击我吃
	$(".start-eat").bind("touchstart mousedown",function(){
		$(this).addClass("start-eat-hover");
	});
	$(".start-eat").bind("touchend mouseup",function(){
		$(this).removeClass("start-eat-hover");
	});
	//吃牛肉的循环逻辑
	$(".start-eat").data("step",1);
	$(".start-eat").bind("click",function(){
		var _step=$(".start-eat").data("step");
		switch(_step){
			case 1:
				showHands(5,1);
				showheads(2);
				$(".start-eat").data("step",2);
				break;
			case 2:
				showHands(_step-1,2);
				showheads(3);
				$(".start-eat").data("step",3);
				break;
			case 3:
				showHands(_step-1,3);
				showheads(2);
				$(".start-eat").data("step",4);
				break;
			case 4:
				showHands(_step-1,4);
				//showheads(4);
				$(".start-eat").data("step",5);
				break;
			case 5:
				showHands(_step-1,5);
				showheads(4);
				$(".start-eat").data("step",1);
				break;
		}
	});
});
/**
*show hands
*/
function showHands(laststep,index){
	var _lastClass="#step-"+laststep;
	var _class="#step-"+index;
	$(_lastClass).css("display","none");
	$(_class).css("display","block");
}
function showheads(index){
	var heads={
		head1:"images/eating/c25.png",
		head2:"images/eating/c27.png",
		head3:"images/eating/c26.png",
		head4:"images/eating/c28.png"
	};
	$(".head").attr("src",heads["head"+index]);
}