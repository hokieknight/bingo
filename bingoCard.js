
var tableRef = document.getElementById('bingoTable');

for (var i = 0; i < 5; i++) {
    var newRow = tableRef.insertRow();

    for (var j = 0; j < 5; j++) {
        var randNum = 0;
        
        if (i == 2 && j == 2)
            randNum = 'Free';
        else {
            var done = false;
            while (!done) {
                randNum = Math.floor(Math.random()*15)+ 1 + (15 * j);

                if (randNum === 3 || randNum === 25 || randNum === 39)
                    continue;

                var selected = document.querySelector('#cell'+randNum);
                if (selected == null)
                    done = true;
            }
        }

        var newCell  = newRow.insertCell(j);
        newCell.id = 'cell' + randNum;
        newCell.setAttribute('class', 'bingoCell');
        var newText  = document.createTextNode('' + randNum);
        newCell.appendChild(newText);
    }
}


$(".bingoCell").click(function() {
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
});
  



