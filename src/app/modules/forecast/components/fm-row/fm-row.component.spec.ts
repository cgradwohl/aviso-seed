import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmRowComponent } from './fm-row.component';

describe('FmRowComponent', () => {
  let component: FmRowComponent;
  let fixture: ComponentFixture<FmRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
