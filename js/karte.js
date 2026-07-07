// Google-Maps-Einbindung als Zwei-Klick-Lösung (DSGVO):
// Die Karte wird erst geladen, nachdem der Besucher aktiv zugestimmt hat.
// Vorher fließen keinerlei Daten an Google.
(function () {
  "use strict";

  var knopf = document.getElementById("karte-laden");
  var wrap = document.getElementById("karte");
  if (!knopf || !wrap) return;

  knopf.addEventListener("click", function () {
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.google.com/maps?q=Macairestra%C3%9Fe+4,+78467+Konstanz&output=embed";
    iframe.title = "Google Maps: Macairestraße 4, 78467 Konstanz";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer";
    wrap.replaceChildren(iframe);
  });
})();
