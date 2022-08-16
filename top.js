//Splash setting
//var period = 1; // 譛牙柑譛滄剞譌･謨ｰ
$(function() {
// 1蝗樒岼縺ｮ繧｢繧ｯ繧ｻ繧ｹ
//if($.cookie('btssplash') == undefined) {
	// cookie霑ｽ蜉�
//	$.cookie('btssplash', 'on', { expires: period });

	// 繝｡繝�そ繝ｼ繧ｸ縺ｮ陦ｨ遉ｺ
	$('body').append('<div id="splash"><div class="bts-logo"></div></div>');

// 2蝗樒岼莉･髯阪�繧｢繧ｯ繧ｻ繧ｹ
//} else {

//}
});


$(document).on('ready', function() {
//譚｡莉ｶ�壹Γ繧､繝ｳ繝薙ず繝･繧｢繝ｫ縺�1譫壹�縺ｿ陦ｨ遉ｺ迥ｶ諷�
var visualImg = $('#mainVisualArea ul li').length;
if(visualImg == 1){
	$('#mainVisualArea .mainVisual-wrapper').addClass('visual-transform');
}
//Splash setting
$('#splash .bts-logo').delay(900).fadeOut(800);
$('#splash').delay(600).fadeOut(300)
//main visual
$('#mainVisualArea ul').slick({
	infinite: true,
	arrows: true,
	centerMode: true,
	centerPadding: '0px',
	autoplay:true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [{
		breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
		}
	}]
});
});