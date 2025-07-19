import { Cell } from "./cell";

interface Position {
  x: number,
  y: number
}

export class Game {
  // private columns = 8;
  constructor(
    private columns: number = 8,
    private rows: number = 8,
    private mines: number = 8,
    private board: Cell[] = [],
    public isFinished: boolean | null = false,
    private minePositions: Position[] = [],

  ) {
    this.startGame()
  }

  public setGameStatus(status: boolean) {
    this.isFinished = status
  }
  
  private startGame() {
    this.generateBoard()
    this.setMines()
    this.getNearMines()
  }

  private generateBoard() {
    for (const y of Array(this.rows).keys()) {
      for (const x of Array(this.columns).keys()) {

        this.board.push(new Cell(x, y))
      }
    }
  }

  public getBoard() {
    return this.board
  }

  private getCell(position: Position): Cell | undefined {
    const x_less_than_0 = position.x < 0
    const y_less_than_0 = position.y < 0
    const x_more_than_width = position.x >= this.columns
    const y_more_than_height = position.y >= this.columns
    
    if (
      x_less_than_0 || 
      x_more_than_width ||
      y_less_than_0 ||
      y_more_than_height
    ) {
      return undefined;
    }

    const index = this.positionToIndex(position); 
    return this.board[index]
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
          if ((neighbour !== undefined) && !(this.positionMatches(position, neighbour.position))) {
            neighbours.push(neighbour)
          }
        }
      }
      
    return neighbours
  }

  public getNumberOfMines(): number {
    return this.mines
  }

  private setMine(position: Position) {
    const cell = this.getCell(position);

    if (cell) { cell.setMine() }
  }

  private setMines() {
    const positions = this.generateMinePositions()
    
    this.minePositions = positions
    positions.forEach(position => {
      this.setMine(position)
    })
  }

  private generateMinePositions() {
    const positions: Position[] = []

    while(positions.length < this.mines) {

      const position = this.getRandomPosition()

      if (!positions.some(this.positionMatches.bind(null, position))) {
        positions.push(position)
      }
    }
    return positions
  }

  getMines(): Cell[] {
    return this.minePositions
      .map(c => this.getCell(c))
      .filter((cell): cell is Cell => cell !== undefined)
  }

   private getNearMines() {
    this.board.map(cell => {
      const nearCells = this.getNearCells(cell.position)
      cell.neighbours = nearCells

      const mines = nearCells.filter((c) => c.hasMine)
      cell.nearMines = mines.length
    })
  }

  public revealMines() {
    this.minePositions.forEach(p => {
      this.getCell(p)?.reveal()
    })
  }

  private positionMatches(a: Position, b: Position) {
    return a.x === b.x && a.y === b.y
  }

  private getRandomPosition() {
    const x = Math.floor(Math.random() * this.columns)
    const y = Math.floor(Math.random() * this.rows)

    return {x, y}
  }

  private positionToIndex(position: Position) {
    return position.y * this.columns + position.x;
  }
}
