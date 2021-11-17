import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevsDetailsComponent } from './devs-details.component';

describe('DevsDetailsComponent', () => {
  let component: DevsDetailsComponent;
  let fixture: ComponentFixture<DevsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
