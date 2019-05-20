import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlaygroundComponent } from './table-playground.component';

describe('TablePlaygroundComponent', () => {
  let component: TablePlaygroundComponent;
  let fixture: ComponentFixture<TablePlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
