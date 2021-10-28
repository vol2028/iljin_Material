$(function(){

	$(".faq .a").hide();
	$(".faq>div").click(function(){
		$(this).toggleClass("on");
		if($(this).attr("class") == "faqwrap on"){
			$(this).find(".a").stop(true,true).slideDown(300, "easeInSine");
		}else{
			$(this).find(".a").stop(true,true).slideUp(300, "easeInSine");
		}
		$(this).siblings().removeClass("on");
		$(this).siblings().find(".a").stop(true,true).slideUp();
		/*$(this).parent().toggleClass("on").siblings(".faqwrap").removeClass("on");
		$(this).next(".a").slideToggle();*/
	
})

	/*tab*/
	$(".tab_box ul li").click(function(){
		tabno = $(".tab_box ul li").index($(this));
		$(this).addClass("on").siblings().removeClass("on");
		$(".tabcon:eq("+tabno+")").show().siblings().hide();
	})
	
	$(".tab_box li").on("click", function (event, tab) {
		$(".affiliate").slick("setPosition");
	});


	// 서브 탭 터치

	var x,y,top,left,down;

	$(".tab_box ul,.m14_tab_box ul").mousedown(function(e){
		e.preventDefault();
		down = true;
		x = e.pageX;
		left = $(this).scrollLeft();
	});

	$("body").mousemove(function(e){
		if(down){
			var newX = e.pageX;
			$(".tab_box ul,.m14_tab_box ul").scrollLeft(left - newX + x);    
		}
	});

	$("body").mouseup(function(e){down = false;});

	// 서브 탭 스크롤
	var pageList = ".tab_box ul,.m14_tab_box ul";
	var pageListFadeEl = ".scroll_fade";
	var pageListItem = ".tab_box ul li,.m14_tab_box ul li";

	$(pageList).on("scroll", function() {
		console.log($(this)[0].offsetWidth);
		var scrollLeft = $(this).scrollLeft();
		var pageListWidth = $(this)[0].scrollWidth - $(this)[0].offsetWidth;

		if(scrollLeft === pageListWidth){
			$(this).siblings(pageListFadeEl).addClass('is-hide');
			//alert("aa")
		} else {
			$(this).siblings(pageListFadeEl).removeClass('is-hide');
		}
	});

	if($(pageListItem).hasClass("on") === true){
		var activeWidth = $(".tab_box ul li.on,.m14_tab_box ul li.on").width();
		var activeOffset = $(".tab_box ul li.on,.m14_tab_box ul li.on").offset().left;
		$(pageList).animate({
			scrollLeft: activeOffset - activeWidth
		}, 300);
	}




	//m50 슬라이드 이미지 팝업
	var bg = $("#bg");

	$(document).on('click',' #bg, .close', function () {
		bg.fadeOut();
		$('.img_popup div.innerwrap').html('');
		$('.img_popup').hide();
	});

	$(document).on('click','.certification_wrap .affiliate li', function () {
		var ClassName = $(this).data('link');
		var popupIndex = $(this).index()+1;

		bg.show();
		$('.m50 .img_popup').show();
	
		$('.m50 .img_popup').html(
			'<div class="popup_close">'+
			'<img src="../img/common/popup_close_black.png" alt="close" class="close"></div>'+
			'<div class="innerwrap">'+
				'<p class="tit"></p>'+
				'<div class="img_area"></div>'+
			'</div>'
		);

		var popupImg = $(this).find('.img_area').html();
		var popupName = $(this).find('p').html();
		$(".img_popup .tit").html(popupName);
		$(".img_popup .img_area").html(popupImg);
	}); 

});