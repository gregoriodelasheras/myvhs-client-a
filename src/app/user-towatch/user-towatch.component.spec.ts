import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTowatchComponent } from './user-towatch.component';

describe('UserTowatchComponent', () => {
  let component: UserTowatchComponent;
  let fixture: ComponentFixture<UserTowatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTowatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTowatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
