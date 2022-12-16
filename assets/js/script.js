(function ($) {

    "use strict";

    $(document).ready(function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();



        // dropdown menu
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });


        //Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="flaticon-down-arrow-1"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });

            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }

        //Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').on('click', function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });

        }


        /* Team Carousel */
        if ($('.team-carousel').length) {
            $('.team-carousel').owlCarousel({
                loop:true,
                margin:30,
                dots:false,
                nav:true,
                active: true,
                smartSpeed: 1000,
                autoplay: 5000,
                navText: [ '<span class="flaticon-left-arrow-1"></span>', '<span class="flaticon-right-arrow-1"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    575:{
                        items:2
                    },
                    992:{
                        items:3
                    },
                    1200:{
                        items:4
                    }
                }
            });         
        }
        
        
        
        /* testimonial Carousel */
        if ($('.testimonial-wrap').length) {
            $('.testimonial-wrap').owlCarousel({
                loop:true,
                margin:0,
                nav:false,
                active: true,
                smartSpeed: 1000,
                mouseDrag: false,
                touchDrag: false,
                autoplay: false,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1200:{
                        items:1
                    }
                }
            });         
        }
        
        

        /*========== Start Portfolio isotop Js ==========*/
        // isotop
        // init Isotope
        var $grid = $('.gallery-active').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1,
            }
        });



        // magnificPopup
        if ($('.gallery-popup-link').length) {
            $('.gallery-popup-link').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true,
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: 'ease-in-out',
                    opener: function(openerElement) {
                        return openerElement.is('a') ? openerElement : openerElement.find('a');
                    }
                },
            });
        }

        
        /*Video Magnific Popup */
        if ($.fn.magnificPopup) {
            $('.video-play').magnificPopup({
                type: 'video',
            });
        }

        
        // Scroll to a Specific Div
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }
        

        // Elements Animation
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
        
        
        /* initialize the contact page map on the "map" div with a given center and zoom*/
        if($('#map').length !== 0){
            var map = L.map('map', {
                center: [-6.185033, 106.798862],
                zoom: 18,
                zoomControl: false,
                scrollWheelZoom: true,
            });

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);
        }


    });

    
    
    /* ==========================================================================
       When document is resize, do
       ========================================================================== */

    $(window).on('resize', function () {
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        
        if ($(window).innerWidth() >= mobileWidth) {
            navcollapse.children('ul').hide();
            navcollapse.children('.megamenu').hide();
        }

    });


    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

    });

    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {

        //Hide Loading Box (Preloader)
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();
        
        
        
        /*========== Start Portfolio isotop Js ==========*/
        // isotop
        // init Isotope
        var $grid = $('.gallery-active').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1,
            }
        });
        
        
    });



})(window.jQuery);
