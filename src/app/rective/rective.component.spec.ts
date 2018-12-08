import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectiveComponent } from './rective.component';

describe('RectiveComponent', () => {
  let component: RectiveComponent;
  let fixture: ComponentFixture<RectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
