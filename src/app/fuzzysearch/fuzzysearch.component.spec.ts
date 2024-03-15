import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzzysearchComponent } from './fuzzysearch.component';

describe('FuzzysearchComponent', () => {
  let component: FuzzysearchComponent;
  let fixture: ComponentFixture<FuzzysearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuzzysearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuzzysearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
