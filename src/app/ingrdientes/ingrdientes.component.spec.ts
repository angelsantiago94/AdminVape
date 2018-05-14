import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrdientesComponent } from './ingrdientes.component';

describe('IngrdientesComponent', () => {
  let component: IngrdientesComponent;
  let fixture: ComponentFixture<IngrdientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngrdientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngrdientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
