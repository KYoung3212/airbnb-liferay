

(function( $ ){


	/* ----------------------------------------------------------- */
	/*  1. FULL OVERLYAY MENU
	/* ----------------------------------------------------------- */

   $('.menu-btn').on('click', function(event) {
	   
        event.preventDefault();
        
        $('.menu-full-overlay').addClass('menu-full-overlay-show');
       
    });
   
    // when click colose btn
    
    $('.menu-close-btn').on('click', function(event) {
	    
	    event.preventDefault();
	    
		$('.menu-full-overlay').removeClass('menu-full-overlay-show');
		
    });

    // when click menu item overlay disappear

    $('.menu a').on('click', function(event) {
	   
        event.preventDefault();
        
        $('.menu-full-overlay').removeClass('menu-full-overlay-show');
       
    });

    /* ----------------------------------------------------------- */
	/*  2. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */ 

	//MENU SCROLLING WITH ACTIVE ITEM SELECTED

	 $(".menu a").click(function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
         }else{
              dest=$(this.hash).offset().top;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 1000,'swing');
     });
	    

		
	/* ----------------------------------------------------------- */
	/*  3. VIDEO POPUP
	/* ----------------------------------------------------------- */

   $('.video-play-btn').on('click', function(event) {
	   
        event.preventDefault();
        
        $('.video-iframe-area').addClass('video-iframe-display');
       
    });
   
    // when click the close btn

    // disappear iframe window
    
    $('.video-close-btn').on('click', function(event) {
	    
	    event.preventDefault();
	    
		$('.video-iframe-area').removeClass('video-iframe-display');
		
    });

    // stop iframe if it is play while close the iframe window

    $('.video-close-btn').click(function(){

        $('.video-iframe').attr('src', $('.video-iframe').attr('src'));

    });

    // when click overlay area

     $('.video-iframe-area').on('click', function(event) {
	    
	    event.preventDefault();
	    
		$('.video-iframe-area').removeClass('video-iframe-display');
		
    });

	$('.video-iframe-area, .video-iframe').on('click', function(e){
	    e.stopPropagation();
	});

		
	/* ----------------------------------------------------------- */
	/*  4. APPS SCREENSHOT SLIDEER ( SLICK SLIDER )
	/* ----------------------------------------------------------- */

		$('.apps-screenshot-slider').slick({
		  slidesToShow: 4,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: true,
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: true,
		        slidesToShow: 1
		      }
		    }
		  ]
		});



	/* ----------------------------------------------------------- */
	/*  5. BOOTSTRAP ACCORDION 
	/* ----------------------------------------------------------- */ 

		/* Start for accordion #1*/
		$('#accordion .panel-collapse').on('shown.bs.collapse', function () {
		$(this).prev().find(".fa").removeClass("fa-plus").addClass("fa-minus");
		});
		
		//The reverse of the above on hidden event:
		
		$('#accordion .panel-collapse').on('hidden.bs.collapse', function () {
		$(this).prev().find(".fa").removeClass("fa-minus").addClass("fa-plus");
		});

	














		
		$num = $('.my-card').length;
		$even = $num / 2;
		$odd = ($num + 1) / 2;
		
		if ($num % 2 == 0) {
		  $('.my-card:nth-child(' + $even + ')').addClass('active');
		  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
		  $('.my-card:nth-child(' + $even + ')').next().addClass('next');
		} else {
		  $('.my-card:nth-child(' + $odd + ')').addClass('active');
		  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
		  $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
		}
		
		$('.my-card').click(function() {
		  $slide = $('.active').width();
		  console.log($('.active').position().left);
		  
		  if ($(this).hasClass('next')) {
			$('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
		  } else if ($(this).hasClass('prev')) {
			$('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
		  }
		  
		  $(this).removeClass('prev next');
		  $(this).siblings().removeClass('prev active next');
		  
		  $(this).addClass('active');
		  $(this).prev().addClass('prev');
		  $(this).next().addClass('next');
		});
		
		
		// Keyboard nav
		$('html body').keydown(function(e) {
		  if (e.keyCode == 37) { // left
			$('.active').prev().trigger('click');
		  }
		  else if (e.keyCode == 39) { // right
			$('.active').next().trigger('click');
		  }
		});



})( jQuery );


  
	

