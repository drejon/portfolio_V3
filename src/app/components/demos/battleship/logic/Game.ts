import { Board } from "./Board";
import { Tile } from "./Tile";

export class Game {
  public userBoard: Board;
  public botBoard: Board;

  constructor() {
    this.userBoard = new Board();
    this.botBoard = new Board();
  }

}
