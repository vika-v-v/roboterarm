class Roboterarm {
    constructor(l1, w1, p1, l2, w2, p2) {
        this.l1 = l1;
        this.w1 = this.setW1(w1);
        this.p1 = this.setP1(p1);
        this.l2 = l2;
        this.w2 = this.setW2(w2);
        this.p2 = this.setP2(p2);
    }

    // getters
    getL1() { return this.l1; }
    getW1() { return this.w1; }
    getP1() { return this.p1; }
    getL2() { return this.l2; }
    getW2() { return this.w2; }
    getP2() { return this.p2; }

    // setters
    setL1(l1) { this.l1 = l1; }
    setW1(w1) {
        if(w1 > -90 && w1 < 90) {
            this.w1 = w1;
        } else {
            document.getElementById("error").style.display = "block";
        }
    }
    setP1(p1) { 
        let position = p1.split("/");
        this.p1 = [parseFloat(position[0]), parseFloat(position[1])]; 
    }
    setL2(l2) { this.l2 = l2; }
    setW2(w2) {
        if(w2 > -180 && w2 < 180) {
            this.w2 = w2;
        } else {
            document.getElementById("error").style.display = "block";
        }
    }
    setP2(p2) { 
        let position = p2.split("/");
        this.p2 = [parseFloat(position[0]), parseFloat(position[1])]; 
    }
}


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
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("Hello World", 10, 50);
    /*
    // Werte aus dem Roboterarm extrahieren
    let l1 = arm.getL1();
    let w1 = degToRad(arm.getW1());  // Winkel in Radiant umrechnen
    let l2 = arm.getL2();
    let w2 = degToRad(arm.getW2());  // Winkel in Radiant umrechnen

    // Kontext des Canvas holen
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    // Canvas zurücksetzen
    ctx.clearRect(0, 0, c.width, c.height);

    // Position zum Zeichnen der Linien setzen
    let x = c.width / 2;
    let y = c.height / 2;

    // Achse 1 zeichnen
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + l1 * Math.sin(w1), y - l1 * Math.cos(w1));  // Winkel und Länge verwenden, um Endpunkt zu bestimmen
    ctx.stroke();

    // Achse 2 zeichnen
    ctx.beginPath();
    ctx.moveTo(x + l1 * Math.sin(w1), y - l1 * Math.cos(w1));  // Startpunkt ist Endpunkt der Achse 1
    ctx.lineTo(x + l1 * Math.sin(w1) + l2 * Math.sin(w1 + w2), y - l1 * Math.cos(w1) - l2 * Math.cos(w1 + w2));  // Winkel und Länge verwenden, um Endpunkt zu bestimmen
    ctx.stroke();*/
}


function degToRad(deg) {
    return deg * Math.PI / 180;
}
