import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZekrComponent } from './zekr.component';

describe('ZekrComponent', () => {
  let component: ZekrComponent;
  let fixture: ComponentFixture<ZekrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZekrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZekrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
