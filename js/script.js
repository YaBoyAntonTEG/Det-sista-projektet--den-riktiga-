$(function () {
  $(document).scroll(function () {
    var $nav = $(".menu");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
$(function () {
  $(document).scroll(function () {
	  var $nav = $(".menu");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});
