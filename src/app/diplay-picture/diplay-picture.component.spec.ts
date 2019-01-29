import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplayPictureComponent } from './diplay-picture.component';

describe('DiplayPictureComponent', () => {
  let component: DiplayPictureComponent;
  let fixture: ComponentFixture<DiplayPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplayPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplayPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
