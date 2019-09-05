
$('.line_up').click(function(){
	$('.carousel_ul').css({"transform":"translateY(0)"});
	$('#ceil_1').css({"background-color":"grey"});
	$('#ceil_2').css({"background-color":"white"});
});
$('.line_down').click(function(){
	
		$('.carousel_ul').css({"transform":"translateY(-500px)"});
		$('#ceil_2').css({"background-color":"grey"});
	$('#ceil_1').css({"background-color":"white"});
});