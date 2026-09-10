document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  var ENQUIRY_EMAIL = "volcanofitandfight@gmail.com";

  var form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var get = function (name) {
        var field = form.querySelector('[name="' + name + '"]');
        return field ? field.value.trim() : "";
      };

      var name = get("name");
      var phone = get("phone");
      var location = get("location");
      var interest = get("interest");
      var message = get("message");

      var subject = "Enquiry from " + (name || "website visitor") + " - " + interest;
      var body =
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Location: " + location + "\n" +
        "Interested In: " + interest + "\n\n" +
        "Message:\n" + (message || "(none)");

      var mailtoLink =
        "mailto:" + ENQUIRY_EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      var note = form.querySelector(".form-status");
      if (!note) {
        note = document.createElement("p");
        note.className = "form-status form-note";
        form.appendChild(note);
      }
      note.textContent =
        "Opening your email app now. If nothing happens, please email " +
        ENQUIRY_EMAIL + " or WhatsApp us directly.";

      window.location.href = mailtoLink;
    });
  }
});
