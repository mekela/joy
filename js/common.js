$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

	$.scrollify({
        section : ".scroll_section",
    });

});

function checkPosition() {
    if (window.matchMedia('(max-width: 767px)').matches) {
        $.scrollify.destroy()
    } else {
       $.scrollify.disable()
    }
}

if($(window).innerWidth() <= 751) {
    $.scrollify.destroy()
                                
} else {
    $.scrollify.disable()
}