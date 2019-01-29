import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheirProfileComponent } from './their-profile.component';

describe('TheirProfileComponent', () => {
  let component: TheirProfileComponent;
  let fixture: ComponentFixture<TheirProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheirProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheirProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
