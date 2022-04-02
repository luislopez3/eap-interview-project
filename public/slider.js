// From the Slick Carousel Library https://kenwheeler.github.io/slick/
var $;
$(document).ready(function () {
  $(".testimonial-slider").slick({
    infinite: true,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 250,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
