$(document).ready(function () {
  // HIDEN MENU

  $("#sScreenMenuOff").hide();
  $(".sScreenNavMenu").hide();
  $(".sScreenMenuBtn").click(function () {
    $(".sScreenMenuBtn img").toggle(300);
    $(".sScreenNavMenu").toggle(300);
  });

  // POPUP PHOTO SLIDER

  $(".galleryPhoto").click(function (event) {
    event.preventDefault();
    $(".galleryPopupSlider img")
      .hide()
      .attr("src", $(this).attr("href"))
      .fadeIn();
    $(".js-overlay").fadeIn();
    $(".container").css("filter", "blur(5px)");
    $(".js-overlay").addClass("disabled");
  });
  $(".popupClose").click(function () {
    $(".js-overlay").fadeOut();
    $(".container").css("filter", "none");
  });

  // SLICK-SLIDER CODE

  // baner

  $(".slickSlider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });

  $(".subBanerSlider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });

  // gallery

  $(".galleryPhotoSlider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: ".galleryPhotoSliderArrowsPrev",
    nextArrow: ".galleryPhotoSliderArrowsNext",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
