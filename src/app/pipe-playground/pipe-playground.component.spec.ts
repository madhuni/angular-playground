import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePlaygroundComponent } from './pipe-playground.component';

describe('PipePlaygroundComponent', () => {
  let component: PipePlaygroundComponent;
  let fixture: ComponentFixture<PipePlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipePlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipePlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
