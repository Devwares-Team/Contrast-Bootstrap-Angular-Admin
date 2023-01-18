import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Hero404Component } from './hero404.component';

describe('Hero404Component', () => {
  let component: Hero404Component;
  let fixture: ComponentFixture<Hero404Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Hero404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hero404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
