class Roboterarm {
    // konstruktor, um den roboterarm mit spezifischen eigenschaften zu initialisieren
   constructor(l1, w1, p1, l2, w2, p2) {
       document.getElementById("error").style.display = "none"; // fehler am anfang nicht angezeigt

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
           this.l1 = 0; // den wert aber trotzdem auf 0 setzen
       } else {
           this.l1 = parseFloat(l1); // wenn korrekt - den wert setzen
       }
   }
   // alle andere methoden ähnlich

   setW1(w1) {
       w1 = w1 ?? 0; // falls w1 einen undefined oder null wert hat, wird auf 0 gesetzt
       if(w1 > -90 && w1 < 90) {
           this.w1 = w1;
       } 
       else {
           document.getElementById("error").style.display = "block";
           this.w1 = 0;
       }
   }

   setP1(p1) { 
       if (!p1) {
           document.getElementById("error").style.display = "block";
           this.p1 = [0, 0];
       } else {
           let position = p1.split("/");
           this.p1 = [parseFloat(position[0]) || 0, parseFloat(position[1]) || 0]; 
       }
   }

   setL2(l2) { 
       if(isNaN(parseFloat(l2)) || parseFloat(l2) < 0 || parseFloat(l2) >= 500) {
           document.getElementById("error").style.display = "block";
           this.l2 = 0;
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
           this.w2 = 0;
       }
   }

   setP2(p2) { 
       if (!p2) {
           document.getElementById("error").style.display = "block";
           this.p2 = [0, 0];
       } else {
           let position = p2.split("/");
           this.p2 = [parseFloat(position[0]) || 0, parseFloat(position[1]) || 0]; 
       }
   }
}