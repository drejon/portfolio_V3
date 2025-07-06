import { Component } from '@angular/core';
import { Game } from './logic/game';
import { Cell } from './logic/cell';

@Component({
  selector: 'app-minesweeper',
  imports: [],
  templateUrl: './minesweeper.component.html',
  styleUrl: './minesweeper.component.css'
})
export class MinesweeperComponent {
  public board: Cell[];
  private game: Game = new Game()

  constructor() {
    this.board = this.game.getBoard()
  }
}
