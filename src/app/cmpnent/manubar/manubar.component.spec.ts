import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManubarComponent } from './manubar.component';

describe('ManubarComponent', () => {
  let component: ManubarComponent;
  let fixture: ComponentFixture<ManubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
