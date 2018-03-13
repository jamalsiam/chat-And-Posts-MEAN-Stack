import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChatLabelComponent } from './user-chat-label.component';

describe('UserChatLabelComponent', () => {
  let component: UserChatLabelComponent;
  let fixture: ComponentFixture<UserChatLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserChatLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChatLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
