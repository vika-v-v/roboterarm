class Roboterarm {
    // konstruktor, um den roboterarm mit spezifischen eigenschaften zu initialisieren
   constructor(l1, w1, p1, l2, w2, p2) {
        document.getElementById("error").style.display = "none";
        // die werte setzen
        this.setL1(l1);
        this.setW1(w1);
        this.setP1(p1);
        this.setL2(l2);
        this.setW2(w2);
        this.setP2(p2);
   }

   // get methoden zur rückgabe von werten
   getL1() { return this.l1; }
   getW1() { return this.w1; }
   getP1() { return this.p1.join('/'); }
   getP1x() { return this.p1[0]; } // auch separat die koordinaten, da es oft gebraucht wird
   getP1y() { return this.p1[1]; }
   getL2() { return this.l2; }
   getW2() { return this.w2; }
   getP2() { return this.p2.join('/'); }
   getP2x() { return this.p2[0]; }
   getP2y() { return this.p2[1]; }

   // set methoden
   setL1(l1) {
       if(isNaN(parseFloat(l1)) || parseFloat(l1) < 0 || parseFloat(l1) >= 500) { // prüfen, ob die werte nicht korrekt sind
           document.getElementById("error").style.display = "block"; // falls nicht korrekt - error anzeigen
           this.l1 = null; // den wert aber trotzdem auf 0 setzen
       } else {
           this.l1 = parseFloat(l1); // wenn korrekt - den wert setzen
       }
   }
   // alle andere methoden ähnlich

   // w1 und nichts machen
   setW1(w1) {
       if(- w1 + 90 > -90 && - w1 + 90 < 90) {
           this.w1 = w1;
       } 
       else {
           document.getElementById("error").style.display = "block";
           this.w1 = null;
       }
   }

   setP1(p1) { 
    if (!p1 || !parseFloat(p1.split("/")[0]) || !parseFloat(p1.split("/")[1]) || parseFloat(p1.split("/")[1]) < -500 || parseFloat(p1.split("/")[1]) > 500) {
        document.getElementById("error").style.display = "block";
        this.p1 = [null, null];
    } else {
        let position = p1.split("/");
        this.p1 = [parseFloat(position[0]), parseFloat(position[1])]; 
    }
   }

   setL2(l2) { 
       if(isNaN(parseFloat(l2)) || parseFloat(l2) < 0 || parseFloat(l2) >= 500) {
           document.getElementById("error").style.display = "block";
           this.l2 = null;
       } else {
           this.l2 = parseFloat(l2); 
       }
   }

   setW2(w2) {
       w2 = w2 ?? 0;
       if(w2 > -180 && w2 < 180) {
           this.w2 = w2;
       } else {
           document.getElementById("error").style.display = "block";
           this.w2 = null;
       }
   }

   setP2(p2) { 
       if (!p2 || !parseFloat(p2.split("/")[0]) || !parseFloat(p2.split("/")[1]) || parseFloat(p2.split("/")[1]) < -500 || parseFloat(p2.split("/")[1]) > 500) {
           document.getElementById("error").style.display = "block";
           this.p2 = [null, null];
       } else {
           let position = p2.split("/");
           this.p2 = [parseFloat(position[0]), parseFloat(position[1])]; 
       }
   }
}