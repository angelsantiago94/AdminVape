import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  ingredientesList: Observable<any[]>;
  constructor(private firebase :AngularFirestore) { 
  }

  getData():  Observable<any[]>{
    this.ingredientesList = this.firebase.collection('Ingrdientes').valueChanges();
    return this.ingredientesList;
  }
}
