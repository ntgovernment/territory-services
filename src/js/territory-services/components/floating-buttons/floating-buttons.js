(function () {
  var floatingBtn = document.getElementById("floating-button");
  if (!floatingBtn) return;

  // Store the original offsetTop for reference
  var originalOffsetTop =
    floatingBtn.getBoundingClientRect().top +
    window.scrollY +
    floatingBtn.offsetHeight * 2;

  function updateFloatingButton() {
    var scrollY = window.scrollY || window.pageYOffset;
    var viewportHeight = window.innerHeight;
    var btnRect = floatingBtn.getBoundingClientRect();

    // If the button's top is below the viewport, fixate it
    if (originalOffsetTop > scrollY + viewportHeight) {
      if (!floatingBtn.classList.contains("is-fixed")) {
        floatingBtn.classList.add("is-fixed");
      }
    } else {
      floatingBtn.classList.remove("is-fixed");
    }
  }

  // Add a CSS class for the fixed state
  var style = document.createElement("style");
  style.innerHTML = `
      .floating-button.is-fixed {
        position: fixed !important;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1050;
        margin: 0 auto;
        width: 100%;
        max-width: 100vw;
        background: inherit;
        box-shadow: 0 -2px 16px rgba(0,0,0,0.08);
        animation: floatingBtnFadeIn 0.1s;
      }
      @keyframes floatingBtnFadeIn {
        from { opacity: 0; transform: translateY(30px);}
        to { opacity: 1; transform: translateY(0);}
      }
    `;
  document.head.appendChild(style);

  window.addEventListener("scroll", updateFloatingButton);
  window.addEventListener("resize", function () {
    // recalculate originalOffsetTop in case of layout changes
    originalOffsetTop =
      floatingBtn.getBoundingClientRect().top + window.scrollY;
    updateFloatingButton();
  });

  // Initial check
  updateFloatingButton();
})();
