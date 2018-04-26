import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalPostComponent } from './original-post.component';

describe('OriginalPostComponent', () => {
  let component: OriginalPostComponent;
  let fixture: ComponentFixture<OriginalPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginalPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
