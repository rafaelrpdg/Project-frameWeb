import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDetaalheComponent } from './cursos-detaalhe.component';

describe('CursosDetaalheComponent', () => {
  let component: CursosDetaalheComponent;
  let fixture: ComponentFixture<CursosDetaalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosDetaalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosDetaalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
