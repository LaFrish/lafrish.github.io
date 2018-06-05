$('.menu-burger, .menu-items').on('click', function() {
	$('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
	$('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
});

$(document).ready(function($) {
	$(window).load(function() {
		$(".loader").delay(500).fadeOut(1000, function() {
			$(".load_page").fadeOut(1000)
		})
	})
});
$(document).ready(function($) {
	$("#tagline").hide();
	$(window).load(function() {
		$("#tagline").delay(1800).fadeIn(1500)
	})
});

$(document).ready(function($) {
	$(window).load(function() {
		$(".loader").delay(500).fadeOut(1000, function() {
			$(".load_page").fadeOut(1000)
		})
	})
});
$(document).ready(function() {
	$('#menu li a').on('click', function() {
		$('#menuToggle').hide(300);
		$('#menuToggle input').removeClass('checked');
	})
});


function isMobile() {
	return ((navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/webOS/i)) || (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/BlackBerry/)))
}

function tagline() {
	scrollPos = jQuery(this).scrollTop();
	$("#tagline").css({
		"margin-top": -(scrollPos / 3) + "px",
		opacity: 1 - (scrollPos / 550)
	})
}
$(document).ready(function() {
	if (!isMobile()) {
		jQuery(window).scroll(function() {
			tagline()
		})
	}
});
$(document).ready(function() {
	$("#name-contact,#email-contact,#message-contact").val("")
});

function IsChar(name) {
	var regex = /^([A-Za-z][ éàëA-Za-z]*)$/;
	return regex.test(name)
}

function IsEmail(email) {
	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email)
}
$(document).ready(function() {
	$("#error-wrap,#success-wrap,#error,#success").hide();
	$("#send-email").click(function() {
		var name = $("#name-contact").val();
		var email = $("#email-contact").val();
		var message = $("#message-contact").val();
		var errors = new Array();
		var i = -1;
		if (!IsChar(name) || ($.trim(name).length == 0)) {
			i++;
			errors[i] = " ";
			$("#name-contact").animate({
				outlineColor: "#5c6576"
			}, "slow");
			$("#error-wrap").stop(true, true).delay(200).animate({
				height: "50px",
				mode: "show"
			}, {
				duration: 400
			});
			$("#error").delay(500).fadeIn(700)
		}
		if (!IsEmail(email)) {
			i++;
			errors[i] = " ";
			$("#email-contact").animate({
				outlineColor: "#5c6576"
			}, "slow");
			$("#error-wrap").stop(true, true).delay(200).animate({
				height: "50px",
				mode: "show"
			}, {
				duration: 400
			});
			$("#error").delay(500).fadeIn(700)
		}
		if ($.trim(message).length == 0) {
			i++;
			errors[i] = " ";
			$("#message-contact").animate({
				outlineColor: "#5c6576"
			}, "slow");
			$("#error-wrap").stop(true, true).delay(200).animate({
				height: "50px",
				mode: "show"
			}, {
				duration: 400
			});
			$("#error").delay(500).fadeIn(700)
		}
		if (errors.length == 0) {
			$.ajax({
				url: "envoi.php",
				data: {
					name: name,
					email: email,
					message: message
				},
				type: "POST",
				success: function(data) {
					$("#success-wrap").stop(true, true).delay(200).animate({
						height: "50px",
						mode: "show"
					}, {
						duration: 400
					});
					$("#success").delay(500).fadeIn(700);
					$("#error-wrap").stop(true, true).delay(100).animate({
						height: "50px",
						mode: "hide"
					}, {
						duration: 200
					});
					$("#error").delay(100).fadeOut(200);
					$("#name-contact,#email-contact,#message-contact").delay(1000).val("");
					$("#name-contact,#email-contact,#message-contact").animate({
						outlineColor: "transparent"
					})
				}
			})
		}
	})
});


$(document).ready(function(){
	$('.bxslider').bxSlider({
		adaptiveHeight: false,
		auto: true,
		mode: 'fade',
		speed: 900
	});
});

$(function() {
	$(".nav-bar").click(function() {
		$("header").toggleClass("close");
	});
});

$(document).ready(function() {
	$(".tabs-menu a").click(function(event) {
		event.preventDefault();
		$(this).parent().addClass("current");
		$(this).parent().siblings().removeClass("current");
		var tab = $(this).attr("href");
		$(".tab-content").not(tab).css("display", "none");
		$(tab).fadeIn(1200);
	});
});

