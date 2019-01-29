import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelWallComponent } from './channel-wall.component';

describe('ChannelWallComponent', () => {
  let component: ChannelWallComponent;
  let fixture: ComponentFixture<ChannelWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
