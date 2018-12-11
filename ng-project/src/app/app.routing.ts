import { Routes, RouterModule } from '@angular/router';

import { BattleshipComponent } from './battleship';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
const appRoutes: Routes = [
    { path: '', component: BattleshipComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);
