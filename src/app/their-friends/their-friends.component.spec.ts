import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheirFriendsComponent } from './their-friends.component';

describe('TheirFriendsComponent', () => {
  let component: TheirFriendsComponent;
  let fixture: ComponentFixture<TheirFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheirFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheirFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
