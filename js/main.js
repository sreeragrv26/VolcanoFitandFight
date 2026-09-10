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

  var revealTargets = document.querySelectorAll(".card, .person-card, .price-card");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (revealTargets.length && "IntersectionObserver" in window && !reduceMotion) {
    revealTargets.forEach(function (el) {
      el.classList.add("reveal");
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  }
});
