$(document).on('click', 'a[href="#none"]', function(e) {
	e.preventDefault();
});

$(function(){

	//팝업
	var bg = $("#bg");

	$(document).on('click',' #bg, .close ', function () {
		bg.fadeOut();
		$('div[id*="-popup"] div.innerwrap').html('');
		$('div[id*="-popup"]').hide();
	});

	//popup_type1 - 기본
	$(document).on('click','.inquiry_btn', function () {
		var ClassName = $(this).data('link');

		bg.show();
		$('#con-popup').show();
		$('#con-popup').html(
			'<div class="popup_close">'+
			'<img src="../img/common/popup_close_black.png" alt="close" class="close"></div>'+
			'<div class="innerwrap">'+
			'</div>'
		);

		switch (ClassName) {
			case "inquiry1":
				$("#con-popup div.innerwrap").load("../_inquiryform.php");
			break;
		}
	}); 


	//popup_type2 - overflow : scroll
	$(document).on('click','footer .privacy_list .p_link2', function () {
		var ClassName = $(this).data('link');

		bg.show();
		$('#con2-popup').show();
		$('#con2-popup').html(
			'<div class="popup_close">'+
			'<img src="../img/common/popup_close_black.png" alt="close" class="close"></div>'+
			'<div class="innerwrap">'+
			'</div>'
		);

		switch (ClassName) {
			case "report1":
				$("#con2-popup div.innerwrap").load("/_reportform.php");
			break;
		}
	}); 

	//popup_type3 fixed
	$(document).on('click','footer .privacy_list .p_link1', function () {
		var ClassName = $(this).data('link');

		bg.show();
		$('#con3-popup').show();
		$('#con3-popup').html(
			'<div class="popup_close">'+
			'<img src="../img/common/popup_close_black.png" alt="close" class="close"></div>'+
			'<div class="innerwrap">'+
			'</div>'
		);

		switch (ClassName) {
			case "email1":
				$("#con3-popup div.innerwrap").load("/_email.php");
			break;
		}
	}); 


});

			