
var numCards = 1;

addCard(numCards);
resetCells();


function addCard(cardNum) {
    var tableArea = document.getElementById('bingoContainer');
    var tableRef = document.createElement('table');
    tableRef.id = 'bingoCard' + cardNum;
    tableRef.setAttribute('class', 'bingoTable');

    var header = tableRef.createTHead();
    var headerRow = header.insertRow();

    addHeader(headerRow, 0, 'B');
    addHeader(headerRow, 1, 'I');
    addHeader(headerRow, 2, 'N');
    addHeader(headerRow, 3, 'G');
    addHeader(headerRow, 4, 'O');

    var body = tableRef.createTBody();
    tableArea.appendChild(tableRef);
    tableRef = document.getElementById('bingoCard' + cardNum);

    for (var i = 0; i < 5; i++) {
        var newRow = body.insertRow();

        for (var j = 0; j < 5; j++) {
            var randNum = 0;
            
            if (i == 2 && j == 2)
                randNum = 'Free';
            else {
                var done = false;
                while (!done) {
                    randNum = Math.floor(Math.random()*15)+ 1 + (15 * j);

                    // missing bingo #'s
                    //if (randNum === 3 || randNum === 25 || randNum === 39)
                    //    continue;

                    var selected = document.querySelector('#card' + cardNum + 'cell' + randNum);
                    if (selected == null)
                        done = true;
                }
            }

            var newCell  = newRow.insertCell(j);
            newCell.id = 'card' + cardNum + 'cell' + randNum;
            newCell.setAttribute('class', 'bingoCell');
            var newText  = document.createTextNode('' + randNum);
            newCell.appendChild(newText);
        }
    }

    return;
}

function addHeader(headerRow, loc, textValue) {
    var header = headerRow.insertCell(loc);
    header.innerText = textValue;
    header.setAttribute('class', 'bingoHeader');
    return;
}


function clickCell() {
    if (this.style.backgroundColor === "grey")
    {
        this.style.textDecoration = "";
        this.style.backgroundColor = "white";
    } 
    else
    {
        this.style.textDecoration = "line-through";
        this.style.backgroundColor = "grey";
    }
}
   
function resetCells() {
    var allCells = document.querySelectorAll(".bingoCell");
    allCells.forEach((item) => {
        item.style.textDecoration = "";
        item.style.backgroundColor = "white";
        item.addEventListener("click", clickCell);
    })
}
  
function addCellListeners() {
    var allCells = document.querySelectorAll(".bingoCell");
    allCells.forEach((item) => {
        item.addEventListener("click", clickCell);
    })
}

$("#resetButton").click(resetCells);

$("#addButton").click(function() {
    numCards++;
    addCard(numCards);
    addCellListeners();
});
  


  



