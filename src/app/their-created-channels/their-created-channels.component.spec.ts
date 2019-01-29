import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheirCreatedChannelsComponent } from './their-created-channels.component';

describe('TheirCreatedChannelsComponent', () => {
  let component: TheirCreatedChannelsComponent;
  let fixture: ComponentFixture<TheirCreatedChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheirCreatedChannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheirCreatedChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
