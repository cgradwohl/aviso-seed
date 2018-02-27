import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmSummaryComponent } from './fm-summary.component';

describe('FmSummaryComponent', () => {
  let component: FmSummaryComponent;
  let fixture: ComponentFixture<FmSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
