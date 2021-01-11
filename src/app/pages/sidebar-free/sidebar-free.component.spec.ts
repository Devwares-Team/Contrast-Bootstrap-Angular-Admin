import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFreeComponent } from './sidebar-free.component';

describe('SidebarFreeComponent', () => {
  let component: SidebarFreeComponent;
  let fixture: ComponentFixture<SidebarFreeComponent>;

  beforeEach(async(() => {
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
