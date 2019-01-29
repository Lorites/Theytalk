import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheirCommunitiesComponent } from './their-communities.component';

describe('TheirCommunitiesComponent', () => {
  let component: TheirCommunitiesComponent;
  let fixture: ComponentFixture<TheirCommunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheirCommunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheirCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
