import { Cell } from "./cell";

interface Position {
  x: number,
  y: number
}

export class Game {
  private columns = 8;
  private rows = 8;
  public board: Cell[] = [];
  private MINES = 8;

  constructor() {
    this.generateBoard()
    this.setMines()
    this.getNearMines()
  }

  getBoard(): Cell[] {
    return this.board
  }

  restart(): void {
    // this.generateBoard()
    // this.board.map(cell => cell.revealed = false)
    // this.setMines()
    // this.getNearMines()
  }

  private generateBoard(): void {
    this.board = []

    for (const y of Array(this.rows).keys()) {
      for (const x of Array(this.columns).keys()) {

        this.board.push(new Cell(x, y))
      }
    }
  }

  private setMines(): void {
    const positions = this.getMinePositions()

    positions.forEach(position => {
      this.setMine(position)
    })
  }

  private getMinePositions(): Position[] {
    const positions: Position[] = []

    while(positions.length < this.MINES) {

      const position = this.getRandomPosition()

      if (!positions.some(this.positionMatches.bind(null, position))) {
        positions.push(position)
      }
    }
    return positions
  }

  private positionToIndex(position: Position): number {
    return position.y * this.columns + position.x;
  }

  private getCell(position: Position): Cell | undefined {
    //   if (
    //   position.x < 0 || position.x >= this.columns ||
    //   position.y < 0 || position.y >= this.rows
    // ) {
    //   return undefined
    // }

    // const index = this.positionToIndex(position)
    // return this.board[index]

    return this.board.find(cell => this.positionMatches(cell.position, position))
  }

  public getNearCells(position: Position): Cell[] {
    const neighbours = []

    for (let xOffset = -1; xOffset <= 1; xOffset++) {
      for (let yOffset = -1; yOffset <= 1; yOffset++) {
          const newPosition = {
            x: position.x + xOffset,
            y: position.y + yOffset
          }


          const neighbour = this.getCell(newPosition)

          // const IS_VALID_NEIGHBOUR =
          //   neighbour !== undefined && !(this.positionMatches(position, neighbour?.position))

          if (neighbour !== undefined && !(this.positionMatches(position, neighbour.position))) {
            neighbours.push(neighbour)
          }
      }
    }

    return neighbours
  }

  private getNearMines() {
    this.board.map(cell => {
      const nearCells = this.getNearCells(cell.position)
      cell.neighbours = nearCells

      const mines = nearCells.filter((c) => c.hasMine)
      cell.nearMines = mines.length
    })
  }

  private positionMatches(a: Position, b: Position): boolean {
    return a.x === b.x && a.y === b.y
  }

  private getRandomPosition(): Position {
    const x = Math.floor(Math.random() * this.columns)
    const y = Math.floor(Math.random() * this.rows)

    return {x, y}
  }

  private setMine(position: Position): void {
    const cell = this.getCell(position);

    if (cell) { cell.setMine() }
  }
}
