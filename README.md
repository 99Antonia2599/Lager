# Lagerraum Konstanz – Website

Statische Website für die Lagerraum-Vermietung von Achim Schächtle,
Macairestraße 4, 78467 Konstanz.

## Aufbau

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite: Hero, Vorteile, Größen, Galerie, Lage, Kontaktformular |
| `impressum.html` | Impressum |
| `datenschutz.html` | Datenschutzerklärung |
| `css/style.css` | Gesamtes Styling |
| `images/` | Bilder (Fotos folgen – siehe `images/LIESMICH.txt`) |

Keine Build-Tools nötig – die Seite kann bei jedem beliebigen Hoster
(z. B. IONOS, Strato, Netlify, GitHub Pages) direkt hochgeladen werden.

## Vor der Veröffentlichung noch zu erledigen

1. **Fotos einfügen**: Bilder in `images/` ablegen und die mit
   `PLATZHALTER` kommentierten SVG-Blöcke in `index.html` durch
   `<img>`-Tags ersetzen (Anleitung in `images/LIESMICH.txt`).
2. **E-Mail-Adresse eintragen**:
   - In `index.html` unten im `<script>`-Block die Konstante
     `KONTAKT_EMAIL` setzen (aktuell `anfrage@BITTE-EINTRAGEN.de`).
   - In `impressum.html` und `datenschutz.html` die markierte Stelle
     `[E-Mail-Adresse bitte ergänzen]` ausfüllen
     (eine E-Mail-Adresse im Impressum ist gesetzlich vorgeschrieben).
3. **Impressum prüfen**: Bei gewerblicher Vermietung ggf.
   USt-IdNr. und Unternehmensbezeichnung ergänzen (Hinweisbox auf der
   Impressum-Seite beachten).
4. **Datenschutz**: Hosting-Anbieter in der Datenschutzerklärung
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
