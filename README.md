# Lagerraum Konstanz – Website

Statische Website für die Lagerraum-Vermietung von Achim Schächtle,
Macairestraße 4, 78467 Konstanz.

## Aufbau

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite (Reiter „Start"): Hero, Vorteile, Teaser |
| `lagerraeume.html` | Reiter „Lagerräume": Größen und Foto-Galerie |
| `anfahrt.html` | Reiter „Anfahrt": Adresse, Lageplan, Maps-Link |
| `kontakt.html` | Reiter „Kontakt": Kontaktformular und Telefon |
| `impressum.html` | Impressum |
| `datenschutz.html` | Datenschutzerklärung |
| `css/style.css` | Gesamtes Styling (dunkles Industrial-Design) |
| `fonts/` | Lokal gehostete Schriften (Barlow / Barlow Condensed, DSGVO-konform ohne Google-Server) |
| `images/` | Fotos und Favicon |

Keine Build-Tools nötig – die Seite kann bei jedem beliebigen Hoster
(z. B. IONOS, Strato, Netlify, GitHub Pages) direkt hochgeladen werden.

## Vor der Veröffentlichung noch zu erledigen

1. **Impressum prüfen**: Bei gewerblicher Vermietung ggf.
   USt-IdNr. und Unternehmensbezeichnung ergänzen (Hinweisbox auf der
   Impressum-Seite beachten).
2. **Datenschutz**: Hosting-Anbieter in der Datenschutzerklärung
   benennen (Hinweisbox auf der Seite).

## Kontaktformular

Das Formular funktioniert ohne Server: Beim Absenden öffnet sich das
E-Mail-Programm des Besuchers mit einer fertig ausgefüllten Nachricht
an `KONTAKT_EMAIL`.

Wer stattdessen echte Formular-Zustellung ohne E-Mail-Programm möchte,
kann das Formular an einen Dienst wie [formsubmit.co](https://formsubmit.co)
oder [Formspree](https://formspree.io) anbinden: dazu im `<form>`-Tag
`action="https://formsubmit.co/IHRE-EMAIL" method="POST"` ergänzen und
den `<script>`-Block am Seitenende entfernen.

## Lokal ansehen

`index.html` einfach im Browser öffnen – mehr ist nicht nötig.
