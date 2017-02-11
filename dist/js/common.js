//slider
;$(document).ready(function(){
  $('.bxslider').bxSlider();
});

//accordion
;$(".accordion__content").hide().prev().click(function() {
	$(this).parents(".accordion").find(".accordion__content").not(this).slideUp().prev().removeClass("active");
	$(this).next().not(":visible").slideDown().prev().addClass("active");
});
