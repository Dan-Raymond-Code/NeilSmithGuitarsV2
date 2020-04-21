/* todo */
$(function() {
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
