$(document).ready(function () {
  $(".nav-link").on("click", function () {
    $(".fa-arrow-right", this).css("transform", "rotate(90deg)");
  });

  $("dropdown").on("hidden.bs.dropdown", function () {
    $(".fa-arrow-right").css("transform", "rotate:0deg");
  });

  var menu = $("#menu");

  function darkMode() {
    if ($(window).width() < 963) {
      console.log("nada");
      menu.addClass("bg-dark");

      $("#img-nav-dropdown").css("display", "none");
      $("#img-nav-dropdown").css("padding", "0");
      $("#img-nav-dropdown").css("margin", "0");
    } else {
      menu.removeClass("bg-dark");
    }
  }
  darkMode();

  function opacityDarkMode() {
    if ($("#menu").offset().top > 100 && $(window).width() > 963) {
      menu.addClass("bg-inverse");
    } else {
      menu.removeClass("bg-inverse");
    }
  }

  $(window).scroll(function () {
    console.log("funca", $(window).width(), $("#menu").offset());

    opacityDarkMode;
    darkMode();
  });
});
