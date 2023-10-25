$(document).ready(function () {
  $(".sidenav").sidenav({
    edge: "right",
  });
  $(".carousel").carousel();
  $(".parallax").parallax();
  $(".carousel.carousel-slider2").carousel({
    indicators: true,
  });
  $(".collapsible").collapsible();
  $(".scrollspy").scrollSpy({ throttle: 800 });
});
