(function () {
  var $originalBtn = $("#floating-button");
  if ($originalBtn.length === 0) return;

  // Clone the button without the ID
  var $fixedBtn = $originalBtn
    .clone()
    .removeAttr("id")
    .addClass("is-fixed")
    .css({
      position: "fixed",
      bottom: "0",
      zIndex: 9999,
    });

  // Insert the duplicate just after the original
  $fixedBtn.insertAfter($originalBtn);

  function updateFloatingButton() {
    var scrollY = $(window).scrollTop();
    var viewportHeight = $(window).height();
    var originalBottom = $originalBtn.offset().top + $originalBtn.outerHeight();

    // If the original button's bottom is above the bottom of the viewport, show the fixed one
    if (originalBottom < scrollY + viewportHeight) {
      $fixedBtn.hide();
    } else {
      $fixedBtn.show();
    }
  }

  $(window).on("scroll", updateFloatingButton);
  $(window).on("resize", updateFloatingButton);

  // Initial check
  updateFloatingButton();
})();
