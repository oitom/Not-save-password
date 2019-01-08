$("#pass").keyup(function() { 
	if($(this).val().length == 0)
		$(this).css('font-family', 'inherit');
	else	
		$(this).css('font-family', 'password');
});

$("#pass").focus(function() { 
	if($(this).val().length == 0)
		$(this).css('font-family', 'inherit');
	else	
		$(this).css('font-family', 'password');
});

$(document).ready(function() {
	$("#pass").focus();
	
	setTimeout(function(){ 
		$("#email").focus();
	},10);
});
