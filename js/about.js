$(function () {
  $('[data-fancybox="gallery"]').fancybox({
    // Options will go here
  });

  AOS.init({ disable: "mobile", offset: 50, duration: 1200, delay: 40 });

  $(".about-testimonials").slick({
    dots: false,
    infinite: true,
    speed: 2900,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    arrows: false,
  });

  $(".dropdown-toggle").dropdown();

  // make dropdown menus respond to hover, not just click
  $("li.nav-item.dropdown").hover(
    function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeIn("fast");
    },
    function () {
      $(this)
        .find(".dropdown-menu")
        .stop(true, true)
        .delay(100)
        .fadeOut("fast");
    }
  );

  let date = new Date();
  let year = date.getFullYear();
  $("#theYear").text(year);
});
