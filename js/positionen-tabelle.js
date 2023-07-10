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
        numCell.innerHTML = "<i>" + i + "</i>";
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

function nachstePosition() {
    if(aktPos < positionen.length - 1) {
        aktPos++;
        var pos = positionen[aktPos];
        
        aktivZellen[aktPos - 1].textContent = '';
        aktivZellen[aktPos].textContent = '<';
        document.getElementById('axis2Position').value = pos.x + "/" + pos.y;
        
        manageFields("rueckwaerts");
        maleRoboterArm();
    }
}

function vorheriegePosition() {
    if(aktPos > 0) {
        
        aktPos--;
        var pos = positionen[aktPos];

        aktivZellen[aktPos + 1].textContent = '';
        aktivZellen[aktPos].textContent = '<';
        document.getElementById('axis2Position').value = pos.x + "/" + pos.y;
        
        manageFields("rueckwaarts");
        maleRoboterArm();
    }
}
