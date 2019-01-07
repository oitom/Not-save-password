$("#pass").keyup(function() { 
	if($(this).val().length == 0)
		$(this).css('font-family', 'inherit');
	else	
		$(this).css('font-family', 'password');
});