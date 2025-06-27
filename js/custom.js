(function ($) {
  "use strict";

  // COUNTER NUMBERS
  $(".counter-thumb").appear(function () {
    $(".counter-number").countTo();
  });

  // CUSTOM LINK
  $(".smoothscroll").click(function () {
    var el = $(this).attr("href");
    var elWrapped = $(el);
    var header_height = $(".navbar").height();

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $("body,html").animate(
        {
          scrollTop: totalScroll,
        },
        300
      );
    }
  });

  // ✅ LANGUAGE SWITCHER — using data-lang for reliability
  $(".language-switcher button").on("click", function () {
  var lang = $(this).data("lang");

  if (lang === "ur") {
    $(".lang-en").hide();
    $(".lang-ur").show();
    $("body").attr("dir", "rtl").css("text-align", "right");
  } else {
    $(".lang-ur").hide();
    $(".lang-en").show();
    $("body").attr("dir", "ltr").css("text-align", "left");
  }
});

})(jQuery);
