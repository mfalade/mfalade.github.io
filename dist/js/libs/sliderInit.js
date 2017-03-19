$(document).ready(function () {
  const settings = {
    loop: true,
    margin: 10,
    dots: true,
    dotsEach: true,
    autoplay: true,
    smartSpeed: 1200,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  };
 
	$("#portfolioSlider").owlCarousel(settings);
 
});