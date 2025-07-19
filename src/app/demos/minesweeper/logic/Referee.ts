import { Game } from "./game";

export class Referee {
  public game: Game | null = null
  public hasUserWon: boolean | null = null
  
  constructor(game: Game) {
    this.game = game
  }

  public computeGameStatus(win: boolean, lose: boolean): boolean | null {
    if (win && !lose) return true;
    if (!win && lose) return false;
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

    const correctFlags = board.filter(c => c.flagged && c.hasMine).length
    const totalFlags = board.filter( c => c.flagged ).length

    const all_mines_have_been_flagged =correctFlags === totalFlags
     
    return all_mines_have_been_flagged
  }
}
