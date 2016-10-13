"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var _$$owlCarousel;

  $("#portfolioSlider").owlCarousel((_$$owlCarousel = {
    items: 4,
    autoPlay: true,
    stopOnHover: true
  }, _defineProperty(_$$owlCarousel, "autoPlay", 2500), _defineProperty(_$$owlCarousel, "navigation", false), _defineProperty(_$$owlCarousel, "navigationText", ["yay", "nay"]), _defineProperty(_$$owlCarousel, "rewindNav", true), _defineProperty(_$$owlCarousel, "scrollPerPage", false), _$$owlCarousel));
});