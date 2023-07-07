let mode = 'vorwaerts';

window.onload = function() {
    manageFields();
};

function manageFields(value = mode) {
    // Get values from the form
    let l1 = parseFloat(document.getElementById('axis1Length').value) ?? 0;
    let w1 = parseFloat(document.getElementById('axis1Angle').value) ?? 0;
    let p1 = document.getElementById('axis1Position').value ?? 0;  // This is a string of format "x/y"
    let l2 = parseFloat(document.getElementById('axis2Length').value) ?? 0;
    let w2 = parseFloat(document.getElementById('axis2Angle').value) ?? 0;
    let p2 = document.getElementById('axis2Position').value ?? 0;  // This is a string of format "x/y"

    // Parse position strings to arrays
    let p1Array = p1.split("/").map(Number);
    let p2Array = p2.split("/").map(Number);

    if (value === 'vorwaerts') {
        document.getElementById('axis1Position').disabled = true;
        document.getElementById('axis2Position').disabled = true;
        document.getElementById('axis1Length').disabled = false;
        document.getElementById('axis1Angle').disabled = false;
        document.getElementById('axis2Length').disabled = false;
        document.getElementById('axis2Angle').disabled = false;
        document.getElementById('inverseKinematics').selected = false;
        
        // Calculate forward kinematics
        vorwaertsKinematik([p1Array[0], p1Array[1], l1, w1], [p2Array[0], p2Array[1], l2, w2]);
        console.log([p1Array[0], p1Array[1], l1, w1], [p2Array[0], p2Array[1], l2, w2]);
        
        // Update position fields
        document.getElementById('axis1Position').value = p1Array.join("/");
        document.getElementById('axis2Position').value = p2Array.join("/");
    } 
    else if (value === 'rueckwaerts') {
        document.getElementById('axis1Position').disabled = false;
        document.getElementById('axis2Position').disabled = false;
        document.getElementById('axis1Length').disabled = false;
        document.getElementById('axis1Angle').disabled = true;
        document.getElementById('axis2Length').disabled = false;
        document.getElementById('axis2Angle').disabled = true;
        document.getElementById('forwardKinematics').selected = false;
        
        // Calculate inverse kinematics
        rueckwaertsKinematik([p1Array[0], p1Array[1], l1, w1], [p2Array[0], p2Array[1], l2, w2]);
        console.log([p1Array[0], p1Array[1], l1, w1], [p2Array[0], p2Array[1], l2, w2]);

        // Update angle fields
        document.getElementById('axis1Angle').value = w1;
        document.getElementById('axis2Angle').value = w2;
    }
    mode = value;
}
