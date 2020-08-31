$(function() {
  $('[data-fancybox="gallery"]').fancybox({
    // Options will go here
  });

  $(".dropdown-toggle").dropdown();

  $(".guitar-thumb:first").addClass("thumbnail-select");

  $(".thumbnail-item").on("click", function(evt) {
    evt.preventDefault();
    let $target = $(evt.target);

    $target.removeClass("thumbnail-blur");

    $(".guitar-thumb").removeClass("thumbnail-select");

    console.log("target = " + $target.attr("class"));

    let src = $target.attr("src");

    if (src) {
      console.log(`src = ${src}`);
      let index = src.lastIndexOf("-");
      console.log(`index = ${index}`);
      let frag = src.substring(0, index + 1);
      console.log(`frag = ${frag}`);
      let largeImg = frag + "large.jpg";
      console.log(`largeImg = ${largeImg}`);
      let xlargeImg = frag + "xlarge.jpg";
      console.log(`xlargeImg = ${xlargeImg}`);
      $("#detail-img-large").attr("src", largeImg);
      $('a[data-fancybox="gallery"]').attr("href", xlargeImg);
      baseImgUrl = largeImg;
      $target.addClass("thumbnail-select");
    }
  });

  $(".thumbnail-item").hover(
    function(evt) {
      let $target = $(evt.target);

      if ($target) {
        let src = $target.attr("src");

        if (src) {
          let index = src.lastIndexOf("-");
          let frag = src.substring(0, index + 1);
          let largeImg = frag + "large.jpg";
          $("#detail-img-large").attr("src", largeImg);
          $target.addClass("thumbnail-blur");
        }
      }
    },
    function(evt) {
      $("#detail-img-large").attr("src", baseImgUrl);

      let $target = $(evt.target);

      if ($target) {
        $target.removeClass("thumbnail-blur");
      }
      //$target.css("opacity", 1.0);
    }
  );

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
