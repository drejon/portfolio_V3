import { Cell } from "./cell";

export class Game {
  private columns = 8;
  private rows = 8;
  private board: Cell[] = []
  
  constructor() {
    this.generateBoard()
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
}
