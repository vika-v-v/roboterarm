let arm;

let r3 = 40;
let r1 = 20;
let r2 = 10;

let c;
let ctx;

function maleRoboterArm() {
    let l1 = document.getElementById("axis1Length").value;
    let w1 = document.getElementById("axis1Angle").value;
    let p1 = document.getElementById("axis1Position").value;
    let l2 = document.getElementById("axis2Length").value;
    let w2 = document.getElementById("axis2Angle").value;
    let p2 = document.getElementById("axis2Position").value;

    arm = new Roboterarm(l1, w1, p1, l2, w2, p2);

    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    
    c.width = c.clientWidth;
    c.height = c.clientHeight;
    
    ctx.clearRect(0, 0, c.width, c.height);
    
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "black";

    ctx.translate(100, 100);
    ctx.scale(0.8, 0.8);

    maleRechtecken(c.width / 2, c.height / 2, arm.getP1x(), arm.getP1y(), r1);
    maleLinien(c.width / 2, c.height / 2, arm.getP1x(), arm.getP1y());

    maleRechtecken(arm.getP1x(), arm.getP1y(), arm.getP2x(), arm.getP2y(), r2);
    maleLinien(arm.getP1x(), arm.getP1y(), arm.getP2x(), arm.getP2y());

    maleKreisen();
}

function maleKreisen() {
    ctx.beginPath();
    ctx.arc(c.width / 2, c.height / 2, r3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(arm.getP1x(), arm.getP1y(), r1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

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

function maleRechtecken(x1, y1, x2, y2, h) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    let len = Math.sqrt(dx*dx + dy*dy);
    dx /= len;
    dy /= len;

    let perp_dx = -dy;
    let perp_dy = dx;

    ctx.beginPath();
    ctx.moveTo(x1 + h*perp_dx, y1 + h*perp_dy); 
    ctx.lineTo(x2 + h*perp_dx, y2 + h*perp_dy); 
    ctx.lineTo(x2 - h*perp_dx, y2 - h*perp_dy); 
    ctx.lineTo(x1 - h*perp_dx, y1 - h*perp_dy); 
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}
