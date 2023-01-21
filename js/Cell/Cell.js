class Cell {
  isAlive = Math.random() < 0.1;
  isALiveNextTurn = false;
  numberOfAliveNeighbors = 0;

  die() {
    this.isAlive = false;
  }

  revive() {
    this.isAlive = true;
  }

  nextGeneration() {
    this.isAlive = this.isALiveNextTurn;
  }
}

export default Cell;