$(function() {
	$('nav a').bind('click',function(event){
		var $anchor = $(this);
		$('a').each(function () {
			$(this).removeClass('active');
		})
		$(this).addClass('active');
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top-80
		}, 1500,'easeInOutExpo');

		event.preventDefault();
	});
	$('.welcome a').bind('click',function(event){
		var $anchor = $(this);
		$('a').each(function () {
			$(this).removeClass('active');
		})
		$(this).addClass('active');
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500,'easeInOutExpo');

		event.preventDefault();
	});
});
$(document).ready(function () {
	$(document).on("scroll", onScroll);

	//smoothscroll
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");

		$('a').each(function () {
			$(this).removeClass('active');
		})
		$(this).addClass('active');

		var target = this.hash,
		menu = target;
		$target = $(target);

	});
});
function onScroll(event){
	var scrollPos = $(document).scrollTop();
	$('nav a').each(function () {
		var currLink = $(this);
		var refElement = $(currLink.attr("href"));
		if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
			$('nav a').removeClass("active");
			currLink.addClass("active");
		}
		else{
			currLink.removeClass("active");
		}
	});
}

//gif on scroll

$(document).scroll(function() {
	var gif = $(this).scrollTop();
	if (gif > 400) {
		$('.bg-image').fadeIn();
	} else {
		$('.bg-image').fadeOut();
	}
});


//filter of gallery
$(function() {
	$('.toggles button').click(function(){
		var get_id = this.id;
		var get_current = $('.gallery_containers .' + get_id);
		$('.gallery_container').not( get_current ).hide(500);
		get_current.show(500);
	});
});

//trivia portfolio
$(document).ready(function () {
	$(".gal_btn1").click(function () {
		$(".pop1").fadeIn(300);
	});
	//close
	$(".pop1 > span1").click(function () {
		$(".pop1").fadeOut(300);
	});
});
//cheerie portfolio
$(document).ready(function () {
	$(".gal_btn2").click(function () {
		$(".pop2").fadeIn(300);
	});
	//close
	$(".pop2 > span2").click(function () {
		$(".pop2").fadeOut(300);
	});
});
//icare portfolio
$(document).ready(function () {
	$(".gal_btn3").click(function () {
		$(".pop3").fadeIn(300);
	});
	//close
	$(".pop3 > span3").click(function () {
		$(".pop3").fadeOut(300);
	});
});
//node portfolio
$(document).ready(function () {
	$(".gal_btn4").click(function () {
		$(".pop4").fadeIn(300);
	});
	//close
	$(".pop4 > span4").click(function () {
		$(".pop4").fadeOut(300);
	});
});
$(document).ready(function () {
	$(".gal_btn5").click(function () {
		$(".pop5").fadeIn(300);
	});
	//close
	$(".pop5 > span5").click(function () {
		$(".pop5").fadeOut(300);
	});
});
//yearbook
$(document).ready(function () {
	$(".gal_btn6").click(function () {
		$(".pop6").fadeIn(600);
	});
	//close
	$(".pop6 > span6").click(function () {
		$(".pop6").fadeOut(300);
	});
});
//protrakr
$(document).ready(function () {
	$(".gal_btn7").click(function () {
		$(".pop7").fadeIn(600);
	});
	//close
	$(".pop7 > span7").click(function () {
		$(".pop7").fadeOut(300);
	});
});
//MMG trivia
$(document).ready(function () {
	$(".gal_btn8").click(function () {
		$(".pop8").fadeIn(800);
	});
	//close
	$(".pop8 > span8").click(function () {
		$(".pop8").fadeOut(300);
	});
});



