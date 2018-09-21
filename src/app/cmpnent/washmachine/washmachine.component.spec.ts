import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashmachineComponent } from './washmachine.component';

describe('WashmachineComponent', () => {
  let component: WashmachineComponent;
  let fixture: ComponentFixture<WashmachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashmachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
