window.onload = function() {
    erstelleTabelle();
    manageFields();
};

let arm;

let r3 = 40;
let r1 = 20;
let r2 = 10;

let c;
let ctx;

function maleRoboterArm() {
    document.getElementById("error").style.display = "none";

    // Read values from input fields
    let l1 = document.getElementById("axis1Length").value;
    let w1 = document.getElementById("axis1Angle").value;
    let p1 = document.getElementById("axis1Position").value;
    let l2 = document.getElementById("axis2Length").value;
    let w2 = document.getElementById("axis2Angle").value;
    let p2 = document.getElementById("axis2Position").value;

    // Instantiate a Roboterarm object
    arm = new Roboterarm(l1, w1, p1, l2, w2, p2);

    // Draw the arm
    zeichneRoboterarm();
}

function zeichneRoboterarm() {
    
    
    
    // Get context of the canvas
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    
    c.width = c.clientWidth;
    c.height = c.clientHeight;
    
    // Reset Canvas
    ctx.clearRect(0, 0, c.width, c.height);
    
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "black";

    maleTrapezien();
    maleKreisen();
    maleLinien();
}

function maleKreisen() {
    // Draw R3 circle at the bottom left
    ctx.beginPath();
    ctx.arc(r3 + 100, c.height - r3 - 100, r3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    // P1
    ctx.beginPath();
    ctx.arc(arm.getP1x(), arm.getP1y(), r1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    // P2
    ctx.beginPath();
    ctx.arc(arm.getP2x(), arm.getP2y(), r2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

function maleLinien() {
    ctx.beginPath();
    ctx.moveTo(r3 + 100, c.height - r3 - 100);
    ctx.lineTo(arm.getP1x(), arm.getP1y());
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(arm.getP1x(), arm.getP1y());
    ctx.lineTo(arm.getP2x(), arm.getP2y());
    ctx.stroke();
}

function maleTrapezien() {
    let h = r2;

    ctx.beginPath();
    ctx.moveTo(arm.getP1x(), arm.getP1y() + h); // Obere linke Ecke
    ctx.lineTo(arm.getP2x(), arm.getP2y() + h); // Obere rechte Ecke
    ctx.lineTo(arm.getP2x(), arm.getP2y() - h); // Untere rechte Ecke
    ctx.lineTo(arm.getP1x(), arm.getP1y() - h); // Untere linke Ecke
    ctx.closePath(); // Schließen Sie den Pfad
    ctx.fill();
    ctx.stroke(); // Zeichnen Sie das Trapez

    ctx.beginPath();
    ctx.moveTo(arm.getP1x(), arm.getP1y() + h); // Obere linke Ecke
    ctx.lineTo(r3 + 100, c.height - r3 - 100 + h); // Obere rechte Ecke
    ctx.lineTo(r3 + 100, c.height - r3 - 100 - h); // Untere rechte Ecke
    ctx.lineTo(arm.getP1x(), arm.getP1y() - h); // Untere linke Ecke
    ctx.closePath(); // Schließen Sie den Pfad
    ctx.fill();
    ctx.stroke(); // Zeichnen Sie das Trapez
}