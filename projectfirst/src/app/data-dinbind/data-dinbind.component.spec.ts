import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDinbindComponent } from './data-dinbind.component';

describe('DataDinbindComponent', () => {
  let component: DataDinbindComponent;
  let fixture: ComponentFixture<DataDinbindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDinbindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDinbindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
