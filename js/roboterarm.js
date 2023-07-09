class Roboterarm {
    constructor(l1, w1, p1, l2, w2, p2) {
        this.setL1(l1);
        this.setW1(w1);
        this.setP1(p1);
        this.setL2(l2);
        this.setW2(w2);
        this.setP2(p2);
    }

    // getters
    getL1() { return this.l1; }
    getW1() { return this.w1; }
    getP1() { return this.p1.join('/'); }
    getP1x() { return this.p1[0]; }
    getP1y() { return this.p1[1]; }
    getL2() { return this.l2; }
    getW2() { return this.w2; }
    getP2() { return this.p2.join('/'); }
    getP2x() { return this.p2[0]; }
    getP2y() { return this.p2[1]; }

    // setters
    setL1(l1) { this.l1 = isNaN(parseFloat(l1)) ? 0 : parseFloat(l1); }
    setW1(w1) {
        w1 = w1 ?? 0;
        if(w1 > -90 && w1 < 90) {
            this.w1 = w1;
        } else {
            document.getElementById("error").style.display = "block";
            this.w1 = 0;
        }
    }
    setP1(p1) { 
        if (!p1) {
            this.p1 = [0, 0];
        } else {
            let position = p1.split("/");
            this.p1 = [parseFloat(position[0]) || 0, parseFloat(position[1]) || 0]; 
        }
    }
    setL2(l2) { this.l2 = isNaN(parseFloat(l2)) ? 0 : parseFloat(l2); }
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
            this.p2 = [0, 0];
        } else {
            let position = p2.split("/");
            this.p2 = [parseFloat(position[0]) || 0, parseFloat(position[1]) || 0]; 
        }
    }
}