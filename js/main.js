/* -----------------------------------------------
					Js Main
--------------------------------------------------

    Template Name: Baha - Personal Portfolio Template
    Author: Malyarchuk
    Copyright: 2019

--------------------------------------------------

Table of Content

	1. Preloader
	2. Sound Start
	3. Isotope Portfolio Setup
	4. Blogs Masonry Setup
	5. Active Current Link
	6. Mobile Toggle Click Setup
	7. Chart Setup
	8. Portfolio Tilt Setup
	9. Portfolio Image Link
	10. Portfolio Video Link

----------------------------------- */

$(window).on('load', function() {
		
	/* -----------------------------------
				1. Preloader
	----------------------------------- */
	$("#preloader").delay(1000).addClass('loaded');
	
		/* -----------------------------------
			3. Isotope Portfolio Setup
	----------------------------------- */
    if( $('.portfolio-items').length ) {
        var $elements = $(".portfolio-items"),
            $filters = $('.portfolio-filter ul li');
        $elements.isotope();

        $filters.on('click', function(){
            $filters.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).data('filter');
            $(".portfolio-items").isotope({
                filter: selector,
                hiddenStyle: {
                    transform: 'scale(.2) skew(30deg)',
                    opacity: 0
                },
                visibleStyle: {
                    transform: 'scale(1) skew(0deg)',
                    opacity: 1,
                },
                transitionDuration: '.5s'
            });
        });
    }
	
	/* -----------------------------------
			4. Blogs Masonry Setup
	----------------------------------- */
    $('.blog-masonry').isotope({ layoutMode: 'moduloColumns' });
	
});

$(document).ready(function() {
    "use strict";
	
	/* -----------------------------------
			5. Active Current Link
	----------------------------------- */
    $('.header-main ul li a').on('click',function() {
        if($('.header-main.on').length) {
            $('.header-main').removeClass('on');
        }
    });
	
	/* -----------------------------------
		6. Mobile Toggle Click Setup
	----------------------------------- */
    $('.header-toggle').on('click', function() {
        $('.header-main').toggleClass('on');
    });
	
	/* -----------------------------------
	      7. Testimonials OwlCarousel
	----------------------------------- */
	$(".testimonial .owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        smartSpeed: 500,
        responsiveClass: true,
        dots: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    });
	
	/* -----------------------------------
	      	8. Chart Setup
	----------------------------------- */
	if ($('.chart').length > 0) {
	    $('.chart').easyPieChart({
          trackColor:'#0e0f10',
	      scaleColor:false,
	      easing: 'easeOutBounce',
	      scaleLength: 4,
	      lineCap: 'square',
	      lineWidth:5,
	      size:130,
	      animate: {
	                duration: 2500,
	                enabled: true
	    	}
	 	});
	 }
	
	/* -----------------------------------
	      	9. Portfolio Tilt Setup
	----------------------------------- */
    $('.pt-portfolio .portfolio-items .item figure').tilt({
        maxTilt: 3,
        glare: true,
        maxGlare: .6,
        reverse: true
    });
	
	/* -----------------------------------
	      10. Portfolio Image Link
	----------------------------------- */
	$(".portfolio-items .image-link").magnificPopup({
		type: "image"
	});
	
	/* -----------------------------------
	      11. Portfolio Video Link
	----------------------------------- */
	$(".portfolio-items .video-link").magnificPopup({
		type: "iframe"
	});
	
});