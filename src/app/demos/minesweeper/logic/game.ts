import { Cell } from "./cell";

interface Position {
  x: number,
  y: number
}

export class Game {
  private columns = 8;
  private rows = 8;
  private board: Cell[] = [];
  private MINES = 8;

  constructor() {
    this.generateBoard()
    this.setMines()
  }

  getBoard() {
    return this.board
  }
  
  private generateBoard() {
    for (const y of Array(this.rows).keys()) {
      for (const x of Array(this.columns).keys()) {

        this.board.push(new Cell(x, y))
      }
    }
  }

  private setMines() {
    const positions = this.getMinePositions()

    positions.forEach(position => {
      this.setMine(position)
    })
  }

  private getMinePositions() {
    const positions: Position[] = []

    while(positions.length < this.MINES) {

      const position = this.getRandomPosition()

      if (!positions.some(this.positionMatches.bind(null, position))) {
        positions.push(position)
      }
    }
    return positions
  }

  private positionMatches(a: Position, b: Position) {
    return a.x === b.x && a.y === b.y
  }

  private getRandomPosition() {
    const x = Math.floor(Math.random() * this.columns)
    const y = Math.floor(Math.random() * this.rows)

    return {x, y}
  }

  private setMine(position: Position) {
    const cell = this.getCell(position);

    if (cell) { cell.setMine() }
  }

  private positionToIndex(position: Position) {
    return position.y * this.columns + position.x;
  }

  private getCell(position: Position): Cell | undefined {
    const index = this.positionToIndex(position); 
    return this.board[index]
  }
}
