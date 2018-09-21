import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrigaratorComponent } from './refrigarator.component';

describe('RefrigaratorComponent', () => {
  let component: RefrigaratorComponent;
  let fixture: ComponentFixture<RefrigaratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefrigaratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrigaratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
