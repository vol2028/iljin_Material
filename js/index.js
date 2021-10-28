$(function(){


	/* scroll */
	var $animation_elements = $('.animation-element');
	var $window = $(window);

	function check_if_in_view() {
	  var window_height = $window.height();
	  var window_top_position = $window.scrollTop();
	  var window_bottom_position = (window_top_position + window_height);

	  $.each($animation_elements, function() {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top+200;
		var element_bottom_position = (element_top_position + element_height);
		//console.log(element_top_position);

		//check to see if this current container is within viewport
		if ((element_bottom_position >= window_top_position) &&
		  (element_top_position <= window_bottom_position)) {
		  $element.addClass('in-view');
		} else {
		 //$element.removeClass('in-view');
		}
	  });
	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');


	// 레이어팝업
	var bg = $("#bg");

	$(document).on('click',' #bg, .close ', function () {
		bg.fadeOut();
		$('#video-popup div.inner').html('');
		$('#video-popup').hide();
	});

	$('.play_btn').on('click', function(){
		
		var dataUrl = $(this).attr('data-url');
		if(dataUrl){
			bg.show();
			$('#video-popup').show();
			$('#video-popup').html(
				'<div class="popup-close">'+
				'<img src="/img/common/video_popup_close.png" alt="close" class="close"></div>'+
				'<div class="inner">'+
				'</div>'
			);
			$('#video-popup div.inner').html(dataUrl);
		}else {
			alert('준비중 입니다.');
		}
	});


});