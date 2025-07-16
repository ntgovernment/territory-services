$(document).ready(function () {
  initFeedback();
});

function feedbacksubmit(event) {
  var form = $(event.target)[0];
  var formData = new FormData(form);

  $.ajax({
    url: form.action,
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: function (response) {
      $("#submitting-feedback").hide();
      $("#success-message").show();
    },
    error: function (xhr, status, error) {
      console.error(error);
      // Handle error here if needed
    },
  });

  $(event.target).hide();
  $("#submitting-feedback").show();
}

function initFeedback() {
  $("#thumbs-feedback-form .visually-hidden + label").each(function () {
    if ($(this).text().trim() === "Yes") {
      $(this).html(
        '<i class="fa-solid fa-thumbs-up" aria-hidden="true"></i><span class="visually-hidden">Yes</span>'
      );
    }
    if ($(this).text().trim() === "No") {
      $(this).html(
        '<i class="fa-solid fa-thumbs-down" aria-hidden="true"></i><span class="visually-hidden">No</span>'
      );
    }
  });

  var feedback = $(".ntg-feedback-form");
  var inputs = feedback.find("fieldset input");
  var labels = feedback.find("fieldset label");
  var collapse = feedback.find(".collapse");

  labels.each(function () {
    $(this).on("click", function () {
      showForm($(this));
    });
  });

  inputs.each(function () {
    $(this).on("focus", function () {
      showForm($(this).next());
    });
  });

  function showForm(elem) {
    collapse.collapse("show");
    elem.removeClass("unselected");
  }
}
