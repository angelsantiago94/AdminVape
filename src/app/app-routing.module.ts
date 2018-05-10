import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecetasComponent } from './recetas/recetas.component';
import { LoginComponent } from './login/login.component';

import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent , pathMatch: 'full'},
  {path: 'home', canActivate: [AuthGuardService], component: HomeComponent , pathMatch: 'full'},
  {path: 'recetas', canActivate: [AuthGuardService], component: RecetasComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
