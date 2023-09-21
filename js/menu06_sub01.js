$(function() {
	$(".free_more_btn").on("click", function() {
		$(this).css({
				visibility: "hidden"
		});
		
		$(".free_all").stop(true).animate({
			height: "1300px"
		}, 100);
	})
})