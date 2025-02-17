import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BattleshipComponent } from './demos/battleship/battleship.component';
import { HackapetComponent } from './about/hackapet/hackapet.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'about/hackapet', component: HackapetComponent },
    // { path: 'demos/battleship', component: BattleshipComponent }
    // { path: '', component: LandingComponent }
];
