import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetgridComponent } from './getgrid.component';

describe('GetgridComponent', () => {
  let component: GetgridComponent;
  let fixture: ComponentFixture<GetgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetgridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
