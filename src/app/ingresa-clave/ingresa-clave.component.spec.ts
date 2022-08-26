import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresaClaveComponent } from './ingresa-clave.component';

describe('IngresaClaveComponent', () => {
  let component: IngresaClaveComponent;
  let fixture: ComponentFixture<IngresaClaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresaClaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresaClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
