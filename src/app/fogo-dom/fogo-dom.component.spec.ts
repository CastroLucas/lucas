import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FogoDomComponent } from './fogo-dom.component';

describe('FogoDomComponent', () => {
  let component: FogoDomComponent;
  let fixture: ComponentFixture<FogoDomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FogoDomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FogoDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
