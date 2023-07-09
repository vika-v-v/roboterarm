var aktivZellen = []; // initialisiere ein leeres array für aktive zellen

function erstelleTabelle() {
    // finde die elementen
    var positionsContainer = document.getElementById('positionsContainer');
    var table = document.getElementById('positions');

    // schleife über alle positionen
    for (var i = 0; i < positionen.length; i++) {
        var position = positionen[i];

        var row = document.createElement('tr');

        // erstelle eine zelle für die nummerierung
        var numCell = document.createElement('td');
        numCell.innerHTML = "<i>" + (i + 1) + "</i>";
        row.appendChild(numCell);

        // erstelle eine zelle für die position
        var positionCell = document.createElement('td');
        positionCell.appendChild(document.createTextNode(position.toString()));
        row.appendChild(positionCell);

        // erstelle eine zelle für das aktiv-symbol
        var aktivCell = document.createElement('td');
        aktivCell.appendChild(document.createTextNode(i === aktPos ? '<' : ''));
        row.appendChild(aktivCell);

        table.appendChild(row);
        aktivZellen.push(aktivCell);
    }

    positionsContainer.appendChild(table);
}

// funktion zum wechseln zur nächsten position
function nachstePosition() {
    if(aktPos < positionen.length - 1) {
        aktivZellen[aktPos].textContent = '';
        aktPos++;
        aktivZellen[aktPos].textContent = '<';

        var pos = positionen[aktPos];
        document.getElementById('axis2Position').value = pos.x + "/" + pos.y;
        
        manageFields("rueckwaerts");
        maleRoboterArm();
    }
}

// funktion zum wechseln zur vorherigen position
function vorheriegePosition() {
    if(aktPos > 0) {
        aktivZellen[aktPos].textContent = '';
        aktPos--;
        aktivZellen[aktPos].textContent = '<';

        var pos = positionen[aktPos];
        document.getElementById('axis2Position').value = pos.x + "/" + pos.y;
        
        manageFields("rueckwaerts");
        maleRoboterArm();
    }
}