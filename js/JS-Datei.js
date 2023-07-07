window.onload = function() {
    erstelleTabelle();
    manageFields();
};


function maleRoboterArm() {
    document.getElementById("error").style.display = "none";
    // Get values from the form
    let l1 = parseFloat(document.getElementById('axis1Length').value);
    let w1 = parseFloat(document.getElementById('axis1Angle').value);
    let p1 = document.getElementById('axis1Position').value;  // This is a string of format "x/y"
    let l2 = parseFloat(document.getElementById('axis2Length').value);
    let w2 = parseFloat(document.getElementById('axis2Angle').value);
    let p2 = document.getElementById('axis2Position').value;  // This is a string of format "x/y"

    // Create a new Roboterarm object
    let robotoerArm = new Roboterarm(l1, w1, p1, l2, w2, p2);
    
    zeichneRoboterarm(robotoerArm);
}


function zeichneRoboterarm(arm) {
    // Values extracted from the robot arm
    let l1 = arm.getL1();
    let w1 = degToRad(arm.getW1()); // Angle in radians
    let p1 = arm.getP1().split('/'); // Assuming the format is 'x/y'
    let l2 = arm.getL2();
    let w2 = degToRad(arm.getW2()); // Angle in radians
    let p2 = arm.getP2().split('/'); // Assuming the format is 'x/y'
    let r1 = 10;
    let r2 = 20;
    let r3 = 30;

    // Get context of the canvas
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    c.width = c.clientWidth;
    c.height = c.clientHeight;

    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "black";
    // Reset Canvas
    ctx.clearRect(0, 0, c.width, c.height);

    // Draw P1 circle
    ctx.beginPath();
    ctx.arc(parseFloat(p2[0]), parseFloat(p2[1]), r1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    // Draw P2 circle
    ctx.beginPath();
    ctx.arc(parseFloat(p1[0]), parseFloat(p1[1]), r2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    // Draw a line from P1 to P2
    ctx.beginPath();
    ctx.moveTo(parseFloat(p1[0]), parseFloat(p1[1]));
    ctx.lineTo(parseFloat(p2[0]), parseFloat(p2[1]));
    ctx.stroke();

    // Calculate the second point of the line based on the given angle and length
    let x2 = parseFloat(p1[0]) + l1 * Math.cos(w2);
    let y2 = parseFloat(p1[1]) + l1 * Math.sin(w2);

    ctx.beginPath();
    ctx.arc(x2, y2, r3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    // Draw the second line
    ctx.beginPath();
    ctx.moveTo(parseFloat(p1[0]), parseFloat(p1[1]));
    ctx.lineTo(x2, y2);
    ctx.stroke();
}



function erstelleTabelle() {
    var positionsContainer = document.getElementById('positionsContainer');
    var table = document.getElementById('positions');

    // Tabelleninhalt erstellen
    for (var i = 0; i < positionen.length; i++) {
        var position = positionen[i];

        var row = document.createElement('tr');

        var elfiCell = document.createElement('td');
        elfiCell.appendChild(document.createTextNode((i + 1)));
        elfiCell.style.verticalAlign = 'middle'; // Align elements to the middle
        elfiCell.style.borderBottom = '1px solid black'; // Add a border at the bottom
        row.appendChild(elfiCell);

        var positionCell = document.createElement('td');
        positionCell.appendChild(document.createTextNode(position.toString()));
        positionCell.style.verticalAlign = 'middle'; // Align elements to the middle
        positionCell.style.borderBottom = '1px solid black'; // Add a border at the bottom
        row.appendChild(positionCell);

        var aktivCell = document.createElement('td');
        aktivCell.appendChild(document.createTextNode(i === aktPos ? '<' : ''));
        aktivCell.style.verticalAlign = 'middle'; // Align elements to the middle
        aktivCell.style.borderBottom = '1px solid black'; // Add a border at the bottom
        row.appendChild(aktivCell);

        table.appendChild(row);
    }

    positionsContainer.appendChild(table);
}