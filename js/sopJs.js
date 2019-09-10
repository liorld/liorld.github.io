/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-15 15:20:50
 * @version $Id$
 */

$(function(){
	$("body").on('click','.switchTab .TabHead span',function(){
		$(this).addClass('on').siblings().removeClass('on');
	    var index = $(this).index();
	    number = index;
	    $(this).parents(".switchTab").find('.TabBody .TabItem').hide();
	    $(this).parents(".switchTab").find('.TabBody .TabItem:eq('+index+')').show();
	  });

	$(".slidetoggle li").click(function(){
		if($(this).hasClass('current')){
			$(this).removeClass('current');
		}else{
			$(this).addClass('current');
		}
	});

	var validCode=true;
	$(".msgs").click (function  () {
		var time=30;
		var code=$(this);
		if (validCode) {
			validCode=false;
			code.addClass("conts");
		var t=setInterval(function  () {
			time--;
			code.html(time+"秒");
			if (time==0) {
				clearInterval(t);
			code.html("重新获取");
				validCode=true;
			code.removeClass("conts");

			}
		},1000)
		}
	});

	$(".outcorp").click(function(){
		$(".corpInfo").stop().toggle();
	})

})
