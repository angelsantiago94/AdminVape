
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecetasComponent } from './recetas/recetas.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { IngrdientesComponent } from './ingrdientes/ingrdientes.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'login', component: LoginComponent , pathMatch: 'full'},
  {path: 'home',  component: HomeComponent , pathMatch: 'full'},
  {path: 'recetas', component: RecetasComponent, pathMatch: 'full'},
  {path: 'registro', component: RegistroComponent, pathMatch: 'full'},
  {path: 'ingredientes', component: IngrdientesComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
