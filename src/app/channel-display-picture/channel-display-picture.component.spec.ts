import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelDisplayPictureComponent } from './channel-display-picture.component';

describe('ChannelDisplayPictureComponent', () => {
  let component: ChannelDisplayPictureComponent;
  let fixture: ComponentFixture<ChannelDisplayPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelDisplayPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelDisplayPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
