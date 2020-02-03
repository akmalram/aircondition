$(document).ready(function() {

    //
  $('.vid-bg').vide({
    mp4:'/assets/video/video1.mp4',
    ogv:'/assets/video/video1.mp4',
    webm:'/assets/video/video1.mp4',
    poster:'/assets/images/bg9.jpg'
  }, {
    playbackRate: 1,
    muted: true,
    loop: true,
    autoplay: true,
    position: '50% 50%', 
    posterType: 'jpg',
    resizing: true, 
    bgColor: '#143971'
  });

	//placeholder
	$('[placeholder]').focus(function() {
		var input = $(this);
		if(input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		}
	}).blur(function() {
		var input = $(this);
		if(input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		}
	}).blur();
	$('[placeholder]').parents('form').submit(function() {
		$(this).find('[placeholder]').each(function() {
			var input = $(this);
			if(input.val() == input.attr('placeholder')) {
				input.val('');
			}
		})
	});

  //
  $('.cond-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      infinite: true,
      arrows: true,
      fade: false,
      dots: true,
      speed: 500
  });

  //
  $('.page-nav a').click(function(event){
	  $('.mobile-button').click();
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 700);
      event.preventDefault();
  });

  $('.scrollTo').click(function(event){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 700);
      event.preventDefault();
  });

  //
  $('.side-block .close').click(function(event){
      $('.side-block').addClass('hid');
      event.preventDefault();
  });

	//fancybox
  $('.fancy').fancybox();
  $('.fancy-faq').fancybox({
    'wrapCSS':'faqf'
  });
  $('.fancy-rev').fancybox({
    'wrapCSS':'revf'
  });

	//маска для поля ввода телефона
	$('input[type="tel"]').mask('+7 (999) 999-99-99',{placeholder:"+7 (___) ___-__-__"});

  //scrolldown
  $(".scrolldown").click(function() {
      $("html, body").animate({ scrollTop: $('#sinfo').offset().top }, "slow");
      return false;
  });

  $(".num-scroll").mCustomScrollbar({
      axis:"x",
      autoExpandScrollbar:true,
      scrollButtons:{enable:true},
      advanced:{autoExpandHorizontalScroll:true}
    });

    //.gar-slider
    $('.gar-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: false,
        arrows: true,
        fade: false,
        dots: false,
        speed: 700,
        swipe: true,
        touchMove: true,
        responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }
        }
      ]
    });



    //.rev-slider
    $('.rev-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        fade: false,
        dots: true,
        speed: 0,
        swipe: true,
        touchMove: true,
         adaptiveHeight:false
    });





    //tabs
    $('.pane:first-child').addClass('active');
    $('.tabs li:first-child').addClass('active');
    $('.tabs li a').click(function() {
        var idx = $(this).parent().index();
        $(this).parents('.section-catalog').find('.pane').not($('.pane').eq(idx)).removeClass('active');
        $(this).parents('.section-catalog').find('.pane').eq(idx).addClass('active');
        $('.tabs li').not($(this).parent('li')).removeClass('active');
        $(this).parent('li').addClass('active');
        return false;
    });

    $('select, input[type="radio"], input[type="checkbox"]').styler();

    $("#filter-slider").rangeSlider({
      bounds: {min: $("#filter-slider").data('from'), max: $("#filter-slider").data('to')},
      defaultValues:{min: $("#filter-slider").data('from'), max: $("#filter-slider").data('to')},
      symmetricPositionning: true,
      arrows:false
    });

    $("#filter-slider").bind("valuesChanged", function(e, data){
    	$("#min-price").val(parseInt(data.values.min));
    	$("#max-price").val(parseInt(data.values.max));
    	$("#page1").val(0);
    	reload_filter1();
	});


    //
    $('.mobile-button').click(function() {
        $(this).toggleClass('open');
        $('#header').toggleClass('open');
        $('body').toggleClass('open');
        return false;
    });

    //
    $('.filter-toggle').click(function() {
        $(this).toggleClass('open');
        $(this).prev('.filter-drop').toggleClass('open');
        return false;
    });

    //info-opener
    $('.info-opener').click(function() {
        $(this).toggleClass('open');
        $('.info-drop').toggleClass('open');
        return false;
    });

  $('#ag1, #ag2, #ag3').vide({
    mp4:'/assets/video/video2.mp4',
    ogv:'/assets/video/video2.mp4',
    webm:'/assets/video/video2.mp4',
    poster:'/assets/images/bg5.jpg'
  }, {
    playbackRate: 1,
    muted: true,
    loop: true,
    autoplay: true,
    posterType: 'jpg',
    position: '50% 50%',
    resizing: true,
    bgColor: 'transparent'
  });

  $('.video-frame_overlay, .answers-link').on('click', function(){

	  $.fancybox({
		  wrapCSS:'faqf',
		  href : '#win1'
	  });

  });

