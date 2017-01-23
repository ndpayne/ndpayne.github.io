$('#about').click(function(){
	$('#welcome').css('text-shadow', 'none');
	$('#about').css('text-shadow', '.03em .04em #F00');
	$('#welcome-container').fadeOut(300,function(){
		$('#about-container').fadeIn(300, function(){
			$('#about-text').fadeIn(300);
		});				
	});	
});

$('#welcome').click(function(){
	$('#about').css('text-shadow', 'none');
	$('#welcome').css('text-shadow', '.03em .04em #F00');	
	$('#about-container').fadeOut(300,function(){
		$('#welcome-container').fadeIn(300);
		$('#about-text').css('display', 'none');
	});	
});