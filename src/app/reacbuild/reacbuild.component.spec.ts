import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacbuildComponent } from './reacbuild.component';

describe('ReacbuildComponent', () => {
  let component: ReacbuildComponent;
  let fixture: ComponentFixture<ReacbuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReacbuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReacbuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
