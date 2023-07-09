var aktivZellen = [];

function erstelleTabelle() {
    var positionsContainer = document.getElementById('positionsContainer');
    var table = document.getElementById('positions');

    for (var i = 0; i < positionen.length; i++) {
        var position = positionen[i];

        var row = document.createElement('tr');

        var elfiCell = document.createElement('td');
        elfiCell.innerHTML = "<i>" + (i + 1) + " | </i>";
        elfiCell.style.verticalAlign = 'middle';
        elfiCell.style.borderBottom = '1px solid black';
        row.appendChild(elfiCell);

        var positionCell = document.createElement('td');
        positionCell.appendChild(document.createTextNode(position.toString()));
        positionCell.style.verticalAlign = 'middle';
        positionCell.style.borderBottom = '1px solid black';
        row.appendChild(positionCell);

        var aktivCell = document.createElement('td');
        aktivCell.appendChild(document.createTextNode(i === aktPos ? '<' : ''));
        aktivCell.style.verticalAlign = 'middle';
        aktivCell.style.borderBottom = '1px solid black';
        row.appendChild(aktivCell);

        table.appendChild(row);
        aktivZellen.push(aktivCell);
    }

    positionsContainer.appendChild(table);
}

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
