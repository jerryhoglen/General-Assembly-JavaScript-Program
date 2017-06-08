var btn = (function(){
	$('button').on('click',function() {
		$('body').css("background-color", "purple");
		});
	$('button').dblclick(function() {
		$('body').css("background-color", "orange");
	});
});
$(btn)