jQuery(document).ready(function($){
	var gallery = $('.cd-gallery'),
		foldingPanel = $('.cd-folding-panel'),
		mainContent = $('.cd-main');
	/* open folding content */
	gallery.on('click', 'a', function(event){
		event.preventDefault();
		openItemInfo($(this).attr('href'));
	});

	/* close folding content */
	foldingPanel.on('click', '.cd-close', function(event){
		event.preventDefault();
		toggleContent('', false);
	});
	gallery.on('click', function(event){
		/* detect click on .cd-gallery::before when the .cd-folding-panel is open */
		if($(event.target).is('.cd-gallery') && $('.fold-is-open').length > 0 ) toggleContent('', false);
	})

	function openItemInfo(url) {
		var mq = viewportSize();
		if( gallery.offset().top > $(window).scrollTop() && mq != 'mobile') {
			/* if content is visible above the .cd-gallery - scroll before opening the folding panel */
			$('body,html').animate({
				'scrollTop': gallery.offset().top
			}, 100, function(){
	           	toggleContent(url, true);
	        });
	    } else if( gallery.offset().top + gallery.height() < $(window).scrollTop() + $(window).height()  && mq != 'mobile' ) {
			/* if content is visible below the .cd-gallery - scroll before opening the folding panel */
			$('body,html').animate({
				'scrollTop': gallery.offset().top + gallery.height() - $(window).height()
			}, 100, function(){
	           	toggleContent(url, true);
	        });
		} else {
			toggleContent(url, true);
		}
	}

	function toggleContent(url, bool) {
		if( bool ) {
			/* load and show new content */
			var foldingContent = foldingPanel.find('.cd-fold-content');

            foldingContent.html(
                '<div class="cd-fold-content single-page">'+

                '   <h2>Title</h2>'+
                '   <em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laboriosam?</em>'+
                '   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus tempora nostrum aut quam praesentium veritatis nisi, odio eius, voluptatibus, iure neque commodi corrupti, inventore laborum fugiat itaque. Pariatur rem veritatis earum quia maxime praesentium accusantium ipsam veniam tenetur hic tempora, unde ipsa esse, aut est repellendus porro, maiores corporis illo!</p>'+
                '</div>');
                setTimeout(function(){
                    $('body').addClass('overflow-hidden');
                    foldingPanel.addClass('is-open');
                    mainContent.addClass('fold-is-open');
                }, 100);

			/*foldingContent.load(url+' .cd-fold-content > *', function(event){
				setTimeout(function(){
					$('body').addClass('overflow-hidden');
					foldingPanel.addClass('is-open');
					mainContent.addClass('fold-is-open');
				}, 100);

			});*/
		} else {
			/* close the folding panel */
			var mq = viewportSize();
			foldingPanel.removeClass('is-open');
			mainContent.removeClass('fold-is-open');

			(mq == 'mobile' || $('.no-csstransitions').length > 0 )
				/* according to the mq, immediately remove the .overflow-hidden or wait for the end of the animation */
				? $('body').removeClass('overflow-hidden')

				: mainContent.find('.cd-item').eq(0).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					$('body').removeClass('overflow-hidden');
					mainContent.find('.cd-item').eq(0).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
				});
		}

	}

	function viewportSize() {
		/* retrieve the content value of .cd-main::before to check the actua mq */
		return window.getComputedStyle(document.querySelector('.cd-main'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
	}
});


/////////////////////////////// variables

var source = $(".cd-main .item");
var output = $(".output");
var elements = $(".controls, .cont-output");
var speed = 500;
// speed of all the jQuery animations
var windowWidth = $(window).width();
var count = source.length;
var target;
var that;
var ratio = [];

/////////////////////////////// document ready

source.each(function(){
  var imageSrc = $(this).children('img').attr('src');
  $(this).css('background-image', 'url(' + imageSrc + ')');
});

source.clone().appendTo(output);

output.children(".item").children().remove();

/////////////////////////////// update lightbox content

function updateContent(){

  $(".cont-output").empty();

  $(".cd-main .item").eq(that.index())
    .find(".content")
    .clone()
    .appendTo(".cont-output");

}

/////////////////////////////// item click

source.click(function(){

  output.empty();
  source.clone().appendTo(output);
  output.children(".item").children().remove();

  that = $(this);
  target = output.find(".vp");
  var index = that.index();
  var clone = output.children().eq(index);

  clone.css({
    'width': that.width() + 'px',
    'height': that.height() + 'px',
    'top': that.offset().top - $(window).scrollTop() + 'px',
    'left': that.offset().left + 'px'
  });

  output.show(function(){
    clone.addClass("vp root");
    clone.stop().animate({
      'width': '100vw',
      'height': '300px',
      'top': '0',
      'left': '0'
    }, speed, function(){
      elements.fadeIn(speed);
    });
  });

  updateContent();

});

