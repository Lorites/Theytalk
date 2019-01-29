import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpiComponent } from './fpi.component';

describe('FpiComponent', () => {
  let component: FpiComponent;
  let fixture: ComponentFixture<FpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
