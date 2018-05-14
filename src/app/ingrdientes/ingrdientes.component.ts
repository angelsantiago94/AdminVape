import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { IngredientesService } from './../ingredientes.service';

@Component({
  selector: 'app-ingrdientes',
  templateUrl: './ingrdientes.component.html',
  styleUrls: ['./ingrdientes.component.css'],
  providers: [IngredientesService ]
})
export class IngrdientesComponent implements OnInit {

  ingredientesList: Observable<any[]>;
  constructor(private ingredientesService: IngredientesService) { }

  ngOnInit() {
    this.getIngredientes();
    console.log( this.ingredientesList);
  }

  getIngredientes() {
    var x = this.ingredientesService.getData();
    this.ingredientesList=x;
  }

}
