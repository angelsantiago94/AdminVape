import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAngularComponent } from './navbar-angular.component';

describe('NavbarAngularComponent', () => {
  let component: NavbarAngularComponent;
  let fixture: ComponentFixture<NavbarAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
