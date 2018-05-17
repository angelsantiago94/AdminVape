import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {NgxElectronModule} from 'ngx-electron';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RecetasComponent } from './recetas/recetas.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { IngrdientesComponent } from './ingrdientes/ingrdientes.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';

import { NavbarAngularComponent } from './navbar-angular/navbar-angular.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RecetasComponent,
    LoginComponent,
    RegistroComponent,
    IngrdientesComponent,
    NavbarAngularComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NgxElectronModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCheckboxModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
