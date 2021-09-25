$(function(){
    $('a[href^=#]').click(function(){
        var speed = 700;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

});

$(function() {
	$(window).scroll(function(){
        
		if ($(window).scrollTop() > 200) {
			$("#page-top").fadeIn();
		} else {
			$("#page-top").fadeOut();
		}
	});
	$("#page-top").click(function () {
		$("html,body").animate({scrollTop:0}, 200);
	});
});

