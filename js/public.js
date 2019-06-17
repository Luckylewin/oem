$(function(){
	$(".language").click(function(){
		if($(".language").hasClass('active')){
			$(".language").removeClass("active");
			$(".language_ul").css("height","0");
		} else {
			$(".language").addClass("active");
			$(".language_ul").css("height","auto");
		}
	});
	
	$(".search_icon").click(function(){
		$(".search_ipt").animate({"width":"100%","padding-left":"40px"})
	});
});