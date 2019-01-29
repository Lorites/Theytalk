import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheirDiplayPictureComponent } from './their-diplay-picture.component';

describe('TheirDiplayPictureComponent', () => {
  let component: TheirDiplayPictureComponent;
  let fixture: ComponentFixture<TheirDiplayPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheirDiplayPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheirDiplayPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
