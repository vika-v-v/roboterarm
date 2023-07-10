// globale variablen für den roboterarm und verschiedene radien
let arm;

// radien von den kreisen
let r1 = 20;
let r2 = 10;
let r3 = 40;

let c; // canvas
let ctx; // context

// funktion zum zeichnen des roboterarms
function maleRoboterArm() {
    // die benötigte elemente einblenden
    document.getElementById("positionsContainer").style.display = "block";
    document.getElementById("canvasContainer").style.display = "block";

    // holen der werte aus den eingabefeldern
    let l1 = document.getElementById("axis1Length").value;
    let w1 = document.getElementById("axis1Angle").value;
    let p1 = document.getElementById("axis1Position").value;
    let l2 = document.getElementById("axis2Length").value;
    let w2 = document.getElementById("axis2Angle").value;
    let p2 = document.getElementById("axis2Position").value;

    // erstellen eines neuen roboterarm-objekts
    arm = new Roboterarm(l1, w1, p1, l2, w2, p2);

    // einstellungen für den zeichenkontext
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");

    // anpassung der canvasgröße an die größe des html-elements
    c.width = c.clientWidth;
    c.height = c.clientHeight;

    // löschen des canvas-inhalts
    ctx.clearRect(0, 0, c.width, c.height);

    // einstellen der farben
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "black";

    // anpassung des koordinatensystems
    ctx.translate(100, 100);
    ctx.scale(0.8, 0.8);

    let r3x = arm.getP1x() - l1 * Math.cos(w1 * (Math.PI / 180));
    let r3y = arm.getP1y() + l1 * Math.sin(w1 * (Math.PI / 180));
    
    // zeichnen der teile des roboterarms
    maleRechtecken(r3x, r3y, arm.getP1x(), arm.getP1y(), r1);
    maleLinien(r3x, r3y, arm.getP1x(), arm.getP1y());

    maleRechtecken(arm.getP1x(), arm.getP1y(), arm.getP2x(), arm.getP2y(), r2);
    maleLinien(arm.getP1x(), arm.getP1y(), arm.getP2x(), arm.getP2y());

    // zeichnen der kreise an den gelenken
    maleKreis(r3x, r3y, r3);
    maleKreis(arm.getP1x(), arm.getP1y(), r1);
    maleKreis(arm.getP2x(), arm.getP2y(), r2);

    ctx.fillStyle = "black";
    ctx.fillText(`(${r3x}, ${r3y})`, r3x, r3y);
    ctx.fillText(`(${arm.getP1x().toFixed(2)}, ${arm.getP1y().toFixed(2)})`, arm.getP1x(), arm.getP1y());
    ctx.fillText(`(${arm.getP2x().toFixed(2)}, ${arm.getP2y().toFixed(2)})`, arm.getP2x(), arm.getP2y());
}

// funktion zum zeichnen von kreisen
function maleKreis(x, y, r) {
    // zeichnen des zentralen kreises
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

// funktion zum zeichnen von linien
function maleLinien(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

// funktion zum zeichnen von rechtecken (in diesem fall zur darstellung des roboterarms)
function maleRechtecken(x1, y1, x2, y2, h) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    let len = Math.sqrt(dx*dx + dy*dy);
    dx /= len;
    dy /= len;

    let perp_dx = -dy;
    let perp_dy = dx;

    // beginn des pfads
    ctx.beginPath();
    // zeichnen des rechtecks
    ctx.moveTo(x1 + h*perp_dx, y1 + h*perp_dy); 
    ctx.lineTo(x2 + h*perp_dx, y2 + h*perp_dy); 
    ctx.lineTo(x2 - h*perp_dx, y2 - h*perp_dy); 
    ctx.lineTo(x1 - h*perp_dx, y1 - h*perp_dy); 
    // schließen des pfads und füllen/streichen des rechtecks
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}