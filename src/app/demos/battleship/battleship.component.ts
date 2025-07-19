import { Component } from '@angular/core';
import { Game } from './logic/Game';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-battleship',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './battleship.component.html',
  styleUrl: './battleship.component.css'
})
export class BattleshipComponent {
  game = new Game();
  userBoard = this.game.userBoard.getBoard();
}
