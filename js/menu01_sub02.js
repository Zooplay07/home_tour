/* 좌측 주황색 테두리 - 연혁이미지 -- */
$(function() {
	$("#history_all").on("mouseover", function() {
		$("#history_all").stop(true).animate({
			height: "1500px"
		}, 1000)
		
		$("#history_02").stop(true).animate({
			top: "1436px"
		}, 1000)
	})
})