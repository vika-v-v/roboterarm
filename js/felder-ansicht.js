let mode = 'vorwaerts';

function manageFields(value = mode) {
    document.getElementById("error").style.display = "none";

    // Get values from the form
    let l1 = parseFloat(document.getElementById('axis1Length').value);
    let w1 = parseFloat(document.getElementById('axis1Angle').value);
    let l2 = parseFloat(document.getElementById('axis2Length').value);
    let w2 = parseFloat(document.getElementById('axis2Angle').value);
    let p1 = document.getElementById('axis1Position').value;
    let p2 = document.getElementById('axis2Position').value;

    let data1;
    let data2;

    if (value === 'vorwaerts') {
        document.getElementById('axis1Position').disabled = true;
        document.getElementById('axis2Position').disabled = true;
        document.getElementById('axis1Angle').disabled = false;
        document.getElementById('axis2Angle').disabled = false;
        document.getElementById('inverseKinematics').checked = false;
        document.getElementById('forwardKinematics').checked = true;

        data1 = [parseFloat(p1.split('/')[0]) || 0, parseFloat(p1.split('/')[1]) || 0, l1, w1];
        data2 = [parseFloat(p2.split('/')[0]) || 0, parseFloat(p2.split('/')[1]) || 0, l2, w2];
        
        vorwaertsKinematik(data1, data2);

        let ra = new Roboterarm(data1[2], data1[3], data1[0] + "/" + data1[1], data2[2], data2[3], data2[0] + "/" + data2[1]);

        document.getElementById('axis1Position').value = ra.getP1();
        document.getElementById('axis2Position').value = ra.getP2();
    } 
    else if (value === 'rueckwaerts') {
        document.getElementById('axis1Position').disabled = false;
        document.getElementById('axis2Position').disabled = false;
        document.getElementById('axis1Length').disabled = false;
        document.getElementById('axis1Angle').disabled = true;
        document.getElementById('axis2Length').disabled = false;
        document.getElementById('axis2Angle').disabled = true;
        document.getElementById('forwardKinematics').checked = false;
        document.getElementById('inverseKinematics').checked = true;
        
        // Note that the angles are not being used in this mode
        data1 = [parseFloat(p1.split('/')[0]) || 0, parseFloat(p1.split('/')[1]) || 0, l1];
        data2 = [parseFloat(p2.split('/')[0]) || 0, parseFloat(p2.split('/')[1]) || 0, l2];
        
        rueckwaertsKinematik(data1, data2);

        let ra = new Roboterarm(data1[2], data1[1], data1[0] + "/" + data1[1], data2[2], data2[1], data2[0] + "/" + data2[1]);

        document.getElementById('axis1Angle').value = ra.getW1();
        document.getElementById('axis2Angle').value = ra.getW2();
    }

    mode = value;
}
