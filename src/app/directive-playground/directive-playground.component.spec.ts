import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivePlaygroundComponent } from './directive-playground.component';

describe('DirectivePlaygroundComponent', () => {
  let component: DirectivePlaygroundComponent;
  let fixture: ComponentFixture<DirectivePlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivePlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivePlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
