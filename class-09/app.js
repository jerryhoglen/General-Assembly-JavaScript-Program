$(function() {

	var $favList = $('#fav-list')

	$favList.on('mouseenter', 'li', function(e){
		console.log(e.pageX, e.pageY);
		$(this).addClass('hover');
	})

	$favList.on('mouseleave', 'li', function(e){
		console.log(e.pageX, e.pageY);
		$(this).removeClass('hover');
	})
	var $elem = $('<li><a href="#">Hurfdurf</a></li>');
});