import { 
  Component, ElementRef, 
  OnInit, ViewChild,
  HostListener 
} from '@angular/core';
import JSConfetti from 'js-confetti'
import { Game } from './logic/game';
import { Cell } from './logic/cell';
import { Referee } from './logic/Referee';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-minesweeper',
  imports: [],
  templateUrl: './minesweeper.component.html',
  styleUrl: './minesweeper.component.css'
})
export class MinesweeperComponent implements OnInit {
  @ViewChild('howToPlay') howToPlay!: ElementRef<HTMLDialogElement>;
  @ViewChild('gameOver') gameOver!: ElementRef<HTMLDialogElement>;
  public board: Cell[] = [];
  public showHowToPlay = false;
  public hasStarted = false;
  private game: Game = new Game()
  public referee: Referee = new Referee(this.game)
  public confetti: JSConfetti = new JSConfetti()
  constructor() {
    this.confetti.clearCanvas()
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.preventDefault(); // ✅ Prevent default context menu
  }

  // ngAfterViewInit() {
  //   this.openGameOverModal()
  // }
  
  ngOnInit() { }

  reset() {
    this.closeGameOverModal()

    this.hasStarted = true;
    this.game = new Game();
    this.board = this.game.getBoard()
    this.referee = new Referee(this.game)
  }

  closeGameOverModal() {
    const dialog = this.gameOver.nativeElement;
    
    if (dialog.open) { dialog.close() }
  }

  openGameOverModal() {
    console.log('OPEN MODAL', this.game.isFinished)
    const dialog = this.gameOver.nativeElement;

    // try {
      // if (this.game.isFinished && !dialog.open) {
    dialog.showModal();
      // }
    // } catch (e) {
    //   console.warn('Dialog showModal error:', e);
    // }
  }

  reveal(cell: Cell) {
    if (cell.revealed || cell.flagged) return;
    
    if (cell.hasMine) {
      this.game.revealMines();
      this.game.setGameStatus(true);
      setTimeout(() => this.openGameOverModal());
      return;
    }
    
    if (!cell.flagged) {
      cell.reveal();
      
      if (cell.nearMines === 0) {
        const nearCells = this.game.getNearCells(cell.position)
        nearCells.forEach(c => this.reveal(c))
      }
    }

    const status = this.referee.condition

    if (status !== null) {
      this.game.setGameStatus(true)

      setTimeout(() => this.openGameOverModal()) 
      return
    }
  }

  toggleFlag(cell: Cell, event: MouseEvent) {
    event.preventDefault();

    if (this.game.isFinished) return 
    if (cell.revealed) return
    // console.log('Right click on cell:', cell);
    cell.flagged = !cell.flagged;
    const status = this.referee.condition

    // console.log('status', status)
    if (status) {
      this.game.setGameStatus(true)
      this.confetti.addConfetti()
      this.openGameOverModal()
    }
    // console.log('Flag', status)
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
