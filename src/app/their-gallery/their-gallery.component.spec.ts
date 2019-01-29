import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheirGalleryComponent } from './their-gallery.component';

describe('TheirGalleryComponent', () => {
  let component: TheirGalleryComponent;
  let fixture: ComponentFixture<TheirGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheirGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheirGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
