# Allgemein
Dieses Projekt bietet eine interaktive Simulation eines zweidimensionalen Roboterarms. Benutzer können die Länge und den Winkel jeder Achse ändern und die resultierenden Positionen in Echtzeit visualisieren.

# Struktur
Die Kernkomponente dieses Projekts ist die Kinematikrechner.xhtml Datei, die als Hauptseite der Webanwendung fungiert. Sie enthält grundlegende HTML-Strukturen und verweist auf mehrere JavaScript- und CSS-Dateien, die zur Funktionalität und Darstellung der Anwendung beitragen. Diese Dateien sind:

JavaScript-Dateien:
    js/JS-Datei.js
    js/utils.js
    js/berechnungen.js
    js/roboterarm.js
    js/positionen-tabelle.js
    js/malen.js
CSS-Datei:
    css/CCS_Datei.css

# Anmerkungen zur Struktur
Die aktuell verwendete CSS-Datei trägt den Namen CCS_Datei.css. Wenn eine Umbenennung in CSS_Datei.css gewünscht wird, muss die Referenz in Zeile 8 von Kinematikrechner.xhtml entsprechend angepasst werden.

Die JavaScript-Datei JS-Datei.js wurde ursprünglich mit einem falschen Pfad referenziert (./JS-Datei.js). Dieser Fehler wurde behoben und der korrekte Pfad (js/JS-Datei.js) wird in Zeile 10 von Kinematikrechner.xhtml verwendet.

Die verwendeten Dateinamen sind unkonventionell. Üblicherweise würde man die Datei Kinematikrechner.xhtml als index.xhtml und CCS_Datei.css als styles.css bezeichnen. Bei Bedarf können Sie die Dateinamen ändern und die Verweise in Kinematikrechner.xhtml entsprechend aktualisieren.

# Anmerkung zu Stilen
Bootstrap ist in Zeile 9 von Kinematikrechner.xhtml eingebunden. Falls nicht benötigt, kann es entfernt werden.