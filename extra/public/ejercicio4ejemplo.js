const table$$ = document.querySelector('[data-function="board"]');
const attempts$$ = document.querySelector('[data-function="attempts"]');

let contador = 0;
attempts$$.innerHTML = contador;

const xImg = "./public/exercise-4/x.png";
const skullImg = "./public/exercise-4/skull.png";
const chestImg = "./public/exercise-4/chest.png";

let chestCoord = { x: 0, y: 0 };

const createMap = () => {
  const rows = prompt("Introduce el numero de filas");
  const cols = prompt("Introduce el numero de columnas");

  randomChestCoord(rows, cols);

  for (let i = 0; i < rows; i++) {
    const tr$$ = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const td$$ = document.createElement("td");

      const img$$ = document.createElement("img");
      img$$.setAttribute("src", xImg);

      td$$.addEventListener("click", function () {
        checkClick(img$$, i, j);
      });

      td$$.appendChild(img$$);
      tr$$.appendChild(td$$);
    }
    table$$.appendChild(tr$$);
  }
};

const checkClick = (img$$, i, j) => {
  attempts$$.textContent = contador++;
  if (chestCoord.x === i && chestCoord.y === j) {
    img$$.setAttribute("src", chestImg);
    table$$.innerHTML = "";
    alert("HAS GANADO")
    createMap();
  } else {
    img$$.setAttribute("src", skullImg);
  }
};

const randomChestCoord = (maxRows, maxCols) => {
  chestCoord.x = Math.floor(Math.random() * maxRows);
  chestCoord.y = Math.floor(Math.random() * maxCols);
};

createMap();