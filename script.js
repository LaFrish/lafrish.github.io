$("nav ul li").click(function(){
  var xcoord = $(this).data("xcoord");

  $("nav div").stop().animate({marginLeft:xcoord}, 500, "easeInOutExpo");
  $(this).addClass("active");
  $("nav ul li").not(this).removeClass("active");
});

// portfolio gallery
var challengeArray = ['button with a jiggly animation, you know, when it looks kinda sponghy.', 'IOS inspired calender where you can look through the months.', 'material design card, with a headline and a button with a material design hover animation.', 'login form with username, password input and a confirmation message when the user succesfully logged in.', 'signup form with a confirmation message when the user succesfully signed up.', 'fullscreen menu with a sweet hover effect on the page links.', 'popup with a animation.', 'material design navigation menu with hover and active animation.', 'pure CSS burger menu icon with subtle hover effect.', 'loading animation tha consists of 3 lines, yeah thats right lines, not balls lines.', 'dropdown menu with bouncing in animation.', 'button with a sweet hover effect.', 'toggle button with a background animation when toggled.', '404 page with a subtle animation.', 'Pure CSS slider with animation', 'navigation bar with animated active links.', 'mailinglist signup with animation confirmation message.', 'sticky footer.', 'welcome animation.', 'pure CSS clock.', 'music player'];
var randomChallenge = Math.floor(Math.random() * challengeArray.length);
var challenge = challengeArray[randomChallenge];

$('.start').on('click', start);
$('.decline').on('click', newChallenge);
$('.accept').on('click', chooseChallenge);
$('.download').on('click', download);
$('.back').on('click', back);

function back() {
	$('.card').removeClass('challengeChosen');
	$('.download').fadeOut('fast');
	$('.grats').text('');
	start();
}

function start() {
	$('.headline').text('Challenge: ' + randomChallenge);
	$('.welcometext').text('Make a ' + challenge);
	$('.start').fadeOut('fast');
	$('.accept').delay(200).fadeIn('fast');
	$('.decline').delay(200).fadeIn('fast');
}

function newChallenge() {
	randomChallenge = Math.floor(Math.random() * challengeArray.length);
	challenge = challengeArray[randomChallenge];
	$('.welcometext').text('Make a ' + challenge);
	$('.headline').text('Challenge: ' + randomChallenge);
	$('.welcometext').hide();
	$('.welcometext').fadeIn('slow');
}

function chooseChallenge() {
	$('.headline').text('Your chosen challenge:');
	$('.grats').text(' - You are very welcome to post your end result in the comments!');
	$('.card').addClass('challengeChosen');
	$('.accept').fadeOut('fast');
	$('.decline').fadeOut('fast');
	$('.download').fadeIn('fast');
}
function download() {
	var hiddenElement = document.createElement('a');
	hiddenElement.href = 'data:attachment/text,' + encodeURI('Make a ' + challenge);
	hiddenElement.target = '_blank';
	hiddenElement.download = 'mychallenge.txt';
	hiddenElement.click();
}
