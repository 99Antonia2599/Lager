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

## Sicherheit

Die Seite ist als statische Website mit minimaler Angriffsfläche gebaut:

- **Content-Security-Policy** auf jeder Seite (`default-src 'none'`,
  nur eigene Skripte/Styles/Bilder/Schriften, keine Inline-Skripte
  oder Inline-Styles, `base-uri 'none'`, `upgrade-insecure-requests`);
  einzige Ausnahme: die Anfahrtsseite erlaubt `frame-src`
  für die Google-Maps-Karte
- **Google Maps als Zwei-Klick-Lösung** (`js/karte.js`) – die Karte
  lädt erst nach aktiver Einwilligung des Besuchers, vorher fließen
  keine Daten an Google (DSGVO)
- **Referrer-Policy** `strict-origin-when-cross-origin`
- Externe Links mit `rel="noopener noreferrer"`
- JavaScript nur als externe Datei (`js/kontakt.js`), kein `innerHTML`,
  Formulardaten werden ausschließlich URL-kodiert an `mailto:` übergeben
- Keine Cookies, kein Tracking, keine Inhalte von Fremd-Servern
  (auch Schriften lokal)

Beim Hosting zusätzlich beachten:

- **HTTPS erzwingen** – bei GitHub Pages: Settings → Pages →
  Haken bei „Enforce HTTPS"
- Wer eigenes Hosting nutzt, sollte die CSP zusätzlich als
  HTTP-Header setzen und `X-Content-Type-Options: nosniff` sowie
  `frame-ancestors 'none'` (gegen Clickjacking) ergänzen –
  beides kann ein Meta-Tag technisch nicht leisten.

## Lokal ansehen

`index.html` einfach im Browser öffnen – mehr ist nicht nötig.
