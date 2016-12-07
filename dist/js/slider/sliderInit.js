$(document).ready(function () {
  const settings = {
    loop: true,
    margin: 10,
    nav: true,
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