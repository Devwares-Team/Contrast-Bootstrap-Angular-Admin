import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebarFreeComponent } from './sidebar-free.component';

describe('SidebarFreeComponent', () => {
  let component: SidebarFreeComponent;
  let fixture: ComponentFixture<SidebarFreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarFreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
