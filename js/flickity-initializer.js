var gallery = document.getElementById("gallery");
var flickity = document.getElementsByClassName("flickity-slider");

window.onload = event => {
  var flkty = new Flickity("#gallery", {
    freeScroll: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    imagesLoaded: true,
    wrapAround: false,
    selectedAttraction: 0.02
  });
  $(window).trigger("resize");
  $(".gallery-cell").addClass("pageloaded");
  // external js: flickity.pkgd.js

  // use x and y mousewheel event data to navigate flickity
  function flickity_handle_wheel_event(
    e,
    flickity_instance,
    flickity_is_animating
  ) {
    // do not trigger a slide change if another is being animated
    if (!flickity_is_animating) {
      // pick the larger of the two delta magnitudes (x or y) to determine nav direction
      var direction =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      console.log("wheel scroll ", e.deltaX, e.deltaY, direction);

      if (direction > 0) {
        // next slide
        flickity_instance.next();
      } else {
        // prev slide
        flickity_instance.previous();
      }
    }
  }

  // first carousel
  var carousel_1 = document.querySelector(".gallery");
  var flickity_1_is_animating = false;

  flkty.on("settle", function(index) {
    console.log("Slide settle " + index);
    flickity_1_is_animating = false;
  });

  flkty.on("select", function(index) {
    console.log("Slide selected " + index);
    flickity_1_is_animating = true;
  });

  // detect mousewheel event within carousel element
  carousel_1.onwheel = function(e) {
    flickity_handle_wheel_event(e, flkty, flickity_1_is_animating);
  };
};
