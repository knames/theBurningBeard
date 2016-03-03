jQuery(document).ready(function($){
	//open-close submenu on mobile
	$('.cd-main-nav').on('click', function(event){
		if($(event.target).is('.cd-main-nav')) $(this).children('ul').toggleClass('is-visible');
	});
 	$(function(){ 
    	var navMain = $('.cd-main-nav');
    	navMain.on("click", "a", null, function () {
        navMain.children().toggleClass('is-visible');
     });
 });
});
