jQuery(function ($) {
    "use strict";
    $("#nav li > a").click(function (e) {
    	e.preventDefault();        
		$("#nav li > a").removeClass('open');
		$(this).addClass('open');
		//run ajax 
		var tpl = $(this).attr('href');		
		tpl = tpl.substring(1,140);				
		$("#content-body").load(tpl + ".html"); 		
    });	
});
jQuery(function ($) {
    "use strict";
    $("#nav .haschild span").click(function (e) {  
		e.preventDefault();		
        var _parent = $(this).parent();
        var _dropdown = _parent.next('ul');        
        if($(this).hasClass('fa-plus')) {
			$(this).removeClass('fa-plus');  	
			$(this).addClass('fa-minus');        	
        	_dropdown.slideDown("normal");
        } else {			
        	$(this).removeClass('fa-minus');
			$(this).addClass('fa-plus');
        	_dropdown.slideUp("normal");        	
        }
		return false;   
    })
    
});
function nav_height() {
	$('nav').height($(window).height());	
}
jQuery(function ($) {
    "use strict";
    $(window).resize(function () {    		
		nav_height();	
			
    });
});	  

$(window).load(function () {      	
	nav_height();	
});
