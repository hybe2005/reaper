//Google analytics
document.write('<script async src="https://www.googletagmanager.com/gtag/js?id=UA-141046501-1"></script>');
window.dataLayer = window.dataLayer || [];
function gtag(){
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-141046501-1');

//Splash
//$(function(){
//$('body').prepend('<div id="splash"></div>');
//});
//$(document).on('ready', function() {
//$('#splash').fadeOut('1000');
//});


$(document).on('ready', function() {
//header menu
	var $header = $('.header');
	$(window).scroll(function() {
//		if ($(window).scrollTop() > 60) {
		if ($(window).scrollTop() > 1) {
			$header.addClass('scroll');
		} else {
			$header.removeClass('scroll');
		}
	});
var humbergeropend = false;
$(".humberger-switch").click("on", function(){
	if(humbergeropend){
		$(".humberger-area").slideUp(function(){
			$(window).resize(function(){
					var x = $(window).width();
					var y = 1079;
					if (x <= y) {
						$(".humberger-area").css("display","none");
					} else {
						$(".humberger-area").css("display","block");
					}
			});
		});
		$(".humberger-switch").removeClass("on");
		$(".header .logoArea").removeClass("on");
		humbergeropend = false;
	}else{
		$(".humberger-area").slideDown(function(){
			$(window).resize(function(){
				$(".humberger-area").css("display","block");
			});
		});
		$(".humberger-switch").addClass("on");
		$(".header .logoArea").addClass("on");
		humbergeropend = true;
	}
});
});
$(function(){
//繝壹�繧ｸ荳企Κ縺ｫ謌ｻ繧�
$('a[href^=#up]').click(function() {
	var speed = 400;
	var href= $(this).attr("href");
	var target = $(href == "#up" || href == "" ? 'html' : href);
	var position = target.offset().top;
	$('body,html').animate({scrollTop:position}, speed, 'swing');
	return false;
});

//繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ譎� categoryArea菴咲ｽｮ隱ｿ謨ｴ
var $contentsArea = $('.contents.sub');
$(window).scroll(function() {
	if ($(window).scrollTop() > 1) {
		$contentsArea.addClass('scroll');
	} else {
		$contentsArea.removeClass('scroll');
	}
});

//clearfix 莉伜刈
$(".product-box").addClass("clearfix");
$(".row").addClass("clearfix");
$(".row03").addClass("clearfix");

//inquiry
$(".formSupport select").hide();
$(".support-select").change(function() {
	var extraction_val = $('.support-select').val();
	if(extraction_val == "繝輔ぃ繝ｳ繧ｯ繝ｩ繝悶↓縺､縺�※") {
		$('.type-fc').show();
		$('.type-ec').hide().val("");
		$('.type-other').hide().val("");
	}else if(extraction_val == "FC SHOP縺ｫ縺､縺�※") {
		$('.type-fc').hide().val("");
		$('.type-ec').show();
		$('.type-other').hide().val("");
	}else if(extraction_val == "縺昴�莉�") {
		$('.type-fc').hide().val("");
		$('.type-ec').hide().val("");
		$('.type-other').show();
	}
});
$(window).on('load', function() {
	var extraction_val = $('.support-select').val();
	if(extraction_val == "繝輔ぃ繝ｳ繧ｯ繝ｩ繝悶↓縺､縺�※") {
		$('.type-fc').show();
		$('.type-ec').hide().val("");
		$('.type-other').hide().val("");
	}else if(extraction_val == "FC SHOP縺ｫ縺､縺�※") {
		$('.type-fc').hide().val("");
		$('.type-ec').show();
		$('.type-other').hide().val("");
	}else if(extraction_val == "縺昴�莉�") {
		$('.type-fc').hide().val("");
		$('.type-ec').hide().val("");
		$('.type-other').show();
	}
});
});
//NEWS讀懃ｴ｢

//繧ｵ繝悶Γ繝九Η繝ｼ髢｢騾｣
$(window).on('load resize', function() {
//categorArea縺ｾ縺溘�category-title縺ｮ鬮倥＆繧貞叙蠕�
var windowWidth = $(window).width();
var categoryAreaUl = $('.categoryArea ul').outerHeight();
var categoryTitle = $('.category-title').outerHeight();
//categoryArea縺ｨ縺ｮ髢馴囈隱ｿ謨ｴ繧偵☆繧狗ｮ�園繧剃ｻ･荳九↓險倩ｼ�
var contentsWrapper = $('.categoryArea').next('.wrapper');
var detailNewsArea = $('.contents.sub.news.detail > .newsArea');
var detailScheduleArea = $('.contents.sub.schedule.detail > .scheduleArea');
var detailGalleryTitle = $('.contents.sub.gallery > .category-title');
var detailSpecialTitle = $('.contents.sub.special .categoryArea').next('.wrapper');
var detailCornerArea = $('.contents.sub.corner.detail > .cornerArea');
var aboutContents = $('.contents.sub.about_contents > .descriptionArea');
var registContents = $('.regist_contents .wrapper');
var inquiryContents = $('.contents.sub.inquiry .wrapper');
//髢馴囈隱ｿ謨ｴ縺ｮ險ｭ螳�
if( windowWidth > 1280 ) {//繧ｦ繧｣繝ｳ繝峨え繧ｵ繧､繧ｺ縲1280px莉･荳�
	contentsWrapper.css({'padding-top':(categoryAreaUl + 40)});
	detailNewsArea.css({'padding-top':(categoryAreaUl)});
	detailScheduleArea.css({'padding-top':(categoryAreaUl)});
	detailGalleryTitle.css({'padding-top':(categoryAreaUl)});
	detailSpecialTitle.css({'padding-top':(categoryAreaUl)});
	detailCornerArea.css({'padding-top':(categoryAreaUl)});
	registContents.css({'padding-top':(40 + 35)});//categoryArea縺後↑縺�
	inquiryContents.css({'padding-top':(40 + 35)});//categoryArea縺後↑縺�
//	aboutContents.css({'padding-top':(categoryAreaUl)});
} else if( windowWidth > 1079 ) {//繧ｦ繧｣繝ｳ繝峨え繧ｵ繧､繧ｺ縲1279~1079px
	contentsWrapper.css({'padding-top':(categoryAreaUl + 40)});
	detailNewsArea.css({'padding-top':(categoryAreaUl)});
	detailScheduleArea.css({'padding-top':(categoryAreaUl)});
	detailGalleryTitle.css({'padding-top':(categoryAreaUl)});
	detailSpecialTitle.css({'padding-top':(categoryAreaUl)});
	detailCornerArea.css({'padding-top':(categoryAreaUl)});
	registContents.css({'padding-top':(24)});//categoryArea縺後↑縺�
	inquiryContents.css({'padding-top':(40 + 35)});//categoryArea縺後↑縺�
//	aboutContents.css({'padding-top':(categoryAreaUl)});
} else {//繧ｦ繧｣繝ｳ繝峨え繧ｵ繧､繧ｺ縲1078px莉･荳�
	contentsWrapper.css({'padding-top':(categoryAreaUl + 40)});
	detailNewsArea.css({'padding-top':(categoryAreaUl)});
	detailScheduleArea.css({'padding-top':(categoryAreaUl)});
	detailGalleryTitle.css({'padding-top':(categoryAreaUl)});
	detailSpecialTitle.css({'padding-top':(categoryAreaUl)});
	detailCornerArea.css({'padding-top':(categoryAreaUl)});
	registContents.css({'padding-top':(24)});//categoryArea縺後↑縺�
	inquiryContents.css({'padding-top':(40 + 35)});//categoryArea縺後↑縺�
//	aboutContents.css({'padding-top':(categoryAreaUl)});
}
});
//click
document.oncontextmenu = function() {
	if(document.URL.match(/hashtag08\/write.php/)){
		return true;
	}
	else{
		return false;
	}
};
document.ondragstart = function() {
	return false;
};