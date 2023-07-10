// radien von den kreisen
let r1 = 20;
let r2 = 10;
let r3 = 40;

let c; // canvas
let ctx; // context

let r3x = 0;
let r3y = 0;

// funktion zum zeichnen des roboterarms
function maleRoboterArm(moveForward = true) {
    
    // die benötigte elemente einblenden
    document.getElementById("positionsContainer").style.display = "block";
    document.getElementById("canvasContainer").style.display = "block";

    console.log(roboterarm);

    // einstellungen für den zeichenkontext
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");

    // anpassung der canvasgröße an die größe des html-elements
    c.width = c.clientWidth;
    c.height = c.clientHeight;
    ctx.translate(c.width / 2, c.height / 2);

    // löschen des canvas-inhalts
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.scale(0.8, 0.8);

    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "black";

    if(Math.abs(calculateDistance(r3x, r3y, roboterarm.getP1x(), roboterarm.getP1y()) - roboterarm.getL1()) > 20 ||
        Math.abs(calculateDistance(roboterarm.getP1x(), roboterarm.getP1y(), roboterarm.getP2x(), roboterarm.getP2y()) - roboterarm.getL2()) > 20) {
            document.getElementById("error").style.display = "block";
            moveForward ? nachstePosition() : vorheriegePosition();
            return 0;
    }

    // zeichnen der teile des roboterarms
    maleRechtecken(r3x, r3y, roboterarm.getP1x(), roboterarm.getP1y(), r1);
    maleLinien(r3x, r3y, roboterarm.getP1x(), roboterarm.getP1y());

    maleRechtecken(roboterarm.getP1x(), roboterarm.getP1y(), roboterarm.getP2x(), roboterarm.getP2y(), r2);
    maleLinien(roboterarm.getP1x(), roboterarm.getP1y(), roboterarm.getP2x(), roboterarm.getP2y());

    // zeichnen der kreise an den gelenken
    maleKreis(r3x, r3y, r3);
    maleKreis(roboterarm.getP1x(), roboterarm.getP1y(), r1);
    maleKreis(roboterarm.getP2x(), roboterarm.getP2y(), r2);

    // ausgeben koordinaten zur prüfung
    //ctx.fillStyle = "black";
    //ctx.fillText(`(${r3x.toFixed(2)}, ${r3y.toFixed(2)})`, r3x, r3y);
    //ctx.fillText(`(${roboterarm.getP1x().toFixed(2)}, ${roboterarm.getP1y().toFixed(2)})`, roboterarm.getP1x(), roboterarm.getP1y());
    //ctx.fillText(`(${roboterarm.getP2x().toFixed(2)}, ${roboterarm.getP2y().toFixed(2)})`, roboterarm.getP2x(), roboterarm.getP2y());
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

function calculateDistance(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}