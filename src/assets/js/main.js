(function($){
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Mobile Menu 
    
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass('active');
    });
    
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
    
    
    //===== close navbar-collapse when a  clicked
    
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navigation").removeClass("sticky");
        } else{
            $(".navigation").addClass("sticky");
        }
    });
    
    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
        // Active link switching
        $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

          var sectionOffset = $(this.hash).offset().top - 73;

          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        });
    });
    
    
    
    // Parallaxmouse js
    
    function parallaxMouse() {
        if ($('#parallax').length) {
            var scene = document.getElementById('parallax');
            var parallax = new Parallax(scene);
        };
    };
    parallaxMouse();
    
    
    //===== Progress Bar
    
    if($('.progress-line').length){
        $('.progress-line').appear(function(){
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width',percent+'%');
        },{accY: 0});
    }
    
    
    //===== Counter Up
    
    $('.counter').counterUp({
        delay: 10,
        time: 1600,
    });
    
    
    //===== Magnific Popup
    
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    

    
    //===== 
    
    
    
    
    
    
    
    
    
    
    
    
}(jQuery));
var twopi		= Math.PI*2;
var size		= { x: 1000, y: 1000 };

var canvas		= document.querySelector('canvas');
canvas.width	= size.x;
canvas.height	= size.y;
var c			= canvas.getContext('2d');

var s			= [ 5 , 5 , 5 , 5 , 5 ];
var e           = [ 3 , 3 , 3]
var sum			= s.reduce(function(pv, cv) { return pv + cv; }, 0);

var dist		= 0;

function circle (linewidth, radius, mod) {
	var pos			= 0;
	c.lineWidth = linewidth;
	c.fillStyle ="Orange";
	c.fillText("Java",50,200);
	c.moveTo(size.x*.5 + radius, size.y*.5);
	for (var i = 0; i < s.length; i++) {

		// "Color"
		var co = parseInt(0xff / s.length * i + mod).toString(16);
		if (co.length == 1) co = '0'+co;
		c.strokeStyle = '#'+co+co+co;

		// ArcStart
		var cr	= twopi * pos;
		pos		+= s[i] / sum;

		c.beginPath();
		c.arc(size.x*.5, size.y*.5, radius,
			  (cr+dist)-Math.PI/2,
			  cr-dist-Math.PI/2 + twopi * s[i] / sum
		);
		c.stroke();
		c.closePath();
	}
}
circle(200, size.x*.5 - 200*.4 ,-(0xff/s.length));	// Big circle
circle(100, size.x*.4 - 205, 0xff/e.length);				// Inner circle
//circle(10, size.x*.5 - 5, 0xff/s.length);				// Outer circle