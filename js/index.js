$(document).ready(function () {
  $(".nav-link").on("click", function () {
    $(".fa-arrow-right", this).css("transform", "rotate(90deg)");
  });

  $("dropdown").on("hidden.bs.dropdown", function () {
    $(".fa-arrow-right").css("transform", "rotate:0deg");
  });

  $(window).resize(function () {
    if ($(window).width() < 963) {
      menu.addClass("bg-dark");
      menu.addClass("nav-margin");
      console.log(menu);
    } else {
      menu.removeClass("nav-margin");
    }
  });

  $(window).scroll(function () {
    console.log("funca");
    var menu = $("#menu");
    if (menu.offset().top > 100 && $(window).width() > 963) {
      menu.addClass("bg-inverse");
    } else {
      menu.removeClass("bg-inverse");
    }
  });
});
