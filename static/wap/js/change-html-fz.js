function change_html_fz(){
	var default_width = 640;
	//设计稿宽度

	var default_percentage = 625;
	// var default_font_size = 100;
	var device_width = $(window).width();
	device_width = device_width > default_width ? default_width : device_width;
	var font_size = default_percentage * device_width / default_width;
	// var font_size = default_font_size * device_width / default_width;
	$('html').css('font-size',font_size+'%');
	// $('html').css('font-size',font_size+'px');

	//最大宽度时，html 的 font-size 设为 100 px;( 16*625% = 100 )
	//页面内容的尺寸单位用 rem
}

jQuery(document).ready(function($) {
	change_html_fz();
});
$(window).resize(function(event) {
	change_html_fz();
});