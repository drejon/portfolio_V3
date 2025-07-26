interface Position {
  x: number,
  y: number
}

export class Cell {
  private x;
  private y;
  public position: Position = {x: 0, y:0}
  public hasMine: boolean = false;
  public flagged: boolean = false;
  public revealed : boolean = false;
  public nearMines: number = 0;
  public neighbours: Cell[] = []

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.position = {x: this.x, y: this.y}
  }

  reveal() {
    this.revealed = true;
  }

  setMine() {
    this.hasMine = true;
  }
}
