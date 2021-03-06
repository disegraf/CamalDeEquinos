jQuery.noConflict();

jQuery( document ).ready(function( $ ) {
	"use strict";
	
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	
	/*-- HEADER MENU --*/
	var siteMenu = function() {
		if ( windowWidth > 1199 ) {
			
			// Remove Mobile Menu Events
			$(".header-menu *").unbind();
			
			// Actions Desktop
			$(".header-menu .sub").hoverIntent({
				timeout: 100, // milliseconds delay before onMouseOut
				over: function(){
					$(this).addClass("active");
					$(this).children("ul").slideDown("fast");
				}, 
				out: function(){
					$(this).removeClass("active");
					$(this).children("ul").slideUp("fast");
				}
			});
		}
		else {
			
			// Remove Desktop Menu Events
			$(".header-menu *").unbind();
			
			// Actions Mobile
			$(".header-menu .sub > a").click(function(e){
				e.preventDefault();
				
				$(".header-menu li ul").slideUp("normal");
				$(".header-menu li").removeClass("active");
				
				var element = $(this).siblings("ul");
			
				if ( element.is(":visible") ) {
					element.slideUp("normal");
					$(this).parent().removeClass("active");
				}
				else {
					element.slideDown("normal");
					$(this).parent().addClass("active");
				}
			});
		}
	};
	/*-- HEADER MENU END --*/
	
	/*-- HEADER TOGGLE --*/
	$(".site-toggle").click(function(e){
		e.preventDefault();
		
		var menu = $(".site-header");
		var button = $(".site-toggle");
		
		if( $(menu).is(":visible") ) {
			$(menu).animate({ "left": "-200px" }, 200, function(){
				$(menu).hide();
				$("body").removeClass("sidebar-on");
			});
			$(button).animate({ "left": "0px" }, 200);
		}
		else {
			$("body").addClass("sidebar-on");
			$(menu).show();
			$(menu).animate({"left": "0px"}, {duration: 200, queue: false});
			$(button).animate({"left": "200px"}, {duration: 200, queue: false});
		}
	});
	
	var siteToggle = function() {
		if ( windowWidth > 1199 ) {
			
			// Remove Styles
			$(".site-toggle, .site-header, .header-menu ul").removeAttr("style");
			
			// Remove Classes
			$(".header-menu li").removeClass("active");
			$("body").removeClass("sidebar-on");
			
		}
	};
	/*-- HEADER TOGGLE END--*/
	
	/*-- TEAM CAROUSEL --*/
	var owl1 = $("#owl-team");
	owl1.owlCarousel({
	  items : 3,
	  itemsDesktop : [1400,3],
	  itemsDesktopSmall : [1100,2],
	  itemsTablet: [600,2],
	  itemsMobile : [400,1],
	  pagination : true,
	  navigation : false
	});
	/*-- TEAM CAROUSEL END --*/
	
	/*-- TESTIMONIALS CAROUSEL --*/
	var owl2 = $("#owl-testimonials");
	owl2.owlCarousel({
	  items : 1,
	  itemsDesktop : [1400,1],
	  itemsDesktopSmall : [1100,1],
	  itemsTablet: [600,1],
	  itemsMobile : [400,1],
	  pagination : true,
	  navigation : false
	});
	/*-- TESTIMONIALS CAROUSEL END --*/
	
	/*-- DEFAULT CAROUSEL --*/
	var owlDefault = $(".owl-gallery");
	owlDefault.owlCarousel({
	  items : 1,
	  itemsDesktop : [1400,1],
	  itemsDesktopSmall : [1100,1],
	  itemsTablet: [600,1],
	  itemsMobile : [400,1],
	  pagination : true,
	  navigation : false,
	  navigationText: false
	});
	/*-- DEFAULT CAROUSEL END --*/
	
	/*-- MASONRY --*/
	var siteMasonry = function() {
		if ( windowWidth > 991 ) {
			var getMasonry = $(".masonry-list");
			getMasonry.imagesLoaded(function () {
				getMasonry.masonry({
					itemSelector: ".item",
					columnWidth: ".grid-sizer",
					isAnimated: true
				});
			});
		} 
		else {
			$(".masonry-list").masonry('destroy');
		}
	};
	/*-- MASONRY END --*/
	
	/*-- FIT VIDEO --*/
	$(".video-full").fitVids();
	/*-- FIT VIDEO END --*/
	
	/*-- PRETTY PHOTO --*/
	$("a[data-rel^='prettyPhoto']").prettyPhoto({
		theme: "light_square",
		social_tools: false,
		deeplinking:false
	});
	/*-- PRETTY PHOTO END --*/
	
	/*-- SCROLL COMMENT FORM --*/
	$(".leave-new").click(function(e){
		e.preventDefault();
		var form = $(".comment-form").offset();
		$("html, body").animate({scrollTop: form.top}, 800);
	});
	/*-- SCROLL COMMENT FORM END --*/
	
	/*-- BACK TOP --*/
	$(".site-back-top").click(function(e){
		e.preventDefault();
		$("body,html").animate({scrollTop: 0}, 800);
	});
	
	function backTop() {
		if ( $(window).scrollTop() > 40 && windowWidth > 480 ) {
			$(".site-back-top").fadeIn();
		}
		else{
			$(".site-back-top").fadeOut();
		}
	}
	/*-- BACK TOP END --*/
	

	
	/*-- SLIDESHOW --*/
	var getGalleria = $(".galleria");
	
	if( getGalleria.length ==! 0 ) {
		

		Galleria.run('.galleria', {
			imageCrop: true,
			transition: 'fade',
			autoplay: 7000,
			idleMode:false,
			showInfo: true,
			_toggleInfo: false,
			height: windowHeight
		})
	}
	/*-- SLIDESHOW END --*/
	
	/*-- WINDOW SCROLL --*/
	$(window).scroll(function () {
		backTop();
	});
	/*-- WINDOW SCROLL END --*/
	
	/*-- WINDOW LOAD --*/
	$(window).load(function() {
		$(".site-loader").delay(100).fadeOut("slow");
		siteMenu();
		siteMasonry();
		backTop();
	});
	/*-- WINDOW LOAD END --*/
	
	/*-- WINDOW RESIZE --*/
	$(window).resize(function() {
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
		
		siteMenu();
		siteToggle();
		siteMasonry();
		backTop();
	});
	/*-- WINDOW RESIZE END --*/
	
	<!--InteraceAjuste-->
	$(window).load(function() {
	
		calculate();
		$(window).resize(function() {
		   
		calculate();	
		   
		});  
	});
	
	function calculate()
	{
		var wi = $(window).height();
		if(wi<579)
		{
			$('.body2menu').css({ 'display' : 'none' });
		}else
		{
			$('.body2menu').css({ 'display' : 'block' });
		}
	}
	
	<!--InteraceAjuste-->

	
	
	
	
});


