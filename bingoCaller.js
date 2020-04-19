
var tableRef = document.getElementById('bingoTable');

for (var i = 1; i < 16; i++) {
    var newRow = tableRef.insertRow();

    for (var j = 0; j < 5; j++) {
        var cellValue = i + (15 * j);

        var newCell  = newRow.insertCell(j);
        newCell.id = 'cell' + cellValue;
        var newText  = document.createTextNode('' + cellValue);
        newCell.appendChild(newText);
    }
}


$("#callButton").click(function() {

    var done = false;
    var callNum = 0;
    while (!done) {
        callNum = Math.floor(Math.random()*75)+1;

        var selected = document.querySelector('#cell'+callNum).style.backgroundColor === "grey";
        if (!selected)
            done = true;
    }

    var callLetter = 'O';
    if (callNum < 16) callLetter = 'B';
    else if (callNum < 31) callLetter = 'I';
    else if (callNum < 46) callLetter = 'N';
    else if (callNum < 61) callLetter = 'G';

    document.querySelector("#callValue").innerHTML = callLetter + ' - ' + callNum;
    document.querySelector('#cell'+callNum).style.textDecoration = "line-through";
    document.querySelector('#cell'+callNum).style.backgroundColor = "grey";
});
  



