import {
  Component, ElementRef,
  OnInit, ViewChild,
  HostListener
} from '@angular/core';
import { Game } from './logic/game';
import { Cell } from './logic/cell';

@Component({
  selector: 'app-minesweeper',
  imports: [],
  templateUrl: './minesweeper.component.html',
  styleUrl: './minesweeper.component.css'
})
export class MinesweeperComponent implements OnInit {
  @ViewChild('howToPlay') howToPlay!: ElementRef<HTMLDialogElement>;
  public board: Cell[] = [];
  public showHowToPlay = false;
  public hasStarted = false;
  private game: Game = new Game()

  constructor() {}

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.preventDefault(); // ✅ Prevent default context menu
  }

  ngOnInit() {}

  reveal(cell: Cell) {
    if (cell.hasMine) {
      cell.reveal()

      this.game.board.map(c =>{
        if (c.hasMine) { c.reveal() }

      })

      return
    }

    if (cell.revealed || cell.flagged) return;

    if (!cell.flagged) {
        cell.reveal();

        if (cell.nearMines === 0) {
          const nearCells = this.game.getNearCells(cell.position)
          nearCells.forEach(c => this.reveal(c))
        }
      }
  }

  toggleFlag(cell: Cell, event: MouseEvent) {
    event.preventDefault();
    console.log('Right click on cell:', cell);
    if (!cell.revealed) {
      cell.flagged = !cell.flagged;
    }
  }

  showCellContent(cell: Cell): string | number | '' {
    if (cell.flagged && !cell.revealed) return '🚩';
    if (!cell.revealed) return ``;
    if (cell.hasMine) return '💣';
    if (cell.nearMines > 0) return cell.nearMines;
    return '';
}

  startGame() {
    this.hasStarted = true;
    this.board = this.game.getBoard()
  }

  restart() {
    this.hasStarted = true;
    this.game = new Game();
    this.board = this.game.board
  }

  toggleHowToPlay() {
    const dialog = this.howToPlay.nativeElement;

    if (!this.showHowToPlay) {
      dialog.showModal();
    } else {
      dialog.close();
    }

    this.showHowToPlay = !this.showHowToPlay;
  }

  // goBack() {

  // }
}
