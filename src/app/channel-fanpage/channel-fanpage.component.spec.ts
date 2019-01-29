import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelFanpageComponent } from './channel-fanpage.component';

describe('ChannelFanpageComponent', () => {
  let component: ChannelFanpageComponent;
  let fixture: ComponentFixture<ChannelFanpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelFanpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelFanpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
