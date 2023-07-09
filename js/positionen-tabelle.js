var aktivZellen = [];

function erstelleTabelle() {
    var positionsContainer = document.getElementById('positionsContainer');
    var table = document.getElementById('positions');

    // Erstellen Sie die Zeilen
    for (var i = 0; i < positionen.length; i++) {
        var position = positionen[i];

        var row = document.createElement('tr');

        var elfiCell = document.createElement('td');
        elfiCell.appendChild(document.createTextNode((i + 1)));
        elfiCell.style.verticalAlign = 'middle'; // Align elements to the middle
        elfiCell.style.borderBottom = '1px solid black'; // Add a border at the bottom
        row.appendChild(elfiCell);

        var positionCell = document.createElement('td');
        positionCell.appendChild(document.createTextNode(position.toString()));
        positionCell.style.verticalAlign = 'middle'; // Align elements to the middle
        positionCell.style.borderBottom = '1px solid black'; // Add a border at the bottom
        row.appendChild(positionCell);

        var aktivCell = document.createElement('td');
        aktivCell.appendChild(document.createTextNode(i === aktPos ? '<' : ''));
        aktivCell.style.verticalAlign = 'middle'; // Align elements to the middle
        aktivCell.style.borderBottom = '1px solid black'; // Add a border at the bottom
        row.appendChild(aktivCell);

        table.appendChild(row);
        aktivZellen.push(aktivCell); // Referenz auf die Zelle speichern
    }

    positionsContainer.appendChild(table);
}

function nachstePosition() {
    if(aktPos < positionen.length - 1) {
        // Aktualisieren Sie die aktiv-Zellen
        aktivZellen[aktPos].textContent = '';
        aktPos++;
        aktivZellen[aktPos].textContent = '<';

        var pos = positionen[aktPos];
        document.getElementById('axis2Position').value = pos.x + "/" + pos.y;
        
        manageFields("rueckwaerts");
        maleRoboterArm();
    }
}

function vorheriegePosition() {
    if(aktPos > 0) {
        // Aktualisieren Sie die aktiv-Zellen
        aktivZellen[aktPos].textContent = '';
        aktPos--;
        aktivZellen[aktPos].textContent = '<';

        var pos = positionen[aktPos];
        document.getElementById('axis2Position').value = pos.x + "/" + pos.y;
        
        manageFields("rueckwaerts");
        maleRoboterArm();
    }
}
