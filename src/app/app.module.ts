import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

import { UserService } from './services/user.service';
import { LoggedInGuard } from './logged-in.guard';

import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [UserService, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
