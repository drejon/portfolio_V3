import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BattleshipComponent } from './demos/battleship/battleship.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'demos/battleship', component: BattleshipComponent }
    // { path: '', component: LandingComponent }
];
