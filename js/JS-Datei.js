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

    maleTrapezien(c.width / 2, c.height / 2, arm.getP1x(), arm.getP1y(), r1);
    maleLinien(c.width / 2, c.height / 2, arm.getP1x(), arm.getP1y());

    maleTrapezien(arm.getP1x(), arm.getP1y(), arm.getP2x(), arm.getP2y(), r2);
    maleLinien(arm.getP1x(), arm.getP1y(), arm.getP2x(), arm.getP2y());

    maleKreisen();
}

function maleKreisen() {
    // Draw R3 circle at the bottom left
    ctx.beginPath();
    ctx.arc(c.width / 2, c.height / 2, r3, 0, 2 * Math.PI);
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

function maleLinien(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function maleTrapezien(x1, y1, x2, y2, h) {
    
    // Calculate direction vector of the arm and normalize it
    let dx = x2 - x1;
    let dy = y2 - y1;
    let len = Math.sqrt(dx*dx + dy*dy);
    dx /= len;
    dy /= len;

    // Rotate the direction vector by 90 degrees to get a perpendicular vector
    let perp_dx = -dy;
    let perp_dy = dx;

    ctx.beginPath();
    ctx.moveTo(x1 + h*perp_dx, y1 + h*perp_dy); // Upper left corner
    ctx.lineTo(x2 + h*perp_dx, y2 + h*perp_dy); // Upper right corner
    ctx.lineTo(x2 - h*perp_dx, y2 - h*perp_dy); // Lower right corner
    ctx.lineTo(x1 - h*perp_dx, y1 - h*perp_dy); // Lower left corner
    ctx.closePath(); // Close the path
    ctx.fill();
    ctx.stroke(); // Draw the trapezoid
}
