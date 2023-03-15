import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAlarmaComponent } from './editar-alarma.component';

describe('EditarAlarmaComponent', () => {
  let component: EditarAlarmaComponent;
  let fixture: ComponentFixture<EditarAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
