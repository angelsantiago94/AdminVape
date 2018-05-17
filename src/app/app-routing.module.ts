
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecetasComponent } from './recetas/recetas.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { IngrdientesComponent } from './ingrdientes/ingrdientes.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'login', component: LoginComponent , pathMatch: 'full'},
  {path: 'home',  component: HomeComponent , pathMatch: 'full',canActivate: [AuthGuard]},
  {path: 'recetas', component: RecetasComponent, pathMatch: 'full',canActivate: [AuthGuard]},
  {path: 'registro', component: RegistroComponent, pathMatch: 'full'},
  {path: 'ingredientes', component: IngrdientesComponent, pathMatch: 'full',canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
