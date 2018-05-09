import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidasProximasComponent } from './salidas-proximas.component';

describe('SalidasProximasComponent', () => {
  let component: SalidasProximasComponent;
  let fixture: ComponentFixture<SalidasProximasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidasProximasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidasProximasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
