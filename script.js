// Constants
const rows = 40;
const cols = 40;

const cellSize = 20;
const delay = 500; // Time delay between generations (in milliseconds)

// Game state
let grid = createEmptyGrid();
let isMouseDown = false;

// Create an empty grid
function createEmptyGrid() {
  const grid = [];
  for (let row = 0; row < rows; row++) {
    grid[row] = [];
    for (let col = 0; col < cols; col++) {
      grid[row][col] = false;
    }
  }
  return grid;
}

// Initialize the grid with random alive cells
function initializeGrid() {
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (Math.random() < 0.5) {
        grid[row][col] = true;
      }
    }
  }
}

// Update the grid to the next generation
function updateGrid() {
  const newGrid = createEmptyGrid();

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const aliveNeighbors = countAliveNeighbors(row, col);
      const isCellAlive = grid[row][col];

      if (isCellAlive && (aliveNeighbors === 2 || aliveNeighbors === 3)) {
        newGrid[row][col] = true; // Cell survives
      } else if (!isCellAlive && aliveNeighbors === 3) {
        newGrid[row][col] = true; // Cell is born
      }
    }
  }

  grid = newGrid;
}

// Count the number of alive neighbors for a given cell
function countAliveNeighbors(row, col) {
  let count = 0;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue; // Skip the current cell

      const neighborRow = row + i;
      const neighborCol = col + j;

      if (
        neighborRow >= 0 &&
        neighborRow < rows &&
        neighborCol >= 0 &&
        neighborCol < cols
      ) {
        if (grid[neighborRow][neighborCol]) {
          count++;
        }
      }
    }
  }

  return count;
}

// Render the grid on the screen
function renderGrid() {
  const container = document.getElementById("game-container");
  container.innerHTML = ""; // Clear previous grid

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.style.width = cellSize + "px";
      cell.style.height = cellSize + "px";
      cell.style.backgroundColor = grid[row][col] ? "#000" : "#fff";

      // Add event listeners to handle cell click and mouseover
      cell.addEventListener("click", () => {
        grid[row][col] = !grid[row][col];
        cell.style.backgroundColor = grid[row][col] ? "#000" : "#fff";
      });

      cell.addEventListener("mouseover", () => {
        if (isMouseDown) {
          grid[row][col] = true;
          cell.style.backgroundColor = "#000";
        }
      });

      container.appendChild(cell);
    }
  }
}

// Start the game loop
function startGame() {
  //initializeGrid();
  renderGrid();

  setInterval(() => {
    updateGrid();
    renderGrid();
  }, delay);
}

// Handle mouse events to update cells
document.addEventListener("mousedown", () => {
  isMouseDown = true;
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

// Start the game
startGame();
