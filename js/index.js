$(function () {
  AOS.init({ disable: "mobile", offset: 50, duration: 1200, delay: 40 });

  $(".carousel-wrapper").css("display", "none").fadeIn(1625);

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

  // $(".bordered-label").hover(
  //   function() {
  //     $(this)
  //       .parent()
  //       .find(".guitar-vert-icon")
  //       .css("opacity", 0.7);
  //     $(this).css("background-color", theGray);
  //   },
  //   function() {
  //     $(this)
  //       .parent()
  //       .find(".guitar-vert-icon")
  //       .css("opacity", 1.0);
  //     $(this).css("background-color", "transparent");
  //   }
  // );

  // $(".guitar-vert-icon").hover(
  //   function() {
  //     $(this)
  //       .parent()
  //       .parent()
  //       .find(".bordered-label")
  //       .css("background-color", theGray);
  //   },
  //   function() {
  //     $(this)
  //       .parent()
  //       .parent()
  //       .find(".bordered-label")
  //       .css("background-color", "transparent");
  //   }
  // );
});
