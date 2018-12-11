import { Routes, RouterModule } from '@angular/router';

import { BattleshipComponent } from './battleship';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
const appRoutes: Routes = [
    { path: 'battleship', component: BattleshipComponent },
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