/*
    //
    var player;
    var $window = $(window);
    var videoOriginalHeight = $('#video_block').height();
    var playerLoaded    = false;
    var fullHeight;
    var frameHeight;

    var $video        = $('.vid');
    var videoContainerId  = $video.attr('id');
    var $videoContainer = $('#video_block');
    var $overlay  = $('.video-frame_overlay');
    var $container  = $('.video-frame');

    $('.video-frame_overlay').on('click', function(){
      function hidePlayButton() {
      $overlay.fadeOut(function(){
        var scrollPosition;
        var scrollTo;

          scrollPosition  = $window.scrollTop();
          scrollTo    = $('#video_block').offset().top;

          $videoContainer.animate({
            height: $window.width() * 0.562
          }, {
            step: function( pos, ui ) {
              var top = (frameHeight - fullHeight) / 2 * (1 - ui.pos);
              $container.css('top', top);
              $('html,body').animate({
                scrollTop: $videoContainer.offset().top
              });
            },
            complete: function() {
              var videoURL = $video.prop('src');
              videoURL += "&autoplay=1";
              $video.prop('src',videoURL);
            }
          });

      });
      $('#video_block').addClass('open');
    }

    hidePlayButton();
    $(this).fadeOut(600);
  });
*/

  $('.video-frame-close').click(function(){
    function showPlayButton() {
      var scrollPosition;
      var scrollTo;

      function fadeInOverlay() {
        $overlay.fadeIn(200);
        $('#video_block').removeClass('open');
        $('.video-frame_overlay_play').show();

        var videoURL = $video.prop('src');
        videoURL = videoURL.replace("&autoplay=1", "");
        $video.prop('src','');
        $video.prop('src',videoURL);
      }

      $videoContainer.animate({
        height: '483px'
      }, {
      step: function( pos, ui ) {
        var top = (frameHeight - fullHeight) / 2 * ui.pos;
        $container.css('top', top);

      },
      complete: fadeInOverlay
    });
    }

    showPlayButton();
  });

  //
      $('.numb').each(function() {
      var asd = $(this);
      asd.find('span.minus').click(function() {
       var data = asd.find('input').val();
       if(data > 2) {
        asd.find('input').val(parseInt(data) - 1);
        asd.find('input').change();
        //reload_filter2();
       }
       return false
      });
      asd.find('span.plus').click(function() {
       var data = asd.find('input').val();
       if ($(this).parent().parent().hasClass('options-tov-numb') && data == 10) {
    	   return;
       }
       if ($(this).parent().parent().hasClass('numb-block-long') && data == 9) {
    	   return;
       }
       asd.find('input').val(parseInt(data) + 1);
       asd.find('input').change();

       //reload_filter2();
       return false
      });
    });


    $('.question .question-title').click(function() {
        $(this).parent('.question').toggleClass('active');
        $(this).parent('.question').siblings('.question').removeClass('active');

        $('.win.win-faq').parent().animate({
            scrollTop: $(this).parent('.question').offset().top - $("#win1").offset().top - 20
        }, 700);

        return false;
    });

  //
  var $preloader = $('#page-preloader'),
            $spinner   = $preloader.find('.spinner');
            //$spinner.fadeOut();
        $preloader.delay(1200).fadeOut('slow');

  //animation on page scroll
  $('.animated').appear(function() {
      var element = $(this);
      var animation = element.data('animation');
      var animationDelay = element.data('delay');
      if (animationDelay) {
        setTimeout(function(){
          element.addClass( animation + " visible" );
          element.removeClass('hiding');

        }, animationDelay);
      }else {
        element.addClass( animation + " visible" );
        element.removeClass('hiding');

      }    
  },{accY: -30});
//  setTimeout(function() {
//    $('.side-block').removeClass('hid');
//  }, 500);

    //que-slider
    $('.piqs-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        fade: false,
        dots: true,
        speed: 500,
        swipe: true,
        touchMove: true,
        autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: false,
         adaptiveHeight:true
    });

    $('.pause').on('click', function() {
        $('.piqs-slider').slick('slickPause')
        $('.progress-block').addClass('active');
    });
    $('.play').on('click', function() {
        $('.piqs-slider').slick('slickPlay');
        $('.progress-block').removeClass('active');
    });

    //
    

     //
    var ww = document.body.clientWidth;
    var wh = $('body').height();
    $(document).ready(function() {
      adjustMenu();
    });
    $(window).bind('resize orientationchange', function() {
        ww = document.body.clientWidth;
        wh = $('body').height();
        adjustMenu();
    });

    var adjustMenu = function() {
        if(ww < 1024) {          
               
        }
        else if(ww >= 1024) {
            
        }
    }

    $('.nav .parent a').click(function() {
      $('#header').addClass('open2');
      $(this).parent().addClass('open2');
    });  
    $('.nav .close-drop').click(function() {
      $('#header').removeClass('open2');
      $(this).parent().removeClass('open2');
    });  


    
});

$(window).load(function() {

  


});
