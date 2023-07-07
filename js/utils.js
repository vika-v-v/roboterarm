var positionen=[];
var aktPos=0;

fuellePositionen();

function neuePositionDefinition(x, y ) {

    var obj = {};

    obj.x = parseFloat(x);
	obj.y = parseFloat(y);
    obj.x = obj.x.toFixed(2);
	obj.y = obj.y.toFixed(2);

	obj.toString = function(){
		return "("+obj.x+"/"+obj.y+")";	
	};
    return obj;
}


function fuellePositionen()
{
	var factor=0.1;
	var skala=80;
	var anzahlPunkte=20;
	for (var i=0;i<=anzahlPunkte;i++)
	{
		positionen.push(neuePositionDefinition(Math.sin(i*factor*Math.PI)*skala+skala,Math.cos(i*factor*Math.PI)*skala+skala));
	}
}



function vorwaertsKinematik(roboterDatenArray1,roboterDatenArray2)
{
	console.log("vorwärts Kinematik");	
	// Roboter Achse1
	// Postion X
	var ra1x=roboterDatenArray1[0];
	// Postion Y
	var ra1y=roboterDatenArray1[1];
	// Länge
	var ra1l=roboterDatenArray1[2];
	// Winkel
	var ra1w=roboterDatenArray1[3];	
	// Roboter Achse2
	// Postion X
	var ra2x=roboterDatenArray2[0];
	// Postion Y
	var ra2y=roboterDatenArray2[1];
	// Länge
	var ra2l=roboterDatenArray2[2];
	// Winkel
	var ra2w=roboterDatenArray2[3];	


	ra1x = parseFloat((Math.cos(ra1w*Math.PI/180)*ra1l).toFixed(2));
	ra1y = parseFloat((Math.sin(ra1w*Math.PI/180)*ra1l).toFixed(2));
	
	ra2x = ra1x + parseFloat((Math.cos((ra2w+ra1w)*Math.PI/180)*ra2l).toFixed(2));
	ra2y = ra1y + parseFloat((Math.sin((ra2w+ra1w)*Math.PI/180)*ra2l).toFixed(2));

	// Um auf die Ergebnisse zugreifen zu können diese wieder in das Array eintragen.
	roboterDatenArray1[0] = ra1x;
	roboterDatenArray1[1] = ra1y;
	roboterDatenArray2[0] = ra2x;
	roboterDatenArray2[1] = ra2y;
}


function rueckwaertsKinematik(roboterDatenArray1,roboterDatenArray2)
{
	console.log("rückwaerts Kinematik");	
	// Roboter Achse1
	// Postion X
	var ra1x=roboterDatenArray1[0];
	// Postion Y
	var ra1y=roboterDatenArray1[1];
	// Länge
	var ra1l=roboterDatenArray1[2];
	// Winkel
	var ra1w=roboterDatenArray1[3];	
	// Roboter Achse2
	// Postion X
	var ra2x=roboterDatenArray2[0];
	// Postion Y
	var ra2y=roboterDatenArray2[1];
	// Länge
	var ra2l=roboterDatenArray2[2];
	// Winkel
	var ra2w=roboterDatenArray2[3];	

    // Werte berechnen
  
    var v2 = parseFloat((Math.acos((ra2x**2+ra2y**2-ra1l**2-ra2l**2)/(2*ra1l*ra2l)))); 
    var v1 = Math.atan(ra2y/ra2x);
    v1 = v1 - Math.atan((ra2l*Math.sin(v2))/(ra1l+(ra2l*Math.cos(v2)))); 
                
    ra1x = parseFloat((Math.cos(v1)*ra1l).toFixed(2));
    ra1y = parseFloat((Math.sin(v1)*ra1l).toFixed(2));

    ra1w = parseFloat((v1 *180/Math.PI).toFixed(2));
    ra2w = parseFloat((v2 *180/Math.PI).toFixed(2));

	// Um auf die Ergebnisse zugreifen zu können diese wieder in das Array eintragen.
	roboterDatenArray1[0] = ra1x;
	roboterDatenArray1[1] = ra1y;
	roboterDatenArray1[3] = ra1w;
	roboterDatenArray2[3] = ra2w;
}