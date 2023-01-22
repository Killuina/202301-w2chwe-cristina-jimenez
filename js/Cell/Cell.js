class Cell {
  isAlive = Math.random() < 0.15;
  isAliveNextTurn = false;
  numberOfAliveNeighbors = 0;

  die() {
    this.isAlive = false;
  }

  revive() {
    this.isAlive = true;
  }

  nextGeneration() {
    this.isAlive = this.isAliveNextTurn;
  }
}

export default Cell;
