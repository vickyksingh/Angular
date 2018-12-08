import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdductformComponent } from './prodductform.component';

describe('ProdductformComponent', () => {
  let component: ProdductformComponent;
  let fixture: ComponentFixture<ProdductformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdductformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdductformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
