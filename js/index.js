$(document).ready(function () {
  $(".nav-link").on("click", function () {
    $(".fa-chevron-right", this).css("transform", "rotate(90deg)");
  });

  $(".dropdown").on("hidden.bs.dropdown", function () {
    $(".fa-chevron-right").css("transform", "rotate(0deg)");
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

  $(window).scroll(function () {
    if (menu.offset().top > 50 && $(window).width() > 963) {
      menu.addClass("bg-dark");
      menu.addClass("no-padding");
    } else {
      menu.removeClass("bg-dark");
      menu.removeClass("no-paddingk");
    }
  });
});
