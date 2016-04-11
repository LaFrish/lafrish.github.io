$("nav ul li").click(function(){
  var xcoord = $(this).data("xcoord");

  $("nav div").stop().animate({marginLeft:xcoord}, 500, "easeInOutExpo");
  $(this).addClass("active");
  $("nav ul li").not(this).removeClass("active");
});
