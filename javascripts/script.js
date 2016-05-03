
// Fixed Nav
jQuery(document).ready(function ($) {
	$(window).scroll(function(){
		var scrollTop = 142;
		if($(window).scrollTop() >= scrollTop){
			$('nav').css({
				position : 'fixed',
				top : '0'
			});
		}
		if($(window).scrollTop() < scrollTop){
			$('nav').removeAttr('style');
		}
	})

  // Active Nav Link
  $('nav ul li a').click(function(){
         $('nav ul li a').removeClass('active');
         $(this).addClass('active');
    });
})
// Rotating Words
		var rotate_words = $('.rotate-words');
		if(rotate_words.length && Modernizr.csstransforms) {
			rotate_words.find('span').eq(0).addClass('active');
			setInterval(function(){
				next_word_index = rotate_words.find('.active').next().length ? rotate_words.find('.active').next().index() : 0;
				rotate_words.find('.active').addClass('rotate-out').removeClass('rotate-in active');
				rotate_words.find('span').eq(next_word_index).addClass('rotate-in active').removeClass('rotate-out');
			},3000);
		}
rotate_words();
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
toggle()

$(document).ready(function(){
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 49) {
      $('body').addClass('header-fixed');
    } else {
      $('body').removeClass('header-fixed');
    }
    // change the style of the navbar when the user scrolls into the next zone.
    // get the distance of the 2nd section from the top of the page - height of header.
    var topOffset = $('#demosection2').offset().top;
    var headerHeight = $('#topnav').height();
    var transitionPoint = topOffset - headerHeight;
    if (scrollTop > transitionPoint) {
      $('#topnav').addClass('alt-header');
    } else {
      $('#topnav').removeClass('alt-header');
    }
  });
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

jQuery(document).ready(function($) {
 var open = false;

function resizeMenu() {
 if ($(this).width() <= 680) {
   $("nav,#logo").hide();
 $("#nav-mobile,#menu-button").show()
} else {
 if ($(this).width() >= 680) {
   $("nav,#logo").show();
 $("#nav-mobile,#menu-button").hide()
}
}
}

function setupMenuButton() {
 $("#menu-button").click(function(e) {
   e.preventDefault();
 if (open) {
   $("nav").slideUp()
} else {
 $("nav").slideDown()
}
open = !open
})
}
$(window).resize(resizeMenu);
resizeMenu();
setupMenuButton()
});

$(".image_container_zoom").toggle(function() {
  $(this).animate({
    width: "90%"
  })
}, function() {
  $(this).animate({
    width: "70%"
  })
});

$(document).ready(function($) {
  $(window).load(function() {
    $(".loader").delay(500).fadeOut(1000, function() {
      $(".load_page").fadeOut(1000)
    })
  })
});
$(".close_work").click(function() {
  $("div.work_item").slideUp("slow")
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
    adaptiveHeight: true,
    auto: true,
    mode: 'fade'
  });
});
</script>
<script type="text/javascript">
$(function() {                       //run when the DOM is ready
  $(".nav-bar").click(function() {  //use a class, since your ID gets mangled
    $("header").toggleClass("close");      //add the class to the clicked element
  });
});
</script>
<script type="text/javascript">
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
</script>
<script type="text/javascript">
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

window.onscroll = function() {
  startGif()};

function startGif() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("headerimg").className = "test";
    } else {
        document.getElementById("headerimg").className = "";
    }
};
startGif()
