import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheirFollowingPeopleStatusComponent } from './their-following-people-status.component';

describe('TheirFollowingPeopleStatusComponent', () => {
  let component: TheirFollowingPeopleStatusComponent;
  let fixture: ComponentFixture<TheirFollowingPeopleStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheirFollowingPeopleStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheirFollowingPeopleStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
