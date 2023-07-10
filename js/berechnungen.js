// globale variable für den modus, standardmäßig auf 'vorwaerts' gesetzt
let mode = 'vorwaerts';

// funktion zum verwalten der formularfelder, abhängig vom ausgewählten modus
function manageFields(value = mode) {
    // verstecken der fehlermeldung
    document.getElementById("error").style.display = "none";

    // einlesen der werte aus den formularfeldern
    let l1 = parseFloat(document.getElementById('axis1Length').value);
    let w1 = parseFloat(document.getElementById('axis1Angle').value);
    let l2 = parseFloat(document.getElementById('axis2Length').value);
    let w2 = parseFloat(document.getElementById('axis2Angle').value);
    let p1 = document.getElementById('axis1Position').value;
    let p2 = document.getElementById('axis2Position').value;

    let data1;
    let data2;

    // überprüfen, ob der modus 'vorwaerts' ist
    if (value === 'vorwaerts') {
        // deaktivieren der positionsfelder
        document.getElementById('axis1Position').disabled = true;
        document.getElementById('axis2Position').disabled = true;
        // aktivieren der winkelfelder
        document.getElementById('axis1Angle').disabled = false;
        document.getElementById('axis2Angle').disabled = false;
        // setzen der radiobuttons für die kinematik
        document.getElementById('inverseKinematics').checked = false;
        document.getElementById('forwardKinematics').checked = true;

        // aufbereiten der daten für die vorwärtskinematik
        data1 = [parseFloat(p1.split('/')[0]) || 0, parseFloat(p1.split('/')[1]) || 0, l1, w1];
        data2 = [parseFloat(p2.split('/')[0]) || 0, parseFloat(p2.split('/')[1]) || 0, l2, w2];

        // durchführen der vorwärtskinematik
        vorwaertsKinematik(data1, data2);

        // erstellen eines neuen roboterarm-objekts
        let ra = new Roboterarm(data1[2], data1[3], data1[0] + "/" + data1[1], data2[2], data2[3], data2[0] + "/" + data2[1]);
        console.log(ra);
        // aktualisieren der positionsfelder mit den berechneten werten
        document.getElementById('axis1Position').value = ra.getP1();
        document.getElementById('axis2Position').value = ra.getP2();
    } 
    // überprüfen, ob der modus 'rueckwaerts' ist
    else if (value === 'rueckwaerts') {
        // aktivieren der positionsfelder
        document.getElementById('axis1Position').disabled = true;
        document.getElementById('axis2Position').disabled = false;
        // deaktivieren der winkelfelder
        document.getElementById('axis1Angle').disabled = true;
        document.getElementById('axis2Angle').disabled = true;
        // setzen der radiobuttons für die kinematik
        document.getElementById('forwardKinematics').checked = false;
        document.getElementById('inverseKinematics').checked = true;

        // aufbereiten der daten für die rückwärtskinematik
        data1 = [parseFloat(p1.split('/')[0]) || 0, parseFloat(p1.split('/')[1]) || 0, l1];
        data2 = [parseFloat(p2.split('/')[0]) || 0, parseFloat(p2.split('/')[1]) || 0, l2];

        // durchführen der rückwärtskinematik
        rueckwaertsKinematik(data1, data2);

        // erstellen eines neuen roboterarm-objekts
        let ra = new Roboterarm(data1[2], data1[1], data1[0] + "/" + data1[1], data2[2], data2[1], data2[0] + "/" + data2[1]);

        // aktualisieren der winkel- und positionsfelder mit den berechneten werten
        document.getElementById('axis1Position').value = ra.getP1();
        document.getElementById('axis1Angle').value = ra.getW1();
        document.getElementById('axis2Angle').value = ra.getW2();
    }

    // aktualisieren des globalen modus mit dem ausgewählten wert
    mode = value;
}