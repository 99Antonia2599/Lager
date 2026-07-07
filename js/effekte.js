// Animationen der Startseite: Rolltor-Steuerung und Einblenden beim Scrollen.
// Als externes Skript eingebunden, damit die Content-Security-Policy
// Inline-Skripte komplett verbieten kann (script-src 'self').
// Ohne JavaScript bleibt alles nutzbar: Die Inhalte sind dann einfach
// sofort sichtbar, nur das Rolltor spielt bei jedem Aufruf (reines CSS).
(function () {
  "use strict";

  var wurzel = document.documentElement;
  wurzel.classList.add("js");

  // Rolltor nur einmal pro Sitzung öffnen – wer über die Reiter zurück
  // zur Startseite kommt, soll nicht jedes Mal warten müssen.
  try {
    if (sessionStorage.getItem("rolltor-gesehen")) {
      wurzel.classList.add("rolltor-gesehen");
    } else {
      sessionStorage.setItem("rolltor-gesehen", "1");
    }
  } catch (e) {
    // Speicher blockiert (z. B. strikte Privatsphäre-Einstellung):
    // dann läuft die Animation einfach bei jedem Besuch.
  }

  // Elemente mit der Klasse "anim" einblenden, sobald sie ins Bild scrollen.
  var elemente = document.querySelectorAll(".anim");
  var bewegungReduziert =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || bewegungReduziert) {
    for (var i = 0; i < elemente.length; i++) {
      elemente[i].classList.add("sichtbar");
    }
    return;
  }

  var beobachter = new IntersectionObserver(
    function (eintraege) {
      eintraege.forEach(function (eintrag) {
        if (eintrag.isIntersecting) {
          eintrag.target.classList.add("sichtbar");
          beobachter.unobserve(eintrag.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  for (var j = 0; j < elemente.length; j++) {
    beobachter.observe(elemente[j]);
  }
})();
