import { Tile } from "./Tile";

export class Board {
  private tiles;
  
  constructor() {
    this.tiles = this.createBoard();
  }

  public getBoard() {
    return this.tiles;
  }

  private createBoard() {
    const newBoard = [];
    const SIZE = 10;

    for (const y of Array(SIZE).keys()) {
      for (const x of Array(SIZE).keys()) {

        const newTile = new Tile(x, y);
        newBoard.push(newTile);
      }
    }

    return newBoard;
  }
}
