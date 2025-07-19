export class Cell {
  private x;
  private y;
  public hasMine: boolean = false; 
  public flagged: boolean = false; 
  public revealed : boolean = false;
  public nearMines: number = 0; 
  
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  setMine() {
    this.hasMine = true;
  }
}
