var calling1 = document.getElementById("calling-card-slide-1");
var calling2 = document.getElementById("calling-card-slide-2");
var dark = document.getElementsByClassName("dark");

var quote1Wrapper = document.getElementById("quote-1-wrapper");
var quote1 = document.getElementById("quote-1");
var quote2Wrapper = document.getElementById("quote-2-wrapper");
var quote2 = document.getElementById("quote-2");
var chooseText = document.getElementById("choose");
var container = document.getElementById("container");

var backgroundImg = document.getElementById("background");
var appendix1 = document.getElementById("appendix-1");
var appendix2 = document.getElementById("appendix-2");

var halfwayVideo = document.getElementById("halfway-point-video");

// Quote One
if (quote1Wrapper !== null) {
  quote1Wrapper.addEventListener("click", function() {
    var calling1Show = calling1.classList.contains("slide-in");
    var quote1Hidden = quote1.classList.contains("hide");
    var quote2Hidden = quote2.classList.contains("hide");
    if (chooseText) {
      var chooseTextHidden = chooseText.classList.contains("hide");
    }
    var backgroundImgHidden = backgroundImg.classList.contains("hide");

    if (!quote1Hidden) {
      quote1Wrapper.classList.add("hide-mobile");
      quote1.classList.add("hide");
    }

    if (!quote2Hidden) {
      quote2.classList.add("hide");
      quote2Wrapper.style.width = "0px";
      setTimeout(function() {
        quote2Wrapper.style.display = "none";
      }, 800);
      quote2Wrapper.style.backgroundColor = "#cfd1d1";
      container.style.backgroundColor = "#cfd1d1";
      for (i = 0; i < dark.length; i++) {
        dark[i].classList.add("light");
      }
      if (halfwayVideo) {
        halfwayVideo.classList.add("hide");
        setTimeout(function() {
          halfwayVideo.style.display = "none";
        }, 800);
      }
    }
    if (chooseText) {
      if (!chooseTextHidden) {
        chooseText.classList.add("hide");
        chooseText.classList.add("hide-mobile");
      }
    }
    if (!calling1Show) {
      calling1.classList.add("slide-in");
      setTimeout(function() {
        calling1.classList.add("slide-in-m");
      }, 800);
    }
  });
}

// Quote Two
if (quote2Wrapper !== null) {
  quote2Wrapper.addEventListener("click", function() {
    var calling2Show = calling2.classList.contains("slide-in");
    var quote1Hidden = quote1.classList.contains("hide");
    var quote2Hidden = quote2.classList.contains("hide");
    if (chooseText) {
      var chooseTextHidden = chooseText.classList.contains("hide");
    }
    var backgroundImgHidden = backgroundImg.classList.contains("hide");

    if (!quote1Hidden) {
      quote1.classList.add("hide");
      quote1Wrapper.style.width = "0px";
      setTimeout(function() {
        quote1Wrapper.style.display = "none";
      }, 800);
      quote1Wrapper.style.backgroundColor = "#1d1d1d";
      container.style.backgroundColor = "#1d1d1d";
      if (halfwayVideo) {
        halfwayVideo.classList.add("hide");
        setTimeout(function() {
          halfwayVideo.style.display = "none";
        }, 800);
      }
    }

    if (!quote2Hidden) {
      quote2Wrapper.classList.add("hide-mobile");
      quote2Wrapper.classList.add("hide");
    }

    if (chooseText) {
      if (!chooseTextHidden) {
        chooseText.classList.add("hide");
        chooseText.classList.add("hide-mobile");
      }
    }

    if (!calling2Show) {
      calling2.classList.add("slide-in");
      setTimeout(function() {
        calling2.classList.add("slide-in-m");
      }, 800);
    }
  });
}

function zoomTransition(destination) {
  backgroundImg.classList.add("scale-up");
  $("body").fadeOut(1000, newpage);
  function newpage() {
    setTimeout(function() {
      window.location = destination;
    }, 600);
  }
}

$(document).ready(function() {
  $("body").css("display", "none");

  $("body").fadeIn(2000);
  $(".scaled-background").fadeIn(2000);

  $(".scaled-background").removeClass("scaled-up");

  $(".link").click(function(event) {
    event.preventDefault();
    newLocation = this.href;
    $("body").fadeOut(1000, newpage);
  });

  function newpage() {
    window.location = newLocation;
  }

  $(".quote-2").click(function(event) {
    $("body").css("background-color", "#1d1d1d");
    $("html").css("background-color", "#1d1d1d");
  });
});
