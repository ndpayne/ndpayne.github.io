$('#about').click(function(){
	$('#welcome-container').fadeOut(300,function(){
		$('#about-container').fadeIn(300, function(){
			$('#about-text').fadeIn(300);
		});				
	});	
});

$('#welcome').click(function(){
	$('#about-container').fadeOut(300,function(){
		$('#welcome-container').fadeIn(300);
		$('#about-text').css('display', 'none');
	});	
});