import "./styles.css";

document.getElementById("board").innerHTML = ``;

var count = 0;
var timer;
var id;

var square = document.querySelectorAll(".col");
for (var i = 0; i < square.length; i++) {
  square[i].addEventListener("click", function () {
    fillCell(this);
  });
}

function fillCell(table, table_cell) {
  count++;
  barMove();
  if (count % 2 === 0) {
    if (table_cell.innerHTML === "") {
      table_cell.innerHTML = "o";
      table_cell.style.backgroundColor = "rgb(250, 128, 114)";
    } else {
      alert("This cell is already taken");
      count--;
    }
  } else {
    if (table_cell.innerHTML === "") {
      table_cell.innerHTML = "x";
      table_cell.style.backgroundColor = "rgb(124, 252, 0)";
    } else {
      alert("This cell is already taken");
      count--;
    }
  }
  timeOut();
  checkWin(table);
  checkDraw(table);
}

function checkWin(table) {
  var mark = ["x", "o"];

  for (var i = 0; i < 2; i++) {
    var lin1 = 0;
    var lin2 = 0;
    var lin3 = 0;
    var lin4 = 0;
    var lin5 = 0;
    var hor1 = 0;
    var hor2 = 0;
    var hor3 = 0;
    var hor4 = 0;
    var hor5 = 0;
    var dia1 = 0;
    var dia2 = 0;

    for (var tab = 0; tab < 5; tab++) {
      if (square[tab].innerHTML === mark[i]) {
        lin1++;
        if (tab === 0) {
          hor1++;
          dia1++;
        }
        if (tab === 0) {
          hor2++;
        }
        if (tab === 0) {
          hor3++;
        }
        if (tab === 0) {
          hor4++;
        }
        if (tab === 0) {
          hor5++;
          dia2++;
        }
      }
      if (square[tab + 5].innerHTML === mark[i]) {
        lin2++;
        if (tab === 0) {
          hor1++;
        }
        if (tab === 0) {
          hor2++;
          dia1++;
        }
        if (tab === 0) {
          hor3++;
        }
        if (tab === 0) {
          hor4++;
          dia2++;
        }
        if (tab === 0) {
          hor5++;
        }
      }
      if (square[tab + 10].innerHTML === mark[i]) {
        lin3++;
        if (tab === 0) {
          hor1++;
        }
        if (tab === 0) {
          hor2++;
        }
        if (tab === 0) {
          hor3++;
          dia1++;
          dia2++;
        }
        if (tab === 0) {
          hor4++;
        }
        if (tab === 0) {
          hor5++;
        }
      }
      if (square[tab + 15].innerHTML === mark[i]) {
        lin4++;
        if (tab === 0) {
          hor1++;
        }
        if (tab === 0) {
          hor2++;
          dia2++;
        }
        if (tab === 0) {
          hor3++;
        }
        if (tab === 0) {
          hor4++;
          dia1++;
        }
        if (tab === 0) {
          hor5++;
        }
      }
      if (square[tab + 20].innerHTML === mark[i]) {
        lin5++;
        if (tab === 0) {
          hor1++;
          dia2++;
        }
        if (tab === 0) {
          hor2++;
        }
        if (tab === 0) {
          hor3++;
        }
        if (tab === 0) {
          hor4++;
        }
        if (tab === 0) {
          hor5++;
          dia1++;
        }
      }

      if (
        lin1 === 5 ||
        lin2 === 5 ||
        lin3 === 5 ||
        lin4 === 5 ||
        lin5 === 5 ||
        hor1 === 5 ||
        hor2 === 5 ||
        hor3 === 5 ||
        hor4 === 5 ||
        hor5 === 5 ||
        dia1 === 5 ||
        dia2 === 5
      ) {
        if (mark[i] === "x") {
          alert("Player 1 won!");
        }
        if (mark[i] === "o") {
          alert("Player 2 won!");
        }
        empty();
      }
    }
  }
}

function checkDraw(table) {
  var draw_count = 0;
  for (var i = 0; i < square.length; i++) {
    if (square[i].innerHTML === "x" || square[i].innerHTML === "o") {
      draw_count++;
    }
  }
  if (draw_count === 25) {
    alert("It's a draw!");
    empty();
  }
}

function empty() {
  for (var i = 0; i < square.length; i++) {
    square[i].innerHTML = "";
    square[i].style.backgroundColor = "rgb(255, 255, 255)";
  }
  clearTimeout(timer);
}

function barMove() {
  clearInterval(id);
  var bar = document.querySelector(".determinate");
  var width = 0;
  id = setInterval(frame, 100);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      bar.style.width = width + "%";
    }
  }
}

function timeOut() {
  clearTimeout(timer);
  timer = setTimeout(timeAlert, 10000);
  function timeAlert() {
    count++;
    alert("Time is over, your turn ends");
  }
}