/////////////////////////////// close expanded view

function closeExpand(){

  target.stop().animate({
    'width': '100vw',
    'height': '300px',
    'top': '0',
    'left': '0'
  }, speed, function(){
    $(".prev, .next, .expand, .cont-output").fadeIn(speed);
  });

  $(".close").stop().animate({
    'top': '20px',
    'right': '20px',
    'border-radius': '0',
    'border-top-left-radius': '5px',
    'border-top-right-radius': '5px'
  }, speed);

  target.removeClass("big")
  $(".expand-bg").fadeOut();

}

/////////////////////////////// close expanded view (on document click)

$(".expand-bg").click(function(){

  target = $(".root");

  closeExpand();

});

/////////////////////////////// close expanded view (on close click)

$(".close").click(function(){

  target = $(".root");

  if(target.hasClass("big")){
    closeExpand();
  }

/////////////////////////////// close lightbox view

  else{

    var to;
    source.each(function(){

      if($(".root").css('background-image') == $(this).css('background-image')){
         to = $(this);
      }
    });

    elements.fadeOut(speed);

    target.stop().delay(200).animate({
      'width': to.width() + 'px',
      'height': to.height() + 'px',
      'top': to.offset().top - $(window).scrollTop() + 'px',
      'left': to.offset().left + 'px'
    }, speed, function(){

      target.css({
        'width': '',
        'height': '',
        'top': '',
        'left': ''
      });

      output.children().removeClass("vp");
      output.children().css({
        'background-image': '',
        'top': '',
        'left': '',
        'width': '',
        'height': ''
      });
      output.hide();

    });

  }

});

/////////////////////////////// expand view

$(".expand").click(function(){

  target = $(".root");

  $(".prev, .next, .expand, .cont-output").fadeOut(speed, function(){

    target.stop().animate({
      'width': '94vw',
      'height': '52.875vw',
      'top': '3vh',
      'left': '3vw'
    }, speed);

    $(".close").stop().animate({
      'top': '3vh',
      'right': '3vw',
      'border-radius': '0',
      'border-bottom-left-radius': '5px'
    }, speed);

    target.addClass("big");

  });

  $(".expand-bg").fadeIn();

});

/////////////////////////////// prev

$(".prev").click(function(){

  $(".content").css('animation-name', 'contentFadeR');

  target = output.find(".vp");

  if(target.is(':first-child')){
    that = target.parent().children().last();
    target.removeClass("vp");
    that.addClass("vp");
    target = output.find(".vp");
  }

  else{
    that = target.prev();
    target.removeClass("vp");
    that.addClass("vp");
    target = output.find(".vp");
  }

  var index = target.index();
  var bg = source.eq(index).css('background-image');
  $(".root").css('background-image', bg);

  updateContent();

});

/////////////////////////////// next

$(".next").click(function(){

  $(".content").css('animation-name', 'contentFadeL');

  target = output.find(".vp");

  if(target.is(':last-child')){
    that = target.parent().children().first();
    target.removeClass("vp");
    that.addClass("vp");
    target = output.find(".vp");
  }

  else{
    that = target.next();
    target.removeClass("vp");
    target.next().addClass("vp");
    target = output.find(".vp");
  }

  var index = target.index();
  var bg = source.eq(index).css('background-image');
  $(".root").css('background-image', bg);

  updateContent();

});

$(document).ready(function(){

   var $sm = 480;
   var $md = 768;

   function resizeThis() {
      $imgH = $('.middle img').width();
      if ($(window).width() >= $sm) {
         $('.left,.right,.section').css('height', $imgH);
      } else {
         $('.left,.right,.section').css('height', 'auto');
      }
   }

   resizeThis();

   $(window).resize(function(){
      resizeThis();
   });

   $(window).scroll(function() {
      $('.section').each(function(){
         var $elementPos = $(this).offset().top;
         var $scrollPos = $(window).scrollTop();

         var $sectionH = $(this).height();
         var $h = $(window).height();
         var $sectionVert = (($h/2)-($sectionH/4));


         if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
            $(this).addClass('animate');
         } else {
            $(this).removeClass('animate');
         }
      });
   });

   $('.btn-primary').click(function(){
      alert('I lied');
   });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
