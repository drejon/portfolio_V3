import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { HackapetComponent } from './components/about/hackapet/hackapet.component';
import { BattleshipComponent } from './components/demos/battleship/battleship.component';
import { MinesweeperComponent } from './components/demos/minesweeper/minesweeper.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'about/hackapet', component: HackapetComponent },
    { path: 'demos/battleship', component: BattleshipComponent },
    { path: 'demos/minesweeper', component: MinesweeperComponent }
];
