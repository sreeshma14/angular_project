import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleleConfirmComponent } from './delele-confirm.component';

describe('DeleleConfirmComponent', () => {
  let component: DeleleConfirmComponent;
  let fixture: ComponentFixture<DeleleConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleleConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleleConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
