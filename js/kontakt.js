// Kontaktformular: erstellt eine fertige E-Mail im Mailprogramm des Besuchers.
// Als externes Skript eingebunden, damit die Content-Security-Policy
// Inline-Skripte komplett verbieten kann (script-src 'self').
// Alternativ kann das Formular an einen Dienst wie formsubmit.co oder
// Formspree angebunden werden (siehe README.md).
(function () {
  "use strict";

  var KONTAKT_EMAIL = "info@blechdach.de";

  var formular = document.getElementById("anfrage-formular");
  if (!formular) return;

  formular.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target;
    var betreff = "Anfrage Lagerraum Konstanz – " + f.name.value;
    var text =
      "Name: " + f.name.value + "\n" +
      "Telefon: " + f.telefon.value + "\n" +
      "E-Mail: " + (f.email.value || "-") + "\n" +
      "Gewünschte Größe: " + (f.groesse.value || "-") + "\n\n" +
      "Nachricht:\n" + f.nachricht.value;
    window.location.href = "mailto:" + KONTAKT_EMAIL +
      "?subject=" + encodeURIComponent(betreff) +
      "&body=" + encodeURIComponent(text);
  });
})();
