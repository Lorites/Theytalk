import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheirWallComponent } from './their-wall.component';

describe('TheirWallComponent', () => {
  let component: TheirWallComponent;
  let fixture: ComponentFixture<TheirWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheirWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheirWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
