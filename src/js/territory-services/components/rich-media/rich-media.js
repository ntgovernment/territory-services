var $btn = $(".ntg-rich-media.ntg-rich-media--video-embed button").first();
var $transcript = $("#ntg-rich-media__transcript-container");

function updateButtonLabel() {
  if ($btn.hasClass("collapsed")) {
    $btn.html("Show video transcript");
  } else {
    $btn.html("Hide video transcript");
  }
}

// Initial label set
updateButtonLabel();

// Update label on click (after Bootstrap toggles the class)
$btn.on("click", function () {
  $btn.toggleClass("collapsed");
  $transcript.slideToggle(200);
  updateButtonLabel();
});
