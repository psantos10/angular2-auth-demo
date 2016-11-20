import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

import { LoggedInGuard } from './logged-in.guard';

export const ROUTES = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'profile', component: ProfileComponent, canActivate: [LoggedInGuard] }
];