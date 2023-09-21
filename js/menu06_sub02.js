$(function() {
	$("#free_button_01").on("click", function() {
		$(this).css({
			backgroundColor: "#f4f4f4"	
		});
		$("#free_button_01").siblings("div").css({
			backgroundColor: "#fff"
		})
		
		$(".free_time_img_sum").stop(true).animate({
			left: "0px"
		}, 1000);
	})
})

$(function() {
	$("#free_button_02").on("click", function() {
		$(this).css({
			backgroundColor: "#f4f4f4"	
		});
		$("#free_button_02").siblings("div").css({
			backgroundColor: "#fff"
		})
		
		$(".free_time_img_sum").stop(true).animate({
			left: "-1200px"
		}, 1000);
	})
})

$(function() {
	$("#free_button_03").on("click", function() {
		/* var element = $(this) 이용하는 방법도
		   수업해 주면 좋습니다. */
		var element = $(this)
		$(this).css({
			backgroundColor: "#f4f4f4"	
		});
		element.siblings("div").css({
			backgroundColor: "#fff"
		})
		
		$(".free_time_img_sum").stop(true).animate({
			left: "-2400px"
		}, 1000);
	})
})















