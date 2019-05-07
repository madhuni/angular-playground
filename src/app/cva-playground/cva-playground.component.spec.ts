import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvaPlaygroundComponent } from './cva-playground.component';

describe('CvaPlaygroundComponent', () => {
  let component: CvaPlaygroundComponent;
  let fixture: ComponentFixture<CvaPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvaPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvaPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
