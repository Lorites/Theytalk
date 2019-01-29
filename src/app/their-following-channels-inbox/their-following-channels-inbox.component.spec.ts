import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheirFollowingChannelsInboxComponent } from './their-following-channels-inbox.component';

describe('TheirFollowingChannelsInboxComponent', () => {
  let component: TheirFollowingChannelsInboxComponent;
  let fixture: ComponentFixture<TheirFollowingChannelsInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheirFollowingChannelsInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheirFollowingChannelsInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
