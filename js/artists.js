/* todo */
$(function() {
  AOS.init({ disable: "mobile", offset: 50, duration: 800, delay: 120 });

  $('[data-fancybox="gallery"]').fancybox({
    // Options will go here
  });

  $(".dropdown-toggle").dropdown();

  // make dropdown menus respond to hover, not just click
  $("li.nav-item.dropdown").hover(
    function() {
      $(this)
        .find(".dropdown-menu")
        .stop(true, true)
        .delay(100)
        .fadeIn("fast");
    },
    function() {
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
