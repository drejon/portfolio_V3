import { Game } from "./game";

export class Referee {
  public game: Game | null = null
  
  constructor(game: Game) {
    this.game = game
  }

  public computeGameStatus(win: boolean, lose: boolean) {
    if (win && !lose) {
      this.game?.setGameStatus(true)
      return true
    };
    
    if (!win && lose) {
      this.game?.setGameStatus(true)
      return false
    };

    return null;
  }
  
  public get condition(): boolean | null {
    const userHasLose = this.checkIfLoose()
    const userHasWin = this.checkIfWin()
    
    const status = this.computeGameStatus(userHasWin, userHasLose)
    
    return status
  }

  private checkIfLoose(): boolean {
    const revealedMine = this.game?.getBoard().some(c => c.revealed && c.hasMine )

    return revealedMine ?? false
  }

  private checkIfWin(): boolean {
    const board = this.game?.getBoard() ?? []
    const numberOfMines = this.game?.getNumberOfMines()
    const mines = this.game?.getMines() ?? []

    const flaggedCells = board.filter( c => c.flagged )
    const flaggedMines = flaggedCells.filter(c => c.hasMine )
    
    const sameFlagsAsMines = flaggedMines.length === numberOfMines
    const noExtraFlags = flaggedCells.length === flaggedMines.length;
    
    return sameFlagsAsMines && noExtraFlags && mines?.every(m => m.flagged)
  }
}
